import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, ChevronRight } from "lucide-react";

interface NavBarProps {
  onMenuToggle: () => void;
}

export function NavBar({ onMenuToggle }: NavBarProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (!isHome) {
      if (location.pathname === "/about") {
        setActiveSection("about");
      } else if (location.pathname === "/upcoming") {
        setActiveSection("upcoming");
      } else {
        setActiveSection("upcoming");
      }
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset for navbar height
      const sections = ["top", "stories", "map", "about"];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            const mapped =
              section === "top"
                ? "home"
                : section === "stories"
                  ? "tales"
                  : section === "map"
                    ? "gallery"
                    : section;
            setActiveSection(mapped);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const navItems = [
    { id: "home", label: "Home", hash: "top", to: "/" },
    { id: "tales", label: "Tales", hash: "stories", to: "/" },
    { id: "upcoming", label: "Upcoming Trips", to: "/upcoming" },
    { id: "gallery", label: "Gallery", hash: "map", to: "/" },
    { id: "about", label: "About", to: "/about" },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-6 py-3 md:px-12 pointer-events-none"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between bg-transparent border-none py-1.5 pointer-events-auto">
        {/* Custom Hand-Drawn Logo with flight trail & plane */}
        <Link to="/" className="relative block group select-none py-1">
          <div className="relative z-10 flex flex-col items-start leading-[1.05] text-white">
            <span className="font-script text-[26px] font-bold tracking-wide text-[#fbf7ee] drop-shadow-md">
              Tix to Trails
            </span>
            <span className="font-script text-[26px] font-bold tracking-wide text-[#fbf7ee] pl-5 -mt-1 drop-shadow-md">
              N Tales
            </span>
          </div>
          {/* SVG background / path overlay */}
          <svg
            className="absolute -left-2 -bottom-2.5 w-[190px] h-[80px] pointer-events-none overflow-visible z-0"
            viewBox="0 0 190 80"
            fill="none"
          >
            {/* Dashed trajectory line sweeping under N Tales */}
            <path
              d="M 15,30 C -12,45 -8,72 45,72 C 95,72 135,68 152,50"
              stroke="#d59b4c"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="opacity-90"
            />
            {/* Sparkles */}
            <path d="M 134,44 L 136,46 L 138,44 L 136,42 Z" fill="#d59b4c" />
            <path d="M 140,40 L 143,43 L 146,40 L 143,37 Z" fill="#d59b4c" />
            {/* Airplane icon at the end of the line */}
            <g transform="translate(152, 50) rotate(22) scale(0.65)">
              <path
                d="M21,16v-2l-8-5V3.5c0-0.83-0.67-1.5-1.5-1.5S10,2.67,10,3.5V9l-8,5v2l8-2.5V19l-2,1.5V22l3.5-1l3.5,1v-1.5L13,19v-5.5L21,16z"
                fill="#d59b4c"
              />
            </g>
          </svg>
        </Link>

        {/* Navigation Items with Sliding Underline Active State */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            if (item.id === "upcoming" || item.id === "about") {
              return (
                <Link
                  key={item.id}
                  to={item.to}
                  className={`relative py-1 transition-colors duration-300 hover:text-white ${
                    isActive ? "text-white font-semibold" : "text-white/80"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavUnderline"
                      className="absolute inset-x-0 bottom-0 h-[2px] bg-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            }

            // For anchor links: use native anchor if on home page, otherwise use Link with hash
            return isHome ? (
              <a
                key={item.id}
                href={`#${item.hash}`}
                className={`relative py-1 transition-colors duration-300 hover:text-white ${
                  isActive ? "text-white font-semibold" : "text-white/80"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavUnderline"
                    className="absolute inset-x-0 bottom-0 h-[2px] bg-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ) : (
              <Link
                key={item.id}
                to="/"
                hash={item.hash}
                className="relative py-1 transition-colors duration-300 hover:text-white text-white/80"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/tixtotrailsntales"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-[#d59b4c] hover:bg-[#c68e3f] px-5 py-2 text-xs font-semibold text-black shadow-md transition hover:scale-105 active:scale-95 sm:inline-flex items-center gap-2"
          >
            <span>Follow on Instagram</span>
            <span className="flex h-4.5 w-4.5 items-center justify-center rounded-md bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white">
              <svg
                className="h-3 w-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </span>
          </a>

          <button
            onClick={onMenuToggle}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-transparent text-white transition hover:bg-white/5 hover:border-gold active:scale-95"
          >
            <Menu className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const menuItems = [
    { id: "home", label: "Home", hash: "top", to: "/" },
    { id: "tales", label: "Tales", hash: "stories", to: "/" },
    { id: "upcoming", label: "Upcoming Trips", to: "/upcoming" },
    { id: "gallery", label: "Gallery", hash: "map", to: "/" },
    { id: "about", label: "About", to: "/about" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-[#0d1410] p-8 shadow-2xl border-l border-white/10"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <span className="font-display text-xl text-white font-semibold">Menu</span>
            <button
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-6 text-lg font-medium text-white/80">
            {menuItems.map((item) => {
              if (item.id === "upcoming" || item.id === "about") {
                return (
                  <Link
                    key={item.id}
                    to={item.to}
                    onClick={onClose}
                    className="transition hover:text-gold flex items-center justify-between"
                  >
                    {item.label} <ChevronRight className="h-4 w-4" />
                  </Link>
                );
              }

              return isHome ? (
                <a
                  key={item.id}
                  href={`#${item.hash}`}
                  onClick={onClose}
                  className="transition hover:text-gold flex items-center justify-between"
                >
                  {item.label} <ChevronRight className="h-4 w-4" />
                </a>
              ) : (
                <Link
                  key={item.id}
                  to="/"
                  hash={item.hash}
                  onClick={onClose}
                  className="transition hover:text-gold flex items-center justify-between"
                >
                  {item.label} <ChevronRight className="h-4 w-4" />
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto border-t border-white/10 pt-6">
            <a
              href="https://instagram.com/tixtotrailsntales"
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#d59b4c] hover:bg-[#c68e3f] py-3 text-sm font-semibold text-black shadow-md transition"
            >
              <span>Follow on Instagram</span>
              <span className="flex h-4.5 w-4.5 items-center justify-center rounded-md bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white">
                <svg
                  className="h-3 w-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
