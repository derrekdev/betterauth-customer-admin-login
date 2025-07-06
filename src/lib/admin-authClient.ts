import { createAuthClient } from "better-auth/react";
export const adminAuthClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  // baseURL: "http://localhost:3000",
  basePath: "/api/admin/auth",
});
