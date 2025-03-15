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

import { downPaymentAmountSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

type DownpaymentAmountValues = z.infer<typeof downPaymentAmountSchema>;

const Step5a = () => {
  const { formState, setAnswer, nextStep, prevStep } = useForm();

  const purchasePriceData = (formState.answers.downpaymentAmount ||
    {}) as DownpaymentAmountValues;

  const form = useZodForm<DownpaymentAmountValues>({
    resolver: zodResolver(downPaymentAmountSchema),
    defaultValues: {
      price: purchasePriceData.price || "",
    },
  });

  const onSubmit = (values: DownpaymentAmountValues) => {
    setAnswer("downpaymentAmount", values);
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

      <h2 className="text-5xl font-bold text-center max-w-[20ch]">
        Approximately how much do you have for a down payment?
      </h2>
      <div className="w-full mt-6 px-32">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className=" relative w-full">
                  <p className=" absolute right-6 top-1/2 -translate-y-1/2">
                    0%
                  </p>
                  <FormControl>
                    <Input placeholder="Enter amount" {...field} />
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

export default Step5a;
