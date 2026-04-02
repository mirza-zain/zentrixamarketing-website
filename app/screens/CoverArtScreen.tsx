'use client'

import Image from 'next/image'
import { ImageIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import comicArt from '../../public/comicPhoto/comicArt.jpg'

function CoverArtScreen() {
  const router = useRouter()
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-indigo-500 via-slate-900 to-slate-900 z-0"></div>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <h2 className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-2">Featured Artwork</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-10">Art & Comic Showcase</h3>
          
          {/* Cover Art Display */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-700 mb-10 relative group">
            <Image src={comicArt} alt="Cover Art" className="w-full h-[50vh] md:h-[60vh] object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
          </div>

          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">Explore our complete collection of custom comic pages, character designs, and premium fan illustrations.</p>
          
          <button onClick={() => router.push('/portfolio')} className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition shadow-xl hover:-translate-y-1 text-lg">
            <ImageIcon className="w-6 h-6" /> View Full Gallery
          </button>
        </div>
      </section>
  )
}

export default CoverArtScreen
