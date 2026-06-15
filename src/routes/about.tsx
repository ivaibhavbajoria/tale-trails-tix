import { useState } from "react";
import { motion } from "framer-motion";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Instagram, ArrowLeft, Heart, MessageCircle, Send, Globe, MapPin, Camera } from "lucide-react";
import { NavBar, MobileMenu } from "../components/NavBar";

import heroMountains from "@/assets/hero-mountains.jpg";
import journeysBg from "@/assets/journeys-bg.jpg";
import destHimalayas from "@/assets/dest-himalayas.jpg";
import destSahara from "@/assets/dest-sahara.jpg";
import destBali from "@/assets/dest-bali.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Tix to Trails N Tales" },
      {
        name: "description",
        content: "Discover the story behind Tix to Trails N Tales. We map routes, share campfire conversations, and run small-group adventures.",
      },
    ],
  }),
  component: AboutPage,
});

const mockInstaPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
    likes: 342,
    comments: 24,
    caption: "Golden hour over coastal tides. Sometimes the best destination is the one we didn't plan for. 🌊🌅 #tixtotrailsntales #explore",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1615966616041-bc97e2e53c2a?w=600&auto=format&fit=crop&q=80",
    likes: 512,
    comments: 48,
    caption: "A million stars over the cold desert heights. Camping under the winter Spiti sky. 🌌🏔️ #spiti #wanderlust",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?w=600&auto=format&fit=crop&q=80",
    likes: 289,
    comments: 15,
    caption: "Winding rails through emerald tea estates. The journey is always the best part. 🚂🍂 #travelstories",
  },
  {
    id: 4,
    image: destSahara,
    likes: 405,
    comments: 31,
    caption: " sand dunes and sandstone melodies. Rajasthan has a way of staying with you. 🏜️🐪 #rajasthan #caravan",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=600&auto=format&fit=crop&q=80",
    likes: 620,
    comments: 55,
    caption: "Walking the living root bridges of Meghalaya. Nature's slow, green architecture. 🌿🌧️ #meghalaya",
  },
  {
    id: 6,
    image: destBali,
    likes: 457,
    comments: 29,
    caption: "Ubud rice terraces stitched in gold. Morning hikes through volcano mist. 🌾🌋 #offgrid #balitravel",
  },
];

