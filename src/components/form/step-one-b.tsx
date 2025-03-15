import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "@/lib/form-context";
import { Label } from "../ui/label";

const Step1b = () => {
  const { formState, setAnswer, nextStep, prevStep } = useForm();
  const selectedOption = String(formState.answers.question1b || "");

  const handleOptionSelect = (option: string) => {
    setAnswer("question1b", option);
  };

  const handleNext = () => {
    nextStep();
  };

  const handlePrevious = () => {
    prevStep();
  };

  return (
    <div className="space-y-4 h-full max-w-4xl mx-auto w-full flex flex-col pt-20 items-center">
      {formState.history.length > 1 && (
        <button
          onClick={handlePrevious}
          className="px-4 py-2 border border-primary text-primary hover:bg-primary/10 rounded-full cursor-pointer w-1/2 text-lg"
        >
          Back 2
        </button>
      )}
      <h2 className="text-5xl  text-center max-w-[24ch] font-primary font-medium">
        Do you have a signed Purchase & Sale Agreement in place?
      </h2>

      <div className="w-full px-32">
        <RadioGroup
          value={selectedOption}
          onValueChange={handleOptionSelect}
          className="space-y-1.5 w-full mt-4"
        >
          <div
            className={`flex items-center justify-between rounded-2xl border px-8 py-8 ${
              selectedOption === "optionA"
                ? "border-primary border-2 bg-primary/5"
                : ""
            }`}
          >
            <Label htmlFor="optionA" className="cursor-pointer w-full">
              Yes, I do
            </Label>
            <RadioGroupItem value="optionA" id="optionA" />
          </div>
          <div
            className={`flex items-center justify-between rounded-2xl border px-8 py-8 ${
              selectedOption === "optionB"
                ? "border-primary border-2 bg-primary/5"
                : ""
            }`}
          >
            <Label htmlFor="optionB" className="cursor-pointer w-full">
              Nope, not now
            </Label>
            <RadioGroupItem value="optionB" id="optionB" />
          </div>
        </RadioGroup>
      </div>

      <div className="mt-20 w-full flex flex-col gap-8 items-center justify-center">
        <button
          onClick={handleNext}
          disabled={!selectedOption}
          className="px-4 py-2 bg-primary hover:bg-primary/80 rounded-full cursor-pointer max-w-[40%] w-full text-lg  text-white disabled:pointer-events-none disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Step1b;
