"use client"

import React from 'react'
import SectionHeading from './Section-Header'
import { motion } from 'framer-motion';
import { usePartInView } from '@/lib/hooks';

export default function Contact() {
    const {ref} = usePartInView("Contact", 0.5);

  return (
    <motion.section className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    id="section"
    ref={ref}
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
    }}
    transition={{
        duration: 1,
    }}
    viewport={{
        once: true,
    }}>
        <SectionHeading>Contact Me!</SectionHeading>
        <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please fill out the form below to contact me directly.
      </p>

      <form className="mt-10 flex flex-col dark:text-black"
        action={formData => {
            console.log(formData);
        }}
      >
        <input
          className="h-14 px-4 rounded-lg border border-black/10 dark:bg-white 
          dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Enter email"
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-black/10 p-4 dark:bg-white 
          dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>

    </motion.section>
  )
}