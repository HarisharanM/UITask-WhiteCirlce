"use client"
import { signIn } from "next-auth/react"
import { useState } from "react"
import Link from "next/link"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)

  return (
    <div className="mx-auto max-w-md px-6 py-16">
      <h1 className="mb-6 text-2xl font-bold">Log in</h1>
      <form
        className="space-y-4"
        onSubmit={async (e) => {
          e.preventDefault()
          setError(null)
          const res = await signIn("credentials", {
            email,
            password,
            redirect: false,          
            callbackUrl: "/",         
          })
          if (res?.error) setError("Invalid credentials")
          else if (res?.ok) window.location.href = "/"
        }}
      >
        <input className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="text-red-400">{error}</p>}
        <button className="w-full rounded-md bg-wc_lime px-4 py-2 font-semibold text-black">Sign in</button>
      </form>
      <p className="mt-4 text-sm">
        New here? <Link href="/auth/register" className="text-wc_teal">Create an account</Link>
      </p>
    </div>
  )
}