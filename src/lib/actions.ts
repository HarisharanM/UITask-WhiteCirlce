"use server"

import { signIn } from "@/lib/auth"
import { AuthError } from "next-auth"
import { redirect } from "next/navigation"

export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    // We pass `redirectTo: false` to handle the redirect manually.
    // This gives us more control over the success and error paths.
    await signIn("credentials", {
      ...Object.fromEntries(formData),
      redirectTo: "/",
    })
  } catch (error) {
    // The `signIn` function throws an error on both success (redirect) and failure.
    // We need to check the type of error to see what happened.

    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          // This is a normal login failure.
          return "Invalid email or password."
        default:
          // This could be a configuration or server error.
          return "Something went wrong. Please try again."
      }
    }

    // IMPORTANT: If the error is not an AuthError, it's likely the successful
    // redirect error thrown by Next.js. We must re-throw it to complete the redirect.
    throw error
  }
}

