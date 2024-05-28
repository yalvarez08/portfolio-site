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
      <body className={`${inter.className} inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] text-gray-950 relative 
      pt-28 sm:pt-36 dark:bg-zinc-800 dark:bg-[radial-gradient(#B3B6B7_1px,transparent_1px)] dark:text-zinc-50`}>
    
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
