import { BookOpen, Film, Globe, Palette, PenTool } from "lucide-react";


const services = [
    {
      title: "Writing Services",
      description: "Professional and engaging content writing, copywriting, and creative storytelling tailored to your audience.",
      gradient: "from-[#60a5fa] to-[#2563eb]",
      icon: <PenTool className="w-8 h-8 text-white" />
    },
    {
      title: "FanArts",
      description: "High-quality, custom FanArt illustrations bringing your favorite characters and concepts to life.",
      gradient: "from-[#818cf8] to-[#2563eb]",
      icon: <Palette className="w-8 h-8 text-white" />
    },
    {
      title: "Comic Book",
      description: "Complete comic book creation from storyboarding and sketching to final inking and lettering.",
      gradient: "from-[#f43f5e] to-[#dc2626]",
      icon: <BookOpen className="w-8 h-8 text-white" />
    },
    {
      title: "Animation",
      description: "Smooth, eye-catching 2D/3D animations for marketing, storytelling, or entertainment.",
      gradient: "from-[#2dd4bf] to-[#059669]",
      icon: <Film className="w-8 h-8 text-white" />
    },
    {
      title: "Wikipedia Creation",
      description: "Drafting, editing, and publishing compliant and well-researched Wikipedia pages for notable subjects.",
      gradient: "from-[#22d3ee] to-[#2563eb]",
      icon: <Globe className="w-8 h-8 text-white" />
    }
  ];

  export default services