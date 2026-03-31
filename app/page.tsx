import Link from "next/link";
import ServiceScreen from "./screens/ServiceScreen";
import PortfolioScreen from "./screens/PortfolioScreen";

export default function Home() {
  return (
    <>
      <div className="w-full h-full flex flex-col xl:flex-row justify-center items-center">
        <div className="w-full xl:w-1/2 flex flex-col items-left justify-center gap-6 mx-5 p-5">
          <div className="bg-indigo-50 md:w-2/5 lg:w-1/2 py-2 rounded-xl">
            <p className="text-base text-indigo-600 text-center font-medium">Welcome to Zentrixa Marketing 🚀</p>
          </div>
          <h2 className="xl:w-4/5 text-5xl lg:text-7xl font-bold">Bringing your creative <br /> <span className="text-indigo-600">visions to reality</span></h2> 
          <p className="w-full md:w-4/5 xl:w-11/12 text-base md:text-lg text-gray-500 text-justify">From professional Wikipedia page creation to stunning FanArts, Comic Books, and Animations. We provide a complete suite of creative and writing services to elevate your brand globally.</p>
          <div className="flex justify-left items-center gap-10">
            <button className="text-base md:text-lg px-4 md:px-8 py-4 md:py-6 bg-indigo-600 hover:bg-indigo-800 text-white font-medium rounded-xl"><Link href={'/'}>Start a Project</Link></button>
            <button className="text-base md:text-lg px-4 md:px-8 py-4 md:py-6 bg-indigo-50 hover:bg-indigo-200 text-indigo-600 font-medium rounded-xl"><Link href={'/'}>View Services</Link></button>
          </div>
        </div>
        <div className="w-2/5 h-screen xl:flex flex-col items-center justify-center pr-20 py-20 hidden">
            <div className="grid grid-cols-2 gap-5 w-full h-4/5 opacity-30">
              <div className="bg-indigo-500 rounded-tl-[100px] rounded-br-3xl animate-pulse"></div>
              <div className="bg-purple-500 rounded-tr-[100px] rounded-bl-3xl"></div>
              <div className="bg-blue-500 rounded-bl-[100px] rounded-tr-3xl"></div>
              <div className="bg-teal-500 rounded-br-[100px] rounded-tl-3xl animate-pulse delay-700"></div>
            </div>
        </div>
      </div>
      <ServiceScreen />
      <PortfolioScreen />
    </>
  );
}
