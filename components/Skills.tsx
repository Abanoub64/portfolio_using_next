"use client";

import React from "react";
import Sectionheading from "./Sectionheading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import { useSectionInview } from "@/lib/hooks";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => {
    return {
      opacity: 1,
      y: 0,

      transition: {
        delay: 0.05 * index,
      },
    };
  },
};

function Skills() {
  const { ref } = useSectionInview("Skills", 0.75);
  return (
    <section
      id="skills"
      ref={ref}
      className=" mb-28 scroll-mt-28   max-w-[53rem]"
    >
      <Sectionheading>Skills</Sectionheading>
      <ul className="flex justify-center flex-wrap gap-2">
        {skillsData.map((skills, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className="  dark:bg-white/10 dark:text-white/80  text-gray-800 font-medium  bg-white border border-black/5 py-3  rounded-lg px-4"
            key={index}
          >
            {skills}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
