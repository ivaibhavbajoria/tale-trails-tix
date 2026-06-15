import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { NavBar, MobileMenu } from "../components/NavBar";
import {
  MapPin,
  Compass,
  Camera,
  ArrowLeft,
  ArrowRight,
  Instagram,
  Youtube,
  Heart,
  MessageCircle,
  Mail,
  Globe,
  Ticket,
  Send,
  Menu,
  X,
  ChevronRight,
  Pin,
} from "lucide-react";

import heroMountains from "@/assets/hero-mountains.jpg";
import heroCollage from "@/assets/hero-collage.jpg";
import journal from "@/assets/journal.jpg";
import storyBg from "@/assets/story-bg.png";
import storiesBg from "@/assets/stories-bg.jpg";
import footerBg from "@/assets/footer-bg.png";
import destHimalayas from "@/assets/dest-himalayas.jpg";
import destSantorini from "@/assets/dest-santorini.jpg";
import destBali from "@/assets/dest-bali.jpg";
import destSahara from "@/assets/dest-sahara.jpg";
import destIceland from "@/assets/dest-iceland.jpg";
import destKyoto from "@/assets/dest-kyoto.jpg";
import journeysBg from "@/assets/journeys-bg.jpg";
import storyNotebook from "@/assets/story-notebook.jpg";
import indiaMap from "@/assets/india-map.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tix to Trails N Tales — Where every journey becomes a story" },
      {
        name: "description",
        content:
          "A cinematic travel journal of tickets, trails and tales — destinations, stories and routes from around the world.",
      },
      { property: "og:title", content: "Tix to Trails N Tales" },
      {
        property: "og:description",
        content: "Tickets. Trails. Tales. A cinematic travel storytelling journal.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://tixtotrailsntales.com/" },
    ],
    links: [{ rel: "canonical", href: "https://tixtotrailsntales.com/" }],
  }),
  component: Index,
});

const destinations = [
  {
    name: "Swiss Alps",
    region: "Switzerland",
    image: destHimalayas,
    tagline: "Glaciers, rails, and valleys of emerald green.",
    index: "01",
  },
  {
    name: "Bali Bliss",
    region: "Indonesia",
    image: destBali,
    tagline: "Rice terraces stitched in liquid gold.",
    index: "02",
  },
  {
    name: "Rajasthan Roads",
    region: "India",
    image: destSahara,
    tagline: "Sandstone cities singing stories of empires.",
    index: "03",
  },
  {
    name: "Santorini",
    region: "Greece",
    image: destSantorini,
    tagline: "Cobalt domes meeting the infinite blue.",
    index: "04",
  },
  {
    name: "Icelandic Auroras",
    region: "Iceland",
    image: destIceland,
    tagline: "Dancing green lights over frozen black sands.",
    index: "05",
  },
  {
    name: "Kyoto Bamboo",
    region: "Japan",
    image: destKyoto,
    tagline: "Walking the whispering paths of history.",
    index: "06",
  },
];

const mapLocations = [
  {
    id: 1,
    x: "51.5%",
    y: "14.5%",
    name: "Kashmir",
    text: "Chasing autumn gold in the valleys of Srinagar. Shikara rides and warm kahwa.",
    image:
      "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    x: "53.0%",
    y: "18.0%",
    name: "Chandrataal",
    text: "Camping at 14,000 feet. The Moon Lake reflecting a million stars of the Milky Way.",
    image:
      "https://images.unsplash.com/photo-1615966616041-bc97e2e53c2a?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    x: "53.5%",
    y: "21.0%",
    name: "Jibhi",
    text: "Wooden cottages, whispering pine trees, and fresh trout. Himachal's best kept secret.",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    x: "45.0%",
    y: "32.5%",
    name: "Rajasthan",
    text: "Forts, desert caravan tunes, and royal heritage of Rajasthan.",
    image: destSahara,
  },
  {
    id: 5,
    x: "47.5%",
    y: "59.0%",
    name: "Goa",
    text: "Golden sands, whispering palms, and endless tides. Off-grid beaches and sunset vibes.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    x: "53.5%",
    y: "80.0%",
    name: "Sri Lanka",
    text: "Train rides through emerald tea estates and surfing on coastal breaks.",
    image:
      "https://images.unsplash.com/photo-1546708973-b339540b5162?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 7,
    x: "66.5%",
    y: "33.0%",
    name: "Meghalaya",
    text: "Walking on root bridges created by nature. Rain-washed hills of Cherrapunji.",
    image:
      "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 8,
    x: "80.5%",
    y: "60.5%",
    name: "Songkran (Thailand)",
    text: "Laughter, music, and water fights in the streets of Bangkok celebrating Thai New Year.",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 9,
    x: "88.0%",
    y: "52.0%",
    name: "Vietnam",
    text: "Cruising through the emerald giants of Ha Long Bay and lantern nights in Hoi An.",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: 10,
    x: "92.5%",
    y: "84.5%",
    name: "Bali",
    text: "Ubud rice terraces stitched in liquid gold. Sunsets over sea temples and volcano hikes.",
    image: destBali,
  },
];

