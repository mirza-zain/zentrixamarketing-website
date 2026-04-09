'use client'

import { Menu, X, Zap, ArrowUp } from "lucide-react"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"

function Navbar() {
    const [mobVisible, setMobVisible] = useState(false)
    const [showScroll, setShowScroll] = useState(false)

    const toggleButton = () => setMobVisible(!mobVisible)

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const checkScrollTop = useCallback(() => {
        if (!showScroll && window.scrollY > 300) {
            setShowScroll(true)
        } else if (showScroll && window.scrollY <= 300) {
            setShowScroll(false)
        }
    }, [showScroll])

    useEffect(() => {
        if (mobVisible) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }

        return () => {
            document.body.style.overflow = ""
        }
    }, [mobVisible])

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop)
        return () => {
            window.removeEventListener('scroll', checkScrollTop)
        }
    }, [checkScrollTop])

  return (
    <>
        <header className="w-full h-1/5 sticky top-0 p-5 flex justify-between items-center bg-transparent backdrop-blur-3xl border-b border-b-gray-300 shadow-md overflow-hidden z-40">
            <Link href={'/'} className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" aria-label="Zentrixa Marketing home">
                <h1 className="font-bold text-xl md:text-2xl flex items-center gap-1">
                    Zentrixa
                    <Zap size={20} color="#4f39f6" fill="#4f39f6" aria-hidden="true" />
                    <span className="text-indigo-600">Marketing</span>
                </h1>
            </Link>
            {
                mobVisible ? <X className="md:hidden" onClick={toggleButton} size={28} /> : <Menu className="md:hidden" onClick={toggleButton} size={28} />
            }
            <div className="mx-5 md:block hidden">
                <ul className="flex items-center justify-center gap-14">
                    <li className="text-lg font-medium text-gray-500 hover:text-indigo-600 duration-300 ease-in-out"><Link href={'/'}>Home</Link></li>
                    <li className="text-lg font-medium text-gray-500 hover:text-indigo-600 duration-300 ease-in-out"><Link href={'/#services'}>Services</Link></li>
                    <li className="text-lg font-medium text-gray-500 hover:text-indigo-600 duration-300 ease-in-out"><Link href={'/#portfolio'}>Portfolio</Link></li>
                    <li className="text-lg font-medium text-gray-500 hover:text-indigo-600 duration-300 ease-in-out"><Link href={'/#network'}>Our Network</Link></li>
                    <li className="text-lg font-medium text-gray-500 hover:text-indigo-600 duration-300 ease-in-out"><Link href={'/#contact'}>Contact</Link></li>
                </ul>
            </div>
        </header> 
        {showScroll && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-50 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 animate-fade-in"
                aria-label="Scroll to top"
            >
                <ArrowUp size={24} />
            </button>
        )} 
        {
            mobVisible && 
            <div className="fixed inset-x-0 top-22 bottom-0 bg-white flex justify-center z-40">
                <ul className="flex flex-col justify-center items-center gap-14">
                    <li className="text-lg font-semibold text-gray-600 hover:text-indigo-600 duration-300 ease-in-out" ><Link href={'/'} onClick={toggleButton} >Home</Link></li>
                    <li className="text-lg font-semibold text-gray-600 hover:text-indigo-600 duration-300 ease-in-out" ><Link href={'/#services'} onClick={toggleButton} >Services</Link></li>
                    <li className="text-lg font-semibold text-gray-600 hover:text-indigo-600 duration-300 ease-in-out" ><Link href={'/#portfolio'} onClick={toggleButton} >Portfolio</Link></li>
                    <li className="text-lg font-semibold text-gray-600 hover:text-indigo-600 duration-300 ease-in-out" ><Link href={'/#network'} onClick={toggleButton} >Our Network</Link></li>
                    <li className="text-lg font-semibold text-gray-600 hover:text-indigo-600 duration-300 ease-in-out" ><Link href={'/#contact'} onClick={toggleButton} >Contact</Link></li>
                </ul>
            </div>
        }
    </>
  )
}

export default Navbar
