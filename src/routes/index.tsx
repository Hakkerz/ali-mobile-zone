import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Truck,
  ShieldCheck,
  Headphones,
  Plug,
  Smartphone,
  Apple,
  Package2,
  Zap,
  ArrowRight,
  Sparkles,
  Globe,
  Cpu,
  Cable,
  BatteryCharging,
  Watch,
  Car,
  Speaker,
  HardDrive,
} from "lucide-react";
import { toast } from "sonner";
import { ProductCard } from "@/components/ProductCard";
import { useProducts } from "@/lib/store";
import { BEST_SELLER_IDS, NEW_IDS, CATEGORIES } from "@/lib/products";
import { waGeneral } from "@/lib/whatsapp";
import { HeroFx } from "@/components/HeroFx";
import { ShowcaseStrip } from "@/components/ShowcaseStrip";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ali Mobile Zone — Pakistan's #1 Mobile Accessories Store" },
      {
        name: "description",
        content:
          "Shop chargers, headphones, earbuds and more. 10% OFF, free delivery above Rs.2,000. Cash on Delivery nationwide.",
      },
    ],
  }),
  component: HomePage,
});

const SLIDES = [
  {
    title: "Pakistan's #1 Mobile Accessories Store",
    sub: "Premium chargers, headphones & earbuds delivered to your door.",
    cta: "Shop Now",
    to: "/products" as const,
    accent: "Trusted by thousands",
  },
  {
    title: "10% OFF on All Products Today!",
    sub: "Limited-time savings across every category. Don't miss out.",
    cta: "View Deals",
    to: "/products" as const,
    accent: "Today only",
  },
  {
    title: "Free Delivery Above Rs.2,000",
    sub: "Order on WhatsApp — Cash on Delivery available nationwide.",
    cta: "Order on WhatsApp",
    to: null,
    accent: "Nationwide 🇵🇰",
  },
];

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);
  const s = SLIDES[i];
  return (
      <section className="relative overflow-hidden bg-background">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 20%, color-mix(in oklab, var(--amber) 18%, transparent) 0%, transparent 100%), radial-gradient(ellipse 50% 40% at 80% 80%, color-mix(in oklab, var(--gold) 15%, transparent) 0%, transparent 100%), radial-gradient(ellipse 40% 30% at 50% 50%, color-mix(in oklab, var(--warm) 12%, transparent) 0%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 bg-grid opacity-[0.04]" />
      <HeroFx />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
        <div key={i} className="animate-fade-up">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber/30 glass-card px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber">
            <Sparkles className="h-3 w-3" /> {s.accent}
          </div>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
            <span className="text-gradient">{s.title}</span>
          </h1>
          <p className="mt-4 max-w-md text-base text-muted-foreground">{s.sub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {s.to ? (
              <Link
                to={s.to}
                className="rounded-lg bg-amber px-6 py-3 text-sm font-bold text-navy shadow-[0_0_16px_color-mix(in_oklab,_var(--amber),_30%)] transition-all hover:shadow-[0_0_30px_color-mix(in_oklab,_var(--amber),_50%)] hover:brightness-110 hover:scale-105"
              >
                {s.cta}
              </Link>
            ) : (
              <a
                href={waGeneral()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-6 py-3 text-sm font-bold text-white shadow-[0_0_16px_color-mix(in_oklab,_var(--whatsapp),_30%)] transition-all hover:shadow-[0_0_30px_color-mix(in_oklab,_var(--whatsapp),_50%)] hover:brightness-110"
              >
                <MessageCircle className="h-4 w-4" />
                {s.cta}
              </a>
            )}
            <Link
              to="/products"
              className="rounded-lg border border-glass-border glass-card px-6 py-3 text-sm font-bold text-foreground transition-all hover:border-amber/50 hover:text-amber"
            >
              Browse all
            </Link>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-amber/[0.08] via-background to-gold/[0.06]" />
            <div className="absolute -top-8 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-amber/15 blur-3xl" />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-amber/[0.03] to-transparent" />
          </div>
          <div className="relative flex items-end justify-center px-4 pb-2 pt-8" style={{ animation: "fade-up 0.8s ease-out both" }}>
            <div className="flex flex-col items-center gap-0">
              {/* Shelf 1 — Smart Watch */}
              <div className="flex flex-col items-center" style={{ animation: "fade-up 0.5s ease-out 0.1s both" }}>
                <div className="relative z-10 mb-1 h-28 w-28 rounded-2xl bg-white/[0.06] p-3 ring-1 ring-amber/10 backdrop-blur-sm transition-all duration-300 hover:ring-amber/30 hover:scale-105">
                  <img src="https://img.drz.lazcdn.com/g/kf/Sa7184fc13fda46a3b92030daebce3985L.jpg_720x720q80.jpg_.webp" alt="Smart Watch" className="h-full w-full object-contain drop-shadow-lg" />
                </div>
                <div className="relative h-[2px] w-44 bg-gradient-to-r from-transparent via-amber/30 to-transparent shadow-[0_2px_8px_rgba(0,0,0,0.12)]" />
              </div>

              {/* Shelf 2 — Earbuds + Power Bank */}
              <div className="mt-6 flex flex-col items-center" style={{ animation: "fade-up 0.5s ease-out 0.2s both" }}>
                <div className="mb-1 flex items-end gap-6">
                  <div className="relative z-10 h-24 w-24 rounded-2xl bg-white/[0.06] p-3 ring-1 ring-amber/10 backdrop-blur-sm transition-all duration-300 hover:ring-amber/30 hover:scale-105">
                    <img src="https://img.drz.lazcdn.com/static/pk/p/1398a3ecc3cc5b2c2605f2cdcdab6020.jpg_720x720q80.jpg_.webp" alt="Earbuds" className="h-full w-full object-contain drop-shadow-lg" />
                  </div>
                  <div className="relative z-10 h-24 w-24 rounded-2xl bg-white/[0.06] p-3 ring-1 ring-amber/10 backdrop-blur-sm transition-all duration-300 hover:ring-amber/30 hover:scale-105">
                    <img src="https://img.drz.lazcdn.com/static/pk/p/bbd4ee919eb1ead68122a4b217220353.jpg_720x720q80.jpg_.webp" alt="Power Bank" className="h-full w-full object-contain drop-shadow-lg" />
                  </div>
                </div>
                <div className="h-[2px] w-64 bg-gradient-to-r from-transparent via-amber/30 to-transparent shadow-[0_2px_8px_rgba(0,0,0,0.12)]" />
              </div>

              {/* Shelf 3 — Charger + Phone Case */}
              <div className="mt-6 flex flex-col items-center" style={{ animation: "fade-up 0.5s ease-out 0.3s both" }}>
                <div className="mb-1 flex items-end gap-6">
                  <div className="relative z-10 h-24 w-24 rounded-2xl bg-white/[0.06] p-3 ring-1 ring-amber/10 backdrop-blur-sm transition-all duration-300 hover:ring-amber/30 hover:scale-105">
                    <img src="https://img.drz.lazcdn.com/static/pk/p/16aab81eaf42d7da32aa5f7d13f07091.jpg_720x720q80.jpg_.webp" alt="Wireless Charger" className="h-full w-full object-contain drop-shadow-lg" />
                  </div>
                  <div className="relative z-10 h-24 w-24 rounded-2xl bg-white/[0.06] p-3 ring-1 ring-amber/10 backdrop-blur-sm transition-all duration-300 hover:ring-amber/30 hover:scale-105">
                    <img src="https://img.drz.lazcdn.com/static/pk/p/51df529ab7b26120be1aede8c1f21ba7.jpg_720x720q80.jpg_.webp" alt="Phone Case" className="h-full w-full object-contain drop-shadow-lg" />
                  </div>
                </div>
                <div className="h-[2px] w-64 bg-gradient-to-r from-transparent via-amber/30 to-transparent shadow-[0_2px_8px_rgba(0,0,0,0.12)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-amber shadow-[0_0_8px_color-mix(in_oklab,_var(--amber),_50%)]" : "w-2 bg-muted-foreground/40"}`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
      <button
        onClick={() => setI((x) => (x - 1 + SLIDES.length) % SLIDES.length)}
        className="absolute left-2 top-1/2 hidden -translate-y-1/2 rounded-full glass-card p-2 backdrop-blur hover:border-amber/50 hover:text-amber md:block"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => setI((x) => (x + 1) % SLIDES.length)}
        className="absolute right-2 top-1/2 hidden -translate-y-1/2 rounded-full glass-card p-2 backdrop-blur hover:border-amber/50 hover:text-amber md:block"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </section>
  );
}

const CATEGORY_ICONS: Record<string, typeof Plug> = {
  Chargers: Plug,
  "Data Cables": Cable,
  "Power Banks": BatteryCharging,
  Earbuds: Headphones,
  Headphones: Headphones,
  "Smart Watches": Watch,
  "Phone Cases": Smartphone,
  "Screen Protection": ShieldCheck,
  "Car Accessories": Car,
  Audio: Speaker,
  Storage: HardDrive,
  "Ronin Products": Package2,
  "Apple Products": Apple,
  Accessories: Package2,
};

const CATEGORY_LINKS: Record<string, string> = {
  "Phone Cases": "/tell-us-your-model",
};

function CategoriesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <Reveal variant="left" className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-extrabold text-gradient">Shop by Category</h2>
          <p className="mt-1 text-sm text-muted-foreground">Find exactly what you need</p>
        </div>
      </Reveal>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {CATEGORIES.map((c, idx) => {
          const Icon = CATEGORY_ICONS[c] ?? Package2;
          return (
            <Reveal key={c} variant="pop" delay={idx * 80}>
              <Link
                to={CATEGORY_LINKS[c] ?? "/products"}
                search={CATEGORY_LINKS[c] ? undefined : ({ category: c } as never)}
                className="group flex h-full flex-col items-center gap-2 rounded-2xl glass-card p-5 text-center transition-all hover:border-amber/40 hover:-translate-y-1"
              >
                <div className="grid h-14 w-14 place-items-center rounded-full bg-amber/15 text-amber transition-all duration-300 group-hover:bg-amber group-hover:text-navy group-hover:shadow-[0_0_16px_color-mix(in_oklab,_var(--amber),_40%)]">
                  <Icon className="h-7 w-7" />
                </div>
                <div className="text-xs font-bold text-foreground">{c}</div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function useCountdown(target: Date) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, target.getTime() - now);
  const h = Math.floor(diff / 3.6e6);
  const m = Math.floor((diff % 3.6e6) / 6e4);
  const s = Math.floor((diff % 6e4) / 1000);
  return { h, m, s };
}

function FlashSale() {
  const target = new Date();
  target.setHours(23, 59, 59, 0);
  const { h, m, s } = useCountdown(target);
  const box = (label: string, v: number) => (
    <div className="rounded-xl glass-card border-amber/20 p-3 text-center min-w-16">
      <div className="text-2xl font-extrabold text-amber tabular-nums animate-glow-pulse">
        {String(v).padStart(2, "0")}
      </div>
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="relative overflow-hidden rounded-3xl border border-amber/20 bg-gradient-to-br from-card via-background to-warm-dark p-6 md:p-8">
        <div className="absolute inset-0 opacity-15" style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 50%, var(--amber) 0%, transparent 100%)"
        }} />
        <div className="relative z-10 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-amber animate-bolt-pulse" />
              <span className="text-sm font-bold uppercase tracking-widest text-amber">Flash Sale</span>
            </div>
            <h3 className="mt-2 text-2xl font-extrabold text-foreground md:text-3xl">10% OFF — Ends Tonight!</h3>
            <p className="mt-1 text-sm text-muted-foreground">Use code AMZ10 at checkout via WhatsApp</p>
          </div>
          <div className="flex gap-2">
            {box("Hrs", h)}
            {box("Min", m)}
            {box("Sec", s)}
          </div>
        </div>
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />
      </div>
    </section>
  );
}

function ProductRow({ title, ids }: { title: string; ids: Set<string> }) {
  const { products } = useProducts();
  const list = products.filter((p) => ids.has(p.id));
  if (!list.length) return null;
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <Reveal variant="left" className="mb-6 flex items-end justify-between">
        <h2 className="text-3xl font-extrabold text-gradient">{title}</h2>
        <Link to="/products" className="text-sm font-bold text-amber transition-all hover:text-gold hover:underline">
          View all →
        </Link>
      </Reveal>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {list.map((p, i) => (
          <Reveal key={p.id} delay={i * 90}>
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const REVIEWS = [
  {
    name: "Ahmed K.",
    city: "Karachi",
    text: "Ordered AirPods on WhatsApp and got delivery in 2 days. Quality is amazing!",
    rating: 5,
  },
  {
    name: "Sara M.",
    city: "Lahore",
    text: "Best mobile accessories store. Their Ronin chargers are super fast and reliable.",
    rating: 5,
  },
  {
    name: "Bilal R.",
    city: "Islamabad",
    text: "Cash on delivery worked perfectly. Will order again. Highly recommended!",
    rating: 5,
  },
];

function Reviews() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="mb-6 text-center text-3xl font-extrabold text-gradient">What our customers say</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <div key={i} className="rounded-2xl glass-card p-6 transition-all hover:border-amber/30">
            <div className="text-gold">{"★".repeat(r.rating)}</div>
            <p className="mt-3 text-sm text-muted-foreground">"{r.text}"</p>
            <div className="mt-4 text-xs">
              <span className="font-bold text-foreground">{r.name}</span> ·{" "}
              <span className="text-muted-foreground">{r.city}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MobileCoverBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <Link
        to="/tell-us-your-model"
        className="group relative block overflow-hidden rounded-3xl border border-glass-border glass-card p-8 md:p-12"
      >
        <div className="absolute inset-0 opacity-15" style={{
          background: "radial-gradient(ellipse 60% 40% at 30% 40%, var(--amber) 0%, transparent 100%), radial-gradient(ellipse 40% 30% at 70% 60%, var(--gold) 0%, transparent 100%)"
        }} />
        <div className="relative z-10 grid items-center gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 glass-card px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber">
              <Sparkles className="h-3.5 w-3.5" /> New Collection
            </div>
            <h3 className="mt-3 text-2xl font-extrabold text-foreground md:text-4xl">
              Phone Cases & Protection
            </h3>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              100+ designs available. Tell us your phone model and get the perfect cover delivered to your door.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-2xl bg-amber px-8 py-5 text-base font-extrabold text-navy shadow-[0_0_16px_color-mix(in_oklab,_var(--amber),_30%)] transition-all duration-300 group-hover:shadow-[0_0_30px_color-mix(in_oklab,_var(--amber),_50%)] group-hover:brightness-110 group-hover:scale-105">
              Tell Us Your Model <ArrowRight className="ml-1 inline h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-amber/8 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />
      </Link>
    </section>
  );
}

function WhatsAppBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="relative overflow-hidden rounded-3xl border border-glass-border glass-card p-8 md:p-12">
        <div className="absolute inset-0 opacity-15" style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 50%, var(--amber) 0%, transparent 100%)"
        }} />
        <div className="relative z-10 grid items-center gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 glass-card px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber">
              <MessageCircle className="h-3 w-3" /> Order via WhatsApp
            </div>
            <h3 className="mt-3 text-2xl font-extrabold text-foreground md:text-4xl">Order Easily on WhatsApp!</h3>
            <p className="mt-2 max-w-md text-muted-foreground">
              No signup needed — just message us your order and we'll handle the rest. Cash on
              Delivery available nationwide.
            </p>
          </div>
          <a
            href={waGeneral()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 self-start rounded-2xl bg-whatsapp px-8 py-5 text-base font-extrabold text-white shadow-[0_0_16px_color-mix(in_oklab,_var(--whatsapp),_30%)] transition-all hover:shadow-[0_0_30px_color-mix(in_oklab,_var(--whatsapp),_50%)] hover:brightness-110 hover:scale-105"
          >
            <MessageCircle className="h-6 w-6" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const items = [
    { Icon: Truck, title: "Free Delivery", sub: "Above Rs.2,000" },
    { Icon: ShieldCheck, title: "100% Original", sub: "Quality guaranteed" },
    { Icon: MessageCircle, title: "WhatsApp Support", sub: "Quick responses" },
    { Icon: Package2, title: "Cash on Delivery", sub: "Nationwide 🇵🇰" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {items.map(({ Icon, title, sub }) => (
          <div key={title} className="flex items-center gap-3 rounded-xl glass-card p-4 transition-all hover:border-amber/30">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-amber/15 text-amber">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">{title}</div>
              <div className="text-xs text-muted-foreground">{sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="rounded-3xl border border-glass-border glass-card p-8 text-center">
        <h3 className="text-2xl font-extrabold text-gradient">Get exclusive offers</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Subscribe for deals, new arrivals and discount codes.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setEmail("");
            toast.success("Subscribed! Check your inbox 📩");
          }}
          className="mx-auto mt-5 flex max-w-md flex-col gap-2 sm:flex-row"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            placeholder="you@email.com"
            className="flex-1 rounded-lg bg-secondary px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-amber focus:bg-background"
          />
          <button className="rounded-lg bg-amber px-6 py-3 text-sm font-bold text-navy shadow-[0_0_12px_color-mix(in_oklab,_var(--amber),_30%)] transition-all hover:shadow-[0_0_20px_color-mix(in_oklab,_var(--amber),_50%)] hover:brightness-110">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <CategoriesGrid />
      <FlashSale />
      <ProductRow title="Best Sellers" ids={BEST_SELLER_IDS} />
      <MobileCoverBanner />
      <ShowcaseStrip />
      <ProductRow title="New Arrivals" ids={NEW_IDS} />
      <WhatsAppBanner />
      <Reviews />
      <Newsletter />
    </>
  );
}
