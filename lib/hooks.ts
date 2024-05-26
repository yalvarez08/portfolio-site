import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";


export function usePartInView(sectionName: SectionName, threshold = 0.75) {
    const {ref, inView} = useInView({ threshold });
    const {setActiveSection, lastClick} = useActiveSectionContext();
  
    useEffect(() => {
      // state of page 
      if (inView && Date.now() - lastClick > 1000) {
          setActiveSection(sectionName);
      }
    }, [inView, setActiveSection, lastClick, sectionName])

    return {
        ref,
    }
}