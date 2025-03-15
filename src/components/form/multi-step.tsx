import React from "react";
import { useForm } from "@/lib/form-context";
import Start from "./start";
import Step1a from "./step-one-a";
import Step1b from "./step-one-b";
import Step2a from "./step-two-a";
import Step2b from "./step-two-b";
import Step3a from "./step-three-a";
import Step4a from "./step-four-a";
import Step5a from "./step-five-a";
import Step6a from "./step-six-a";

export const MultiStepForm = () => {
  const { formState } = useForm();
  const { currentStep, answers } = formState;

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Start />;
      case 1:
        return answers.start === "optionA" ? <Step1a /> : <Step1b />;
      case 2:
        return answers.question1a === "optionA" ? <Step2a /> : <Step2b />;
      case 3:
        if (answers.propertyAddress) {
          return <Step3a />;
        }
      case 4:
        if (answers.targetDate) {
          return <Step4a />;
        } else {
          return <div>Please complete previous steps</div>;
        }
      case 5:
        if (answers.purchasePrice) {
          return <Step5a />;
        } else {
          return <div>Please complete previous steps</div>;
        }
      case 6:
        if (answers.purchasePrice) {
          return <Step6a />;
        } else {
          return <div>Please complete previous steps</div>;
        }
      default:
        return <div>Form completed!</div>;
    }
  };

  return <div className="w-full h-[90vh]">{renderStep()}</div>;
};
