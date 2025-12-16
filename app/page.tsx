import Image from "next/image";
import { Playfair_Display, Lato } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

const SITE_DATA = {
  name: "Cosmic Mirror",
  tagline: "Your Sacred Space for Spiritual Guidance & Self-Discovery",

  whatsappNumber: "447919557494",
  displayPhone: "+44 7919 557 494",

  location: "Online / Global",
  email: "contact@cosmicmirror.net",
  website: "www.cosmicmirror.net",

  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },

  aboutTitle: "Our Purpose",
  aboutText:
    "At Cosmic Mirror, we are here to guide, heal, and uplift. I, Kaarthika Iyer, with Saroj, have been divinely guided since childhood, receiving spiritual downloads that inspire us to help others rise above darkness, negativity, and emotional struggles.",
  aboutSubText:
    "Through Tarot, crystal healing, reiki healing, and chart analysis, we channel universal and mystical energy to support every soul on their journey toward clarity, balance, and self-discovery. Our purpose is to reflect the universe within you, illuminate your path, and empower you to embrace your highest potential.",
};

const COURSES = [
  {
    id: 1,
    title: "Chart Analysis",
    price: "Book Now",
    description:
      "Personalized reading of your celestial blueprint for clarity.",
    features: [
      "Birth Chart Interpretation",
      "Dasha & Transit Analysis",
      "Life Path Guidance",
      "Karmic Patterns",
    ],
    duration: "Consultation",
  },
  {
    id: 2,
    title: "Reiki & Crystal Healing",
    price: "Book Now",
    description: "Channeling universal energy to align mind, body, and soul.",
    features: [
      "Chakra Balancing",
      "Aura Cleansing",
      "Crystal Energy Work",
      "Emotional Healing",
    ],
    duration: "Session",
  },
  {
    id: 3,
    title: "Tarot Wisdom",
    price: "Book Now",
    description: "Divinely guided insights to navigate life's questions.",
    features: [
      "Past, Present, Future",
      "Relationship Clarity",
      "Spiritual Guidance",
      "Intuitive Downloads",
    ],
    duration: "Reading",
  },
];

