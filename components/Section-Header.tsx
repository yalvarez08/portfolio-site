import React from "react";
import { Roboto_Mono } from 'next/font/google'

const robotoMono = Roboto_Mono({ subsets: ['latin'] })

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className={`${robotoMono.className} text-3xl font-medium capitalize mb-8 text-center`}>
      {children}
    </h2>
  );
}