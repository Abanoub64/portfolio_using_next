import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import Netflex from "@/public/Netflex.png";


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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "My Portfolio",
  description: "I designed and developed this portfolio to showcase my skills and projects as a Fullstack MERN Developer. Built with modern technologies, it features seamless animations, responsive design, and email integration for contact forms.",
  tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Email", "Resend",]
    ,imageUrl: corpcommentImg,
    url:'https://portfolio-using-next.vercel.app/'
  },
  {
    title: "St-demiana",
    description:
"Built a church website for managing parishioner data with user-friendly forms, access levels, and a scalable cloud database. Streamlines communication, data management, and reporting for the church community."   , tags: [ "TypeScript", "Tailwind",
      "Express.js",
      "Formik",
      "Authentication",
      "Role-Based Access Control",
      "Excel Export",
      "File Download",
      "React Query",],
    imageUrl: rmtdevImg,
        url:'https://st-demiana-client.vercel.app/'
  },
  {
    title: "TRVL",
    description:
      "Built a fully responsive travel agency website, Features dynamic content,  and a mobile-first design for seamless user experiences",
    tags: [ "React",
      "React Router",
    "Material ui",
  "Netlify"],
    imageUrl: wordanalyticsImg,
        url:'https://serene-quokka-b7df76.netlify.app/'
  },
  {
  title: "Netflix Clone",
    description: "Developed a Netflix-inspired streaming platform with dynamic content fetched from APIs. Features include user authentication, movie/show browsing, search functionality, and responsive design for seamless viewing across devices.",    tags: [ "React",
      "Axios",
      "Movie Trailer",
      "React Router ",
      "React YouTube"],
    imageUrl: Netflex,
        url:'https://lambent-granita-169444.netlify.app/'
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
  "Prisma",
  "MongoDB",
  "Redux",
  "Resend",
  "Postman",
  "Express",
  "SQL",
  "MySQL",
  "Framer Motion",
] as const;
