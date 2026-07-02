import { useMemo } from "react";

function Particles() {
  const bubbles = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => {
        const size = 4 + Math.round(Math.random() * 12);
        const left = Math.round(Math.random() * 100);
        const dur = 6 + Math.random() * 8;
        const delay = -Math.random() * dur;
        const gold = i % 2 === 0;
        const op = 0.1 + Math.random() * 0.2;
        return { size, left, dur, delay, gold, op, id: i };
      }),
    [],
  );
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {bubbles.map((b) => (
        <span
          key={b.id}
          className="absolute bottom-0 block rounded-full animate-bubble-up"
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            background: b.gold ? "#D97706" : "#78350F",
            ["--bubble-dur" as never]: `${b.dur}s`,
            ["--bubble-op" as never]: b.op,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

function FloatingCover() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute right-2 top-1/2 z-[1] hidden -translate-y-1/2 md:block"
    >
      <div className="animate-float-cover drop-shadow-[0_20px_30px_rgba(120,53,15,0.35)]">
        <svg width="90" height="160" viewBox="0 0 90 160" fill="none">
          <defs>
            <linearGradient id="cv" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#78350F" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
            <linearGradient id="shine" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
          <rect
            x="5"
            y="5"
            width="80"
            height="150"
            rx="14"
            fill="url(#cv)"
            stroke="#D97706"
            strokeWidth="2"
          />
          <rect x="12" y="10" width="20" height="140" rx="8" fill="url(#shine)" opacity="0.6" />
          <circle cx="45" cy="22" r="4" fill="#D97706" opacity="0.8" />
        </svg>
      </div>
    </div>
  );
}

function FloatingCharger() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute right-3 top-1/2 z-[1] hidden -translate-y-1/2 md:block"
    >
      <div className="animate-float-charger animate-charger-glow">
        <svg width="100" height="170" viewBox="0 0 100 170" fill="none">
          <rect
            x="20"
            y="10"
            width="60"
            height="70"
            rx="10"
            fill="#f3f4f6"
            stroke="#cbd5e1"
            strokeWidth="2"
          />
          <path d="M48 25 L40 50 L52 50 L44 70 L60 42 L48 42 Z" fill="#D97706" />
          <rect x="42" y="78" width="16" height="8" fill="#78716c" />
          <path
            d="M50 86 Q70 110 50 130 Q30 150 60 160"
            stroke="#D97706"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

function Earbud({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 80" className={className} fill="none" aria-hidden>
      <ellipse cx="30" cy="22" rx="18" ry="20" fill="#78350F" stroke="#D97706" strokeWidth="1" />
      <circle cx="30" cy="22" r="6" fill="#D97706" />
      <rect
        x="25"
        y="38"
        width="10"
        height="36"
        rx="5"
        fill="#78350F"
        stroke="#D97706"
        strokeWidth="1"
      />
    </svg>
  );
}

function BackgroundEarbuds() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
      <div className="absolute left-[8%] top-[10%] animate-spin-slow" style={{ opacity: 0.15 }}>
        <Earbud className="h-16 w-16" />
      </div>
      <div
        className="absolute bottom-[10%] right-[8%] animate-spin-slow"
        style={{ opacity: 0.15, animationDelay: "-3s" }}
      >
        <Earbud className="h-20 w-20" />
      </div>
    </div>
  );
}

export function HeroFx() {
  return (
    <>
      <Particles />
      <BackgroundEarbuds />
      <FloatingCover />
      <FloatingCharger />
    </>
  );
}
