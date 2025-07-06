import { db } from "@/db"; // your drizzle instance
import { customerUserAuthenticationSchema } from "@/db/schema/customer-auth";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

export const customerAuth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // or "mysql", "sqlite"
    schema: customerUserAuthenticationSchema,
  }),
  basePath: "/api/customer/auth",
  emailAndPassword: {
    enabled: true,
  },
});
