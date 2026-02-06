import Link from "next/link";

const links = [
    { href: "/Nature", label: "Nature" },
    { href: "/Personal", label: "Personal", variant: "personal" },
    { href: "/Family", label: "Family" },
];

export default function Portfolio() {
    return (
        <div className="flex flex-col gap-5 justify-center items-center min-h-dvh bg-[url('./Images/eye-mobile.png')] md:bg-[url('./Images/eyes.png')] bg-white/20 bg-cover bg-no-repeat">
          {links.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              className={`
                ${
                  link.variant === "personal"
                    ? "px-12.5 py-5 border-3 border-stone text-stone-50 text-xl md:text-2xl  sm:text-stone-50 text-shadow-md/40 md:text-shadow-lg/60 bg-white/10 hover:bg-white/30 hover:ring-4 hover:ring-white/20"
                    : "px-15 py-5 border-3 border-stone text-stone-50 text-xl md:text-2xl sm:text-stone-50 text-shadow-md/40 md:text-shadow-lg/60 bg-white/10 hover:bg-white/30 hover:ring-4 hover:ring-white/20"
                }
            `}
            >
              {link.label}
            </Link>
          ))}
        </div>
    )
}