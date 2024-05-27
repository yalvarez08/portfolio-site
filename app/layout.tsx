import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeChange from "@/components/ThemeChange";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import ThemeContext from "@/context/ThemeContext";
import { ToastContainer, toast } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yailene Alvarez | SWE",
  description: "Full stack software engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-zinc-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-zinc-800 dark:text-zinc-50 dark:text-opacity-90`}>
        <div className="bg-[#dabff8] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem]
        w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#a02ca6]">
        </div>
        <div className="bg-[#c2faa6] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem]
        w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] 
        lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#4e8933]">
        </div>

      <ThemeContext>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <ToastContainer />
          <ThemeChange />
        </ActiveSectionContextProvider>
      </ThemeContext>
        
      </body>
    </html>
  );
}
