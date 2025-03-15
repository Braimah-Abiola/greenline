"use client";

import Preloader from "@/components/common/preloader";
import { MultiStepForm } from "@/components/form/multi-step";
import { FormProvider } from "@/lib/form-context";
import { AnimatePresence } from "framer-motion";

import { useEffect, useState } from "react";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      document.body.style.overflowY = "visible";
      window.scrollTo(0, 0);
    }, 2000);
  }, []);
  return (
    <div>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <FormProvider>
        <MultiStepForm />
      </FormProvider>
    </div>
  );
};

export default Home;
