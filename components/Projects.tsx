"use client";

import React from "react";
import Sectionheading from "./Sectionheading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionInview } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInview("Projects", 0.5);
  return (
    <section ref={ref} className=" scroll-mt-28" id="projects">
      <Sectionheading>My Projects</Sectionheading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
