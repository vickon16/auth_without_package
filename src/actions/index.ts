"use server";

import {
  FormState,
  LoginFormSchema,
  SessionData,
  sessionOptions,
} from "@/lib/auth";
import { getIronSession } from "iron-session";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getSession = async () => {
  const cookie = cookies();
  const session = await getIronSession<SessionData>(cookie, sessionOptions);

  // validate user from the database, before sending the session;

  return session;
};

export const login = async (
  state: FormState,
  formData: FormData
): Promise<FormState> => {
  const validatedFields = LoginFormSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { username, email, password } = validatedFields.data;

  // check user in the database
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // then get the session;
  const session = await getSession();

  session.userId = new Date().getTime().toString();
  session.email = email;
  session.isLoggedIn = true;
  session.isPro = false;
  session.username = username;

  await session.save();
  redirect("/");
};

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/login");
};

export const changePremium = async () => {
  const session = await getSession();

  session.isPro = !session.isPro;
  await session.save();
  revalidatePath("/profile");
};
