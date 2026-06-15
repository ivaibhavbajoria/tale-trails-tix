import { useState } from "react";
import { motion } from "framer-motion";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Shield, Lock, Eye, FileText } from "lucide-react";
import { NavBar, MobileMenu } from "../components/NavBar";

import heroMountains from "@/assets/hero-mountains.jpg";
import journeysBg from "@/assets/journeys-bg.jpg";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Tix to Trails N Tales" },
      {
        name: "description",
        content: "Read our privacy policy outlining how we handle your application data and communications.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-dark-forest text-foreground select-none">
      <NavBar onMenuToggle={() => setMobileMenuOpen(true)} />
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Page Header Hero */}
      <section className="relative flex min-h-[40vh] w-full flex-col justify-center overflow-hidden bg-dark-forest px-6 pb-12 pt-28 md:px-12 lg:px-24">
        <div className="absolute inset-0 z-0">
          <img
            src={heroMountains}
            alt="Mountains sunset banner"
            className="h-full w-full object-cover opacity-20 filter brightness-50"
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
            Legal Information
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl leading-tight text-white sm:text-5xl"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-script text-2xl text-gold mt-3"
          >
            How we protect your logbooks and travel coordinates.
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

      {/* Policy Content */}
      <section className="relative z-20 -mt-8 px-6 pb-20 md:px-12 lg:px-24 bg-dark-forest">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#faf7f0] border border-[#e2d8c0] rounded-2xl shadow-[0_25px_50px_rgba(40,32,24,0.18)] p-8 md:p-12 text-left"
            style={{
              backgroundImage: `url(${journeysBg})`,
              backgroundSize: "cover",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(250, 247, 240, 0.96)",
            }}
          >
            {/* Margins indicator */}
            <div className="absolute top-0 bottom-0 left-6 w-0.5 border-r border-dashed border-[#e2d8c0]" />

            <div className="pl-6 md:pl-10 space-y-8 text-[#2c251f] font-sans text-sm leading-relaxed text-[#55473c]">
              <div>
                <span className="text-xs uppercase tracking-widest text-sunset font-bold">Effective Date: June 15, 2026</span>
                <h2 className="font-display text-2xl text-[#2c251f] mt-1.5 font-semibold">Our Commitment to Your Privacy</h2>
                <div className="h-[2px] w-16 bg-gold mt-3" />
              </div>

              <p>
                At **Tix to Trails N Tales**, we are committed to respecting and protecting the privacy of our fellow travelers. This Privacy Policy explains how we collect, store, and utilize the personal information you share with us through our application logbooks.
              </p>

              <div className="space-y-4 pt-4 border-t border-dashed border-[#e2d8c0]">
                <h3 className="font-display font-semibold text-lg text-[#2c251f] flex items-center gap-2">
                  <Eye className="h-5 w-5 text-sunset" /> 1. Information We Collect
                </h3>
                <p>
                  When you submit an application to join our upcoming expeditions, we collect details that allow us to get in touch with you and curate high-compatibility travel cohorts:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>**Full Name**: For ticket verification and custom route logs.</li>
                  <li>**Email Address**: For confirmation notes and trip itineraries.</li>
                  <li>**WhatsApp / Phone Number**: Our primary channel for real-time logistics coordination.</li>
                  <li>**Personal Message & Travel Style**: To get to know you and make sure you're a good fit for off-grid, slow-paced exploration.</li>
                </ul>
              </div>

              <div className="space-y-4 pt-4 border-t border-dashed border-[#e2d8c0]">
                <h3 className="font-display font-semibold text-lg text-[#2c251f] flex items-center gap-2">
                  <Lock className="h-5 w-5 text-sunset" /> 2. How We Store Your Data
                </h3>
                <p>
                  All applications submitted through our custom registration sheet are POSTed directly to our private **Google Forms** backend. Your data is not stored on public servers or shared with unauthorized third parties. We treat your coordinates and travel logs with absolute confidentiality.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-dashed border-[#e2d8c0]">
                <h3 className="font-display font-semibold text-lg text-[#2c251f] flex items-center gap-2">
                  <Shield className="h-5 w-5 text-sunset" /> 3. Data Protection Rights
                </h3>
                <p>
                  You retain full control over your details. At any point, you have the right to request:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>Access to the application data we have recorded.</li>
                  <li>Rectification or updates to your contact numbers.</li>
                  <li>Permanent deletion of your logs from our Google Forms database.</li>
                </ul>
                <p className="mt-2">
                  To make a request, you can contact us directly via email or message us on Instagram at **@tixtotrailsntales**.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-dashed border-[#e2d8c0]">
                <h3 className="font-display font-semibold text-lg text-[#2c251f] flex items-center gap-2">
                  <FileText className="h-5 w-5 text-sunset" /> 4. External Links & Services
                </h3>
                <p>
                  Our website contains links to external platforms like Instagram and WhatsApp. We do not control, and are not responsible for, the privacy practices of those external services.
                </p>
              </div>

              <div className="flex justify-between items-center pt-8 border-t border-[#e2d8c0]">
                <span className="font-script text-2xl text-sunset">Secure Logs</span>
                <div className="h-10 w-10 rounded-full border border-[#dfa553]/40 flex items-center justify-center text-[#dfa553]/40 transform -rotate-12 text-[7px] font-bold tracking-wider select-none pointer-events-none">
                  CONFIDENTIAL
                </div>
              </div>
            </div>
          </motion.div>
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