function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-dark-forest text-foreground select-none">
      <NavBar onMenuToggle={() => setMobileMenuOpen(true)} />
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Page Header Hero */}
      <section className="relative flex min-h-[50vh] w-full flex-col justify-center overflow-hidden bg-dark-forest px-6 pb-16 pt-28 md:px-12 lg:px-24">
        <div className="absolute inset-0 z-0">
          <img
            src={heroMountains}
            alt="Cinematic mountain sunset banner"
            className="h-full w-full object-cover opacity-35 filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-dark-forest" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.35em] text-sunset font-semibold mb-3 block"
          >
            The Story Behind the Trails
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl"
          >
            Who We Are
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-script text-2xl md:text-3xl text-gold mt-4"
          >
            Slow travel, raw encounters, and logs written in real-time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 flex justify-center"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/50 hover:text-gold transition"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Philosophy Section (The Journal) */}
      <section className="relative z-20 -mt-8 px-6 pb-20 md:px-12 lg:px-24 bg-dark-forest">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#faf7f0] border border-[#e2d8c0] rounded-2xl shadow-[0_25px_50px_rgba(40,32,24,0.18)] p-8 md:p-12 text-left"
            style={{
              backgroundImage: `url(${journeysBg})`,
              backgroundSize: "cover",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(250, 247, 240, 0.95)",
            }}
          >
            {/* Binder ring dashed border on left */}
            <div className="absolute top-0 bottom-0 left-6 w-0.5 border-r border-dashed border-[#e2d8c0]" />

            <div className="pl-6 md:pl-10 space-y-8 text-[#2c251f]">
              <div>
                <span className="text-xs uppercase tracking-widest text-sunset font-bold">The Blueprint</span>
                <h2 className="font-display text-3xl mt-1.5 leading-snug">Tickets, Trails & Tales</h2>
                <div className="h-[2px] w-16 bg-gold mt-3" />
              </div>

              <p className="text-sm md:text-base leading-relaxed text-[#55473c]">
                We started **Tix to Trails N Tales** as an antidote to modern, fast-paced tourism. We don't chase checklist destinations or stand in lines just to take the same photo as everyone else. We believe that travel is a visceral, slow, and transformative experience.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="p-5 rounded-xl border border-[#e2d8c0] bg-white/60 backdrop-blur-sm">
                  <div className="h-8 w-8 rounded-full bg-sunset/10 text-sunset flex items-center justify-center mb-3">
                    <span className="font-bold text-sm">01</span>
                  </div>
                  <h3 className="font-display font-semibold text-lg">Tix</h3>
                  <p className="text-xs text-[#605245] mt-1 leading-relaxed">
                    The physical tickets, flight boarding passes, and impulse maps that start every great detour.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-[#e2d8c0] bg-white/60 backdrop-blur-sm">
                  <div className="h-8 w-8 rounded-full bg-sunset/10 text-sunset flex items-center justify-center mb-3">
                    <span className="font-bold text-sm">02</span>
                  </div>
                  <h3 className="font-display font-semibold text-lg">Trails</h3>
                  <p className="text-xs text-[#605245] mt-1 leading-relaxed">
                    The road less traveled. Mountain passes, wooden suspension bridges, and off-grid walks.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-[#e2d8c0] bg-white/60 backdrop-blur-sm">
                  <div className="h-8 w-8 rounded-full bg-sunset/10 text-sunset flex items-center justify-center mb-3">
                    <span className="font-bold text-sm">03</span>
                  </div>
                  <h3 className="font-display font-semibold text-lg">Tales</h3>
                  <p className="text-xs text-[#605245] mt-1 leading-relaxed">
                     Campfire chats, sharing food with locals, and logs noted down in weathered notebooks.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-dashed border-[#e2d8c0]">
                <p className="text-sm md:text-base leading-relaxed text-[#55473c]">
                  Our goal is to build a tight-knit collective of wanderers who want to experience the raw edges of the world. Whether that's drinking salty butter tea in a Spiti homestay or tracking stars under the Thar desert skies, we seek the moments that stay with you long after the flight ticket is discarded.
                </p>
              </div>

              <div className="flex justify-between items-center pt-4">
                <span className="font-script text-2xl text-sunset">- Tix to Trails N Tales team</span>
                <div className="h-10 w-10 rounded-full border border-[#dfa553]/40 flex items-center justify-center text-[#dfa553]/40 transform -rotate-12 text-[7px] font-bold tracking-wider select-none pointer-events-none">
                  ADVENTURE
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="relative z-20 px-6 pb-24 md:px-12 lg:px-24 bg-dark-forest border-t border-white/5 pt-16">
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-sunset font-semibold">Visual Journal</span>
          <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">Follow Our Footsteps</h2>
          <p className="mt-3 text-xs md:text-sm text-white/60 max-w-md mx-auto">
            Direct frames and captions from our Instagram logbook at{" "}
            <a
              href="https://instagram.com/tixtotrailsntales"
              target="_blank"
              rel="noreferrer"
              className="text-gold underline hover:text-sunset transition"
            >
              @tixtotrailsntales
            </a>.
          </p>

          {/* Insta Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {mockInstaPosts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0b120e] rounded-xl border border-white/5 overflow-hidden group hover:border-gold/20 transition duration-300"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-black/40">
                  <img
                    src={post.image}
                    alt="Instagram Post"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white text-xs font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Heart className="h-4 w-4 fill-sunset text-sunset" /> {post.likes}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MessageCircle className="h-4 w-4 fill-white text-white" /> {post.comments}
                    </span>
                  </div>
                </div>

                {/* Caption Info */}
                <div className="p-4 text-left">
                  <div className="flex items-center justify-between text-[10px] text-white/40 mb-2 font-semibold tracking-wider">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-gold" /> @tixtotrailsntales
                    </span>
                    <Instagram className="h-3 w-3 text-white/40" />
                  </div>
                  <p className="text-xs text-white/80 line-clamp-3 leading-relaxed">
                    {post.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="https://instagram.com/tixtotrailsntales"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 hover:border-gold px-6 py-3 text-xs font-bold text-white uppercase tracking-wider transition hover:scale-105 active:scale-95"
            >
              <Instagram className="h-4 w-4 text-gold" /> Visit Instagram Profile
            </a>
          </div>
        </div>
      </section>

      {/* Scenic Transition to Footer */}
      <div className="relative z-20 bg-[#090f0b]">
        <FooterShared />
      </div>
    </div>
  );
}

function FooterShared() {
  return (
    <footer className="border-t border-white/10 px-6 py-16 md:px-12 lg:px-24 bg-[#090f0b]">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 text-sm text-white/50">
        
        {/* Brand signature */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <Link to="/" className="flex items-center gap-2 font-display text-xl tracking-wide text-white">
            <span className="font-semibold text-gold">Tix to Trails</span>
            <span className="font-script text-2xl text-sunset lowercase">n</span>
            <span className="font-semibold text-gold">Tales</span>
          </Link>
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-white/30 font-semibold mt-1">MADE BETWEEN FLIGHTS.</span>
        </div>

        {/* Action Legal links */}
        <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
          <div className="flex gap-6">
            <Link to="/" className="hover:text-gold transition text-xs uppercase tracking-wider font-semibold">Home</Link>
            <Link to="/about" className="hover:text-gold transition text-xs uppercase tracking-wider font-semibold">About</Link>
            <Link to="/upcoming" className="hover:text-gold transition text-xs uppercase tracking-wider font-semibold">Upcoming Expeditions</Link>
            <Link to="/privacy" className="hover:text-gold transition text-xs uppercase tracking-wider font-semibold text-white/30">Privacy</Link>
          </div>
          <p className="text-[0.65rem] mt-2 text-white/30">© {new Date().getFullYear()} Tix to Trails N Tales. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
