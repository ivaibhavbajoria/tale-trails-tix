import { useState } from "react";
import { motion } from "framer-motion";
import { Link, createFileRoute } from "@tanstack/react-router";
import { MapPin, Calendar, Users, Check, AlertCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { NavBar, MobileMenu } from "../components/NavBar";

import heroMountains from "@/assets/hero-mountains.jpg";
import storyBg from "@/assets/story-bg.png";
import journeysBg from "@/assets/journeys-bg.jpg";
import destHimalayas from "@/assets/dest-himalayas.jpg";
import destSahara from "@/assets/dest-sahara.jpg";
import destBali from "@/assets/dest-bali.jpg";

export const Route = createFileRoute("/upcoming")({
  head: () => ({
    meta: [
      { title: "Upcoming Expeditions — Tix to Trails N Tales" },
      {
        name: "description",
        content:
          "Apply to join our small-group, off-grid travel expeditions. Handcrafted routes, local stays, and raw adventures.",
      },
    ],
  }),
  component: UpcomingTrips,
});

const upcomingTrips = [
  {
    id: "spiti",
    name: "Winter Spiti Valley Expedition",
    date: "Jan 15 - Jan 22, 2027",
    duration: "8 Days",
    groupSize: "10 wanderers",
    price: "₹38,500 / $460 USD",
    spotsLeft: 4,
    status: "Spots Left",
    level: "Challenging (Extreme Cold)",
    image: destHimalayas,
    highlights: [
      "Frozen Pin River crossing",
      "Key Monastery under fresh snow",
      "Traditional homestays at 14,000 ft",
      "Snow Leopard tracking search",
    ],
  },
  {
    id: "rajasthan",
    name: "Colors of Rajasthan Caravan",
    date: "Oct 10 - Oct 18, 2026",
    duration: "9 Days",
    groupSize: "12 wanderers",
    price: "₹32,000 / $380 USD",
    spotsLeft: 2,
    status: "Filling Fast",
    level: "Moderate",
    image: destSahara,
    highlights: [
      "Camping under desert stars in Thar",
      "Blue City heritage walk in Jodhpur",
      "Private folk strings music session",
      "Exploring ancient sandstone forts",
    ],
  },
  {
    id: "bali",
    name: "Bali Off-Grid Explorer",
    date: "Nov 5 - Nov 12, 2026",
    duration: "8 Days",
    groupSize: "8 wanderers",
    price: "$890 USD",
    spotsLeft: 0,
    status: "Sold Out",
    level: "Easy - Moderate",
    image: destBali,
    highlights: [
      "West Bali reef snorkeling",
      "Jungle treehouse camping",
      "Sunrise hike up Mount Batur",
      "Traditional organic cooking masterclass",
    ],
  },
];

function UpcomingTrips() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState("spiti");
  const [formState, setFormState] = useState({ name: "", email: "", whatsapp: "", message: "" });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  // TO CONNECT YOUR GOOGLE FORM:
  // 1. Create a Google Form with fields: Name, Email, WhatsApp, Selected Trip, Message.
  // 2. Click "Send", copy the link and open it in your browser.
  // 3. Inspect the page HTML to find the Form's POST action URL:
  //    e.g., https://docs.google.com/forms/d/e/1FAIpQLSfXXXXXXXXXXXXXX/formResponse
  // 4. Find the "name" attributes for each input field:
  //    e.g., entry.10424562, entry.23098522, etc.
  // 5. Replace the placeholder values below with your form's URL and field entry IDs.
  const GOOGLE_FORM_ACTION_URL =
    "https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID_HERE/formResponse";
  const ENTRY_IDS = {
    name: "entry.1000001", // Replace with your Name field entry ID
    email: "entry.1000002", // Replace with your Email field entry ID
    whatsapp: "entry.1000003", // Replace with your WhatsApp field entry ID
    trip: "entry.1000004", // Replace with your Selected Trip field entry ID
    message: "entry.1000005", // Replace with your Message field entry ID
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("loading");

    // Form validation
    if (!formState.name || !formState.email || !formState.whatsapp) {
      setSubmitStatus("error");
      return;
    }

    try {
      // Create urlencoded body for Google Forms submission
      const formData = new URLSearchParams();
      formData.append(ENTRY_IDS.name, formState.name);
      formData.append(ENTRY_IDS.email, formState.email);
      formData.append(ENTRY_IDS.whatsapp, formState.whatsapp);
      formData.append(ENTRY_IDS.trip, selectedTrip);
      formData.append(ENTRY_IDS.message, formState.message);

      // Perform background POST request (mode no-cors lets Google Forms record it without CORS blocking)
      if (GOOGLE_FORM_ACTION_URL.includes("YOUR_GOOGLE_FORM_ID_HERE")) {
        // Fallback simulation for demonstration
        console.log("Mock Submit to Google Forms:", { selectedTrip, formState });
        await new Promise((resolve) => setTimeout(resolve, 1200));
      } else {
        await fetch(GOOGLE_FORM_ACTION_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        });
      }

      setSubmitStatus("success");
      setFormState({ name: "", email: "", whatsapp: "", message: "" });
    } catch (err) {
      console.error("Form submission failed:", err);
      setSubmitStatus("error");
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-dark-forest text-foreground select-none">
      <NavBar onMenuToggle={() => setMobileMenuOpen(true)} />
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Page Header Hero */}
      <section className="relative flex min-h-[50vh] w-full flex-col justify-center overflow-hidden bg-dark-forest px-6 pb-16 pt-28 md:px-12 lg:px-24">
        <div className="absolute inset-0 z-0">
          <img
            src={heroMountains}
            alt="Cinematic mountains sunset banner"
            className="h-full w-full object-cover opacity-30 filter brightness-50"
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
            Join the Trails
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl"
          >
            Upcoming Expeditions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-script text-2xl md:text-3xl text-gold mt-4"
          >
            Small groups. Handcrafted itineraries. Real experiences.
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

      {/* Expedition List Section */}
      <section className="relative z-20 -mt-8 px-6 pb-20 md:px-12 lg:px-24 bg-dark-forest">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingTrips.map((trip, i) => (
              <motion.div
                key={trip.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#0c130f] shadow-card group"
              >
                {/* Image header */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c130f] to-transparent" />

                  {/* Status Tag */}
                  <span
                    className={`absolute top-4 right-4 rounded-full px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                      trip.spotsLeft === 0
                        ? "bg-red-950/80 border border-red-500/20 text-red-400"
                        : trip.spotsLeft <= 2
                          ? "bg-sunset/80 text-white animate-pulse"
                          : "bg-[#202d24]/90 border border-gold/30 text-gold"
                    }`}
                  >
                    {trip.spotsLeft === 0 ? "Sold Out" : `${trip.spotsLeft} Spots Left`}
                  </span>
                </div>

                {/* Details body */}
                <div className="p-6 flex-1 flex flex-col text-left">
                  <span className="text-[10px] uppercase tracking-widest text-sunset font-bold">
                    {trip.level}
                  </span>
                  <h3 className="font-display text-xl text-white font-semibold mt-1.5 leading-snug">
                    {trip.name}
                  </h3>

                  <div className="grid grid-cols-2 gap-4 mt-6 border-y border-white/5 py-4 text-xs text-white/70">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gold shrink-0" />
                      <span>{trip.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gold shrink-0" />
                      <span>Max {trip.groupSize}</span>
                    </div>
                  </div>

                  <h4 className="text-xs uppercase tracking-wider text-white/40 font-bold mt-6 mb-2">
                    Highlights
                  </h4>
                  <ul className="space-y-2 flex-1">
                    {trip.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-white/70">
                        <span className="text-gold mt-0.5">▪</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-4 border-t border-white/5 flex flex-col gap-3">
                    {trip.spotsLeft > 0 ? (
                      <div className="flex gap-2 w-full">
                        <a
                          href="#apply-form"
                          onClick={() => setSelectedTrip(trip.id)}
                          className="flex-1 text-center rounded-full bg-sunset hover:bg-sunset/90 px-3 py-2.5 text-[10px] sm:text-xs font-bold text-white transition hover:scale-105 active:scale-95 flex items-center justify-center gap-1 shrink-0"
                        >
                          Apply Now <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                        <a
                          href={`https://wa.me/919289359208?text=Hi! I am interested in joining the ${trip.name} expedition.`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 text-center rounded-full border border-green-500/30 bg-green-950/20 hover:bg-green-950/40 text-green-400 px-3 py-2.5 text-[10px] sm:text-xs font-bold transition hover:scale-105 active:scale-95 flex items-center justify-center gap-1 shrink-0"
                        >
                          <svg
                            className="h-3.5 w-3.5 fill-current text-green-400"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12.031 0C5.39 0 .023 5.366.023 11.996c0 2.115.553 4.102 1.517 5.83L0 24l6.305-1.654a11.982 11.982 0 0 0 5.725 1.448h.005c6.637 0 12.006-5.361 12.006-11.997C24.042 5.366 18.67 0 12.03 0zm5.992 16.993c-.262.73-1.52 1.41-2.096 1.503-.497.08-1.147.149-3.23-.715-2.666-1.107-4.382-3.807-4.517-3.987-.135-.18-1.102-1.464-1.102-2.794 0-1.33.699-1.987.947-2.258.249-.271.541-.339.72-.339.18 0 .36 0 .518.007.166.007.388-.063.608.468.22.53.754 1.838.821 1.973.068.136.113.294.023.475-.09.18-.135.294-.271.452-.136.16-.289.358-.413.48-.137.135-.28.283-.122.551.157.268.704 1.155 1.507 1.868.804.713 1.478.932 1.748 1.066.27.135.426.113.585-.068.158-.18.677-.79.857-1.06.18-.27.36-.226.63-.125.27.102 1.716.809 2.01 1.554.294.746.294 1.153.162 1.483z" />
                          </svg>
                          WhatsApp
                        </a>
                      </div>
                    ) : (
                      <div className="flex gap-2 w-full">
                        <button
                          disabled
                          className="flex-1 rounded-full bg-white/5 border border-white/10 px-3 py-2.5 text-[10px] sm:text-xs font-bold text-white/30 cursor-not-allowed"
                        >
                          Sold Out
                        </button>
                        <a
                          href={`https://wa.me/919289359208?text=Hi! I want to join the waitlist for the ${trip.name} expedition.`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 text-center rounded-full border border-green-500/20 bg-green-950/10 hover:bg-green-950/35 text-green-500/50 px-3 py-2.5 text-[10px] sm:text-xs font-bold transition hover:scale-105 active:scale-95 flex items-center justify-center gap-1"
                        >
                          Waitlist (WA)
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Torn Edge Transition to Application Form */}
      <div
        id="apply-form"
        className="relative z-20 -mt-10 clip-torn-top pb-32 pt-28 bg-[#f3ebd9]"
        style={{
          backgroundImage: `url(${journeysBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <section className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.35em] text-sunset font-semibold">
              Join the expedition
            </span>
            <h2 className="mt-3 font-display text-4xl text-[#2c251f] sm:text-5xl">Apply to Join</h2>
            <p className="mt-3 text-xs md:text-sm text-[#605245] max-w-md mx-auto leading-relaxed">
              We carefully curate our groups to match traveler personalities. Fill out your logbook
              application, and we'll reach out over WhatsApp/Email.
            </p>
          </div>

          {/* Form wrapper (Styled Logbook Page) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#faf7f0] border border-[#e2d8c0] rounded-2xl shadow-[0_25px_50px_rgba(40,32,24,0.18)] p-6 md:p-10 text-left overflow-hidden"
          >
            {/* Folder rings effect on the left margin */}
            <div className="absolute top-0 bottom-0 left-4 w-0.5 border-r border-dashed border-[#e2d8c0]" />

            {submitStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="h-16 w-16 rounded-full bg-[#202d24] text-gold flex items-center justify-center mb-6 shadow-md border border-gold/20">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl text-[#2c251f] font-semibold">
                  Application Logged!
                </h3>
                <p className="mt-3 text-sm text-[#605245] max-w-sm leading-relaxed">
                  Your details have been successfully saved. We will review your application and get
                  in touch with you shortly. Prepare for the trail!
                </p>
                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="mt-8 rounded-full bg-sunset hover:bg-sunset/90 px-6 py-2.5 text-xs font-semibold text-white shadow-md transition"
                >
                  Submit Another Application
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6 pl-4 md:pl-6 relative z-10">
                {/* Expedition Select dropdown */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#605245] font-bold mb-2">
                    Which expedition are you interested in?
                  </label>
                  <select
                    name="trip"
                    value={selectedTrip}
                    onChange={(e) => setSelectedTrip(e.target.value)}
                    className="w-full rounded-lg border border-[#e2d8c0] bg-white px-4 py-3 text-sm text-[#2c251f] focus:outline-none focus:ring-1 focus:ring-sunset"
                  >
                    <option value="spiti">Winter Spiti Valley Expedition (Jan 2027)</option>
                    <option value="rajasthan">Colors of Rajasthan Caravan (Oct 2026)</option>
                    <option value="bali">Bali Off-Grid Explorer (Nov 2026)</option>
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#605245] font-bold mb-2">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-[#e2d8c0] bg-white px-4 py-3 text-sm text-[#2c251f] placeholder:text-[#2c251f]/30 focus:outline-none focus:ring-1 focus:ring-sunset"
                  />
                </div>

                {/* Grid for Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#605245] font-bold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="e.g. name@domain.com"
                      className="w-full rounded-lg border border-[#e2d8c0] bg-white px-4 py-3 text-sm text-[#2c251f] placeholder:text-[#2c251f]/30 focus:outline-none focus:ring-1 focus:ring-sunset"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#605245] font-bold mb-2">
                      WhatsApp/Phone Number
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      value={formState.whatsapp}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full rounded-lg border border-[#e2d8c0] bg-white px-4 py-3 text-sm text-[#2c251f] placeholder:text-[#2c251f]/30 focus:outline-none focus:ring-1 focus:ring-sunset"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#605245] font-bold mb-2">
                    Tell us about yourself & why you want to join this trip?
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Share a bit about your travel style, previous treks, and why you feel you would be a great addition to this expedition..."
                    className="w-full rounded-lg border border-[#e2d8c0] bg-white px-4 py-3 text-sm text-[#2c251f] placeholder:text-[#2c251f]/30 focus:outline-none focus:ring-1 focus:ring-sunset resize-none"
                  />
                </div>

                {/* Error Banner */}
                {submitStatus === "error" && (
                  <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>Oops! Please check your information and try submitting again.</span>
                  </div>
                )}

                {/* Buttons and Google Form Fallback links */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-dashed border-[#e2d8c0]">
                  <button
                    type="submit"
                    disabled={submitStatus === "loading"}
                    className="w-full sm:w-auto rounded-full bg-[#202d24] hover:bg-[#151f19] px-8 py-3.5 text-xs font-semibold text-white tracking-widest uppercase transition hover:scale-105 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    {submitStatus === "loading" ? "Submitting..." : "Submit Application"}
                    <ArrowRight className="h-4 w-4 text-white" />
                  </button>

                  <a
                    href="https://docs.google.com/forms"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-[#605245] hover:text-sunset underline transition"
                  >
                    Open in Google Forms instead
                  </a>
                </div>
              </form>
            )}

            {/* Vintage stamp graphic decoration in corner */}
            <div className="absolute bottom-4 right-4 h-12 w-12 rounded-full border border-dashed border-[#dfa553]/40 flex items-center justify-center text-[#dfa553]/40 transform -rotate-12 select-none pointer-events-none text-[8px] font-bold tracking-widest">
              APPROVED
            </div>
          </motion.div>
        </section>
      </div>

      {/* Scenic Transition to Footer */}
      <div className="relative z-20 -mt-10 bg-dark-forest clip-torn-top pt-28">
        <FooterShared />
      </div>
    </div>
  );
}

// Minimal Brand Footer for upcoming page
function FooterShared() {
  return (
    <footer className="border-t border-white/10 px-6 py-16 md:px-12 lg:px-24 bg-[#090f0b]">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 text-sm text-white/50">
        {/* Brand signature */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <Link
            to="/"
            className="flex items-center gap-2 font-display text-xl tracking-wide text-white"
          >
            <span className="font-semibold text-gold">Tix to Trails</span>
            <span className="font-script text-2xl text-sunset lowercase">n</span>
            <span className="font-semibold text-gold">Tales</span>
          </Link>
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-white/30 font-semibold mt-1">
            MADE BETWEEN FLIGHTS.
          </span>
        </div>

        {/* Action Legal links */}
        <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
          <div className="flex gap-6">
            <Link
              to="/"
              className="hover:text-gold transition text-xs uppercase tracking-wider font-semibold"
            >
              Home
            </Link>
            <a
              href="https://instagram.com/tixtotrailsntales"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gold transition text-xs uppercase tracking-wider font-semibold"
            >
              Instagram
            </a>
            <Link
              to="/upcoming"
              className="hover:text-gold transition text-xs uppercase tracking-wider font-semibold"
            >
              Upcoming Expeditions
            </Link>
          </div>
          <p className="text-[0.65rem] mt-2 text-white/30">
            © {new Date().getFullYear()} Tix to Trails N Tales. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
