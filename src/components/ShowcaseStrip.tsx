import { Reveal } from "./Reveal";

function ChargerCard() {
  return (
    <div className="relative mx-auto grid h-44 w-28 place-items-center">
      <span className="absolute h-16 w-16 rounded-full bg-neon/20 animate-spark-burst" />
      <span
        className="absolute h-16 w-16 rounded-full bg-neon/20 animate-spark-burst"
        style={{ animationDelay: "0.6s" }}
      />
      <svg viewBox="0 0 60 80" className="relative h-24 w-24 animate-bolt-pulse" aria-hidden>
        <path
          d="M34 4 L10 44 L26 44 L22 76 L50 32 L34 32 Z"
          fill="#D97706"
          stroke="#F59E0B"
          strokeWidth="1.5"
        />
      </svg>
      <svg viewBox="0 0 100 60" className="absolute bottom-0 h-12 w-full" aria-hidden>
        <path
          d="M10 55 Q30 30 50 40 T90 10"
            stroke="#D97706"
            strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="120"
          strokeDashoffset="120"
          className="animate-draw-line"
        />
      </svg>
    </div>
  );
}

function EarbudsCard() {
  return (
    <div className="relative mx-auto grid h-44 w-44 place-items-center">
      <div className="absolute left-2 top-6">
        <span className="absolute inset-0 m-auto block h-12 w-12 rounded-full border-2 border-neon/40 animate-sonar" />
        <span
          className="absolute inset-0 m-auto block h-12 w-12 rounded-full border-2 border-neon/40 animate-sonar"
          style={{ animationDelay: "0.6s" }}
        />
        <span
          className="absolute inset-0 m-auto block h-12 w-12 rounded-full border-2 border-neon/40 animate-sonar"
          style={{ animationDelay: "1.2s" }}
        />
        <svg viewBox="0 0 60 80" className="relative h-14 w-14" aria-hidden>
          <ellipse cx="30" cy="22" rx="18" ry="20" fill="#1a1a2e" stroke="#D97706" strokeWidth="1.5" />
          <rect x="25" y="38" width="10" height="36" rx="5" fill="#1a1a2e" stroke="#D97706" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="absolute bottom-2 right-2">
        <span
          className="absolute inset-0 m-auto block h-12 w-12 rounded-full border-2 border-neon/40 animate-sonar"
          style={{ animationDelay: "0.3s" }}
        />
        <span
          className="absolute inset-0 m-auto block h-12 w-12 rounded-full border-2 border-neon/40 animate-sonar"
          style={{ animationDelay: "0.9s" }}
        />
        <span
          className="absolute inset-0 m-auto block h-12 w-12 rounded-full border-2 border-neon/40 animate-sonar"
          style={{ animationDelay: "1.5s" }}
        />
        <svg viewBox="0 0 60 80" className="relative h-14 w-14 scale-x-[-1]" aria-hidden>
          <ellipse cx="30" cy="22" rx="18" ry="20" fill="#1a1a2e" stroke="#D97706" strokeWidth="1.5" />
          <rect x="25" y="38" width="10" height="36" rx="5" fill="#1a1a2e" stroke="#D97706" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
}

function Card({
  children,
  title,
  subtitle,
  delay,
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay} className="group">
      <div className="rounded-3xl border border-glass-border glass-card p-6 text-center transition-all duration-300 hover:scale-[1.05] hover:border-amber/50 hover:shadow-[0_0_30px_color-mix(in_oklab,_var(--amber),_20%)]">
        <div className="grid h-48 place-items-center">{children}</div>
        <div className="mt-4 text-lg font-extrabold text-foreground">{title}</div>
        <div className="mt-1 text-sm font-semibold text-amber">{subtitle}</div>
      </div>
    </Reveal>
  );
}

export function ShowcaseStrip() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal variant="left" className="text-center">
          <h2 className="text-3xl font-extrabold text-gradient md:text-4xl">What We Offer</h2>
          <p className="mt-2 text-sm text-muted-foreground">Crafted accessories for every device</p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card title="Fast Chargers" subtitle="All Models Supported" delay={120}>
            <ChargerCard />
          </Card>
          <Card title="Premium Earbuds" subtitle="Crystal Clear Sound" delay={240}>
            <EarbudsCard />
          </Card>
        </div>
      </div>
    </section>
  );
}