const Icons = {
  Instagram: () => (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  Facebook: () => (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
    </svg>
  ),
  YouTube: () => (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
    </svg>
  ),
  WhatsApp: ({ className }: { className?: string }) => (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      className={className || "w-5 h-5"}
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  ),
  ArrowDown: () => (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      className="w-8 h-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  ),
};

export default function Home() {
  return (
    <main
      className={`min-h-screen bg-[#FDFBF7] text-[#1f1812] ${lato.className} relative`}
    >
      {/* --- FLOATING WHATSAPP BUTTON (FAB) --- */}
      <a
        href={`https://wa.me/${SITE_DATA.whatsappNumber}`}
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center animate-bounce-slow"
        aria-label="Chat on WhatsApp"
      >
        <Icons.WhatsApp className="w-8 h-8" />
      </a>

      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 z-40 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#e5e0d8] px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span
            className={`text-sm md:text-base lg:text-xl font-bold tracking-widest text-[#2c241b] ${playfair.className} whitespace-nowrap`}
          >
            COSMIC MIRROR
          </span>
          <div className="hidden md:flex space-x-8 text-sm font-bold tracking-widest uppercase text-[#8c7b6c]">
            <a href="#home" className="hover:text-[#d4af37] transition">
              Home
            </a>
            <a href="#about" className="hover:text-[#d4af37] transition">
              Purpose
            </a>
            <a href="#services" className="hover:text-[#d4af37] transition">
              Services
            </a>
            <a href="#contact" className="hover:text-[#d4af37] transition">
              Contact
            </a>
          </div>
          {/* Navbar WhatsApp Button */}
          <a
            href={`https://wa.me/${SITE_DATA.whatsappNumber}`}
            className="flex items-center gap-2 bg-[#2c241b] text-[#FDFBF7] px-5 py-2 rounded-sm text-xs uppercase tracking-widest hover:bg-[#4a3e31]"
          >
            <Icons.WhatsApp className="w-4 h-4" />
            <span className="whitespace-nowrap">Book Now</span>
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section
        id="home"
        className="relative h-[90vh] flex items-center justify-center text-center px-4 overflow-hidden"
      >
        {/* Background Texture */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/cosmic-bg.jpg"
            alt="Cosmic texture"
            fill
            className="object-cover opacity-15 grayscale contrast-125"
            priority
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FDFBF7] via-[#FDFBF7]/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl space-y-6 pt-10">
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-[#8c7b6c] font-bold">
            Guided by the Divine
          </p>
          <h1
            className={`text-5xl md:text-8xl text-[#2c241b] leading-tight tracking-tight ${playfair.className}`}
          >
            {SITE_DATA.name}
          </h1>
          <p className="text-lg md:text-xl text-[#5d5448] font-light italic max-w-xl mx-auto">
            "{SITE_DATA.tagline}"
          </p>
          <div className="pt-6">
            <a
              href={`https://wa.me/${SITE_DATA.whatsappNumber}`}
              target="_blank"
              className="inline-flex items-center gap-3 bg-[#2c241b] text-[#FDFBF7] px-10 py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#4a3e31] transition-all border border-[#2c241b]"
            >
              <Icons.WhatsApp className="w-4 h-4" />
              Start Your Journey
            </a>
          </div>
        </div>

        {/* --- SCROLL INDICATOR --- */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[#2c241b]/50">
          <a href="#about" className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest font-bold">
              Scroll Down
            </span>
            <Icons.ArrowDown />
          </a>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 px-6 bg-[#f7f4ef]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative h-[500px] border-4 border-white shadow-xl">
            <Image
              src="/profile.jpg"
              fill
              className="object-cover grayscale-25 hover:grayscale-0 transition duration-700"
              alt="Founder"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#d4af37] -z-10"></div>
          </div>
          <div className="w-full md:w-1/2 text-left space-y-6">
            <h2 className={`text-4xl text-[#2c241b] ${playfair.className}`}>
              {SITE_DATA.aboutTitle}
            </h2>
            <div className="h-1 w-20 bg-[#d4af37]"></div>
            <p className="text-lg text-[#5d5448] leading-relaxed font-light">
              {SITE_DATA.aboutText}
            </p>
            <p className="text-lg text-[#5d5448] leading-relaxed font-light">
              {SITE_DATA.aboutSubText}
            </p>
            <div className="pt-4">
              <span
                className={`text-2xl text-[#2c241b] italic ${playfair.className}`}
              >
                - Kaarthika & Saroj
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl text-[#2c241b] mb-4 ${playfair.className}`}>
            Our Offerings
          </h2>
          <p className="text-[#8c7b6c] uppercase tracking-widest text-sm">
            Tarot • Healing • Charts
          </p>
          <div className="h-1 w-20 bg-[#d4af37] mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-[#e5e0d8] p-8 hover:shadow-xl transition-shadow flex flex-col group"
            >
              <div className="text-xs font-bold text-[#d4af37] uppercase mb-4 tracking-wide border border-[#d4af37] inline-block px-3 py-1 w-max rounded-full">
                {course.duration}
              </div>
              <h3
                className={`text-2xl text-[#2c241b] mb-3 ${playfair.className} group-hover:text-[#d4af37] transition-colors`}
              >
                {course.title}
              </h3>
              <p className="text-gray-600 mb-6 font-light leading-relaxed text-sm">
                {course.description}
              </p>
              <ul className="mb-8 space-y-2">
                {course.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm text-[#5d5448]"
                  >
                    <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto border-t border-[#f0ebe5] pt-6 flex items-center justify-between mt-auto">
                <div></div>
                <a
                  href={`https://wa.me/${SITE_DATA.whatsappNumber}?text=I am interested in ${course.title}`}
                  target="_blank"
                  className="flex items-center gap-2 text-[#1f1812] font-bold border-b-2 border-[#d4af37] hover:text-[#d4af37] pb-1 uppercase text-xs tracking-widest transition-colors"
                >
                  <Icons.WhatsApp className="w-4 h-4" />
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER / CONTACT --- */}
      <footer
        id="contact"
        className="bg-[#1f1812] text-[#FDFBF7] py-16 border-t border-[#3e3025]"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <span
              className={`text-2xl font-bold tracking-widest ${playfair.className}`}
            >
              COSMIC MIRROR
            </span>
            <p className="text-[#8c7b6c] mt-4 text-sm leading-relaxed mb-6">
              Reflecting the universe within you, illuminating your path, and
              empowering you to embrace your highest potential.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href={SITE_DATA.socials.instagram}
                className="text-[#d4af37] hover:text-white transition transform hover:scale-110"
              >
                <Icons.Instagram />
              </a>
              <a
                href={SITE_DATA.socials.facebook}
                className="text-[#d4af37] hover:text-white transition transform hover:scale-110"
              >
                <Icons.Facebook />
              </a>
              <a
                href={SITE_DATA.socials.youtube}
                className="text-[#d4af37] hover:text-white transition transform hover:scale-110"
              >
                <Icons.YouTube />
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <h4 className="text-[#d4af37] font-bold uppercase tracking-widest text-sm mb-2">
              Explore
            </h4>
            <a
              href="#home"
              className="text-[#FDFBF7]/60 hover:text-white transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-[#FDFBF7]/60 hover:text-white transition"
            >
              Purpose
            </a>
            <a
              href="#services"
              className="text-[#FDFBF7]/60 hover:text-white transition"
            >
              Services
            </a>
          </div>
          <div>
            <h4 className="text-[#d4af37] font-bold uppercase tracking-widest text-sm mb-4">
              Contact
            </h4>
            <p className="text-[#FDFBF7]/80 mb-2">{SITE_DATA.location}</p>
            <p className="text-[#FDFBF7]/80 mb-2">{SITE_DATA.email}</p>
            <p className="text-[#FDFBF7]/80 mb-4">{SITE_DATA.displayPhone}</p>
            <a
              href={`https://wa.me/${SITE_DATA.whatsappNumber}`}
              className="flex items-center justify-center md:justify-start gap-2 text-[#d4af37] border-b border-[#d4af37] pb-1 hover:text-white transition"
            >
              <Icons.WhatsApp className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <div className="text-center mt-16 pt-8 border-t border-[#3e3025] text-[#8c7b6c] text-xs">
          © 2025 {SITE_DATA.name}. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
