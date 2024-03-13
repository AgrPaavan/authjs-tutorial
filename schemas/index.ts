import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Please enter an email address",
  }),
  password: z.string().min(1, {
    message: "Please enter a password",
  }),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message: "Please enter a name",
  }),
  email: z.string().email({
    message: "Please enter an email address",
  }),
  password: z.string().min(6, {
    message: "Please enter a password with minimum 6 characters",
  }),
});
