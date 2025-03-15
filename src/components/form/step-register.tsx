import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "@/lib/form-context";
import { registerSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useForm as useZodForm } from "react-hook-form";
import * as z from "zod";

type AccountDataFormValues = z.infer<typeof registerSchema>;

const StepRegister = () => {
  const { formState, setAnswer, nextStep, prevStep } = useForm();

  // Get existing address data from form context
  const accountData = (formState.answers.accountDetails ||
    {}) as AccountDataFormValues;

  // Set up form with zod validation
  const form = useZodForm<AccountDataFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: accountData.email || "",
      firstName: accountData.firstName || "",
      lastName: accountData.lastName || "",
      phoneNumber: accountData.phoneNumber || "",
    },
  });

  const handlePrevious = () => {
    prevStep();
  };

  const onSubmit = (values: AccountDataFormValues) => {
    // Save form data to the form context
    setAnswer("accountDetails", values);
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

      <div className=" aspect-square h-32 relative">
        <Image fill src="/assets/illustration-2.png" alt="Illustration" />
      </div>

      <h2 className="text-5xl  text-center max-w-[20ch] font-primary font-medium">
        Let&apos;s keep your details secure by setting up your profile.
      </h2>

      <p className=" text-lg text-muted-foreground text-center max-w-[60ch]">
        Provide a few details, and we&apos;ll dive into the loan specifics.
      </p>

      <div className="w-full mt-4 px-32">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-y-4 gap-x-4"
          >
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className=" col-span-1">
                  <FormControl>
                    <Input placeholder="First name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className=" col-span-1">
                  <FormControl>
                    <Input placeholder="Last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className=" col-span-2">
                  <FormControl>
                    <Input placeholder="Email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className=" col-span-2">
                  <FormControl>
                    <Input placeholder="Phone number" {...field} />
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

export default StepRegister;
