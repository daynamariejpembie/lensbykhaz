import Link from "next/link";

export default function Navigation() {
    return (
        <div>
            <nav className="w-full flex justify-center sm:justify-end">
                <ul className="flex gap-5 text-stone-50 text-md md:text-xl text-shadow-md/60 md:text-shadow-lg/80 font-serif sm:p-5">
                  <Link
                  href="./Portfolio"
                  className="hover:text-shadow-lg/80"
                  ><li>Portfolio</li></Link>
                  <Link
                  href="./Sessions"
                  className="hover:text-shadow-lg/80"
                  ><li>Sessions</li></Link>
                  <Link
                  href="./About"
                  className="hover:text-shadow-lg/80"
                  ><li>About</li></Link>  
                  <Link
                  href="./Contact"
                  className="hover:text-shadow-lg/80"
                  ><li>Contact</li></Link>  
                </ul>
            </nav>
        </div>
    )
}