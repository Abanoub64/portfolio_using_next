"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import biophoto from "../public/picofme.png";
import { animate, motion, useAnimate } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInview } from "@/lib/hooks";
import { useActiveSectioncontext } from "@/Context/active-section-context";
import DraggableDiv from "./Daggablediv";

export default function Intro() {
  const { setTimeOfLastClick, setActiveSection } = useActiveSectioncontext();
  const { ref } = useSectionInview("Home");
  const [frame, animate] = useAnimate();
  const waveFrames: number[] = [0, 20, -10, 15, -5, 10, 0];

  function wave() {
    animate(
      waveFrames.map((rotation, index) => [frame.current, { rotate: rotation }])
    );
  }

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
            <DraggableDiv />
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
            ref={frame}
            onClick={wave}
            className="text-2xl  z-30 cursor-pointer bottom-0 right-0 absolute "
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
<section id="about" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          About Me
        </h2>
        <div className="max-w-2xl mx-auto text-center">
          {/* Attractive Lines */}
          <p className="text-lg text-gray-600 mb-4">
            I'm a <span className="font-semibold text-blue-600">passionate Fullstack MERN Developer</span> with a strong foundation in building web applications and a drive to create solutions that make a difference.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            As someone who thrives on <span className="font-semibold text-blue-600">solving problems</span> and <span className="font-semibold text-blue-600">learning new technologies</span>, I'm excited to bring my creativity and dedication to a dynamic team.
          </p>

          {/* Skills Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Frontend Development
              </h3>
              <p className="text-gray-600">
                I enjoy crafting intuitive and responsive user interfaces using React, Tailwind CSS, and JavaScript.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Backend Development
              </h3>
              <p className="text-gray-600">
                I'm skilled in building secure and scalable backend systems with Node.js, Express, and MongoDB.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Continuous Learner
              </h3>
              <p className="text-gray-600">
                I'm always eager to learn new technologies and improve my skills to stay ahead in the ever-evolving tech landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>      </motion.p>
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
          className="bg-white outline-none  group hover:scale-110   transition-all active:scale-105 hover:text-gray-950 rounded-full text-gray-800 px-7 py-3 flex items-center cursor-pointer borderblack gap-2 dark:text-white/60 dark:bg-white/20 "
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition-all " />
        </a>
        <a
          target="_blank"
          className="bg-white dark:text-white/60  outline-none borderblack hover:scale-110 hover:text-gray-950  transition-all active:scale-105 rounded-full dark:bg-white/20 text-gray-700 p-4  flex items-center  cursor-pointer gap-2 "
        >
          <BsLinkedin />
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          className="bg-white  dark:text-white/60 text-[1.5rem] outline-none  hover:scale-110 borderblack dark:bg-white/20  transition-all active:scale-105 hover:text-gray-950 rounded-full text-gray-700 p-4  cursor-pointer flex items-center gap-2 "
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
