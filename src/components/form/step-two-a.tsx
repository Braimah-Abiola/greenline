import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { US_STATES } from "@/constants";
import { useForm } from "@/lib/form-context";
import { addressSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import { useForm as useZodForm } from "react-hook-form";
import * as z from "zod";

type AddressFormValues = z.infer<typeof addressSchema>;

const Step2a = () => {
  const { formState, setAnswer, nextStep, prevStep } = useForm();

  // Get existing address data from form context
  const addressData = (formState.answers.propertyAddress ||
    {}) as AddressFormValues;

  // Set up form with zod validation
  const form = useZodForm<AddressFormValues>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      streetAddress: addressData.streetAddress || "",
      unitApt: addressData.unitApt || "",
      city: addressData.city || "",
      state: addressData.state || "",
      zipCode: addressData.zipCode || "",
    },
  });

  const handlePrevious = () => {
    prevStep();
  };

  const onSubmit = (values: AddressFormValues) => {
    // Save form data to the form context
    setAnswer("propertyAddress", values);
    nextStep();
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

      <h2 className="text-5xl font-bold text-center max-w-[24ch]">
        What is the address of the property?
      </h2>

      <div className="w-full mt-4 px-32">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-3 gap-y-4 gap-x-4"
          >
            <FormField
              control={form.control}
              name="streetAddress"
              render={({ field }) => (
                <FormItem className=" col-span-2">
                  <FormControl>
                    <Input placeholder="Street Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="unitApt"
              render={({ field }) => (
                <FormItem className=" col-span-1">
                  <FormControl>
                    <Input placeholder="Unit/Apt No." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className=" col-span-1">
                  <FormControl>
                    <Input placeholder="City" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem className=" col-span-1">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="State" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {US_STATES.map((state) => (
                        <SelectItem key={state.value} value={state.value}>
                          {state.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem className=" col-span-1">
                  <FormControl>
                    <Input placeholder="Zip code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className=" col-span-3 mt-12 w-full flex flex-col gap-8 items-center justify-center">
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

export default Step2a;
