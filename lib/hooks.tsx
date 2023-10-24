import { useActiveSectioncontext } from "@/Context/active-section-context";
import { useInView } from "react-intersection-observer";
import type { sectionname } from "./types";

import { useEffect } from "react";

export function useSectionInview(sectionName: sectionname, threshold = 0.75) {
  const { setActiveSection, timeOfLastClick } = useActiveSectioncontext();
  const { ref, inView } = useInView({
    threshold: threshold,
  });
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, sectionName, timeOfLastClick]);

  return {
    ref,
  };
}
