import Image from "next/image";

// --- 1. CONFIGURATION (Edit this data) ---
const SITE_DATA = {
  name: "Cosmic Mirror",
  about:
    "Cosmic Mirror is your sacred space for spiritual guidance and self-discovery. Explore the wisdom of Tarot, personalized chart analysis, crystal healing, and holistic practices designed to align your mind, body, and soul. Whether you seek clarity, healing, or personal growth, Cosmic Mirror reflects your inner universe and helps you navigate life with insight and balance.",
  tagline: "Reflecting Your Destiny Through the Stars",
  whatsappNumber: "917357075785",
  aboutText:
    "At Cosmic Mirror, we are here to guide, heal, and uplift. I, Kaarthika Iyer, with Saroj, have been divinely guided since childhood, receiving spiritual downloads that inspire us to help others rise above darkness, negativity, and emotional struggles. Through Tarot, crystal healing, reiki healing and chart analysis, we channel universal and mystical energy to support every soul on their journey toward clarity, balance, and self-discovery. Our purpose is to reflect the universe within you, illuminate your path, and empower you to embrace your highest potential.",
};

const COURSES = [
  {
    id: 1,
    title: "Foundations of Vedic Astrology",
    price: "₹5,000",
    description:
      "Understand the basics of Kundli, Planets, and Rashis. Perfect for beginners.",
    duration: "4 Weeks",
  },
  {
    id: 2,
    title: "Advanced Predictive Techniques",
    price: "₹12,000",
    description:
      "Master the Dasha system and Transits to make accurate predictions.",
    duration: "8 Weeks",
  },
  {
    id: 3,
    title: "Nakshatra Mastery",
    price: "₹8,500",
    description:
      "Deep dive into the 27 Nakshatras and their psychological impacts.",
    duration: "6 Weeks",
  },
];

// --- 2. COMPONENTS ---

export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      {/* SECTION: HERO - TEXTURE BALANCED WITH READABILITY */}
      <section className="relative h-[80vh] flex items-center justify-center text-center px-4 overflow-hidden bg-[#FDFBF7]">
        {/* ---> BACKGROUND LAYER <--- */}
        <div className="absolute inset-0 z-0">
          {/* 1. The Texture: Low opacity, Grayscale. It acts like a watermark. */}
          <Image
            src="/cosmic-bg.jpg"
            alt="Cosmic texture"
            fill
            className="object-cover opacity-15 grayscale contrast-125"
            priority
          />

          {/* 2. The Spotlight Effect (Crucial): */}
          {/* This radial gradient makes the CENTER solid beige (clean for text) and fades to transparent at edges */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FDFBF7] via-[#FDFBF7]/80 to-transparent"></div>
        </div>

        {/* ---> CONTENT LAYER <--- */}
        <div className="relative z-10 max-w-4xl space-y-8 pt-10">
          {/* Top Tagline */}
          <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-[#8c7b6c] font-bold">
            Vedic Astrology & Education
          </p>

          {/* Main Title - Darkest Brown for Max Contrast */}
          <h1 className="font-serif text-5xl md:text-8xl text-[#2c241b] leading-tight tracking-tight">
            {SITE_DATA.name}
          </h1>

          {/* Subtitle - Medium Brown */}
          <p className="text-lg md:text-xl text-[#5d5448] font-light italic max-w-xl mx-auto">
            "{SITE_DATA.tagline}"
          </p>

          {/* Button */}
          <div className="pt-6">
            <a
              href={`https://wa.me/${SITE_DATA.whatsappNumber}`}
              target="_blank"
              className="inline-block bg-[#2c241b] text-[#FDFBF7] px-10 py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#4a3e31] transition-all border border-[#2c241b]"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </section>

      {/* SECTION: COURSES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-[#2c241b] mb-4">
            Our Courses
          </h2>
          <div className="h-1 w-20 bg-[#d4af37] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-[#e5e0d8] p-8 hover:shadow-lg transition-shadow rounded-sm flex flex-col"
            >
              <div className="text-xs font-bold text-[#8c7b6c] uppercase mb-2 tracking-wide">
                {course.duration}
              </div>
              <h3 className="font-serif text-2xl text-[#2c241b] mb-3">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-6 font-light leading-relaxed">
                {course.description}
              </p>
              <div className="flex items-center justify-between border-t border-[#f0ebe5] pt-4 mt-auto">
                <span className="font-serif text-xl">{course.price}</span>
                <a
                  href={`https://wa.me/${SITE_DATA.whatsappNumber}?text=I am interested in ${course.title}`}
                  target="_blank"
                  className="text-[#d4af37] font-bold hover:text-[#b08d26] uppercase text-xs tracking-widest"
                >
                  Enroll Now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: ABOUT */}
      <section className="py-20 bg-[#f4f1ea] px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Placeholder for Image - Add a real image in public/ folder later */}
          <div className="w-64 h-64 bg-[#e5e0d8] shrink-0 rounded-full overflow-hidden relative border-4 border-white shadow-md">
            <Image src="/profile.jpeg" fill className="object-cover object-center" alt="Profile" />
          </div>

          <div className="text-center md:text-left">
            <h2 className="font-serif text-3xl text-[#2c241b] mb-6">
              About Us
            </h2>
            <p className="text-lg text-[#5d5448] leading-relaxed font-light">
              {SITE_DATA.aboutText}
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2c241b] text-[#FDFBF7] py-12 text-center">
        <p className="font-serif text-2xl mb-4">{SITE_DATA.name}</p>
        <p className="text-sm opacity-60">© 2025 All rights reserved.</p>
      </footer>
    </main>
  );
}
