"use client";

import React from "react";
import Sectionheading from "./Sectionheading";
import { skillsGroups } from "@/lib/data";
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
      <div className="space-y-6">
        {skillsGroups.map((group, gIndex) => (
          <div key={gIndex}>
            <h3 className="text-center mb-3 font-semibold text-gray-700 dark:text-gray-200">
              {group.group}
            </h3>
            <ul className="flex justify-center flex-wrap gap-3">
              {group.skills.map((skill, index) => (
                <motion.li
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index + gIndex * 10}
                  className="flex items-center gap-2 dark:bg-white/10 dark:text-white/80 text-gray-800 font-medium bg-white border border-black/5 py-2 rounded-lg px-3"
                  key={skill.name}
                >
                  <span className="text-lg text-indigo-600 dark:text-indigo-300">
                    {skill.icon}
                  </span>
                  <span>{skill.name}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
