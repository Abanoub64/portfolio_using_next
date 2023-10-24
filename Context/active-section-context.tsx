"use client";

import React, { useState, createContext, useContext } from "react";
import { links } from "@/lib/data";

type sectionname = (typeof links)[number]["name"];
type ActiveSectionContextProviderprops = { children: React.ReactNode };
type ActiveSectionContexttype = {
  activeSection: sectionname;
  setActiveSection: React.Dispatch<React.SetStateAction<sectionname>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSectionContext = createContext<ActiveSectionContexttype | null>(
  null
);

function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderprops) {
  const [activeSection, setActiveSection] = useState<sectionname>("Home");

  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

function useActiveSectioncontext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActivecontext must be used inside of Acitvesectionprovider"
    );
  }
  return context;
}

export {
  ActiveSectionContextProvider,
  ActiveSectionContext,
  useActiveSectioncontext,
};
