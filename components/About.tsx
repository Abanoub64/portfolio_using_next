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
      <p className="mb-3">
        <span>Fullstack Developer</span> with a passion for building <span className="italic">scalable, user-friendly web applications</span> using the <span className="font-bold">MERN stack</span>.<br />
    Skilled in crafting <span className="italic">seamless front-end experiences</span> and <span className="italic">robust back-end systems</span>, with a focus on <span className="font-bold">clean code</span> and <span className="font-bold">modern technologies</span>.<br />
    <span className="italic">Always learning</span>, <span className="italic">always building</span>, and always pushing the boundaries of what’s possible with code.
      </p>
    </motion.section>
  );
}

export default About;
