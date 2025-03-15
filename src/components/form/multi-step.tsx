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
import Step7a from "./step-seven-a";
import Step7b from "./step-seven-b";
import Step7c from "./step-seven-c";
import Step7d from "./step-seven-d";
import Step8a from "./step-eight-a";
import Step9a from "./step-nine-a";
import Step10a from "./step-ten-a";
import Step11a from "./step-eleven-a";
import StepRegister from "./step-register";

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
      case 7:
        switch (answers.propertyType) {
          case "optionA":
            return <Step7a />;
          case "optionB":
            return <Step7b />;
          case "optionC":
            return <Step7c />;
          case "optionD":
            return <Step7d />;
          default:
            return <div>Please select an option</div>;
        }
      case 8:
        if (answers.primaryResidence) {
          return <Step8a />;
        } else {
          return <div>Please complete previous steps</div>;
        }
      case 9:
        if (answers.incomeSource) {
          return <Step9a />;
        } else {
          return <div>Please complete previous steps</div>;
        }
      case 10:
        if (answers.grossIncome) {
          return <Step10a />;
        }
      case 11:
        if (answers.creditScore) {
          return <Step11a />;
        }
      case 12:
        if (answers.loanType) {
          return <StepRegister />;
        }
      default:
        return <div>Form completed!</div>;
    }
  };

  return <div className="w-full h-[90vh]">{renderStep()}</div>;
};
