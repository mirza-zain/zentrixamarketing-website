import { Zap } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#020617] py-12 text-center text-slate-400">
        <div className="flex justify-center items-center gap-2 mb-4">
            <Zap className="h-7 w-7 text-blue-500" />
            <span className="font-bold text-white text-xl">Zentrixa<span className="bg-linear-to-r from-[#22d3ee] via-[#60a5fa] to-[#818cf8] bg-clip-text text-transparent">Marketing</span></span>
        </div>
        <p>&copy; {new Date().getFullYear()} Zentrixa Marketing. All rights reserved.</p>
      </footer>
  )
}

export default Footer
