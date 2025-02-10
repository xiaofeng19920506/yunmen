// app/auth/actions.ts
"use server";

import { redirect } from "next/navigation";

export async function handleSignIn(formData: FormData) {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const response = await fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Failed to sign in");
    }

    // Redirect to the home page on successful sign-in
    redirect("/");
  } catch (error) {
    console.error("Sign-in error:", error);
    throw error;
  }
}

export async function handleSignUp(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const response = await fetch("http://localhost:3000/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to sign up");
    }

    redirect("/");
  } catch (error) {
    console.error("Sign-up error:", error);
    throw error;
  }
}
