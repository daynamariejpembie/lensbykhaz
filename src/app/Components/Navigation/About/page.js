import Image from "next/image";
import shoot from "../../../Images/shoot.png";
import pose from "../../../Images/pose.png";
import examine from "../../../Images/examine.png";
import Navigation from "../Navigation";
import Link from "next/link";

export default function About() {
    return (
        <div className="flex w-full flex-col p-5 items-center bg-stone-200 min-h-dvh">
          <div className="flex gap-5 text-md md:text-xl text-shadow-md/20 font-serif sm:p-5">
            <Link href="/">Home</Link>
            <Link href="./Portfolio">Portfolio</Link>
            <Link href="./Contact">Contact</Link>
          </div>
          <Image src={pose} width={200} height={200} className="p-2 md:hidden" alt="Khasim Clarke Portrait 2" />
          <div className="md:grid grid-cols-3 gap-2 p-5 hidden">
            <Image src={shoot} width={200} height={200} alt="Khasim Clarke Portrait" />
            <Image src={pose} width={200} height={200} alt="Khasim Clarke Portrait 2" />
            <Image src={examine} width={200} height={200} alt="Khasim Clarke Portrait 2" />
          </div>
          <div className="flex flex-col p-10">
            <h1 className="text-center font-serif">Who is Lens by Khaz?</h1>
            <p className="font-serif py-5 text-center">Khasim Clarke is a Canadian photographer who captures life through a thoughtful 
               and intentional lens. His work is influenced by his Jamaican heritage and Canadian roots, 
               blending cultural perspective with a strong sense of storytelling. 
               
               Specializing in wildlife, portraits, and events, Khasim focuses on authentic moments—whether found in nature, 
               personal expression, or shared experiences. His goal is to create images that feel honest, 
               emotive, and timeless.
            </p>
          </div>
        </div>
    )
}