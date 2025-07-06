import { createAuthClient } from "better-auth/react";
export const customerAuthClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  basePath: "/api/customer/auth",
});
