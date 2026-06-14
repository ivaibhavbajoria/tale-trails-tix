import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroMountains from "@/assets/hero-mountains.jpg";
import journal from "@/assets/journal.jpg";
import worldMap from "@/assets/world-map.jpg";
import destHimalayas from "@/assets/dest-himalayas.jpg";
import destSantorini from "@/assets/dest-santorini.jpg";
import destBali from "@/assets/dest-bali.jpg";
import destSahara from "@/assets/dest-sahara.jpg";
import destIceland from "@/assets/dest-iceland.jpg";
import destKyoto from "@/assets/dest-kyoto.jpg";

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
    ],
  }),
  component: Index,
});

const destinations = [
  {
    name: "Himalayas",
    region: "Nepal",
    image: destHimalayas,
    tagline: "Above the clouds, where silence speaks.",
  },
  {
    name: "Santorini",
    region: "Greece",
    image: destSantorini,
    tagline: "A sunset that rewrites the sky.",
  },
  {
    name: "Ubud",
    region: "Bali",
    image: destBali,
    tagline: "Terraces stitched in liquid gold.",
  },
  {
    name: "Sahara",
    region: "Morocco",
    image: destSahara,
    tagline: "Dunes that breathe with the wind.",
  },
  {
    name: "Jökulsárlón",
    region: "Iceland",
    image: destIceland,
    tagline: "Where the sky learns to dance.",
  },
  {
    name: "Arashiyama",
    region: "Kyoto",
    image: destKyoto,
    tagline: "A cathedral grown from bamboo.",
  },
];

const tales = [
  {
    chapter: "Chapter 01",
    title: "A ticket to nowhere in particular",
    excerpt:
      "It started with a boarding pass I almost didn't print. Twelve hours later, the monsoon found me in a stranger's kitchen, eating fish curry and laughing in a language I didn't speak.",
    place: "Kerala, India",
  },
  {
    chapter: "Chapter 02",
    title: "The night the mountain whispered back",
    excerpt:
      "Base camp at 4,200 metres. Stars so loud they kept us awake. My guide handed me his thermos and said: 'The mountain only talks to people who stop trying to climb it.'",
    place: "Annapurna, Nepal",
  },
  {
    chapter: "Chapter 03",
    title: "Postcards I forgot to send",
    excerpt:
      "I bought seventeen postcards in Lisbon and mailed none of them. They live in a tin box now — small, salt-stained windows into a summer I'm still unpacking.",
    place: "Lisbon, Portugal",
  },
];

const gallery = [
  destSantorini,
  destBali,
  destHimalayas,
  destKyoto,
  destIceland,
  destSahara,
  destBali,
  destSantorini,
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <NavBar />
      <Hero />
      <BrandStory />
      <FeaturedJourneys />
      <TrailsMap />
      <TalesSection />
      <InstagramGallery />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* --------------------------------- Nav --------------------------------- */
function NavBar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-6 pt-6"
    >
      <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-6 py-3">
        <a href="#top" className="flex items-center gap-2 font-display text-base tracking-wide">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground shadow-trail">
            ✦
          </span>
          <span>
            Tix <span className="text-muted-foreground">to</span> Trails{" "}
            <span className="text-muted-foreground">n</span> Tales
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#stories" className="transition hover:text-foreground">Stories</a>
          <a href="#journeys" className="transition hover:text-foreground">Journeys</a>
          <a href="#map" className="transition hover:text-foreground">Map</a>
          <a href="#gallery" className="transition hover:text-foreground">Gallery</a>
        </nav>
        <a
          href="https://instagram.com/tixtotrailsntales"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition hover:brightness-110"
        >
          Follow
        </a>
      </div>
    </motion.header>
  );
}

/* --------------------------------- Hero -------------------------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[110vh] w-full">
      <motion.div style={{ y: yBg }} className="absolute inset-0">
        <img
          src={heroMountains}
          alt="Misty mountain trails at sunset"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background" />
      </motion.div>

      {/* floating 3D-ish objects */}
      <FloatingArtifacts />

      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-trail" />
          A cinematic travel journal
        </motion.span>

        <h1 className="font-display text-6xl leading-[0.95] sm:text-7xl md:text-8xl lg:text-[9rem]">
          <SplitWord text="Tickets." delay={0.1} className="text-cloud" />
          <SplitWord text="Trails." delay={0.35} className="text-headline italic" />
          <SplitWord text="Tales." delay={0.6} className="text-cloud" />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-8 max-w-xl text-balance text-base text-muted-foreground sm:text-lg"
        >
          Where every boarding pass becomes a beginning, every trail a verse, and every place
          a story worth telling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#stories"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition hover:brightness-110"
          >
            Explore Stories
          </a>
          <a
            href="#journeys"
            className="glass rounded-full px-6 py-3 text-sm font-medium text-foreground transition hover:bg-white/10"
          >
            View Destinations
          </a>
          <a
            href="https://instagram.com/tixtotrailsntales"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-foreground/80 transition hover:border-primary hover:text-primary"
          >
            Follow on Instagram →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 text-[0.65rem] uppercase tracking-[0.4em] text-muted-foreground"
        >
          ↓ Scroll to wander
        </motion.div>
      </motion.div>
    </section>
  );
}

