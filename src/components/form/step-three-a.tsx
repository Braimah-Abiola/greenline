import { useForm } from "@/lib/form-context";
import { ArrowLeft, CalendarIcon } from "lucide-react";
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { format } from "date-fns";

const Step3a = () => {
  const { formState, setAnswer, nextStep, prevStep } = useForm();

  const selectedDate = formState.answers.targetDate
    ? new Date(formState.answers.targetDate)
    : undefined;

  const [date, setDate] = React.useState<Date | undefined>(selectedDate);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handlePrevious = () => {
    prevStep();
  };

  const handleNext = () => {
    if (date) {
      setAnswer("targetDate", date.toISOString());
      nextStep();
    }
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
        Sounds exciting! When is your closing date?
      </h2>

      <div className="flex flex-col items-center justify-center w-full mt-8 px-32">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                " w-full justify-start text-left hover:bg-primary/5 cursor-pointer group rounded-2xl text-lg font-normal h-16",
                !date && "text-muted-foreground"
              )}
            >
              <span className="flex-1 px-2">
                {date ? format(date, "PPP") : "Select a date"}
              </span>
              <CalendarIcon className="mr-4 group-hover:text-primary h-6 w-6 scale-150" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(date) => date < today}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="mt-20 w-full flex flex-col gap-8 items-center justify-center">
        <button
          onClick={handleNext}
          disabled={!date}
          className="px-4 py-2 bg-primary hover:bg-primary/80 rounded-full cursor-pointer max-w-[40%] w-full text-lg text-white disabled:pointer-events-none disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Step3a;
