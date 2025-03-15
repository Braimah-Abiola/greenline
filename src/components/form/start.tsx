import React from "react";
import { useForm } from "@/lib/form-context";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "../ui/label";

const Start = () => {
  const { formState, setAnswer, nextStep } = useForm();
  const selectedOption = String(formState.answers.start || "");

  const handleOptionSelect = (option: string) => {
    setAnswer("start", option);
  };

  const handleNext = () => {
    nextStep();
  };

  return (
    <div className="space-y-4 h-full max-w-4xl mx-auto w-full flex flex-col pt-20 items-center">
      <h2 className="text-5xl font-bold text-center max-w-[24ch]">
        Let&apos;s start! What would you like to do first?
      </h2>
      <p className=" text-lg text-muted-foreground text-center max-w-[40ch]">
        This will help us personalize your experience and match you with the
        right loan.
      </p>

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
              Buy
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
              Refinance
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
        <p className=" text-lg">
          Already have an account?{" "}
          <span className=" underline cursor-pointer text-primary">Login</span>
        </p>
      </div>
    </div>
  );
};

export default Start;
