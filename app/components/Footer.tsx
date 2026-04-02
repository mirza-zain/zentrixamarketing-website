import { Zap } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-12 text-center text-slate-400">
        <div className="flex justify-center items-center gap-2 mb-4">
            <Zap className="h-6 w-6 text-indigo-500" />
            <span className="font-bold text-white text-xl">Zentrixa<span className="text-indigo-500">Marketing</span></span>
        </div>
        <p>&copy; {new Date().getFullYear()} Zentrixa Marketing. All rights reserved.</p>
      </footer>
  )
}

export default Footer
