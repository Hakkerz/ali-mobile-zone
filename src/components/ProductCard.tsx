import { useRef, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { Heart, ShoppingCart, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import type { Product } from "@/lib/products";
import { BEST_SELLER_IDS, NEW_IDS } from "@/lib/products";
import { useCart, useWishlist, formatPrice } from "@/lib/store";
import { waProduct } from "@/lib/whatsapp";
import { ProductImage } from "./ProductImage";

export function ProductCard({ product }: { product: Product }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { add } = useCart();
  const { has, toggle } = useWishlist();
  const wished = has(product.id);
  const isBest = BEST_SELLER_IDS.has(product.id);
  const isNew = NEW_IDS.has(product.id);
  const lowStock = product.stock > 0 && product.stock < 5;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col overflow-hidden rounded-2xl glass-card transition-all duration-300 hover:translate-y-[-2px]"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="absolute left-3 top-3 z-10 flex flex-col gap-1" style={{ transform: "translateZ(20px)" }}>
        {isBest && (
          <span className="rounded-full bg-gold px-2 py-0.5 text-[10px] font-bold text-navy shadow-[0_0_10px_color-mix(in_oklab,_var(--gold),_50%)]">
            ★ BEST SELLER
          </span>
        )}
        {isNew && (
          <span className="rounded-full bg-whatsapp px-2 py-0.5 text-[10px] font-bold text-white shadow-[0_0_10px_color-mix(in_oklab,_var(--whatsapp),_50%)]">
            NEW
          </span>
        )}
        {lowStock && (
          <span className="rounded-full bg-destructive px-2 py-0.5 text-[10px] font-bold text-white">
            Only {product.stock} left!
          </span>
        )}
        {product.stock === 0 && (
          <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-bold">
            Out of stock
          </span>
        )}
      </div>
      <button
        aria-label="Wishlist"
        onClick={() => {
          toggle(product.id);
          toast(wished ? "Removed from wishlist" : "Added to wishlist ❤️");
        }}
        className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full glass-card hover:border-whatsapp/50"
        style={{ transform: "translateZ(20px)" }}
      >
        <Heart
          className={`h-4 w-4 ${wished ? "fill-destructive text-destructive" : "text-foreground"}`}
        />
      </button>

      <Link
        to="/products/$id"
        params={{ id: product.id }}
        className="block aspect-square overflow-hidden"
      >
        <ProductImage
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-4" style={{ transform: "translateZ(10px)" }}>
        <div>
          <div className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
            {product.brand}
          </div>
          <Link
            to="/products/$id"
            params={{ id: product.id }}
            className="line-clamp-2 text-sm font-semibold text-foreground transition-colors hover:text-neon"
          >
            {product.name}
          </Link>
        </div>
        <div className="text-lg font-extrabold text-gradient">{formatPrice(product.price)}</div>
        <div className="mt-auto flex flex-col gap-2">
          <button
            disabled={product.stock === 0}
            onClick={() => {
              add(product.id);
              toast.success("Added to cart 🛒");
            }}
            className="flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-3 py-2 text-xs font-bold text-white shadow-[0_0_12px_color-mix(in_oklab,_var(--whatsapp),_30%)] transition-all hover:shadow-[0_0_20px_color-mix(in_oklab,_var(--whatsapp),_50%)] hover:brightness-110 disabled:opacity-50"
          >
            <ShoppingCart className="h-4 w-4" /> Add to Cart
          </button>
          <a
            href={waProduct(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card flex items-center justify-center gap-2 rounded-lg border-whatsapp/30 px-3 py-2 text-xs font-bold text-whatsapp transition-all hover:bg-whatsapp/15 hover:border-whatsapp/60"
          >
            <MessageCircle className="h-4 w-4" /> Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
