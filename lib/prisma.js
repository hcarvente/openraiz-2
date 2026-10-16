// The single shared Prisma Client for the whole app. SERVER-SIDE ONLY: import it
// from Route Handlers and Server Components, never from client components, so the
// database connection string never reaches the browser.
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma/client";

function createPrismaClient() {
  // DATABASE_URL is the pooled Neon connection string (see .env.example).
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not set. Copy .env.example to .env and fill it in.");
  }
  const adapter = new PrismaPg({ connectionString });
  return new PrismaClient({ adapter });
}

// In development, Next.js reloads server code on every edit, which would create a
// new client (and a new set of database connections) each time. Keeping the client
// on `globalThis` lets reloads reuse the same one.
const globalForPrisma = globalThis;

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
