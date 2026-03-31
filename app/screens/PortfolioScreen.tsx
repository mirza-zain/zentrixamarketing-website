import { ArrowRight, ExternalLink } from 'lucide-react'
import accounts from '../components/data/portfolioArr'

export default function PortfolioScreen() {
  return (
    <div>
      <section id="accounts" className="snap-start min-h-screen py-20 bg-slate-900 text-white relative overflow-hidden flex items-center pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="md:flex md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                Our Global Network
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-slate-300">
                Explore our dedicated portfolios, verified reviews, and specialized accounts across different platforms.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accounts.map((acc, index) => (
              <a 
                key={index} 
                href={acc.link}
                className="group block p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition border border-slate-700 hover:border-indigo-400"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-slate-900 p-3 rounded-lg group-hover:bg-indigo-600 transition shadow-inner">
                    <ExternalLink className="w-6 h-6 text-slate-300 group-hover:text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1 text-white">{acc.name}</h3>
                <p className="text-indigo-300 text-sm flex items-center gap-2 font-medium">
                  {acc.role} <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0" />
                </p>
              </a>
            ))}
          </div>
        </div>
        
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-indigo-500 via-slate-900 to-slate-900"></div>
      </section>
    </div>
  )
}
