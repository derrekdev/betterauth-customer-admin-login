import { customerAuth } from "@/lib/customer-auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(customerAuth);
