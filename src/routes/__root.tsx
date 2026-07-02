import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "sonner";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Layout } from "../components/Layout";
import { AuthProvider } from "../hooks/use-auth";

function NotFoundComponent() {
  return (
    <Layout>
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <div className="text-8xl font-extrabold text-foreground">404</div>
        <h2 className="mt-2 text-xl font-bold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This page doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 rounded-lg bg-amber px-6 py-3 text-sm font-bold text-navy hover:brightness-110"
        >
          Go back to shop
        </Link>
      </div>
    </Layout>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try refreshing or go home.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-md bg-amber px-4 py-2 text-sm font-bold text-navy"
          >
            Try again
          </button>
          <a href="/" className="rounded-md border border-glass-border bg-background/50 px-4 py-2 text-sm font-bold text-foreground">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ali Mobile Zone — Pakistan's #1 Mobile Accessories Store" },
      {
        name: "description",
        content:
          "Chargers, headphones, earbuds and more. Cash on Delivery nationwide. Order on WhatsApp 0322 0066229.",
      },
      { property: "og:title", content: "Ali Mobile Zone" },
      { property: "og:description", content: "Your Ultimate Mobile Accessories Destination" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Layout>
          <Outlet />
        </Layout>
      </AuthProvider>
      <Toaster position="top-center" richColors />
    </QueryClientProvider>
  );
}
