"use client";

import React from "react";
import { motion } from "framer-motion";

function SectionDivider() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.2,
      }}
      className=" bg-gray-200 my-24 h-16 w-1  hidden sm:block"
    ></motion.div>
  );
}

export default SectionDivider;
