import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useState, useEffect, type ReactNode, useMemo } from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  X,
  Smartphone,
  Instagram,
  Youtube,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { useCart, useProducts } from "@/lib/store";
import { useAuth } from "@/hooks/use-auth";
import { waGeneral, WA_DISPLAY } from "@/lib/whatsapp";
import { ProductImage } from "./ProductImage";
import { formatPrice } from "@/lib/store";

const MARQUEE =
  "🎉 10% OFF on ALL Products!   |   Free Delivery above Rs.2,000   |   Order on WhatsApp: 0322 0066229   |   Cash on Delivery Available Nationwide 🇵🇰";

function AnnouncementBar() {
  return (
    <div className="overflow-hidden bg-gradient-to-r from-whatsapp to-whatsapp-dark py-2 text-white shadow-[0_0_20px_color-mix(in_oklab,_var(--whatsapp),_30%)]">
      <div className="flex w-max animate-marquee whitespace-nowrap text-sm font-bold">
        <span className="px-8">{MARQUEE}</span>
        <span className="px-8">{MARQUEE}</span>
        <span className="px-8">{MARQUEE}</span>
        <span className="px-8">{MARQUEE}</span>
      </div>
    </div>
  );
}

function Navbar() {
  const { count } = useCart();
  const { products } = useProducts();
  const { user } = useAuth();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const suggestions = useMemo(() => {
    if (!q.trim()) return [];
    const lower = q.toLowerCase();
    return products.filter((p) => p.name.toLowerCase().includes(lower)).slice(0, 6);
  }, [q, products]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (q.trim()) navigate({ to: "/products", search: { q: q.trim() } as never });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-glass-border glass-card rounded-none">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-whatsapp text-white shadow-[0_0_12px_color-mix(in_oklab,_var(--whatsapp),_40%)] transition-all group-hover:shadow-[0_0_20px_color-mix(in_oklab,_var(--whatsapp),_60%)]">
            <Smartphone className="h-5 w-5" />
          </div>
          <div className="hidden sm:block">
            <div className="text-base font-extrabold leading-none text-foreground">Ali Mobile Zone</div>
            <div className="text-[10px] font-medium text-muted-foreground tracking-wider">Mobile Accessories</div>
          </div>
        </Link>

        <form onSubmit={submit} className="relative hidden flex-1 max-w-xl md:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search chargers, headphones, earbuds..."
            className="w-full rounded-full bg-secondary py-2 pl-10 pr-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-neon focus:bg-background"
          />
          {suggestions.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-xl glass-card border-glass-border shadow-lg">
              {suggestions.map((p) => (
                <Link
                  key={p.id}
                  to="/products/$id"
                  params={{ id: p.id }}
                  onClick={() => setQ("")}
                  className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-secondary"
                >
                  <div className="h-10 w-10 overflow-hidden rounded bg-background">
                    <ProductImage
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-foreground line-clamp-1">{p.name}</div>
                    <div className="text-xs text-muted-foreground">{formatPrice(p.price)}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </form>

        <nav className="ml-auto flex items-center gap-1">
          <Link
            to="/products"
            className="hidden rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary lg:block"
          >
            Shop
          </Link>
          <Link
            to="/tell-us-your-model"
            className="hidden rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary lg:block"
          >
            Mobile Covers
          </Link>
          <Link
            to="/tell-us-your-model"
            className="hidden rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary lg:block"
          >
            Protection
          </Link>
          <Link
            to="/contact"
            className="hidden rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary lg:block"
          >
            Contact
          </Link>
          <Link
            to="/cart"
            className="relative grid h-10 w-10 place-items-center rounded-lg text-foreground hover:bg-secondary"
          >
            <ShoppingCart className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-whatsapp px-1 text-[10px] font-bold text-white shadow-[0_0_8px_color-mix(in_oklab,_var(--whatsapp),_50%)]">
                {count}
              </span>
            )}
          </Link>
          {user ? (
            <Link
              to="/profile"
              className="hidden rounded-lg border border-glass-border px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary md:inline-flex"
            >
              <User className="mr-2 h-4 w-4" /> My account
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="hidden rounded-lg border border-glass-border px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary md:inline-flex"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="hidden rounded-lg bg-whatsapp px-3 py-2 text-sm font-medium text-white shadow-[0_0_12px_color-mix(in_oklab,_var(--whatsapp),_30%)] transition-all hover:shadow-[0_0_20px_color-mix(in_oklab,_var(--whatsapp),_50%)] hover:brightness-110 md:inline-flex"
              >
                Sign up
              </Link>
            </>
          )}
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-lg text-foreground hover:bg-secondary md:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {open && (
        <div className="border-t border-glass-border px-4 py-3 md:hidden bg-background/95 backdrop-blur">
          <form onSubmit={submit} className="relative mb-3">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-full bg-secondary py-2 pl-10 pr-4 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-neon focus:bg-background"
            />
          </form>
          <div className="flex flex-col gap-1">
            <Link
              to="/products"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary"
            >
              Shop
            </Link>
            <Link
              to="/tell-us-your-model"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary"
            >
              Mobile Covers
            </Link>
            <Link
              to="/tell-us-your-model"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary"
            >
              Protection
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary"
            >
              Contact
            </Link>
            {user ? (
              <Link
                to="/profile"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary"
              >
                My account
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary"
                >
                  Sign up
                </Link>
              </>
            )}
            <Link
              to="/admin"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary"
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-glass-border glass-card rounded-none">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-whatsapp text-white shadow-[0_0_12px_color-mix(in_oklab,_var(--whatsapp),_40%)]">
              <Smartphone className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-extrabold text-foreground">Ali Mobile Zone</div>
              <div className="text-xs text-muted-foreground">
                Your Ultimate Mobile Accessories Destination
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            All orders via WhatsApp · Cash on Delivery · Nationwide Delivery 🇵🇰
          </p>
        </div>
        <div>
          <div className="mb-3 text-sm font-bold uppercase tracking-widest text-neon">
            Quick Links
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="transition-colors hover:text-neon">Home</Link>
            </li>
            <li>
              <Link to="/products" className="transition-colors hover:text-neon">All Products</Link>
            </li>
            <li>
              <Link to="/cart" className="transition-colors hover:text-neon">Cart</Link>
            </li>
            <li>
              <Link to="/tell-us-your-model" className="transition-colors hover:text-neon">Mobile Covers</Link>
            </li>
            <li>
              <Link to="/tell-us-your-model" className="transition-colors hover:text-neon">Protection</Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-neon">Contact</Link>
            </li>
            <li>
              <Link to="/admin" className="transition-colors hover:text-neon">Admin</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-sm font-bold uppercase tracking-widest text-neon">
            Get in Touch
          </div>
          <a
            href={waGeneral()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-4 py-2 text-sm font-bold text-white shadow-[0_0_12px_color-mix(in_oklab,_var(--whatsapp),_30%)] transition-all hover:shadow-[0_0_20px_color-mix(in_oklab,_var(--whatsapp),_50%)] hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp: {WA_DISPLAY}
          </a>
          <div className="mt-4 flex gap-2">
            <a
              href="#"
              className="grid h-9 w-9 place-items-center rounded-full glass-card text-muted-foreground hover:text-neon hover:border-neon/50"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="grid h-9 w-9 place-items-center rounded-full glass-card text-muted-foreground hover:text-neon hover:border-neon/50"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.86a8.16 8.16 0 0 0 4.77 1.52V6.93a4.85 4.85 0 0 1-1.84-.24z" />
              </svg>
            </a>
            <a
              href="#"
              className="grid h-9 w-9 place-items-center rounded-full glass-card text-muted-foreground hover:text-neon hover:border-neon/50"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-glass-border py-4 text-center text-xs text-muted-foreground">
        © 2026 Ali Mobile Zone. All Rights Reserved.
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  const [showBubble, setShowBubble] = useState(false);
  useEffect(() => {
    const tick = () => {
      setShowBubble(true);
      window.setTimeout(() => setShowBubble(false), 2200);
    };
    const t = window.setInterval(tick, 5000);
    const first = window.setTimeout(tick, 1500);
    return () => {
      window.clearInterval(t);
      window.clearTimeout(first);
    };
  }, []);
  return (
    <div className="fixed bottom-6 right-6" style={{ zIndex: 9999 }}>
      {showBubble && (
        <div
          key={Date.now()}
          className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full glass-card px-3 py-1.5 text-xs font-bold text-foreground shadow-lg animate-bubble-pop border-glass-border"
        >
          Order Now! 💬
          <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-background" />
        </div>
      )}
      <a
        href={waGeneral()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-[0_0_20px_color-mix(in_oklab,_var(--whatsapp),_40%)] animate-wa-pulse transition hover:scale-110 hover:shadow-[0_0_30px_color-mix(in_oklab,_var(--whatsapp),_60%)]"
      >
        <span className="block animate-heartbeat">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
            <path d="M20.52 3.48A11.78 11.78 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9a11.83 11.83 0 0 0 1.59 5.94L0 24l6.34-1.66a11.9 11.9 0 0 0 5.72 1.46h.01c6.56 0 11.89-5.33 11.89-11.9a11.82 11.82 0 0 0-3.44-8.42zM12.07 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.76.98 1-3.66-.24-.38a9.85 9.85 0 0 1-1.52-5.25c0-5.46 4.45-9.9 9.92-9.9a9.86 9.86 0 0 1 7.01 2.9 9.83 9.83 0 0 1 2.9 7c-.01 5.46-4.46 9.9-9.91 9.9zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
          </svg>
        </span>
      </a>
    </div>
  );
}

function Particles() {
  const particles = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      dur: `${8 + Math.random() * 12}s`,
      delay: `${Math.random() * 15}s`,
      size: 2 + Math.random() * 3,
    })),
  []);
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.x,
            width: `${p.size}px`,
            height: `${p.size}px`,
            "--dur": p.dur,
            "--delay": p.delay,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const isAdmin = path.startsWith("/admin");
  return (
    <div className="flex min-h-screen flex-col bg-grid">
      <Particles />
      {!isAdmin && <AnnouncementBar />}
      {!isAdmin && <Navbar />}
      <main className="flex-1 relative z-[1]">{children}</main>
      {!isAdmin && <Footer />}
      <FloatingWhatsApp />
    </div>
  );
}
