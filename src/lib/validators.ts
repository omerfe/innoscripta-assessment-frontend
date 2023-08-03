import { z } from "zod";

export const RegisterValidator = z.object({
  name: z
    .string()
    .min(3, {
      message: "Name must be at least 3 characters long",
    })
    .max(50, {
      message: "Name must be at most 50 characters long",
    }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .max(255),
});

export type RegisterCredentials = z.infer<typeof RegisterValidator>;
