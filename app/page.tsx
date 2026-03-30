import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex justify-between items-center">
        <div className="w-1/2 flex flex-col items-left justify-center gap-5 mx-5 p-5">
          <div className="bg-indigo-50 w-2/5 py-2 rounded-xl">
            <p className="text-indigo-600 text-center font-medium">Welcome to Zentrixa Marketing 🚀</p>
          </div>
          <h2 className="w-3/5 text-7xl font-bold text-left">Bringing your creative <br /> <span className="text-indigo-600">visions to reality</span></h2> 
          <p className="w-2/3 text-lg text-justify text-gray-500">From professional Wikipedia page creation to stunning FanArts, Comic Books, and Animations. We provide a complete suite of creative and writing services to elevate your brand globally.</p>
          <div className="flex justify-left items-center gap-10">
            <button className="text-lg px-8 py-6 bg-indigo-600 hover:bg-indigo-800 text-white font-medium rounded-xl"><Link href={'/'}>Start a Project</Link></button>
            <button className="text-lg px-8 py-6 bg-indigo-50 hover:bg-indigo-200 text-indigo-600 font-medium rounded-xl"><Link href={'/'}>View Services</Link></button>
          </div>
        </div>
        <div className="w-2/5 h-screen bg-indigo-50 flex flex-col items-center justify-center pr-20 py-20">
            <div className="grid grid-cols-2 gap-5 w-full h-4/5 opacity-30">
              <div className="bg-indigo-500 rounded-tl-[100px] rounded-br-3xl animate-pulse"></div>
              <div className="bg-purple-500 rounded-tr-[100px] rounded-bl-3xl"></div>
              <div className="bg-blue-500 rounded-bl-[100px] rounded-tr-3xl"></div>
              <div className="bg-teal-500 rounded-br-[100px] rounded-tl-3xl animate-pulse delay-700"></div>
            </div>
        </div>
      </div>
    </>
  );
}
