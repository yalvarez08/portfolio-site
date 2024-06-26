"use client"
import React from 'react'
import SectionHeading from './Section-Header'
import { skillsData } from '@/lib/data'
import { usePartInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const animationFadeIn = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
};

export default function Skills() {
    const {ref} = usePartInView("Skills");

  return (
    <section className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-28"
    id="skills"
    ref={ref}>
        <SectionHeading>Skills</SectionHeading>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {skillsData.map((skill, index) => (
                <motion.li className="bg-white border border-black/10 rounded-xl dark:bg-white/10 dark:text-white/100 px-5 py-3" 
                key={index}
                variants={animationFadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}>
                    {skill}
                </motion.li>
            ))}
        </ul>
    </section>
  )
}
