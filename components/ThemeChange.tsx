"use client"
import React from 'react'
import { useTheme } from '@/context/ThemeContext'
import { BsSun, BsMoon } from 'react-icons/bs'


export default function ThemeChange() {
    const { theme, toggleTheme } = useTheme();
    
  return (
    <button className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[1/5rem] 
    border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center
    hover:scale-[1.15] active:scale-105 transition-all dark:bg-zinc-950'
    onClick={toggleTheme}>
        {theme === "light" ? <BsSun /> : <BsMoon />}
    </button> 
  )
}
