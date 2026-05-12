import Link from "next/link";
import { FaInstagram, FaFacebookF, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    return (
        <div>

    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-14 shadow-2xl">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide">
            Contact
          </h1>

          <p className="text-gray-300 mt-4 text-lg md:text-xl">
            Let’s create something timeless together.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Left Side */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Book a Session
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Available for portraits, lifestyle photography,
                family sessions, events, and creative shoots.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:your@email.com"
                className="flex items-center gap-4 text-lg hover:text-gray-300 transition"
              >
                <FaEnvelope />
                lensbykhaz@email.com
              </a>

              <a
                href="https://www.instagram.com/lens_bykhaz/"
                target="_blank"
                className="flex items-center gap-4 text-lg hover:text-gray-300 transition"
              >
                <FaInstagram />
                Instagram
              </a>
            </div>

            <div className="pt-6">
              <Link
                href="/"
                className="inline-block border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300"
              >
                Back Home
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <form className="space-y-5">
              <div>
                <label className="block mb-2 text-sm uppercase tracking-widest text-gray-400">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm uppercase tracking-widest text-gray-400">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm uppercase tracking-widest text-gray-400">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Tell me about your vision..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black font-semibold py-4 rounded-xl hover:bg-gray-200 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}