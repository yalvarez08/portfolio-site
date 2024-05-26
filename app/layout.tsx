import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yailene Alvarez | SWE",
  description: "Full stack software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-zinc-50 text-gray-950 relative pt-28 sm:pt-36`}>
        <div className="bg-[#eee2fb] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem]
        w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#e2fbf5] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem]
        w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] 
        lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <ActiveSectionContextProvider>
          <Header />

          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
