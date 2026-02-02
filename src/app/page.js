import Image from "next/image";
import Navigation from "./Components/Navigation/Navigation";
import Socials from "./Components/Socials";

export default function Home() {
  return (
    <div className="bg-[url('./Images/goat-mobile.png')] bg-cover h-screen w-screen sm:bg-[url('./Images/goats.png')] bg-center flex flex-col min-h-dvh">
      <div className="flex flex-col space-y-120 sm:space-y-0 h-full justify-center">
        <div className="flex flex-col w-full p-5 items-end text-shadow-lg">
          <h1 className="font-extrabold text-white text-4xl md:text-6xl font-mono">Lens by Khaz</h1>
          <h2 className="text-white text-lg md:text-3xl font-sans font-light text-shadow-md/30 md:text-shadow-md/60">Photography</h2>
        </div>
        <div className="hidden md:flex md:justify-end">
          <Navigation />
        </div>
        <div className="w-full h-full flex flex-col justify-end items-center align-center content-center p-5 md:hidden">
          <Navigation />
          <Socials />
        </div>
      </div>
      <div className="hidden w-full h-full py-3 md:flex md:justify-end md:items-end">
        <Socials />
      </div>
    </div>
  );
}