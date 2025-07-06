import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email().trim(),
  password: z.string(),
});

export const registerSchema = z
  .object({
    name: z.string().trim(),
    email: z.string().email().trim(),
    password: z.string().trim().min(8, {
      message: "Password must be atleast 8 characters.",
    }),
    comfirmpassword: z.string().trim().min(8, {
      message: "Password must be atleast 8 characters.",
    }),
    type: z.string(),
  })
  .refine((data) => data.password === data.comfirmpassword, {
    message: "Password doesn't match",
    path: ["comfirmpassword"],
  });
