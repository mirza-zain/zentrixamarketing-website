'use client'

import { CheckCircle, Mail, Phone } from "lucide-react";
import { FormEvent, useState } from "react";

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState('idle');

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => { setFormStatus('idle'); e.currentTarget.reset(); }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col lg:flex-row">
          <div className="lg:w-5/12 p-10 md:p-16 bg-indigo-600 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-extrabold mb-4">Let&apos;s connect.</h3>
              <p className="text-indigo-100 mb-10 text-lg">Ready to elevate your brand? Send us a message and we&apos;ll respond within 24 hours.</p>
              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm"><Mail className="w-6 h-6 text-white" /></div>
                  <div>
                    <p className="text-indigo-200 text-sm font-bold uppercase tracking-wider mb-1">Business Mail</p>
                    <p className="font-semibold text-lg">contact@zentrixamarketing.org</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm"><Phone className="w-6 h-6 text-white" /></div>
                  <div>
                    <p className="text-indigo-200 text-sm font-bold uppercase tracking-wider mb-1">Direct Number</p>
                    <p className="font-semibold text-lg">+1 (234) 567-8900</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5"></div>
          </div>
          <div className="flex-1 p-10 md:p-16 relative">
            {formStatus === 'success' && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm z-10">
                <CheckCircle className="w-20 h-20 text-green-500 mb-6 animate-bounce" />
                <h4 className="text-3xl font-bold text-slate-900 mb-2">Message Sent!</h4>
                <p className="text-slate-500">We will get back to you shortly.</p>
              </div>
            )}
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                <input type="text" required placeholder="John Doe" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input type="email" required placeholder="you@example.com" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Project Details</label>
                <textarea required rows={3} placeholder="Tell us what you need..." className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none resize-none"></textarea>
              </div>
              <button type="submit" disabled={formStatus === 'submitting'} className="w-full p-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-md mt-2">
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}