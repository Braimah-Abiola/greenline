"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  const handleSheetOpenChange = (open: boolean) => {
    setMobileNav(open);
  };

  return (
    <Sheet onOpenChange={handleSheetOpenChange}>
      <SheetTrigger asChild>
        <motion.button
          initial="hide"
          animate={mobileNav ? "show" : "hide"}
          onClick={toggleMobileNav}
          className="flex flex-col space-y-1.5 relative hover:bg-secondary w-fit p-4 cursor-pointer rounded-full"
          aria-label={mobileNav ? "Close menu" : "Open menu"}
        >
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: 45,
                y: 4.5,
              },
            }}
            className="w-9 bg-black rounded-full h-[2px] block"
          ></motion.span>

          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: -45,
                y: -4.5,
              },
            }}
            className="w-9 bg-black rounded-full h-[1.5px] block"
          ></motion.span>
        </motion.button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className=" w-full border-b mt-[11px] px-12">
          <SheetTitle className=" uppercase text-2xl">Menu</SheetTitle>
        </SheetHeader>
        <div className=" px-12 flex flex-col w-full gap-12 mt-12">
          <div className="flex flex-col items-start w-full gap-6">
            <p className=" uppercase text-muted-foreground text-lg">
              Dashboard
            </p>
            <div className="flex flex-col items-start w-full gap-4">
              <SheetClose asChild>
                <Link href="/">
                  <h2 className="font-primary text-5xl font-medium hover:text-primary cursor-pointer">
                    Start Application
                  </h2>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/login">
                  <h2 className="font-primary text-5xl font-medium hover:text-primary cursor-pointer">
                    Login
                  </h2>
                </Link>
              </SheetClose>
            </div>
          </div>

          <div className="flex flex-col items-start w-full gap-6">
            <p className=" uppercase text-muted-foreground text-lg">Support</p>
            <div className="flex flex-col items-start w-full gap-4">
              <h2 className="font-primary text-5xl font-medium hover:text-primary cursor-pointer">
                FAQs
              </h2>
              <h2 className="font-primary text-5xl font-medium hover:text-primary cursor-pointer">
                Contact Us
              </h2>
            </div>
          </div>
        </div>
        <div className=" absolute -right-40 top-1/2 -translate-y-[32%]">
          <div className=" h-[600px] opacity-5 aspect-square relative">
            <Image fill src="/assets/logo-icon.svg" alt="Logo icon" />
          </div>
        </div>
        <SheetFooter className="w-full flex items-center justify-center pb-8">
          <div className="flex items-center gap-6">
            <div className="flex gap-2 items-center w-fit opacity-70 hover:opacity-100 cursor-pointer">
              <Mail /> <p className=" text-lg">support@greenline.com</p>
            </div>
            <div className="flex gap-2 items-center w-fit opacity-70 hover:opacity-100 cursor-pointer">
              <Phone /> <p className=" text-lg">+ 1 382 992 7372</p>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
