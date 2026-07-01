import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useAuth } from "@/hooks/use-auth";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile — Ali Mobile Zone" }] }),
  component: ProfilePage,
});

function ProfilePage() {
  const { user, loading, logout } = useAuth();
  const navigate = Route.useNavigate();
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate({ to: "/login" });
    }
  }, [user, loading, navigate]);

  if (loading)
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-muted-foreground">Loading...</p>
      </div>
    );
  if (!user) return null;

  const handleLogout = async () => {
    setLoggingOut(true);
    await logout();
    navigate({ to: "/" });
  };

  return (
    <div className="min-h-screen bg-background px-4 py-12">
      <div className="mx-auto max-w-md rounded-3xl glass-card p-8">
        <h1 className="text-3xl font-extrabold text-foreground">Your profile</h1>
        <p className="mt-2 text-sm text-muted-foreground">Manage your account and order details.</p>
        <div className="mt-6 space-y-4 rounded-3xl bg-secondary p-5">
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Name</div>
            <div className="mt-1 text-base font-medium text-foreground">{user.name}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
            <div className="mt-1 text-base font-medium text-foreground">{user.email}</div>
          </div>
        </div>
        <button
          onClick={handleLogout}
          disabled={loggingOut}
          className="mt-6 w-full rounded-2xl bg-destructive px-4 py-3 text-sm font-bold text-white transition hover:bg-destructive/90 disabled:opacity-50"
        >
          {loggingOut ? "Logging out..." : "Logout"}
        </button>
        <Link
          to="/"
          className="mt-4 block text-center text-sm text-muted-foreground hover:text-foreground"
        >
          ← Back to shop
        </Link>
      </div>
    </div>
  );
}
