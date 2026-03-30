'use client'

import { Menu, X, Zap } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

function Navbar() {
    const [mobVisible, setMobVisible] = useState(false)

    const toggleButton = () => setMobVisible(!mobVisible)

  return (
    <>
        <header className="w-full h-1/5 sticky top-0 p-5 flex justify-between items-center bg-white border-b border-b-gray-300 shadow-md ">
            <div className="flex items-center gap-5">
                <Zap size={28} color="#4f39f6" fill="#4f39f6" />
                <h1 className="font-bold text-xl md:text-2xl">Zentrixa<span className="text-indigo-600">Marketing</span></h1>
            </div>
            {
                mobVisible ? <X className="md:hidden" onClick={toggleButton} size={28} /> : <Menu className="md:hidden" onClick={toggleButton} size={28} />
            }
            <div className="mx-5 md:block hidden">
                <ul className="flex items-center justify-center gap-14">
                    <li className="text-base font-medium text-gray-600 hover:text-indigo-600 duration-300 ease-in-out"><Link href={'/'}>Services</Link></li>
                    <li className="text-base font-medium text-gray-600 hover:text-indigo-600 duration-300 ease-in-out"><Link href={'/'}>Our Network</Link></li>
                    <li className="text-base font-medium text-gray-600 hover:text-indigo-600 duration-300 ease-in-out"><Link href={'/'}>Contact</Link></li>
                </ul>
            </div>
        </header> 
    </>
  )
}

export default Navbar
