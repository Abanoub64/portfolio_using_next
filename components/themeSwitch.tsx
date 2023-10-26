"use client";

import { useThemecontext } from "@/Context/themeContext";
import React, { useState, useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useThemecontext();

  return (
    <button
      className="  fixed text-black border border-black  dark:border-white/60 dark:text-gray-50  dark:text-opacity-90  dark:bg-gray-950 text-center items-center justify-center right-10 bottom-8  bg-opacity-80 backdrop-blur-[0.5rem] w-[3rem] h-[3rem] rounded-full borderblack shadow-2xl border-opacity-40 flex text-lg  bg-white
        hover:scale-[1.15]  active:scale-105 transition-all
    "
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}{" "}
    </button>
  );
}
