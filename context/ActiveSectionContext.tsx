"use client";
import React, { useState, createContext, useContext } from "react";
import type { SectionName } from "@/lib/types";


type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
  }; 

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    lastClick: number;
    setLastClick: React.Dispatch<React.SetStateAction<number>>;
}
export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

// client component
export default function ActiveSectionContextProvider({children} : 
    ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");

    // needed to temporarily disable the observer visable in navigation header
    const [lastClick, setLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider 
        value={{ activeSection, setActiveSection, lastClick, setLastClick }}>
        {children}
    </ActiveSectionContext.Provider>
  )
    
}

export function useActiveSectionContext() {
    const activeContext = useContext(ActiveSectionContext)

    if(activeContext === null) {
        throw new Error(
            "This useActiveSectionContext must be used within an ActiveSectionContextProvider"
        );
    }
    return activeContext;
}
