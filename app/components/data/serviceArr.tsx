import { BookOpen, Film, Globe, Palette } from "lucide-react";

  const writingIconImage = "https://cdn-icons-png.flaticon.com/512/3220/3220114.png";


const services = [
    {
      title: "Writing Services",
      description: "Professional and engaging content writing, copywriting, and creative storytelling tailored to your audience.",
      icon: <img src={writingIconImage} alt="Writing Services Icon" className="w-10 h-10 object-contain" />
    },
    {
      title: "FanArts",
      description: "High-quality, custom FanArt illustrations bringing your favorite characters and concepts to life.",
      icon: <Palette className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Comic Book",
      description: "Complete comic book creation from storyboarding and sketching to final inking and lettering.",
      icon: <BookOpen className="w-8 h-8 text-red-600" />
    },
    {
      title: "Animation",
      description: "Smooth, eye-catching 2D/3D animations for marketing, storytelling, or entertainment.",
      icon: <Film className="w-8 h-8 text-teal-600" />
    },
    {
      title: "Wikipedia Creation",
      description: "Drafting, editing, and publishing compliant and well-researched Wikipedia pages for notable subjects.",
      icon: <Globe className="w-8 h-8 text-indigo-600" />
    }
  ];

  export default services