"use client"

import React from 'react'
import SectionHeading from './Section-Header'
import { projectsData } from '@/lib/data'
import ProjectDetail from './ProjectDetail'
import { usePartInView } from '@/lib/hooks'

export default function Projects() {
  const {ref} = usePartInView("Projects", 0.5);

  return (
    <section className='scroll-mt-28 mb-28'
    id="projects"
    ref={ref}>
        <SectionHeading>Projects</SectionHeading>
        <div>
            {projectsData.map((project, index) => (
            <React.Fragment key={index}>
                <ProjectDetail {...project}/>
            </React.Fragment>
            ))}
        </div>
    </section>
  )
}
