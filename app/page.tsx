import Image from "next/image";
import { Playfair_Display, Lato } from "next/font/google";

// --- FONTS ---
const playfair = Playfair_Display({ subsets: ["latin"] });
const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

// --- 1. CONFIGURATION ---
const SITE_DATA = {
  name: "Cosmic Mirror",
  tagline: "Reflecting Your Destiny Through the Stars",
  whatsappNumber: "447919557494",
  contactNumber: "+44 7919 557494",
  location: "Jaipur, Rajasthan",
  email: "contact@cosmicmirror.com",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
  aboutText:
    "At Cosmic Mirror, we are here to guide, heal, and uplift. I, Kaarthika Iyer, with Saroj, have been divinely guided since childhood, receiving spiritual downloads that inspire us to help others rise above darkness, negativity, and emotional struggles.",
  aboutSubText:
    "Through Tarot, crystal healing, reiki healing and chart analysis, we channel universal and mystical energy to support every soul on their journey toward clarity, balance, and self-discovery. Our purpose is to reflect the universe within you, illuminate your path, and empower you to embrace your highest potential.",
};

const COURSES = [
  {
    id: 1,
    title: "Vedic Foundations",
    price: "₹5,000",
    description:
      "A complete introduction to reading the language of the stars.",
    features: [
      "Planetary Positions & Meanings",
      "Understanding the 12 Houses",
      "Basic Kundli Reading",
      "Planetary Friendships",
    ],
    level: 1,
  },
  {
    id: 2,
    title: "Advanced Predictive",
    price: "₹12,000",
    description: "Master the art of timing events using the Dasha system.",
    features: [
      "Vimshottari Dasha System",
      "Transits (Gochar)",
      "Timing Marriage & Career",
      "Remedial Measures",
    ],
    level: 2,
  },
  {
    id: 3,
    title: "Nakshatra Mastery",
    price: "₹8,500",
    description: "Deep dive into the 27 Lunar Mansions and their psychology.",
    features: [
      "27 Nakshatras Detailed",
      "Padas & Deities",
      "Compatibility Matching",
      "Karmic Patterns",
    ],
    level: 3,
  },
];

// --- 2. ICONS (No external libraries needed) ---
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
};

export default function Home() {
  return (
    <main
      className={`min-h-screen bg-[#FDFBF7] text-[#1f1812] ${lato.className}`}
    >
      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#e5e0d8] px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span
            className={`md:text-lg lg:text-xl font-bold tracking-widest text-[#2c241b] whitespace-nowrap ${playfair.className}`}
          >
            COSMIC MIRROR
          </span>
          <div className="hidden md:flex space-x-8 text-sm font-bold tracking-widest uppercase text-[#8c7b6c]">
            <a href="#home" className="hover:text-[#d4af37] transition">
              Home
            </a>
            <a href="#about" className="hover:text-[#d4af37] transition">
              About
            </a>
            <a href="#courses" className="hover:text-[#d4af37] transition">
              Courses
            </a>
            <a href="#contact" className="hover:text-[#d4af37] transition">
              Contact
            </a>
          </div>
          <a
            href={`https://wa.me/${SITE_DATA.whatsappNumber}`}
            className="bg-[#2c241b] text-[#FDFBF7] px-5 py-2 rounded-sm text-xs uppercase tracking-widest hover:bg-[#4a3e31] whitespace-nowrap"
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section
        id="home"
        className="relative h-[85vh] min-h-135 flex items-center justify-center text-center px-4 overflow-hidden"
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#FDFBF7] via-[#FDFBF7]/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl space-y-6 pt-10 animate-fade-in-up">
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-[#8c7b6c] font-bold">
            Vedic Astrology & Education
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
              className="inline-block bg-[#2c241b] text-[#FDFBF7] px-10 py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#4a3e31] transition-all border border-[#2c241b]"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 px-6 bg-[#f7f4ef]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative h-125 border-4 border-white shadow-xl">
            {/* REPLACE WITH HER PHOTO */}
            <Image
              src="/profile.jpeg"
              fill
              className="object-cover grayscale-25 hover:grayscale-0 transition duration-700"
              alt="Founder"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#d4af37] -z-10"></div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 text-left space-y-6">
            <h2 className={`text-4xl text-[#2c241b] ${playfair.className}`}>
              About the Guide
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
                - {SITE_DATA.name}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- COURSES SECTION --- */}
      <section id="courses" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl text-[#2c241b] mb-4 ${playfair.className}`}>
            Our Courses
          </h2>
          <p className="text-[#8c7b6c] uppercase tracking-widest text-sm">
            Sacred Knowledge for the Modern Soul
          </p>
          <div className="h-1 w-20 bg-[#d4af37] mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-[#e5e0d8] p-8 hover:shadow-xl transition-shadow flex flex-col group"
            >
              <div className="text-xs font-bold text-[#d4af37] uppercase mb-4 tracking-wide border border-[#d4af37] inline-block px-3 py-1 w-max rounded-full">
                {`Level ${course.level}`}
              </div>
              <h3
                className={`text-2xl text-[#2c241b] mb-3 ${playfair.className} transition-colors`}
              >
                {course.title}
              </h3>
              <p className="text-gray-600 mb-6 font-light leading-relaxed text-sm">
                {course.description}
              </p>

              {/* Feature List */}
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

              <div className="mt-auto border-t border-[#f0ebe5] pt-6 flex items-center justify-between">
                <span
                  className={`text-2xl text-[#2c241b] ${playfair.className}`}
                >
                  {course.price}
                </span>
                <a
                  href={`https://wa.me/${SITE_DATA.whatsappNumber}?text=I am interested in ${course.title}`}
                  target="_blank"
                  className="text-[#1f1812] font-bold border-b-2 border-[#d4af37] hover:text-[#d4af37] pb-1 uppercase text-xs tracking-widest transition-colors"
                >
                  Enroll Now
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
          {/* Brand */}
          <div>
            <span
              className={`text-2xl font-bold tracking-widest ${playfair.className}`}
            >
              COSMIC MIRROR
            </span>
            <p className="text-[#8c7b6c] mt-4 text-sm leading-relaxed mb-6">
              Guiding you to the light of your own divine power through the
              wisdom of the stars.
            </p>

            {/* SOCIAL ICONS (Added Here) */}
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

          {/* Quick Links */}
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
              About
            </a>
            <a
              href="#courses"
              className="text-[#FDFBF7]/60 hover:text-white transition"
            >
              Courses
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#d4af37] font-bold uppercase tracking-widest text-sm mb-4">
              Contact
            </h4>
            <p className="text-[#FDFBF7]/80 mb-2">{SITE_DATA.location}</p>
            <p className="text-[#FDFBF7]/80 mb-2">{SITE_DATA.email}</p>
            <p className="text-[#FDFBF7]/80 mb-4">{SITE_DATA.contactNumber}</p>
            <a
              href={`https://wa.me/${SITE_DATA.whatsappNumber}`}
              className="text-[#d4af37] border-b border-[#d4af37] pb-1 hover:text-white transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-[#3e3025] text-[#8c7b6c] text-xs">
          © 2025 Cosmic Mirror. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
