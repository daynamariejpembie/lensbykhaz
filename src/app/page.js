import Image from "next/image";
import Navigation from "./Components/Navigation/Navigation";
import Socials from "./Components/Socials";

export default function Home() {
  return (
    <div className="bg-[url('./Images/goat-mobile.png')] bg-cover w-full sm:bg-[url('./Images/goats.png')] bg-center flex flex-col h-dvh">
      <div className="flex flex-col h-dvh">
        <div className="flex flex-col p-5 items-end text-shadow-lg">
          <h1 className="font-extrabold text-white text-4xl md:text-6xl font-mono">Lens by Khaz</h1>
          <h2 className="text-white text-lg md:text-3xl font-sans font-light text-shadow-md/60 md:text-shadow-md/40">Photography</h2>
        </div>
        <div className="hidden md:flex md:justify-end">
          <Navigation />
        </div>
        <div className="flex-1"></div>
        <div className="flex flex-col items-center mt-auto safe-bottom gap-4 md:hidden">
          <Navigation />
          <Socials />
        </div>
      </div>
      <div className="hidden w-full h-fit py-3 md:flex">
        <Socials />
      </div>
    </div>
  );
}