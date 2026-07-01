import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "amz-dev-secret-change-in-production";
const JWT_EXPIRES_IN = "7d";

if (!process.env.JWT_SECRET) {
  console.warn(
    "⚠️  JWT_SECRET is not set. Using insecure dev secret. Set JWT_SECRET env var in production.",
  );
}

export type JwtPayload = {
  userId: number;
  email: string;
};

export function signToken(payload: JwtPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export function verifyToken(token: string): JwtPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch {
    return null;
  }
}
