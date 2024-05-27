import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import weatherHubImg from '@/public/weatherHub.png';
import casalogueImg from '@/public/casalogue-img.png';
import appGameImg from '@/public/appGame.jpeg'


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
      "",
    icon: React.createElement(LuGraduationCap),
    date: "Nov 2023 - Apr 2024",
  },
  {
    title: "Geospatial Production Analyst",
    company: "Geo Owl, LLC.",
    description:
      "",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2023 - Oct 2023",
  },
  {
    title: "Full Motion Video Analyst",
    company: "FGS, LLC.",
    description:
      "",
    icon: React.createElement(FaReact),
    date: "Jan 2022 - June 2022",
  },
  {
    title: "Intelligence Analyst",
    company: "U.S. Marine Corps",
    description:
      "",
    icon: React.createElement(FaReact),
    date: "May2017 - Jan 2022",
  }
] as const;

export const projectsData = [
  {
    title: "Casalogue",
    description:
      "I completed this project in a 2-week duration. It's a home maintenance management application where users can sign into their account and manage all home-related upkeep tasks.",
    tags: ["React", "JavaScript", "Postgres", "Semantic UI", "FullCalendar"],
    imageUrl: casalogueImg,
  },
  {
    title: "WeatherHub",
    description:
      "Weather forecast application. It features a fluid and seamless UI for searching weather based on location.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: weatherHubImg,
  },
  {
    title: "Memory Game",
    description:
      "Currently in progress...",
    tags: ["C#", ".NET Core"],
    imageUrl: appGameImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "C#",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  ".NET",
  "Entity Framework",
  "Tailwind",
  "Redux",
  "Express",
  "Postgres",
  "Postman",
  "SQL"
] as const;