'use client'

import { ArrowRight } from "lucide-react";
import services from "../components/data/serviceArr";
import { useState } from "react";


export default function ServiceScreen() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <div className="w-full h-full bg-gray-100 flex flex-col justify-center items-center p-5">
        <div className="flex flex-col items-center justify-center gap-5">
            <h2 className="text-base font-semibold text-indigo-600 uppercase">What we do</h2>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Professional Services</h2>
            <p className="text-base md:text-lg font-medium text-gray-500 text-justify md:text-center w-11/12">Expertise across multiple creative and technical domains, delivered with premium quality.</p>
        </div>
        <div className="mt-16 justify-items-center">
            <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border cursor-pointer group transform hover:-translate-y-1 ${
                    selectedService === service.title ? 'border-indigo-400' : 'border-gray-100 hover:border-indigo-300'
                  }`}
                  onClick={() => setSelectedService(service.title)}
                >
                  <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <p className="text-indigo-600 font-medium text-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </p>
                </div>
              ))}
            </div>
          </div>
    </div>
  )
}
