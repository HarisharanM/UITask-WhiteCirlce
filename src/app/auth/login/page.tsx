"use client"

import { useFormState, useFormStatus } from "react-dom"
import { authenticate } from "@/lib/actions"
import Link from "next/link"

export default function LoginPage() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)

  return (
    <div className="mx-auto max-w-md px-6 py-16">
      <h1 className="mb-6 text-2xl font-bold">Log in</h1>
      <form action={dispatch} className="space-y-4">
        <input
          className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2"
          placeholder="Email"
          type="email"
          name="email"
          required
        />
        <input
          className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2"
          placeholder="Password"
          type="password"
          name="password"
          required
        />
        {errorMessage && <p className="text-red-400">{errorMessage}</p>}
        <LoginButton />
        <p className="text-sm text-wc_muted">
          Don&apos;t have an account?{" "}
          <Link href="/auth/register" className="text-wc_lime hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  )
}

function LoginButton() {
  const { pending } = useFormStatus()
  return (
    <button
      className="w-full rounded-md bg-wc_lime px-4 py-2 font-semibold text-black transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-50"
      disabled={pending}
    >
      {pending ? "Logging in..." : "Log in"}
    </button>
  )
}

