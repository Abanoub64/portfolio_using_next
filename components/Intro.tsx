"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import biophoto from "../public/picofme.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInview } from "@/lib/hooks";
import { useActiveSectioncontext } from "@/Context/active-section-context";

export default function Intro() {
  const { setTimeOfLastClick, setActiveSection } = useActiveSectioncontext();
  const { ref } = useSectionInview("Home");
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 scroll-mt-[100rem]  max-w-[50rem]  text-center sm:mb-0"
    >
      <div className=" flex items-center justify-center ">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.3,
            }}
          >
            <Image
              priority={true}
              className="rounded-full w-24   h-24 shadow-xl object-cover  border-[6px] border-white"
              width={192}
              height={192}
              quality={95}
              alt="biophoto"
              src={biophoto}
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="text-2xl  bottom-0 right-0 absolute "
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium sm:text-4xl !leading-[1.5]"
      >
        Hi, i'm <span className="font-bold">Abanoub</span> a software engineer
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex  px-4 text-lg font-medium sm:flex-row flex-col justify-center items-center gap-2"
      >
        <Link
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          className="  group bg-gray-800 text-white px-7 py-3 flex items-center gap-2  outline-none  hover:scale-110 hover:bg-gray-950  transition-all active:scale-105 rounded-full"
          href="#contact"
        >
          {" "}
          contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition-all " />
        </Link>

        <a
          href="/CV.pdf"
          download={true}
          className="bg-white outline-none  group hover:scale-110   transition-all active:scale-105 hover:text-gray-950 rounded-full text-gray-800 px-7 py-3 flex items-center cursor-pointer borderblack gap-2 "
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition-all " />
        </a>
        <a
          target="_blank"
          className="bg-white outline-none borderblack hover:scale-110 hover:text-gray-950  transition-all active:scale-105 rounded-full text-gray-700 p-4  flex items-center  cursor-pointer gap-2 "
        >
          <BsLinkedin />
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          className="bg-white text-[1.5rem] outline-none  hover:scale-110 borderblack  transition-all active:scale-105 hover:text-gray-950 rounded-full text-gray-700 p-4  cursor-pointer flex items-center gap-2 "
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
