'use client'

import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReactNode, useRef } from "react";

type CarouselSectionProps = {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
};

export default function CarouselSection({ title, icon, children }: CarouselSectionProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -400 : 400, behavior: 'smooth' });
    }
  };
  return (
    <div className="mb-20 relative group">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 border-b border-slate-700 pb-4">
        {icon} {title}
      </h2>
      <div className="relative">
        <button aria-label="Scroll carousel left" title="Scroll carousel left" onClick={() => scroll('left')} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition hover:bg-indigo-600 shadow-xl hidden md:block">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scroll px-2">
          {children}
        </div>
        <button aria-label="Scroll carousel right" title="Scroll carousel right" onClick={() => scroll('right')} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition hover:bg-indigo-600 shadow-xl hidden md:block">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}