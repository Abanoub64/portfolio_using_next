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
        After graduating with a degree in{" "}
        <span className=" font-bold">Engineering</span>, I decided to pursue my{" "}
        <span className=" italic">passion for programming.</span>
      </p>
    </motion.section>
  );
}

export default About;
