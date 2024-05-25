import React from 'react'
import SectionHeading from './Section-Header'
import { projectsData } from '@/lib/data'
import ProjectDetail from './ProjectDetail'

export default function Projects() {
  return (
    <section className='scroll-mt-28'
    id="projects">
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
