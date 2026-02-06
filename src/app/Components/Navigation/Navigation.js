import Link from "next/link";

export default function Navigation() {
    return (
        <div>
            <nav className="w-full flex sm:justify-end">
                <ul className="flex gap-5 text-stone-50 text-md md:text-xl text-shadow-md/60 md:text-shadow-lg/30 font-serif sm:p-5">
                  <Link
                  href="./Components/Navigation/Portfolio"
                  className="hover:text-shadow-lg/80"
                  ><li>Portfolio</li></Link>
                  <Link
                  href="./Components/Navigation/Sessions"
                  className=" hidden hover:text-shadow-lg/80"
                  ><li>Sessions</li></Link>
                  <Link
                  href="./Components/Navigation/About"
                  className="hover:text-shadow-lg/80"
                  ><li>About</li></Link>  
                  <Link
                  href="./Components/Navigation/Contact"
                  className="hover:text-shadow-lg/80"
                  ><li>Contact</li></Link>  
                </ul>
            </nav>
        </div>
    )
}