function SplitWord({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 60, rotateX: -40 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
      className={`mx-3 inline-block ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {text}
    </motion.span>
  );
}

function FloatingArtifacts() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
      {/* Compass */}
      <motion.div
        className="absolute left-[6%] top-[22%] hidden md:block"
        animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-gold to-sunset text-primary-foreground shadow-glow">
          <div className="animate-spin-slow text-2xl">✦</div>
        </div>
      </motion.div>
      {/* Boarding pass */}
      <motion.div
        className="absolute right-[5%] top-[28%] hidden rotate-[-12deg] md:block"
        animate={{ y: [0, 16, 0], rotate: [-12, -8, -12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="glass w-56 rounded-xl p-4 text-left text-xs">
          <div className="flex items-center justify-between text-muted-foreground">
            <span>BOARDING PASS</span>
            <span>A21</span>
          </div>
          <div className="mt-3 flex items-end justify-between font-display text-2xl">
            <span>BOM</span>
            <span className="text-primary">→</span>
            <span>CDG</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-[0.6rem] uppercase tracking-widest text-muted-foreground">
            <div><div>Gate</div><div className="text-foreground">B12</div></div>
            <div><div>Seat</div><div className="text-foreground">14A</div></div>
            <div><div>Class</div><div className="text-foreground">Window</div></div>
          </div>
        </div>
      </motion.div>
      {/* Postcard stamp */}
      <motion.div
        className="absolute bottom-[14%] left-[12%] hidden rotate-6 md:block"
        animate={{ y: [0, -12, 0], rotate: [6, 10, 6] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="grid h-20 w-20 place-items-center rounded-md border-2 border-dashed border-primary/70 font-display text-xs text-primary">
          <div className="text-center leading-tight">
            VISITED<br />KYOTO ’24
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ------------------------------ Brand Story ----------------------------- */
function BrandStory() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="perspective-1000"
        >
          <div className="relative preserve-3d">
            <motion.img
              src={journal}
              alt="Open travel journal with stamps and polaroids"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full rounded-2xl object-cover shadow-card"
              animate={{ rotateY: [0, -4, 0], rotateX: [0, 3, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            />
            <motion.div
              className="glass absolute -bottom-8 -right-6 w-48 rounded-xl p-4 text-sm shadow-glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Countries
              </div>
              <div className="font-display text-3xl text-primary">37</div>
              <div className="text-xs text-muted-foreground">and counting…</div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-xs uppercase tracking-[0.4em] text-primary">The Brand</div>
          <h2 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
            We don't collect <em className="text-headline">stamps.</em>
            <br />
            We collect <em className="text-headline">stories.</em>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Tix to Trails N Tales is a wandering field-notebook — part travel diary,
            part love letter to the strangers, sunsets and silent mornings that turn a
            place into a memory. We chase trails that aren't on the map, and bring back
            the tales worth telling.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
            <Stat label="Trails walked" value="184" />
            <Stat label="Tales told" value="92" />
            <Stat label="Sunrises chased" value="∞" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-foreground">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

/* ----------------------------- Featured Journeys ----------------------- */
function FeaturedJourneys() {
  return (
    <section id="journeys" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          kicker="Featured Journeys"
          title={<>Postcards from <em className="text-headline">somewhere</em></>}
          sub="A handful of places that refused to be forgotten."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d, i) => (
            <DestinationCard key={d.name} {...d} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DestinationCard({
  name,
  region,
  image,
  tagline,
  index,
}: (typeof destinations)[number] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--rx", `${-y * 10}deg`);
    el.style.setProperty("--ry", `${x * 12}deg`);
    el.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="perspective-1000"
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleLeave}
        className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-card transition-transform duration-300 preserve-3d will-change-transform"
        style={{
          transform: "rotateX(var(--rx,0)) rotateY(var(--ry,0))",
        }}
      >
        <img
          src={image}
          alt={`${name}, ${region}`}
          width={1024}
          height={1280}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), color-mix(in oklab, var(--gold) 30%, transparent), transparent 60%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="text-[0.65rem] uppercase tracking-[0.3em] text-primary">{region}</div>
          <div className="mt-1 font-display text-3xl text-foreground">{name}</div>
          <div className="mt-2 max-w-[18ch] text-sm text-muted-foreground">{tagline}</div>
        </div>
        <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-primary/50 text-xs text-primary backdrop-blur">
          0{index + 1}
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------ Trails Map ----------------------------- */
function TrailsMap() {
  return (
    <section id="map" className="relative overflow-hidden px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          kicker="The Trails Map"
          title={<>Every line is a <em className="text-headline">memory.</em></>}
          sub="A glowing atlas of the routes we've wandered."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative mt-16 overflow-hidden rounded-3xl border border-white/10 shadow-card"
        >
          <img
            src={worldMap}
            alt="Stylized world map with glowing travel routes"
            width={1600}
            height={900}
            loading="lazy"
            className="h-auto w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />

          {/* animated dashed routes overlay */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 1600 900"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="trail" x1="0" x2="1">
                <stop offset="0%" stopColor="oklch(0.82 0.13 80)" stopOpacity="0" />
                <stop offset="50%" stopColor="oklch(0.82 0.13 80)" stopOpacity="1" />
                <stop offset="100%" stopColor="oklch(0.72 0.18 45)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 240 520 Q 500 200 800 420 T 1380 380"
              fill="none"
              stroke="url(#trail)"
              strokeWidth="2"
              strokeDasharray="6 10"
              className="animate-trail"
            />
            <path
              d="M 380 700 Q 700 600 950 560 T 1300 620"
              fill="none"
              stroke="url(#trail)"
              strokeWidth="2"
              strokeDasharray="6 10"
              className="animate-trail"
              style={{ animationDelay: "-3s" }}
            />
          </svg>

          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
            <div className="glass rounded-xl px-4 py-3">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Currently
              </div>
              <div className="font-display text-lg">Lisbon → Marrakech</div>
            </div>
            <div className="glass rounded-xl px-4 py-3">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Next stop
              </div>
              <div className="font-display text-lg">Patagonia, 2026</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------- Tales -------------------------------- */
function TalesSection() {
  return (
    <section id="stories" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          kicker="Tales"
          title={<>Pages from the <em className="text-headline">journal.</em></>}
          sub="Slow stories, written between flights."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {tales.map((t, i) => (
            <motion.article
              key={t.title}
              initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -8, rotate: i % 2 === 0 ? -1 : 1 }}
              className="glass relative flex flex-col rounded-2xl p-8 shadow-card"
            >
              <div className="text-[0.65rem] uppercase tracking-[0.3em] text-primary">
                {t.chapter}
              </div>
              <h3 className="mt-4 font-display text-2xl leading-snug">{t.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.excerpt}</p>
              <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-4 text-xs text-muted-foreground">
                <span>{t.place}</span>
                <a href="#" className="text-primary transition hover:brightness-125">
                  Read tale →
                </a>
              </div>
              {/* page corner */}
              <div className="pointer-events-none absolute -right-0 -top-0 h-10 w-10 rounded-bl-2xl bg-gradient-to-br from-white/15 to-transparent" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Instagram Grid -------------------------- */
function InstagramGallery() {
  return (
    <section id="gallery" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          kicker="@tixtotrailsntales"
          title={<>From the <em className="text-headline">feed.</em></>}
          sub="Daily fragments — light, dust, weather, wonder."
        />

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {gallery.map((src, i) => (
            <motion.a
              key={i}
              href="https://instagram.com/tixtotrailsntales"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group relative aspect-square overflow-hidden rounded-xl border border-white/10 shadow-card"
            >
              <img
                src={src}
                alt={`Instagram post ${i + 1}`}
                width={600}
                height={600}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 transition group-hover:bg-background/40" />
              <div className="absolute inset-0 grid place-items-center opacity-0 transition group-hover:opacity-100">
                <span className="rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                  View on Instagram
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Final CTA ----------------------------- */
function FinalCTA() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass relative overflow-hidden rounded-3xl p-12 text-center shadow-glow md:p-20"
        >
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-sunset/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative">
            <div className="text-xs uppercase tracking-[0.4em] text-primary">Join the journey</div>
            <h2 className="mt-6 font-display text-5xl leading-tight md:text-6xl">
              The next <em className="text-headline">tale</em> begins
              <br />
              the moment you say <em className="text-headline">yes.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              New trails, new tales, new tickets — once a month, in your inbox. No spam,
              just stories.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="you@somewhere.com"
                className="glass flex-1 rounded-full px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-trail transition hover:brightness-110"
              >
                Join
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------- Footer ------------------------------- */
function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-sm text-muted-foreground md:flex-row">
        <div className="font-display text-base text-foreground">Tix to Trails N Tales</div>
        <div className="flex gap-6">
          <a href="https://instagram.com/tixtotrailsntales" target="_blank" rel="noreferrer" className="hover:text-primary">Instagram</a>
          <a href="#" className="hover:text-primary">YouTube</a>
          <a href="#" className="hover:text-primary">Pinterest</a>
          <a href="#" className="hover:text-primary">Contact</a>
        </div>
        <div>© {new Date().getFullYear()} — Made between flights.</div>
      </div>
    </footer>
  );
}

/* ----------------------------- Section Head ---------------------------- */
function SectionHead({
  kicker,
  title,
  sub,
}: {
  kicker: string;
  title: React.ReactNode;
  sub: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-2xl text-center"
    >
      <div className="text-xs uppercase tracking-[0.4em] text-primary">{kicker}</div>
      <h2 className="mt-4 font-display text-5xl leading-tight md:text-6xl">{title}</h2>
      <p className="mt-4 text-muted-foreground">{sub}</p>
    </motion.div>
  );
}
    </div>
  );
}
