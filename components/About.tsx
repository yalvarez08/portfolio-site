"use client"

import React from 'react'
import SectionHeading from './Section-Header'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    >
        <SectionHeading>About Me</SectionHeading>
       <p className="mb-3">
        <span className='font-medium'>I'm a full-stack developer based in North Carolina. After serving 5 years in the 
        Marine Corps as an All-Source Intelligence Analyst, I discovered my passion for software development.
        I'm more than halfway through earning my B.S. in Software Development & Security, and recently graduated 
        from Prime Digital Academy's Full-Stack Software Engineering program.</span>
         </p>
    </motion.section>
  )
}
