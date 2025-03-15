import Header from "@/sections/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";

const clashDisplay = localFont({
  src: [
    {
      path: "../../../public/fonts/clash-display.ttf",
      style: "normal",
      weight: "100 900",
    },
  ],
  variable: "--font-clashDisplay",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Greenline — Pain Free Investment Loans",
  description:
    "Access the same loans the property investors use - apply in less than 10 minutes and close fast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${clashDisplay.variable} ${inter.variable} antialiased h-screen`}
      >
        <Header />
        <div className=" h-full overflow-y-scroll">{children}</div>
      </body>
    </html>
  );
}
