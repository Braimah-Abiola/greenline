import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";

export function LoginTabs() {
  return (
    <Tabs
      defaultValue="phone-number"
      className="w-full flex flex-col items-center"
    >
      <TabsList className="grid grid-cols-2 w-[400px] mt-6 mb-8">
        <TabsTrigger value="phone-number">Phone Number</TabsTrigger>
        <TabsTrigger value="email-address">Email Address</TabsTrigger>
      </TabsList>
      <TabsContent className=" w-full px-32" value="phone-number">
        <div className=" w-full flex flex-col items-center">
          <div className="w-full">
            <Input id="phone-number-input" defaultValue="Phone Number" />
          </div>

          <p className=" text-center max-w-[52ch] mt-8">
            By submitting your application, you confirm that you agree to our{" "}
            <span className=" underline">Terms & Conditions</span> and the{" "}
            <span className=" underline">Privacy Policy</span>.
          </p>
          <Button className=" mt-12 cursor-pointer w-1/2">Continue</Button>
        </div>
      </TabsContent>
      <TabsContent className=" w-full px-32" value="email-address">
        <div className=" w-full flex flex-col items-center">
          <div className="w-full">
            <Input id="email-address-input" defaultValue="Email Address" />
          </div>

          <p className=" text-center max-w-[52ch] mt-8">
            By submitting your application, you confirm that you agree to our{" "}
            <span className=" underline">Terms & Conditions</span> and the{" "}
            <span className=" underline">Privacy Policy</span>.
          </p>
          <Button className=" mt-12 cursor-pointer w-1/2">Continue</Button>
        </div>
      </TabsContent>
    </Tabs>
  );
}
