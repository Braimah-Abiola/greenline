import React, { createContext, useContext, useState, useEffect } from "react";

interface FormAnswers {
  start?: string;
  question1a?: string;
  question1b?: string;
  propertyAddress?: {
    streetAddress: string;
    unitApt?: string;
    city: string;
    state: string;
    zipCode: string;
  };
  targetDate?: string;
  purchasePrice?: {
    price: string;
  };
  downpaymentAmount?: {
    price: string;
  };
  propertyType?: string;
}

type FormState = {
  answers: FormAnswers;
  currentStep: number;
  history: number[];
};

type FormContextType = {
  formState: FormState;
  setAnswer: (
    questionId: string,
    value: string | number | boolean | object | undefined
  ) => void;
  nextStep: (nextStepId?: number) => void;
  prevStep: () => void;
  resetForm: () => void;
};

const defaultState: FormState = {
  answers: {},
  currentStep: 0,
  history: [0],
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formState, setFormState] = useState<FormState>(defaultState);

  // Load saved state on initial render
  useEffect(() => {
    const savedState = localStorage.getItem("multistepFormState");
    if (savedState) {
      try {
        setFormState(JSON.parse(savedState));
      } catch (e) {
        console.error(e, "Failed to parse saved form state");
      }
    }
  }, []);

  // Save state on changes
  useEffect(() => {
    localStorage.setItem("multistepFormState", JSON.stringify(formState));
  }, [formState]);

  const setAnswer = (
    questionId: string,
    value: string | number | boolean | object | undefined
  ) => {
    setFormState((prev) => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: value },
    }));
  };

  const nextStep = (nextStepId?: number) => {
    const nextId =
      nextStepId !== undefined ? nextStepId : formState.currentStep + 1;
    setFormState((prev) => ({
      ...prev,
      currentStep: nextId,
      history: [...prev.history, nextId],
    }));
  };

  const prevStep = () => {
    if (formState.history.length > 1) {
      const newHistory = [...formState.history];
      newHistory.pop();
      const prevStep = newHistory[newHistory.length - 1];

      setFormState((prev) => ({
        ...prev,
        currentStep: prevStep,
        history: newHistory,
      }));
    }
  };

  const resetForm = () => {
    setFormState(defaultState);
    localStorage.removeItem("multistepFormState");
  };

  return (
    <FormContext.Provider
      value={{ formState, setAnswer, nextStep, prevStep, resetForm }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
};
