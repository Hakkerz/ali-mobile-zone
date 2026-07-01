import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/auth/logout")({
  server: {
    handlers: {
      POST: async () => {
        const headers = new Headers();
        const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
        headers.set("Set-Cookie", `token=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${secure}`);

        return Response.json({ success: true }, { headers });
      },
    },
  },
});
