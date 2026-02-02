import Link from "next/link";
import Image from "next/image";

export default function Socials() {
    return (
        <div className="flex space-x-1 w-full justify-center md:justify-end">
            <Link href="https://www.instagram.com/lens_bykhaz/" target="_blank">
              <Image 
              className="w-7 p-1"
              src="/ig.webp"
              width={50}
              height={50}
              alt="Instagram logo"
              />
            </Link>
            <Link href="https://www.tiktok.com/@lensbykhaz" target="_blank">
            <Image
              className="w-7 p-1"
              src="/tik-tok.webp"
              width={50}
              height={50}
              alt="TikTok logo"
            />
            </Link>
        </div>
    )
}