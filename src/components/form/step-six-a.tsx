import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "@/lib/form-context";
import { ArrowLeft } from "lucide-react";
import { Label } from "../ui/label";

const Step6a = () => {
  const { formState, setAnswer, nextStep, prevStep } = useForm();
  const selectedOption = String(formState.answers.propertyType || "");

  const handleOptionSelect = (option: string) => {
    setAnswer("propertyType", option);
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
        <div
          className=" cursor-pointer flex items-center gap-4"
          onClick={handlePrevious}
        >
          <div className=" bg-secondary/30 hover:bg-secondary p-4 rounded-full">
            <ArrowLeft />
          </div>
          <p className=" text-xl">Previous</p>
        </div>
      )}
      <h2 className="text-5xl  text-center max-w-[24ch] font-primary font-medium">
        What kind of property is it?
      </h2>

      <div className="w-full mt-4 px-32">
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
              Single-family
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
              Multi-family
            </Label>
            <RadioGroupItem value="optionB" id="optionB" />
          </div>

          <div
            className={`flex items-center justify-between rounded-2xl border px-8 py-8 ${
              selectedOption === "optionC"
                ? "border-primary border-2 bg-primary/5"
                : ""
            }`}
          >
            <Label htmlFor="optionC" className="cursor-pointer w-full">
              Condo
            </Label>
            <RadioGroupItem value="optionC" id="optionC" />
          </div>

          <div
            className={`flex items-center justify-between rounded-2xl border px-8 py-8 ${
              selectedOption === "optionD"
                ? "border-primary border-2 bg-primary/5"
                : ""
            }`}
          >
            <Label htmlFor="optionD" className="cursor-pointer w-full">
              Other
            </Label>
            <RadioGroupItem value="optionD" id="optionD" />
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

export default Step6a;
