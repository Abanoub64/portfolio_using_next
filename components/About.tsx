"use client";

import React from "react";
import Sectionheading from "./Sectionheading";
import { motion } from "framer-motion";
import { useSectionInview } from "@/lib/hooks";

function About() {
  const { ref } = useSectionInview("About");

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] scroll-mt-28 leading-8 sm:mb-40 text-center"
      id="about"
    >
      <Sectionheading>About me</Sectionheading>
      <p className="mb-3 text-gray-700 leading-relaxed">
        I'm a <span className="font-bold">Full Stack .NET Developer</span>{" "}
        passionate about building
        <span className="italic">
          {" "}
          scalable, maintainable, and user-friendly applications
        </span>{" "}
        with a strong focus on the{" "}
        <span className="font-bold">.NET ecosystem</span>.
        <br />I specialize in developing
        <span className="italic"> clean, robust back-end systems</span> using
        <span className="font-bold"> ASP.NET Core Web APIs</span>, along with
        crafting
        <span className="italic">
          {" "}
          smooth and interactive front-end experiences
        </span>
        using Angular and modern web technologies.
        <br />I also have hands-on experience with the
        <span className="font-bold"> MERN stack</span>, which allows me to work
        comfortably across different architectures and tech stacks when needed.
        <br />
        With strong foundations in <span className="font-bold">OOP</span>,
        <span className="font-bold"> SOLID principles</span>, and database
        design, I focus on writing
        <span className="font-bold"> high-quality, maintainable code</span> that
        solves real-world problems.
      </p>
    </motion.section>
  );
}

export default About;
