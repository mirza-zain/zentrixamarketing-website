'use client'

import { Menu, X, Zap, ArrowUp } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback, useEffect, useState } from "react"

function Navbar() {
    const [mobVisible, setMobVisible] = useState(false)
    const [showScroll, setShowScroll] = useState(false)
    const pathname = usePathname()

    const isHomeActive = pathname === "/"
    const isGalleryActive = pathname.startsWith("/portfolio")

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
        <header className="w-full h-1/5 sticky top-0 p-5 flex justify-between items-center bg-white/85 backdrop-blur-3xl border-b border-b-cyan-100 shadow-md overflow-hidden z-40">
            <Link href={'/'} className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" aria-label="Zentrixa Marketing home">
                <h1 className="font-bold text-xl md:text-2xl flex items-center gap-1">
                    Zentrixa
                    <Zap size={24} color="#2563eb" fill="#2563eb" aria-hidden="true" />
                    <span className="bg-linear-to-r from-[#22d3ee] via-[#60a5fa] to-[#818cf8] bg-clip-text text-transparent">Marketing</span>
                </h1>
            </Link>
            {
                mobVisible ? <X className="md:hidden" onClick={toggleButton} size={28} /> : <Menu className="md:hidden" onClick={toggleButton} size={28} />
            }
            <div className="mx-5 md:block hidden">
                <ul className="flex items-center justify-center gap-8">
                    <li className={`text-lg font-medium duration-300 ease-in-out ${isHomeActive ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'}`}><Link href={'/'}>Home</Link></li>
                    <li className={`text-lg font-medium duration-300 ease-in-out ${isGalleryActive ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'}`}><Link href={'/portfolio'}>Gallery</Link></li>
                    <li><Link href={'/#contact'} className="inline-flex items-center rounded-xl bg-linear-to-r from-[#2563eb] to-[#4f46e5] px-6 py-3 text-base font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.3)] hover:from-[#4f46e5] hover:to-[#2563eb] transition-all">Contact Us</Link></li>
                </ul>
            </div>
        </header> 
        {showScroll && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-50 bg-linear-to-r from-[#2563eb] to-[#4f46e5] hover:from-[#4f46e5] hover:to-[#2563eb] text-white p-3 rounded-full shadow-[0_10px_28px_rgba(37,99,235,0.35)] transition-all duration-300 animate-fade-in"
                aria-label="Scroll to top"
            >
                <ArrowUp size={24} />
            </button>
        )} 
        {
            mobVisible && 
            <div className="fixed inset-x-0 top-22 bottom-0 bg-white flex justify-center z-40">
                <ul className="flex flex-col justify-center items-center gap-14">
                    <li className={`text-lg font-semibold duration-300 ease-in-out ${isHomeActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`} ><Link href={'/'} onClick={toggleButton} >Home</Link></li>
                    <li className={`text-lg font-semibold duration-300 ease-in-out ${isGalleryActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`} ><Link href={'/portfolio'} onClick={toggleButton} >Gallery</Link></li>
                    <li><Link href={'/#contact'} onClick={toggleButton} className="inline-flex items-center rounded-xl bg-linear-to-r from-[#2563eb] to-[#4f46e5] px-7 py-3.5 text-lg font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.3)] hover:from-[#4f46e5] hover:to-[#2563eb] transition-all">Contact Us</Link></li>
                </ul>
            </div>
        }
    </>
  )
}

export default Navbar
