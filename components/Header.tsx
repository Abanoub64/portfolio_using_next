"use client";

import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { useActiveSectioncontext } from "@/Context/active-section-context";

function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectioncontext();
  return (
    <header className=" relative z-[999]">
      <motion.div
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        className=" fixed dark:border-black/40  dark:bg-gray-950  dar top-0 left-1/2 h-[4.5rem] w-full border rounded-none border-white border-opacity-40 bg-white  bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]  sm:top-6 sm:h-[3.25rem] dark:bg-opacity-65  dark:bg-gary-950  sm:w-[36rem] sm:rounded-full"
      ></motion.div>
      <nav className="fixed flex top-[0.15rem]  left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initail] sm:py-0">
        <ul className=" flex flex-wrap w-[22rem]  items-center justify-center   gap-y-1 text-[0.9rem] font-medium text-gray-500  sm:w-[initial]  sm:flex-wrap  sm:gap-y-1 ">
          {links.map((link) => (
            <motion.li
              onClick={() => {
                setActiveSection(link.name);
                setTimeOfLastClick(Date.now());
              }}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="h-3/4  relative flex items-center justify-center"
              key={link.hash}
            >
              <Link
                className={` flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 dark:text-gray-500  dark:hover:text-gray-300   ${
                  activeSection === link.name
                    ? "text-gray-950 dark:text-gray-200"
                    : ""
                } transition-all`}
                href={link.hash}
              >
                {link.name}
                {activeSection === link.name && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="  bg-gray-200  dark:bg-gray-800 -z-10  inset-0 rounded-full absolute"
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
