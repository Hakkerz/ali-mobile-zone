import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Smartphone, MessageCircle, ShieldCheck, Package } from "lucide-react";
import { waLink, WA_NUMBER } from "@/lib/whatsapp";

export const Route = createFileRoute("/tell-us-your-model")({
  head: () => ({
    meta: [
      { title: "Tell Us Your Model — Ali Mobile Zone" },
      {
        name: "description",
        content: "Tell us your phone model and get the perfect cover or protection. Ali Mobile Zone — all model covers available.",
      },
    ],
  }),
  component: TellUsYourModelPage,
});

const BRANDS = [
  "Apple",
  "Samsung",
  "Xiaomi",
  "OPPO",
  "Vivo",
  "Tecno",
  "Infinix",
  "OnePlus",
  "Huawei",
  "Realme",
  "Motorola",
  "Nokia",
  "Google Pixel",
  "Other",
];

function AnimatedSubmitButton({ disabled, onClick }: { disabled: boolean; onClick: () => void }) {
  const [pulse, setPulse] = useState(true);

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-whatsapp to-green-600 px-6 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-50"
      onMouseEnter={() => setPulse(false)}
      onMouseLeave={() => setPulse(true)}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        <MessageCircle className="h-5 w-5" />
        Send Inquiry on WhatsApp
      </span>
      {pulse && (
        <span className="absolute inset-0 animate-pulse rounded-xl bg-white/20" />
      )}
      <span className="absolute inset-0 -z-10 translate-y-full rounded-xl bg-gradient-to-r from-green-600 to-green-700 transition-transform duration-300 group-hover:translate-y-0" />
    </button>
  );
}

function TellUsYourModelPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    brand: "",
    model: "",
    quantity: "1",
    notes: "",
  });
  const [customBrand, setCustomBrand] = useState("");

  const brand = form.brand === "Other" ? customBrand : form.brand;
  const valid =
    form.name.trim() &&
    form.phone.trim() &&
    brand.trim() &&
    form.model.trim() &&
    form.quantity.trim();

  const submit = () => {
    if (!valid) return;
    const msg = `Hi Ali Mobile Zone! 👋

I'm looking for a mobile cover / protection for my device:

━━━━━━━━━━━━━━━━━━
📱 MY DETAILS:
Name: ${form.name}
Phone: ${form.phone}
Brand: ${brand}
Model: ${form.model}
Quantity: ${form.quantity}
${form.notes ? `Notes: ${form.notes}` : ""}
━━━━━━━━━━━━━━━━━━

Please let me know about availability and pricing.
Thank you! 🙏`;

    window.open(waLink(msg), "_blank");
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="text-center">
        <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-gold text-navy">
          <Smartphone className="h-8 w-8" />
        </div>
        <h1 className="text-3xl font-extrabold text-navy">Tell Us Your Model</h1>
        <p className="mt-2 text-muted-foreground">
          Every model cover available! Tell us your phone model and our team will contact you within 1 hour.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="flex items-start gap-3 rounded-xl border bg-card p-4 shadow-[var(--shadow-card)]">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
          <div className="text-sm">
            <div className="font-bold text-navy">All Models Available</div>
            <div className="text-xs text-muted-foreground">Covers for every brand and model</div>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-xl border bg-card p-4 shadow-[var(--shadow-card)]">
          <Package className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
          <div className="text-sm">
            <div className="font-bold text-navy">Bulk Orders Welcome</div>
            <div className="text-xs text-muted-foreground">Wholesale pricing for businesses</div>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border bg-card p-6 shadow-[var(--shadow-card)] md:p-8">
        <div className="mb-6 grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Haad Bin Umer"
              className="w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none transition focus:border-gold"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="03XX XXXXXXX"
              className="w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none transition focus:border-gold"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Phone Brand <span className="text-red-500">*</span>
            </label>
            <select
              value={form.brand}
              onChange={(e) => setForm({ ...form, brand: e.target.value })}
              className="w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none transition focus:border-gold"
            >
              <option value="">Select brand</option>
              {BRANDS.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
            {form.brand === "Other" && (
              <input
                value={customBrand}
                onChange={(e) => setCustomBrand(e.target.value)}
                placeholder="Enter your phone brand"
                className="mt-2 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none transition focus:border-gold"
              />
            )}
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Phone Model <span className="text-red-500">*</span>
            </label>
            <input
              value={form.model}
              onChange={(e) => setForm({ ...form, model: e.target.value })}
              placeholder="e.g. iPhone 16 Pro Max, Galaxy S25"
              className="w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none transition focus:border-gold"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Quantity
            </label>
            <input
              type="number"
              min="1"
              value={form.quantity}
              onChange={(e) => setForm({ ...form, quantity: e.target.value })}
              className="w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none transition focus:border-gold"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Additional Notes
          </label>
          <textarea
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
            placeholder="Color preference, design type, delivery city, etc."
            rows={3}
            className="w-full resize-none rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none transition focus:border-gold"
          />
        </div>

        <AnimatedSubmitButton disabled={!valid} onClick={submit} />

        <p className="mt-3 text-center text-xs text-muted-foreground">
          Call us directly at{" "}
          <a href={`tel:+92${WA_NUMBER.slice(1)}`} className="font-bold text-navy hover:text-gold">
            0322 0066229
          </a>
        </p>
      </div>
    </div>
  );
}
