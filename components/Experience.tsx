"use client"
import React from 'react'
import { motion } from 'framer-motion';
import SectionHeading from './Section-Header';
import { experiencesData } from '@/lib/data';


export default function Experience() {

  return (
    <section
    id="experience">
        <SectionHeading>My experience</SectionHeading>
        <motion.div className='slider'>
            <motion.div className='inner-slider'>
                {experiencesData.map((item) => (
                    <motion.div>
                        {item.title}
                        {item.company}
                    </motion.div>
                ))}
            </motion.div>

        </motion.div>
        
    </section>
  )
}
