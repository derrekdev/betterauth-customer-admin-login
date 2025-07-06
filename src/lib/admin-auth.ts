import { db } from "@/db"; // your drizzle instance
import { adminUserAuthenticationSchema } from "@/db/schema/admin-auth";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

export const adminAuth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // or "mysql", "sqlite"
    schema: adminUserAuthenticationSchema,
  }),
  basePath: "/api/admin/auth",
  emailAndPassword: {
    enabled: true,
  },
});
