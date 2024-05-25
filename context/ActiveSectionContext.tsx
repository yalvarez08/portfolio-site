import React, { useState, createContext, useContext } from "react";

type SectionName = (typeof links) [number]["name"];

type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
  }; 
  const ActiveSectionContext = createContext(null);

export default function ActiveSectionContextProvider({children} : 
    ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState("Home");

  return children;
    

}
