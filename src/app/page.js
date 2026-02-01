import Image from "next/image";
import Navigation from "./Components/Navigation/Navigation";
import Socials from "./Components/Socials";

export default function Home() {
  return (
    <div className="bg-[url('./Images/goat-mobile.png')] bg-cover h-screen sm:bg-[url('./Images/goats.png')] bg-center flex flex-col">
      <div className="flex flex-col space-y-120 sm:space-y-0 h-full justify-center">
        <div className="flex flex-col w-full items-end p-5 text-shadow-lg">
          <h1 className="font-extrabold text-white text-4xl font-mono">Lens by Khaz</h1>
          <h2 className="text-white text-lg font-sans font-light">Photography</h2>
        </div>
         <Navigation />
      </div>
      <div className="w-full h-full py-3 flex items-end">
        <Socials />
      </div>
    </div>
  );
}