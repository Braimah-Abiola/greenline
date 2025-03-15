import { LoginTabs } from "@/components/form/login-tabs";
import Image from "next/image";

const Login = () => {
  return (
    <div className="space-y-4 h-full max-w-4xl mx-auto w-full flex flex-col pt-20 items-center">
      <div className=" aspect-square h-32 relative">
        <Image fill src="/assets/illustration-2.png" alt="Illustration" />
      </div>

      <h2 className="text-5xl  text-center max-w-[14ch] font-primary font-medium">
        Welcome back, let’s log you back in
      </h2>

      <LoginTabs />
    </div>
  );
};

export default Login;
