import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "@/lib/form-context";
import { ArrowLeft } from "lucide-react";
import { useForm as useZodForm } from "react-hook-form";

import { grossIncomeSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

type GrossIncomeValues = z.infer<typeof grossIncomeSchema>;

const Step9a = () => {
  const { formState, setAnswer, nextStep, prevStep } = useForm();

  const grossIncomeData = (formState.answers.grossIncome ||
    {}) as GrossIncomeValues;

  const form = useZodForm<GrossIncomeValues>({
    resolver: zodResolver(grossIncomeSchema),
    defaultValues: {
      amount: grossIncomeData.amount || "",
    },
  });

  const onSubmit = (values: GrossIncomeValues) => {
    setAnswer("grossIncome", values);
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
        What is your total yearly income before taxes?
      </h2>
      <p className=" text-lg text-muted-foreground text-center max-w-[40ch]">
        A rough estimate is fine for now—be sure to include any co-borrower’s
        income as well.
      </p>
      <div className="w-full mt-6 px-32">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Please enter your total gross income"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-12 w-full flex flex-col gap-8 items-center justify-center">
              <button
                type="submit"
                className="px-4 py-2 bg-primary hover:bg-primary/80 rounded-full cursor-pointer max-w-[40%] w-full text-lg text-white"
              >
                Continue
              </button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Step9a;
