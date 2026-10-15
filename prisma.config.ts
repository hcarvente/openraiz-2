// Configuration for the Prisma command-line tool (validate, migrate, generate).
// The running app does not read this file.
import "dotenv/config"; // load DIRECT_URL (and friends) from .env
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Direct (non-pooled) connection: migrations need it. env() throws a clear
    // error if the variable is missing, instead of silently using undefined.
    url: env("DIRECT_URL"),
  },
});
