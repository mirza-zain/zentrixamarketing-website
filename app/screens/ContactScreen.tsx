'use client'

import { Mail, Phone } from "lucide-react";
import { FormEvent, useState } from "react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/services@pixelpulsecreationz.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      form.reset();
      setShowSuccessPopup(true);
      setTimeout(() => setShowSuccessPopup(false), 2500);
    } catch {
      alert("Unable to send message right now. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col lg:flex-row">
          <div className="lg:w-5/12 p-10 md:p-16 bg-linear-to-br from-[#2563eb] to-[#4f46e5] text-white flex flex-col justify-center relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-extrabold mb-4">Let&apos;s connect.</h3>
              <p className="text-cyan-100 mb-10 text-lg">Ready to elevate your brand? Send us a message and we&apos;ll respond within 24 hours.</p>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm shrink-0"><Mail className="w-6 h-6 text-white" /></div>
                  <div className="min-w-0">
                    <p className="text-cyan-100 text-xs md:text-sm font-bold uppercase tracking-wider mb-1">Business Mail</p>
                    <p className="font-semibold text-xs sm:text-sm md:text-lg overflow-wrap">services@pixelpulsecreationz.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm shrink-0"><Phone className="w-6 h-6 text-white" /></div>
                  <div>
                    <a
                      href="https://wa.me/447311138570?text=Hi%20Zentrixa%20Marketing%2C%20I%20would%20like%20to%20discuss%20my%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1ebe5a] text-white text-sm font-extrabold tracking-wide shadow-lg shadow-black/20 border border-white/30 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5"></div>
          </div>
          <div className="flex-1 p-10 md:p-16 relative">
            {showSuccessPopup && (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-900/35 backdrop-blur-sm">
                <div className="mx-6 rounded-2xl bg-white px-8 py-6 shadow-2xl border border-slate-200 text-center">
                  <p className="text-xl font-bold text-slate-900">Message sent</p>
                  <p className="text-slate-500 mt-1">Thank you! We will contact you shortly.</p>
                </div>
              </div>
            )}
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <input type="hidden" name="_subject" value="New inquiry from Zentrixa website" />
              <input type="hidden" name="_captcha" value="false" />
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                <input type="text" name="name" required placeholder="John Doe" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input type="email" name="email" required placeholder="you@example.com" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Project Details</label>
                <textarea name="message" required rows={3} placeholder="Tell us what you need..." className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none resize-none"></textarea>
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full p-4 bg-linear-to-r from-[#2563eb] to-[#4f46e5] text-white rounded-xl font-bold hover:from-[#4f46e5] hover:to-[#2563eb] transition-all shadow-[0_10px_24px_rgba(37,99,235,0.25)] mt-2 disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}