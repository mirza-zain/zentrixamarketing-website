import { ExternalLink } from 'lucide-react'
import accounts from '../components/data/portfolioArr'

export default function PortfolioScreen() {
  return (
    <section id="network" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Our Global Network</h2>
            <p className="text-slate-500">Explore our verified portfolios across different platforms.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {accounts.map((acc, index) => (
              <a key={index} href={acc.link} className="group block p-6 sm:p-8 bg-slate-50 rounded-2xl hover:bg-slate-900 transition-colors border border-slate-200 w-full sm:w-80 mx-auto sm:mx-0">
                <ExternalLink className="w-8 h-8 text-slate-400 group-hover:text-white mb-6" />
                <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-white">{acc.name}</h3>
                <p className="text-indigo-600 group-hover:text-indigo-300 font-medium">{acc.role}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
  )
}
