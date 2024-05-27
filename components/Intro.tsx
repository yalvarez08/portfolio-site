"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useActiveSectionContext } from '@/context/ActiveSectionContext'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import { usePartInView } from '@/lib/hooks'


export default function Intro() {
  const {ref} = usePartInView("Home");
  const { setActiveSection, setLastClick } = useActiveSectionContext();

  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]" 
    id="home"
    ref={ref}>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div 
                initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{type: "tween", duration: 0.2, ease: "easeIn"}}>
                <Image
                src="https://res.cloudinary.com/ydcalvarez/image/upload/v1716651865/my-photo.jpg"
                width="190"
                height="190"
                alt="Image of me."
                priority={true}
                className='h-32 w-32 object-cover rounded-full border-[0.35rem] border-white shadow-xl'
                />
                </motion.div>
            {/* image circle */}
            
            <motion.span className='absolute bottom-0 right-0 text-4xl'
            initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{type: 'spring', delay: 0.1, duration: 0.5, stiffness: 125}}
            >👾</motion.span>
            
            </div>

        </div>

        <motion.h1
        className="mb-10 mt-4 px-4 text-lg font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        > 
        
        <p className="font-bold sm:text-4xl">Hi, I'm Yailene Alvarez.</p> 
        <span>A software engineer who is passionate about building innovative and scalable 
        solutions. My focus is in websites, application development, and system integrations.</span>
        <br/>
      </motion.h1>
      
      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      >
        <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full 
        outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
            onClick={() => {
            setActiveSection("Contact");
            setLastClick(Date.now());
            }}
        >
            Contact me{" "}
        <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 
          hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] 
          hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10
          dark:text-white/60"
          href="https://linkedin.com/in/yailene-alvarez"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] 
          hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10
          dark:text-white/60"
          href="https://github.com/yalvarez08"
          target="_blank"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  )
}
