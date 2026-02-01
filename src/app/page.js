import Image from "next/image";
import Navigation from "./Components/Navigation/Navigation";

export default function Home() {
  return (
    <div className="bg-[url('./Images/goat-mobile.png')] bg-cover h-screen md:bg-[url('./Images/goats.png')] bg-center flex flex-col">
      <div className="flex flex-col space-y-120 md:space-y-0 h-full justify-center">
        <div className="flex flex-col w-full items-end p-5 text-shadow-lg">
          <h1 className="font-extrabold text-white text-4xl font-mono">Lens by Khaz</h1>
          <h2 className="text-white text-lg font-mono">Photography</h2>
        </div>
         <Navigation />
      </div>
   
    </div>
  );
}