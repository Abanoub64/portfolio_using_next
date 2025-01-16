"use client";

import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";

type projectprops = (typeof projectsData)[number];
export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
}: projectprops) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleprogress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityprogress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const handleClick = () => {
    window.open(url); // Open the URL in a new tab
  };
  return (
    <motion.div
      style={{
        scale: scaleprogress,
        opacity: opacityprogress,
      }}
      ref={ref}
      className=" mb-3  group sm:mb-8 last:mb-8"
      onClick={handleClick}

    >
      
      <section className=" dark:bg-white/10 dark:hover:bg-white/20 rounded-lg relative sm:group:even:pl-8  dark:text-white bg-gray-100 max-w-[42rem] border border-black/5 sm:h-[20rem] overflow-hidden    hover:bg-gray-200 transition  sm:pr-8 ">
        <div className=" sm:group-even:ml-[20rem]  h-full flex flex-col sm:max-w-[50%]   pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10">
          <h3 className=" text-2xl font-semibold">{title}</h3>
          <p className="mt-2 dark:text-white/70 leading-relaxed text-gray-700 ">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 sm:mt-auto gap-2">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] dark:text-white/70 px-2 py-1 text-[0.7rem]  uppercase tracking-wider text-white rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="Project i worked on"
          className=" absolute hidden sm:block   w-[28.25rem] rounded-t-lg shadow-2xl top-8 -right-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2  group-hover:scale-[1.04] transition-all group-even:group-hover:translate-x-3   
        group-even:group-hover:rotate-2 group-even-hover:translate-x-3  group-even:-right-[initial]   group-even:-left-40 "
          quality={95}
        />
      </section>
    </motion.div>
  );
}
