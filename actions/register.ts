"use server";

import bcrypt from "bcrypt";
import * as z from "zod";

import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) return { error: "Invalid fields!" };

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const exisitngUser = await getUserByEmail(email);

  if (exisitngUser) return { error: "Email already in use!" };

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // TODO: Send verification email

  return { success: "User created!" };
};
