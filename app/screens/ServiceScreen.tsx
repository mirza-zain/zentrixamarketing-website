'use client'

import { ArrowRight, X } from "lucide-react";
import services from "../components/data/serviceArr";
import { useState } from "react";
import Link from "next/link";


export default function ServiceScreen() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const currentService = services.find(s => s.title === selectedService);

  return (
    <section id="services" className="w-full h-full bg-slate-50 flex flex-col justify-center items-center p-5 scroll-mt-24">
        <div className="flex flex-col items-center justify-center gap-5">
        <h2 className="text-lg font-bold bg-linear-to-r from-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent uppercase">What we do</h2>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">Professional Services</h2>
            <p className="text-base md:text-lg font-medium text-gray-500 text-justify md:text-center w-11/12">Expertise across multiple creative and technical domains, delivered with premium quality.</p>
        </div>
        <div className="mt-16 justify-items-center">
            <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border cursor-pointer group transform hover:-translate-y-1 ${
                    selectedService === service.title ? 'border-cyan-300 shadow-[0_10px_30px_rgba(6,182,212,0.2)]' : 'border-gray-100 hover:border-blue-300'
                  }`}
                  onClick={() => setSelectedService(service.title)}
                >
                  <div className={`w-16 h-16 rounded-xl bg-linear-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <p className="text-blue-600 font-medium text-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </p>
                </div>
              ))}
            </div>
          </div>

          {selectedService && currentService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4" onClick={() => setSelectedService(null)}>
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-xl bg-sky-50 flex items-center justify-center">
                    {currentService.icon}
                  </div>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors shrink-0"
                    aria-label="Close"
                  >
                    <X size={24} />
                  </button>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{currentService.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8">{currentService.description}</p>
                <Link href="/#contact" onClick={() => setSelectedService(null)}>
                  <button className="w-full bg-linear-to-r from-[#2563eb] to-[#4f46e5] hover:from-[#4f46e5] hover:to-[#2563eb] text-white font-bold py-3 rounded-xl transition-all shadow-[0_10px_24px_rgba(37,99,235,0.25)]">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          )}
    </section>
  )
}
