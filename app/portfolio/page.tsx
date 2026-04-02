'use client'

import Image from 'next/image'
import { useState } from 'react'
import { BookOpen, ImageIcon, Palette } from 'lucide-react'
import ContactSection from '../screens/ContactScreen'
import fanArt1 from '../../public/FanArts/fanArt1.jpeg'
import fanArt2 from '../../public/FanArts/fanArt2.jpeg'
import fanArt3 from '../../public/FanArts/fanArt3.jpeg'
import fanArt4 from '../../public/FanArts/fanArt4.jpeg'
import Art1 from '../../public/FanArts/1.jpeg'
import Art2 from '../../public/FanArts/2.jpeg'
import Art3 from '../../public/FanArts/3.jpeg'
import Art4 from '../../public/FanArts/4.jpeg'
import Art5 from '../../public/FanArts/5.jpeg'
import Art6 from '../../public/FanArts/6.jpeg'
import Art7 from '../../public/FanArts/7.jpeg'
import Art8 from '../../public/FanArts/8.jpeg'
import Art9 from '../../public/FanArts/9.jpeg'
import Art10 from '../../public/FanArts/10.jpeg'
import Art11 from '../../public/FanArts/11.jpeg'
import Art12 from '../../public/FanArts/12.jpeg'
import Art13 from '../../public/FanArts/13.jpeg'
import Art14 from '../../public/FanArts/14.jpeg'
import Art15 from '../../public/FanArts/15.jpeg'
import Art16 from '../../public/FanArts/16.jpeg'
import comicDisplayImage from '../../public/comicPhoto/comicArt.jpg'
import CarouselSection from '../components/CarousalSection'

const largeFanArts = [fanArt1, fanArt2, fanArt3, fanArt4]
const smallFanArts = [Art1, Art2, Art3, Art4, Art5, Art6, Art7, Art8, Art9, Art10, Art11, Art12, Art13, Art14, Art15, Art16]
const allGalleryImages = [comicDisplayImage, ...largeFanArts, ...smallFanArts]


const PortfolioPage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImageIndex(null)
  }

  const activeImage = selectedImageIndex !== null ? allGalleryImages[selectedImageIndex] : null

  return (
    <div className="bg-slate-900 min-h-screen text-white pt-24 pb-0 flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 grow">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">The Art Gallery</h1>
          <p className="text-xl text-slate-400">Swipe horizontally or use arrows to view our featured collections.</p>
        </div>

        {/* Carousel 1: Comic Features */}
        <CarouselSection title="Comic Features" icon={<BookOpen className="text-red-400" />}>
          <div 
            className="w-[85vw] md:w-175 shrink-0 snap-center cursor-pointer"
            onClick={() => openLightbox(0)}
          >
            <Image src={comicDisplayImage} alt="Comic Page" className="w-full h-100 md:h-125 object-cover rounded-3xl border border-slate-700 shadow-2xl hover:scale-[1.02] transition-transform" />
          </div>
          {/* Add more comic images here if he sends more */}
        </CarouselSection>

        {/* Carousel 2: Premium Fan Arts */}
        <CarouselSection title="Premium Fan Arts" icon={<Palette className="text-purple-400" />}>
          {largeFanArts.map((img, index) => (
            <div 
              key={index} 
              className="w-[75vw] md:w-100 shrink-0 snap-center cursor-pointer"
              onClick={() => openLightbox(index + 1)}
            >
              <Image src={img} alt={`FanArt ${index}`} className="w-full h-100 md:h-125 object-cover rounded-3xl border border-slate-700 shadow-2xl hover:scale-[1.02] transition-transform" />
            </div>
          ))}
        </CarouselSection>

        {/* Carousel 3: Small Fan Art Collection */}
        <CarouselSection title="The Collection" icon={<ImageIcon className="text-indigo-400" />}>
          {smallFanArts.map((img, index) => (
            <div 
              key={index} 
              className="w-[45vw] md:w-50 shrink-0 snap-center cursor-pointer"
              onClick={() => openLightbox(index + 5)}
            >
              <Image src={img} alt={`Small Art ${index}`} className="w-full h-[45vw] md:h-50 object-cover rounded-2xl border border-slate-700 hover:scale-[1.05] transition-transform" />
            </div>
          ))}
        </CarouselSection>
      </div>
      
      <ContactSection />

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4"
          onClick={closeLightbox}
          role="button"
          aria-label="Close lightbox"
          tabIndex={0}
        >
          <Image
            src={activeImage}
            alt="Expanded artwork"
            className="max-h-[90vh] max-w-[95vw] rounded-2xl border border-slate-700 shadow-2xl"
            unoptimized
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
      
    </div>
  )
}

export default PortfolioPage