const tales = [
  {
    chapter: "Chapter 01",
    category: "Adventures",
    title: "The Campfire Conversations",
    excerpt:
      "Nights that turned into stories we'll never forget. Under a canopy of a thousand stars, with the crackle of pine logs and the scent of wild cardamom tea.",
    place: "Swiss Alps",
    image: destHimalayas,
  },
  {
    chapter: "Chapter 02",
    category: "Culture",
    title: "Colors of Rajasthan",
    excerpt:
      "Streets, traditions, and smiles around every corner. We followed the echoes of folk strings into a courtyard where sunset was being painted onto sandstone.",
    place: "Rajasthan, India",
    image: destSahara,
  },
  {
    chapter: "Chapter 03",
    category: "Hidden Gems",
    title: "A Secret Place in Vietnam",
    excerpt:
      "Some places don't need a name, just a feeling. A hidden lagoon accessible only through a cave at low tide, where water drips like liquid emeralds.",
    place: "Ninh Binh, Vietnam",
    image: destBali,
  },
  {
    chapter: "Chapter 04",
    category: "Personal",
    title: "Postcards I Forgot to Send",
    excerpt:
      "I bought seventeen postcards in Lisbon and mailed none of them. They live in a tin box now — small, salt-stained windows into a summer I'm still unpacking.",
    place: "Lisbon, Portugal",
    image: destIceland,
  },
  {
    chapter: "Chapter 05",
    category: "Adventures",
    title: "Walking the Bamboo Forest",
    excerpt:
      "A cathedral grown from bamboo. The wind creates a deep woodwind chorus, and the green light filters through like dust in a forgotten attic.",
    place: "Arashiyama, Kyoto",
    image: destKyoto,
  },
];

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash;
      setTimeout(() => {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-dark-forest text-foreground select-none">
      <NavBar onMenuToggle={() => setMobileMenuOpen(true)} />
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <Hero />

      {/* Torn Edge Split Transition to Dark Green Story Section */}
      <div
        className="relative z-20 -mt-16 clip-torn-top pb-24 pt-24 bg-[#0d1410]"
        style={{
          backgroundImage: `url(${storyBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <BrandStory />
      </div>

      {/* Torn Edge Transition to Parchment for Featured Journeys */}
      <div
        className="relative z-20 -mt-10 clip-torn-top pb-28 pt-24 bg-[#f3ebd9]"
        style={{
          backgroundImage: `url(${journeysBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <FeaturedJourneys />
      </div>

      {/* Torn Edge Transition to Dark Forest for Trails Map */}
      <div className="relative z-20 -mt-10 bg-dark-forest clip-torn-top w-full">
        <TrailsMap />
      </div>

      {/* Torn Edge Transition to Parchment */}
      <div
        className="relative z-20 -mt-10 clip-torn-top pb-32 pt-28"
        style={{
          backgroundImage: `url(${storiesBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <TalesSection />
      </div>

      {/* Torn Edge Transition to Footer */}
      <div className="relative z-20 -mt-10 bg-dark-forest clip-torn-top pt-28">
        <Footer />
      </div>
    </div>
  );
}
function useChromakey(imageSrc: string, threshold = 18) {
  const [processedSrc, setProcessedSrc] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);
      try {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          if (r < threshold && g < threshold && b < threshold) {
            data[i + 3] = 0; // Set alpha to transparent
          }
        }
        ctx.putImageData(imageData, 0, 0);
        setProcessedSrc(canvas.toDataURL("image/png"));
      } catch (err) {
        console.error("Chromakey processing failed:", err);
      }
    };
  }, [imageSrc, threshold]);

  return processedSrc || imageSrc;
}

/* --------------------------------- Hero -------------------------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const processedCollage = useChromakey(heroCollage, 18);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 0, y: 0 });
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-[115vh] w-full flex-col justify-center overflow-hidden bg-dark-forest px-6 pb-24 pt-28 md:px-12 lg:px-24"
    >
      {/* Background Graphic elements */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroMountains}
          alt="Misty mountain trails at sunset"
          className="h-full w-full object-cover opacity-80"
        />
        {/* Horizontal gradient to provide contrast for the left side text, leaving the right side sunset bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />
        {/* Subtle vertical vignette at the very top and bottom to blend with headers and section transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
        {/* Hero Left Content */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.35em] text-sunset font-semibold mb-4"
          >
            Welcome to the Journey
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            Tickets.
            <br />
            <span className="text-gold">Trails.</span>
            <br />
            Tales.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-script text-3xl md:text-4xl text-white/90 mt-6 leading-relaxed"
          >
            Where every journey{" "}
            <span className="text-sunset italic border-b border-dashed border-sunset">becomes</span>{" "}
            a story.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#stories"
              className="rounded-full bg-sunset px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              Explore Stories <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#journeys"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 hover:border-gold hover:text-gold hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <MapPin className="h-4 w-4" /> View Destinations
            </a>
            <a
              href="https://instagram.com/tixtotrailsntales"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white/80 transition hover:border-sunset hover:text-sunset hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Instagram className="h-4 w-4" /> Follow on Instagram
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/40"
          >
            <span className="h-px w-8 bg-white/20" />
            <span>Scroll to Explore</span>
            <span className="animate-bounce inline-block">↓</span>
          </motion.div>
        </div>

        {/* Hero Right Collage with 3D Parallax */}
        <div className="lg:col-span-6 relative flex h-[620px] w-full items-end justify-center lg:justify-end -translate-y-4 lg:translate-y-8">
          <motion.div
            style={{
              rotateX: coords.y * 12,
              rotateY: coords.x * 15,
              transformStyle: "preserve-3d",
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative z-10 w-full max-w-[500px] cursor-pointer"
          >
            <img
              src={processedCollage}
              alt="Tix to Trails N Tales collage"
              className="w-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Brand Story ----------------------------- */
function BrandStory() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 0, y: 0 });
  };

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
        {/* Left story text */}
        <div className="lg:col-span-6 flex flex-col text-left">
          <span className="text-xs uppercase tracking-[0.35em] text-sunset font-semibold">
            Our Story
          </span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            More than travel.
            <br />
            <span className="text-gold">It's a way of feeling.</span>
          </h2>
          <p className="mt-6 text-white/80 text-base leading-relaxed">
            We are wanderers, storytellers, and memory collectors. Through tickets, trails, and
            tales, we find places that change us and stories that stay forever. We don't believe in
            checking off boxes or chasing tourist spots. We believe in getting lost in courtyards,
            sharing maps with strangers, and noting down weather in our notebooks.
          </p>

          <p className="font-script text-3xl text-sunset/90 mt-8 leading-relaxed">
            Different places. Real stories. <br />
            Stories that feel like you were there.
          </p>

          <div className="mt-8">
            <a
              href="#stories"
              className="inline-flex items-center gap-3 rounded-full bg-sunset hover:bg-sunset/90 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 active:scale-95 shadow-md"
            >
              Read Our Story <ArrowRight className="h-4 w-4 text-white" />
            </a>
          </div>
        </div>

        {/* Right Notebook Collage Image with Parallax */}
        <div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="lg:col-span-6 flex justify-center perspective-1000"
        >
          <motion.div
            style={{
              rotateX: coords.y * 10,
              rotateY: coords.x * 12,
              transformStyle: "preserve-3d",
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative w-full max-w-[500px] overflow-hidden rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] border border-white/10 group cursor-pointer"
          >
            <img
              src={storyNotebook}
              alt="Tix to Trails N Tales journal collage"
              className="w-full h-auto object-cover transition duration-700 group-hover:scale-[1.03]"
            />

            {/* Subtle glow highlight on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Featured Journeys ----------------------- */
function FeaturedJourneys() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);
  const totalCards = destinations.length;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(4);
      } else if (window.innerWidth >= 640) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlide = Math.max(0, totalCards - cardsToShow);
  const currentSlide = Math.min(activeSlide, maxSlide);

  const slideLeft = () => {
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : maxSlide));
  };

  const slideRight = () => {
    setActiveSlide((prev) => (prev < maxSlide ? prev + 1 : 0));
  };

  const translateStyle =
    cardsToShow === 4
      ? `translateX(calc(-${currentSlide * 25}% - ${currentSlide * 6}px))`
      : cardsToShow === 2
        ? `translateX(calc(-${currentSlide * 50}% - ${currentSlide * 12}px))`
        : `translateX(calc(-${currentSlide * 100}% - ${currentSlide * 24}px))`;

  return (
    <section id="journeys" className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#dfd8c8] pb-6 mb-12">
        <div className="text-left">
          <span className="text-xs uppercase tracking-[0.35em] text-sunset font-semibold">
            Featured Journeys
          </span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-[#2c251f] sm:text-5xl">
            Places that stay with you forever.
          </h2>
        </div>
        <div className="mt-6 md:mt-0 flex items-center gap-6">
          <a
            href="#journeys"
            className="group flex items-center gap-2 text-sm font-semibold text-[#605245] hover:text-[#2c251f] transition"
          >
            View all journeys
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sunset text-white transition-transform duration-300 group-hover:translate-x-1">
              <ChevronRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>

      {/* Slide Container Wrapper */}
      <div className="relative px-2">
        {/* Slider Controls - Overlapping circular buttons */}
        <button
          onClick={slideLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-[#dfd8c8] bg-white text-[#2c251f] shadow-md transition hover:bg-sunset hover:text-white hover:border-sunset active:scale-95 cursor-pointer"
          aria-label="Previous slide"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          onClick={slideRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-[#dfd8c8] bg-white text-[#2c251f] shadow-md transition hover:bg-sunset hover:text-white hover:border-sunset active:scale-95 cursor-pointer"
          aria-label="Next slide"
        >
          <ArrowRight className="h-5 w-5" />
        </button>

        <div className="overflow-hidden py-4 px-2">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: translateStyle }}
          >
            {destinations.map((dest, i) => (
              <div
                key={dest.name}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0"
              >
                <DestinationCard {...dest} isActive={activeSlide === i} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-1.5">
        {destinations.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            className={`h-2 rounded-full transition-all duration-300 ${activeSlide === i ? "w-6 bg-sunset" : "w-2 bg-[#dfd8c8]"}`}
          />
        ))}
      </div>
    </section>
  );
}

function DestinationCard({
  name,
  region,
  image,
}: (typeof destinations)[number] & { isActive: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--rx", `${-y * 14}deg`);
    el.style.setProperty("--ry", `${x * 16}deg`);
    el.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  };

  const handleLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  };

  return (
    <div className="perspective-1000 w-full relative group">
      {/* Stack Background Page 3 (lowest layer, offset and rotated) */}
      <div className="absolute inset-0 rounded-2xl bg-[#0f1712]/30 border border-black/10 transform translate-x-2 translate-y-2 rotate-2 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3 group-hover:rotate-3" />

      {/* Stack Background Page 2 (middle layer, offset and rotated opposite) */}
      <div className="absolute inset-0 rounded-2xl bg-[#0f1712]/50 border border-black/10 transform translate-x-1 translate-y-1 -rotate-1 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5 group-hover:-rotate-2" />

      {/* Main Card (top layer) */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleLeave}
        className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-black/15 bg-[#0f1712] shadow-card transition-all duration-300 preserve-3d will-change-transform cursor-pointer"
        style={{
          transform: "rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))",
        }}
      >
        <img
          src={image}
          alt={`${name}, ${region}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090e0b]/90 via-[#0d1410]/20 to-transparent" />

        {/* Glow highlight */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(350px circle at var(--mx,50%) var(--my,50%), rgba(212,175,55,0.18), transparent 75%)",
          }}
        />

        {/* Postcard Details matching screenshot */}
        <div className="absolute inset-x-0 bottom-0 p-5 flex items-center justify-between text-left">
          <div className="flex flex-col text-white">
            <div className="flex items-center gap-1 font-display text-lg md:text-xl font-medium tracking-wide">
              <MapPin className="h-4 w-4 text-gold shrink-0" />
              <span>{name}</span>
            </div>
            <span className="text-xs text-white/70 pl-5 font-sans mt-0.5">{region}</span>
          </div>

          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-black shadow-md transition hover:bg-sunset hover:text-white shrink-0">
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Trails Map ----------------------------- */
function TrailsMap() {
  const [activePin, setActivePin] = useState<number | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<(typeof mapLocations)[number] | null>(
    null,
  );

  return (
    <section id="map" className="w-full relative">
      {/* Mobile Title Panel */}
      <div className="text-left mb-8 px-6 md:px-12 lg:hidden">
        <span className="text-xs uppercase tracking-[0.35em] text-sunset font-semibold">
          Travel Map
        </span>
        <h2 className="mt-2 font-display text-3xl leading-tight text-white font-semibold">
          Every dot has a story.
        </h2>
        <p className="mt-3 text-white/60 font-sans text-xs leading-relaxed">
          From valleys and cities to coastlines and peaks – each place has a tale we carry in our
          hearts. Tap the glowing markers to view our trails.
        </p>
      </div>

      {/* Container holding both text overlay and full-screen map pins */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2 }}
        className="relative overflow-hidden aspect-[16/9] w-full bg-[#0c1410]"
      >
        {/* Background Image of India Relief Map */}
        <img
          src={indiaMap}
          alt="Shaded relief map of India"
          className="absolute inset-0 h-full w-full object-cover opacity-80 filter brightness-95"
        />
        {/* Vignette Gradients for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent lg:block hidden pointer-events-none z-10" />
        <div className="absolute inset-0 bg-black/40 lg:hidden block pointer-events-none z-10" />

        {/* Inner Centered Content Wrapper for Text Overlay (Desktop Only) */}
        <div className="absolute inset-0 pointer-events-none z-20 hidden lg:block">
          <div className="mx-auto w-full max-w-7xl h-full relative px-6 md:px-12 lg:px-24">
            {/* Left Text Overlay */}
            <div className="absolute left-6 md:left-12 lg:left-24 top-1/2 -translate-y-1/2 w-[34%] text-left">
              <div className="pointer-events-auto">
                <span className="text-xs uppercase tracking-[0.4em] text-gold font-bold mb-3 block">
                  TRAVEL MAP
                </span>
                <h2 className="font-display text-4xl lg:text-5xl leading-[1.15] text-white font-semibold">
                  Every dot
                  <br /> has a story.
                </h2>
                <p className="mt-5 text-white/70 font-sans text-xs md:text-sm leading-relaxed max-w-sm">
                  From valleys and cities to coastlines and peaks – each place has a tale we carry
                  in our hearts. Click the glowing markers to view our trails.
                </p>
                <div className="mt-8">
                  <a
                    href="#stories"
                    className="inline-flex rounded-full border border-gold/40 hover:border-gold bg-black/40 hover:bg-black/60 text-gold px-6 py-3 text-xs font-semibold tracking-wider uppercase transition hover:scale-105 active:scale-95 items-center gap-2 animate-pulse"
                  >
                    Read Stories <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Screen Map Pins & Paths Area */}
        <div className="absolute inset-0 w-full h-full z-20">
          {/* Animated Dashed Routes SVG */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1600 900"
            preserveAspectRatio="none"
          >
            {/* Northern Trail */}
            <path
              d="M 824,130 L 848,162 L 856,189 Q 780,240 720,292.5 Q 740,410 760,531 Q 808,625 856,720"
              fill="none"
              stroke="rgba(212,175,55,0.75)"
              strokeWidth="3"
              strokeDasharray="6 8"
              className="animate-trail"
            />
            {/* Eastern Trail */}
            <path
              d="M 720,292.5 Q 892,280 1064,297 Q 1236,360 1408,468 Q 1348,506 1288,544.5 Q 1384,652 1480,760.5"
              fill="none"
              stroke="rgba(224,107,58,0.65)"
              strokeWidth="2"
              strokeDasharray="6 8"
              className="animate-trail"
              style={{ animationDelay: "-4s" }}
            />
            {/* Sri Lanka to Bali Link */}
            <path
              d="M 856,720 Q 1168,800 1480,760.5"
              fill="none"
              stroke="rgba(212,175,55,0.5)"
              strokeWidth="1.5"
              strokeDasharray="5 7"
              className="animate-trail"
              style={{ animationDelay: "-2s" }}
            />
          </svg>

          {/* Pulsing Pin Nodes */}
          {mapLocations.map((pin) => (
            <div
              key={pin.id}
              className="absolute z-30 cursor-pointer"
              style={{ left: pin.x, top: pin.y }}
              onMouseEnter={() => setActivePin(pin.id)}
              onMouseLeave={() => setActivePin(null)}
              onClick={() => setSelectedLocation(pin)}
            >
              <div className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
                {/* Pulse Ring */}
                <span className="absolute inline-flex h-8 w-8 animate-ping rounded-full bg-gold/40 opacity-80" />

                {/* Core Pin */}
                <button
                  className={`relative z-10 flex h-5 w-5 items-center justify-center rounded-full shadow-lg border border-black/35 transition-all duration-300 ${
                    activePin === pin.id || selectedLocation?.id === pin.id
                      ? "bg-sunset scale-110 shadow-[0_0_15px_#dfa553]"
                      : "bg-gold"
                  }`}
                >
                  <span className="h-2 w-2 rounded-full bg-white" />
                </button>

                {/* Desktop hover label */}
                <AnimatePresence>
                  {activePin === pin.id && !selectedLocation && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 5 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 5 }}
                      className="absolute bottom-full mb-2 bg-[#090f0b]/90 border border-gold/20 text-gold text-[10px] font-bold tracking-wider px-2.5 py-1 rounded shadow-md whitespace-nowrap z-40"
                    >
                      {pin.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}

          {/* Polaroid Modal Popup Overlay inside the map card */}
          <AnimatePresence>
            {selectedLocation && (
              <div
                className="absolute inset-0 z-40 bg-black/45 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
                onClick={() => setSelectedLocation(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, rotate: -3, y: 15 }}
                  animate={{ opacity: 1, scale: 1, rotate: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, rotate: -3, y: 15 }}
                  className="relative w-full max-w-[320px] bg-[#faf8f4] border border-[#e3dccb] shadow-[0_30px_60px_rgba(0,0,0,0.5)] p-4 pb-6 rounded-sm text-left flex flex-col cursor-default"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button X */}
                  <button
                    onClick={() => setSelectedLocation(null)}
                    className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-[#202d24] border border-gold/30 hover:bg-sunset hover:border-sunset text-gold hover:text-white flex items-center justify-center transition shadow-md z-50 cursor-pointer"
                    aria-label="Close popup"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  {/* Polaroid Image Slot */}
                  <div className="relative aspect-square w-full bg-gray-200 border border-black/5 overflow-hidden shadow-inner">
                    <img
                      src={selectedLocation.image}
                      alt={selectedLocation.name}
                      className="h-full w-full object-cover grayscale-[8%] hover:grayscale-0 transition duration-500"
                    />
                  </div>

                  {/* Polaroid Written Info */}
                  <div className="mt-4 flex flex-col font-sans">
                    <div className="flex items-center gap-1 text-[10px] font-bold text-sunset uppercase tracking-widest">
                      <MapPin className="h-3 w-3 text-sunset shrink-0" />
                      <span>{selectedLocation.name}</span>
                    </div>
                    <p className="font-script text-lg text-[#3e342a] leading-relaxed mt-2 pl-1 h-[70px] overflow-y-auto">
                      {selectedLocation.text}
                    </p>
                  </div>

                  {/* Instagram Button */}
                  <div className="mt-4 pt-3 border-t border-dashed border-[#e3dccb] flex justify-center">
                    <a
                      href="https://instagram.com/tixtotrailsntales"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white px-4 py-2.5 text-xs font-semibold shadow-md transition hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                    >
                      <Instagram className="h-4 w-4 text-white" />
                      <span>View Instagram Profile</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

/* -------------------------------- Tales -------------------------------- */
function TalesSection() {
  const categories = ["All", "Adventures", "Culture", "Hidden Gems", "Personal"];
  const [activeTab, setActiveTab] = useState("All");

  const filteredTales = tales.filter((t) => activeTab === "All" || t.category === activeTab);

  return (
    <section id="stories" className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0 }}
        className="relative w-full overflow-hidden"
      >
        {/* Header Overlay */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pl-4 pr-4 relative z-10">
          <div className="text-left">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#605245] font-bold">
              TALES & STORIES
            </span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl text-[#2a241f] font-semibold">
              Stories from the road.
            </h2>
          </div>
          <a
            href="https://instagram.com/tixtotrailsntales"
            target="_blank"
            rel="noreferrer"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-semibold text-[#8b5a2b] hover:text-[#b87333] transition"
          >
            View all stories <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pl-4 relative z-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider transition duration-300 ${
                activeTab === cat
                  ? "bg-[#cfc4ac] text-[#2a241f] shadow-sm"
                  : "text-[#605245] hover:bg-[#cfc4ac]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Stories list - Combined into a single wide landscape notebook */}
        <div className="relative z-10 w-full bg-[#fcf9f2] border border-[#dcd2ba] rounded-2xl shadow-[0_15px_35px_rgba(40,32,24,0.15)] flex overflow-x-auto lg:overflow-x-auto snap-x snap-mandatory scrollbar-none divide-x divide-[#dcd2ba]/40">
          <AnimatePresence mode="popLayout">
            {filteredTales.map((tale, i) => (
              <motion.div
                key={tale.title}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="w-[88%] sm:w-[60%] md:w-[45%] lg:w-[33.33%] min-w-[340px] max-w-[380px] shrink-0 snap-start"
              >
                <StoryJournalCard tale={tale} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

function StoryJournalCard({ tale }: { tale: (typeof tales)[number] }) {
  return (
    <div className="relative p-4 pl-10 pr-8 flex items-stretch gap-4 min-h-[200px] sm:min-h-[220px] h-full transition duration-300 group">
      {/* Spiral Binder Rings */}
      <div className="absolute left-0 top-3 bottom-3 w-4 flex flex-col justify-between items-center pointer-events-none z-30">
        {Array.from({ length: 12 }).map((_, idx) => (
          <div key={idx} className="relative flex items-center justify-center w-full">
            {/* Paper Hole */}
            <div className="w-1 h-2 rounded-full bg-[#1b1510]/25 shadow-inner mr-1" />
            {/* Metal Ring */}
            <div className="absolute left-[-5px] w-5 h-1.5 rounded-full border border-black/40 bg-gradient-to-b from-zinc-600 via-zinc-800 to-black shadow-[1px_1px_2px_rgba(0,0,0,0.35)]" />
          </div>
        ))}
      </div>

      {/* Left side: Photo */}
      <div className="w-24 sm:w-28 shrink-0 rounded-xl overflow-hidden shadow-sm aspect-[3/4]">
        <img
          src={tale.image}
          alt={tale.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Right side: Story info */}
      <div className="flex-1 flex flex-col justify-between py-0.5 text-left">
        <div>
          <span className="inline-block px-2 py-0.5 rounded text-[8px] font-extrabold tracking-wider bg-[#eae0cb] text-[#695c46] border border-[#cfc4ac]/50">
            {tale.category.toUpperCase()}
          </span>
          <h3 className="font-display text-sm sm:text-base font-bold text-[#2a241f] leading-snug mt-2 line-clamp-2 group-hover:text-[#8b5a2b] transition-colors duration-300">
            {tale.title}
          </h3>
          <p className="text-[#5a4e3e] text-[11px] sm:text-xs font-sans mt-2 leading-relaxed line-clamp-3">
            {tale.excerpt}
          </p>
        </div>

        <a
          href="https://instagram.com/tixtotrailsntales"
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold text-[#8b5a2b] hover:text-[#b87333] transition-colors self-start"
        >
          Read Story <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

/* -------------------------------- Footer ------------------------------- */
function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer
      className="relative z-20 -mt-16 bg-[#0d1410] clip-torn-top pb-16 pt-32 px-6 md:px-12 lg:px-24 min-h-[500px] flex flex-col justify-between"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "left center",
      }}
    >
      {/* Shadow Overlay for Readability spanning full bleed */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/80 pointer-events-none z-0" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0 }}
        className="relative z-10 mx-auto w-full max-w-7xl flex flex-col justify-between h-full gap-16"
      >
        {/* Top Section: CTA & Form */}
        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 mt-4">
          {/* Spacer columns to keep hiker image visible on left */}
          <div className="hidden lg:block lg:col-span-4" />

          {/* Cursive central text */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left justify-center select-none">
            <div className="relative">
              <p className="font-script text-3xl md:text-4xl text-gold leading-tight">
                The world is big.
              </p>
              <p className="font-script text-3xl md:text-4xl text-gold leading-tight mt-1 pl-6">
                Let's explore it together.
              </p>
              {/* SVG trail and paper airplane */}
              <svg
                className="absolute top-1/2 left-full -translate-y-4 translate-x-2 h-16 w-32 text-gold/60 pointer-events-none overflow-visible hidden sm:block"
                viewBox="0 0 100 40"
                fill="none"
              >
                <path
                  d="M -80,25 C -50,45 20,45 50,25 C 70,12 85,25 100,20"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeDasharray="3 3"
                />
                <g transform="translate(100, 20) rotate(-15) scale(0.65)">
                  <path d="M0,0 L18,5 L8,8 L5,15 Z" fill="currentColor" />
                  <path d="M5,15 L8,8 L0,0 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </g>
              </svg>
            </div>
          </div>

          {/* Join The Journey Form */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-[10px] uppercase tracking-[0.35em] text-gold font-bold">
              JOIN THE JOURNEY
            </span>
            <p className="mt-2 text-white/70 font-sans text-xs max-w-sm leading-relaxed">
              New stories, travel guides, and beautiful chaos delivered to your inbox.
            </p>

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="mt-6 flex w-full max-w-md items-center bg-black/45 border border-gold/30 rounded-full p-1 pl-5 backdrop-blur-sm shadow-md"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 bg-transparent border-none outline-none text-white text-xs placeholder:text-white/30 focus:ring-0 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-gold hover:bg-gold/90 text-black text-[11px] font-bold px-6 py-2.5 rounded-full transition duration-300 active:scale-95 shrink-0"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 inline-block rounded-full bg-white/5 border border-gold/30 px-6 py-2.5 text-xs font-semibold text-gold"
              >
                Welcome to the trails! We'll write soon. ✉️
              </motion.div>
            )}
          </div>
        </div>

        {/* Bottom Section: Footer Links & Logos */}
        <div className="relative z-10 w-full border-t border-white/10 pt-6 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Custom Hand-Drawn Logo in Gold */}
          <div className="relative select-none">
            <div className="flex flex-col items-start leading-[1.05] text-gold">
              <span className="font-script text-[24px] font-bold tracking-wide text-gold">
                Tix to Trails
              </span>
              <span className="font-script text-[24px] font-bold tracking-wide text-gold pl-5 -mt-1">
                N Tales
              </span>
            </div>
            <svg
              className="absolute -left-2 -bottom-2 w-[160px] h-[60px] pointer-events-none overflow-visible z-0"
              viewBox="0 0 160 60"
              fill="none"
            >
              <path
                d="M 12,22 C -10,32 -6,52 35,52 C 75,52 110,48 124,35"
                stroke="#d59b4c"
                strokeWidth="1.2"
                strokeDasharray="3 3"
                className="opacity-90"
              />
              <g transform="translate(124, 35) rotate(22) scale(0.55)">
                <path
                  d="M21,16v-2l-8-5V3.5c0-0.83-0.67-1.5-1.5-1.5S10,2.67,10,3.5V9l-8,5v2l8-2.5V19l-2,1.5V22l3.5-1l3.5,1v-1.5L13,19v-5.5L21,16z"
                  fill="#d59b4c"
                />
              </g>
            </svg>
          </div>

          {/* Social connections */}
          <div className="flex items-center gap-3">
            <span className="font-script text-lg text-gold mr-1">Let's connect</span>
            <div className="flex gap-2.5">
              <a
                href="https://instagram.com/tixtotrailsntales"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/25 bg-black/20 text-gold transition hover:bg-gold hover:text-black"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/25 bg-black/20 text-gold transition hover:bg-gold hover:text-black"
              >
                <Youtube className="h-4.5 w-4.5" />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/25 bg-black/20 text-gold transition hover:bg-gold hover:text-black"
              >
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0a12 12 0 0 0-4.37 23.18c-.07-.63-.13-1.6.03-2.29l1.37-5.8c-.37-.73-.57-1.68-.57-2.73 0-1.7 1-2.98 2.22-2.98 1.05 0 1.56.79 1.56 1.73 0 1.05-.67 2.63-1 4.1-.29 1.23.62 2.24 1.83 2.24 2.2 0 3.9-2.32 3.9-5.67 0-2.96-2.13-5.04-5.17-5.04-3.52 0-5.6 2.64-5.6 5.39 0 1.06.41 2.2 1 2.92.1.13.1.25.07.38l-.38 1.56c-.06.25-.2.31-.46.19-1.72-.8-2.82-3.3-2.82-5.32 0-4.33 3.15-8.31 9.07-8.31 4.76 0 8.46 3.4 8.46 7.93 0 4.73-2.98 8.54-7.12 8.54-1.39 0-2.7-0.72-3.15-1.58l-.86 3.28c-.31 1.18-1.15 2.67-1.71 3.59A12 12 0 1 0 12 0z" />
                </svg>
              </a>
              <a
                href="mailto:contact@tixtotrailsntales.com"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/25 bg-black/20 text-gold transition hover:bg-gold hover:text-black"
              >
                <Mail className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Legal navigation */}
          <div className="flex gap-6 text-[11px] uppercase tracking-widest text-[#fbf7ee]/60 font-sans font-medium">
            <a href="#" className="hover:text-gold transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold transition">
              Terms of Use
            </a>
            <a href="#" className="hover:text-gold transition">
              Contact
            </a>
          </div>

          {/* Vintage Stamp */}
          <div className="hidden lg:block relative shrink-0 transform rotate-12 select-none pointer-events-none">
            <svg
              viewBox="0 0 100 100"
              className="w-20 h-20 text-gold/20 opacity-90 animate-spin-slow"
              fill="none"
            >
              <defs>
                <path id="stamp-top-path" d="M 18,50 A 32,32 0 0,1 82,50" />
                <path id="stamp-bottom-path" d="M 82,50 A 32,32 0 0,1 18,50" />
              </defs>
              {/* Outer decorative borders */}
              <circle
                cx="50"
                cy="50"
                r="46"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="3 2"
              />
              <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="0.75" />
              <circle cx="50" cy="50" r="33" stroke="currentColor" strokeWidth="0.75" />

              {/* Arched Text */}
              <text
                fontSize="5.5"
                fontFamily="Inter"
                fontWeight="bold"
                fill="currentColor"
                letterSpacing="1.2"
              >
                <textPath href="#stamp-top-path" startOffset="50%" textAnchor="middle">
                  KEEP EXPLORING
                </textPath>
              </text>
              <text
                fontSize="5.5"
                fontFamily="Inter"
                fontWeight="bold"
                fill="currentColor"
                letterSpacing="1.2"
              >
                <textPath href="#stamp-bottom-path" startOffset="50%" textAnchor="middle">
                  TIX TO TRAILS
                </textPath>
              </text>

              {/* Geometric Mountains in Center */}
              <g stroke="currentColor" strokeWidth="0.75" strokeLinejoin="round">
                <polygon points="50,38 37,57 63,57" />
                <polygon points="42,44 33,57 51,57" />
                <polygon points="58,46 50,57 66,57" />
                {/* Horizontal line details/ground */}
                <line x1="30" y1="57" x2="70" y2="57" />
              </g>
            </svg>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
