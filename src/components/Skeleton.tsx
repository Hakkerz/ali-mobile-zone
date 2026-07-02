export function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-xl bg-foreground/10 ${className}`}
      style={{ animation: "skeleton-pulse 1.5s ease-in-out infinite" }}
    />
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="rounded-2xl border border-glass-border glass-card overflow-hidden">
      <Skeleton className="aspect-square rounded-none" />
      <div className="space-y-2 p-4">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <div className="flex items-center justify-between pt-2">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-8 w-8 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export function ProductDetailSkeleton() {
  return (
    <div className="bg-gradient-to-b from-secondary/40 to-background">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <Skeleton className="mb-6 h-4 w-64" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <Skeleton className="aspect-square rounded-2xl" />
            <div className="mt-3 flex gap-2">
              <Skeleton className="h-20 w-20 rounded-lg" />
              <Skeleton className="h-20 w-20 rounded-lg" />
              <Skeleton className="h-20 w-20 rounded-lg" />
            </div>
          </div>
          <div className="space-y-4">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-8 w-36" />
            <Skeleton className="h-4 w-32" />
            <div className="space-y-2 pt-4">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-3/4" />
            </div>
            <div className="space-y-2 pt-4">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-5 w-full" />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2 pt-4">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-12 rounded-lg" />
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <Skeleton className="h-12 flex-1 rounded-lg" />
              <Skeleton className="h-12 flex-1 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductsPageSkeleton() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="mt-1 h-4 w-32" />
      </div>
      <div className="grid gap-6 md:grid-cols-[240px_1fr]">
        <div className="hidden md:block space-y-4">
          <Skeleton className="h-64 rounded-2xl" />
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
