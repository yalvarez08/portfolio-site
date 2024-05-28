"use client"

import React from 'react'
import SectionHeading from './Section-Header'
import { motion } from 'framer-motion'
import { Roboto_Mono } from 'next/font/google'
import { usePartInView } from '@/lib/hooks'

const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export default function About() {
  const {ref} = usePartInView("About");
    
  return (
    <motion.section className="mb-24 max-w-[45rem] text-center leading-10 sm:mb-24 scroll-mt-28"
    ref={ref}
    id="about"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    >
        <SectionHeading>About Me</SectionHeading>
       <p>
        <span className={`${robotoMono.className} font-medium`}>I'm a full-stack developer based in North Carolina. After serving 5 years in the 
        Marine Corps as an All-Source Intelligence Analyst, I discovered my passion for software development.
        I'm more than halfway through earning my B.S. in Software Development & Security, and recently graduated 
        from Prime Digital Academy's Full-Stack Software Engineering program. Identifying gaps/issues and providing 
        solutions is what I enjoy most in this field. As a developer, I continuously push myself through challenges and 
        thrive in collaborative, dynamic, and avant-garde environments. </span>
         </p>
    </motion.section>
  )
}
