import Image from "next/image";
import Navigation from "./Components/Navigation/Navigation";
import Socials from "./Components/Socials";

export default function Home() {
  return (
    <div className="bg-[url('./Images/goat-mobile.png')] bg-cover h-screen md:bg-[url('./Images/goats.png')] bg-center flex flex-col">
      <div className="flex flex-col space-y-120 sm:space-y-0 h-full justify-center">
        <div className="flex flex-col w-full items-end p-5 text-shadow-lg md:">
          <h1 className="font-extrabold text-white text-4xl font-mono">Lens by Khaz</h1>
          <h2 className="text-white text-lg font-sans font-light">Photography</h2>
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