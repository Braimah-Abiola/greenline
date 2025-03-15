import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "@/lib/form-context";
import { ArrowLeft } from "lucide-react";
import { Label } from "../ui/label";

const Step11a = () => {
  const { formState, setAnswer, nextStep, prevStep } = useForm();
  const selectedOption = String(formState.answers.loanType || "");

  const handleOptionSelect = (option: string) => {
    setAnswer("loanType", option);
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
      <h2 className="text-5xl  text-center max-w-[20ch] font-primary font-medium">
        Great!{" "}
        <span className=" text-primary">Since you&apos;re self-employed</span>,
        which loan type suits you best?
      </h2>
      <p className=" text-lg text-muted-foreground text-center max-w-[60ch]">
        Since you&apos;re self-employed, you can apply for either a conventional
        or a bank statement loan—you can always adjust this later.
      </p>
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
            <Label
              htmlFor="optionA"
              className="cursor-pointer w-full flex flex-col items-start"
            >
              <span>Conventional loan</span>
              <span className=" text-base opacity-70">
                Good for self-employed folk with regular income.
              </span>
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
            <Label
              htmlFor="optionB"
              className="cursor-pointer w-full flex flex-col items-start"
            >
              <span>Bank statement loan</span>
              <span className=" text-base opacity-70">
                Apply using your bank statement deposits or 1099s—ideal for
                irregular income, like gig work.
              </span>
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
            <Label
              htmlFor="optionC"
              className="cursor-pointer w-full flex flex-col items-start"
            >
              <span>Not sure</span>
              <span className=" text-base opacity-70">
                We can guide you through it
              </span>
            </Label>
            <RadioGroupItem value="optionC" id="optionC" />
          </div>
        </RadioGroup>
      </div>

      <div className="mt-8 w-full flex flex-col gap-8 items-center justify-center">
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

export default Step11a;
