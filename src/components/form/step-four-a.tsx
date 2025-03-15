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

import { purchasePriceSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

type PurchasePriceValues = z.infer<typeof purchasePriceSchema>;

const Step4a = () => {
  const { formState, setAnswer, nextStep, prevStep } = useForm();

  const purchasePriceData = (formState.answers.purchasePrice ||
    {}) as PurchasePriceValues;

  const form = useZodForm<PurchasePriceValues>({
    resolver: zodResolver(purchasePriceSchema),
    defaultValues: {
      price: purchasePriceData.price || "",
    },
  });

  const onSubmit = (values: PurchasePriceValues) => {
    setAnswer("purchasePrice", values);
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
        What’s the finalized purchase price?
      </h2>
      <div className="w-full mt-6 px-32">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Please enter the purchase price"
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

export default Step4a;
