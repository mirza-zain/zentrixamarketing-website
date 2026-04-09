import type { Metadata } from "next";
import Link from "next/link";
import comicDisplayImage from "../public/FanArts/6.jpeg"
import ServiceScreen from "./screens/ServiceScreen";
import PortfolioScreen from "./screens/PortfolioScreen";
import CoverArtScreen from "./screens/CoverArtScreen";
import ContactSection from "./screens/ContactScreen";

export const metadata: Metadata = {
  title: "Creative Branding, Animation & Wiki Services",
  description:
    "Explore Zentrixa Marketing services including Wikipedia content, fan art, comic books, animation, and brand-focused creative execution.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Creative Branding, Animation & Wiki Services | Zentrixa Marketing",
    description:
      "Discover full-service creative support from concept to final delivery for your content and brand assets.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <div className="w-full min-h-[calc(100svh-76px)] md:min-h-[calc(100svh-88px)] relative overflow-hidden flex flex-col xl:flex-row justify-center items-center bg-linear-to-br from-[#dbeafe] via-[#ecfeff] to-[#e0e7ff] lg:p-5">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-cyan-300/40 blur-3xl"></div>
        <div className="absolute -bottom-24 right-10 h-80 w-80 rounded-full bg-indigo-300/35 blur-3xl"></div>
        <div className="w-full xl:w-1/2 flex flex-col items-left justify-center gap-6 mx-5 p-5 relative z-10">
          <div className="bg-white md:w-2/6 py-2 rounded-xl border border-cyan-100 shadow-sm">
            <p className="text-base text-center font-medium text-slate-700 inline-flex items-center justify-center gap-2 w-full"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.75)]"></span>Available for Work</p>
          </div>
          <h2 className="w-11/12 text-5xl lg:text-8xl font-extrabold text-slate-900">Bringing your <span className="bg-linear-to-r from-[#22d3ee] via-[#60a5fa] to-[#818cf8] bg-clip-text text-transparent">creative visions </span>to reality</h2>
          <p className="w-full md:w-4/5 text-base md:text-lg text-gray-500 text-justify">From professional Wikipedia page creation to stunning FanArts, Comic Books, and Animations. We provide a complete suite of creative and writing services to elevate your brand globally.</p>
          <div className="flex justify-left items-center gap-10">
            <button className="text-sm sm:text-base md:text-lg px-4 md:px-8 py-3 md:py-6 bg-linear-to-r from-[#2563eb] to-[#4f46e5] hover:from-[#4f46e5] hover:to-[#2563eb] text-white font-medium rounded-xl whitespace-nowrap shadow-[0_12px_34px_rgba(37,99,235,0.35)] transition-all"><Link href={'/#contact'}>Start a Project</Link></button>
            <button className="text-sm sm:text-base md:text-lg px-4 md:px-8 py-3 md:py-6 bg-white hover:bg-slate-100 text-[#2563eb] border border-cyan-200 font-medium rounded-xl whitespace-nowrap transition-colors shadow-[0_8px_20px_rgba(15,23,42,0.08)]"><Link href={'/portfolio'}>View Portfolio</Link></button>
          </div>
        </div>
        <div className="hidden lg:flex lg:w-1/2 justify-center p-12">
             <div className="relative w-full max-w-lg aspect-square">
               <div className="absolute inset-0 bg-linear-to-tr from-blue-500 to-cyan-500 rounded-[3rem] rotate-6 opacity-20"></div>
               <div className="absolute inset-0 bg-linear-to-bl from-indigo-500 to-blue-600 rounded-[3rem] -rotate-3 opacity-30 backdrop-blur-xl border border-white/20"></div>
               <img src={comicDisplayImage.src} className="absolute inset-0 w-full h-full object-cover rounded-[3rem] shadow-2xl rotate-0 border-4 border-white" alt="Hero Art"/>
             </div>
          </div>
      </div>
      <ServiceScreen />
      <CoverArtScreen />
      <PortfolioScreen />
      <ContactSection />
    </>
  );
}
