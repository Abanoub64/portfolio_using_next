"use client";

import React, { useEffect } from "react";
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
      transition={{ deltay: 0.175 }}
      className="mb-28 max-w-[45rem] scroll-mt-28 leading-8 sm:mb-40 text-center"
      id="about"
    >
      <Sectionheading>About me</Sectionheading>
      <p className="mb-3 text-gray-700 leading-relaxed">
        I'm a <span className="font-bold">Full Stack Developer</span> passionate
        about building
        <span className="italic">
          {" "}
          modern, scalable, and user-friendly applications
        </span>{" "}
        using both the <span className="font-bold">MERN</span> and{" "}
        <span className="font-bold">.NET</span> ecosystems.
        <br />I enjoy crafting{" "}
        <span className="italic">
          smooth, interactive front-end experiences
        </span>
        with React, Next.js, and Angular, and developing
        <span className="italic"> robust, clean back-end systems</span> using
        Node.js, Express, and .NET Web APIs.
        <br />
        With strong foundations in <span className="font-bold">OOP</span>,
        <span className="font-bold"> SOLID principles</span>, and database
        design, I focus on writing{" "}
        <span className="font-bold">high-quality, maintainable code </span>
        that solves real problems.
        <br />
        <span className="italic">Always learning</span>,
        <span className="italic">always building</span>, and always pushing the
        boundaries of what’s possible with code
      </p>
    </motion.section>
  );
}

export default About;
