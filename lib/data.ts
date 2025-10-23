import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import Netflex from "@/public/Netflex.png";
import Movie from "@/public/Movie_app.png";
// Icons for skills
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiAngular } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { SiSolidity } from "react-icons/si"; // placeholder for SOLID/OOP icon (used as generic)
import { SiVisualstudiocode } from "react-icons/si"; // optional, not used directly but kept as available

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
    description:
      "I designed and developed this portfolio to showcase my skills and projects as a Fullstack MERN Developer. Built with modern technologies, it features seamless animations, responsive design, and email integration for contact forms.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Email",
      "Resend",
    ],
    imageUrl: corpcommentImg,
    url: "https://portfolio-using-next-9jps.vercel.app/",
  },
  {
    title: "St-demiana",
    description:
      "Built a church website for managing parishioner data with user-friendly forms, access levels, and a scalable cloud database. Streamlines communication, data management, and reporting for the church community.",
    tags: [
      "TypeScript",
      "Tailwind",
      "Express.js",
      "Formik",
      "Authentication",
      "Role-Based Access Control",
      "Excel Export",
      "File Download",
      "React Query",
    ],
    imageUrl: rmtdevImg,
    url: "https://st-demiana-client.vercel.app/",
  },
  {
    title: "Movie App",
    description:
      "Built a fully responsive Movies/TVs App by implementing The Movie DB API with My team in the ITI , Features dynamic content, and a mobile-first design for seamless user experiences",
    tags: ["Angular", "TYPESCRIPT", "TAILWIND", "ZardUI", "Netlify"],
    imageUrl: Movie,
    url: "https://flourishing-marshmallow-97ca80.netlify.app/",
  },
  {
    title: "TRVL",
    description:
      "Built a fully responsive travel agency website, Features dynamic content,  and a mobile-first design for seamless user experiences",
    tags: ["React", "React Router", "Material ui", "Netlify"],
    imageUrl: wordanalyticsImg,
    url: "https://serene-quokka-b7df76.netlify.app/",
  },
  {
    title: "Netflix Clone",
    description:
      "Developed a Netflix-inspired streaming platform with dynamic content fetched from APIs. Features include user authentication, movie/show browsing, search functionality, and responsive design for seamless viewing across devices.",
    tags: ["React", "Axios", "Movie Trailer", "React Router ", "React YouTube"],
    imageUrl: Netflex,
    url: "https://lambent-granita-169444.netlify.app/",
  },
] as const;

export const skillsGroups = [
  {
    group: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: React.createElement(SiJavascript) },
      { name: "TypeScript", icon: React.createElement(SiTypescript) },
      { name: "C#", icon: React.createElement(SiCsharp) },
      { name: "SQL", icon: React.createElement(SiMysql) },
    ],
  },
  {
    group: "BackEnd Technologies",
    skills: [
      { name: "Node.js", icon: React.createElement(SiNodedotjs) },
      { name: "Express", icon: React.createElement(SiExpress) },
      { name: "ASP.NET Core", icon: React.createElement(SiDotnet) },
      { name: "ASP.NET Core API", icon: React.createElement(SiDotnet) },
      { name: "Web API", icon: React.createElement(SiDotnet) },
      { name: "SignalR", icon: React.createElement(SiDotnet) },
      { name: "Prisma", icon: React.createElement(SiPrisma) },
      { name: "Entity Framework", icon: React.createElement(SiDotnet) },
      { name: "Dapper", icon: React.createElement(SiDotnet) },
      { name: "ADO.NET", icon: React.createElement(SiDotnet) },
      { name: "LINQ", icon: React.createElement(SiDotnet) },
    ],
  },
  {
    group: "FrontEnd Technologies",
    skills: [
      { name: "React", icon: React.createElement(SiReact) },
      { name: "Next.js", icon: React.createElement(SiNextdotjs) },
      { name: "Angular", icon: React.createElement(SiAngular) },
      { name: "Redux", icon: React.createElement(SiRedux) },
      { name: "Tailwind CSS", icon: React.createElement(SiTailwindcss) },
      { name: "Bootstrap", icon: React.createElement(SiBootstrap) },
      { name: "Framer Motion", icon: React.createElement(SiFramer) },
    ],
  },
  {
    group: "Databases",
    skills: [
      { name: "MongoDB", icon: React.createElement(SiMongodb) },
      { name: "MySQL", icon: React.createElement(SiMysql) },
      { name: "SQL Server", icon: React.createElement(SiMysql) },
    ],
  },
  {
    group: "Other Technologies",
    skills: [
      { name: "Git", icon: React.createElement(SiGit) },
      { name: "Postman", icon: React.createElement(SiPostman) },
      { name: "Resend", icon: React.createElement(AiOutlineMail) },
      { name: "OOP", icon: React.createElement(SiSolidity) },
      { name: "SOLID Principles", icon: React.createElement(SiSolidity) },
    ],
  },
] as const;
