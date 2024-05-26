import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import weatherHubImg from '@/public/weatherHub.png';
import casalogueImg from '@/public/casalogue-img.png';


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Software Engineer",
    company: "Prime Digital Academy",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "Nov 2023 - Apr 2024",
  },
  {
    title: "Geospatial Production Analyst",
    company: "Geo Owl, LLC.",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2023 - Oct 2023",
  },
  {
    title: "Full Motion Video Analyst",
    company: "FGS, LLC.",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Jan 2022 - June 2022",
  },
  {
    title: "Intelligence Analyst",
    company: "U.S. Marine Corps",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "May2017 - Jan 2022",
  }
] as const;

export const projectsData = [
  {
    title: "Casalogue",
    description:
      "I completed this project in a 2-week duration. It's a home maintenance management application where users can sign into their account and manage all home-related upkeep tasks.",
    tags: ["React", "Redux", "JavaScript", "Postgres", "Semantic UI", "FullCalendar"],
    imageUrl: casalogueImg,
  },
  {
    title: "WeatherHub",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: weatherHubImg,
  },
  {
    title: "In progress",
    description:
      "Enter description text here...",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: weatherHubImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;