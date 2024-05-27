import React from 'react'
import { Roboto_Mono } from 'next/font/google'

const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
        <small className={`${robotoMono.className} mb-2 text-xs font-semibold block`}>
            &copy; 2024. Yailene Alvarez ▪️ All rights reserved
        </small>
        <p className={`${robotoMono.className} text-xs`}>
            Website 🛠️ with Next.js, TypeScript, Framer Motion, TailwindCSS, and Vercel.
        </p>
    </footer>
  )
}
