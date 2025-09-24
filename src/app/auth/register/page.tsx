"use client"
import { useState } from "react"
import Link from "next/link"

export default function RegisterPage() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [ok, setOk] = useState(false)

  return (
    <div className="mx-auto max-w-md px-6 py-16">
      <h1 className="mb-6 text-2xl font-bold">Create account</h1>
      <form
        className="space-y-4"
        onSubmit={async (e) => {
          e.preventDefault()
          setError(null)
          setOk(false)
          const res = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, name, password }),
          })
          const data = await res.json()
          if (!res.ok) setError(data.error || "Registration failed")
          else setOk(true)
        }}
      >
        <input className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2" placeholder="Name (optional)" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="text-red-400">{error}</p>}
        {ok && <p className="text-green-400">Account created, log in now.</p>}
        <button className="w-full rounded-md bg-wc_teal/20 px-4 py-2 font-semibold text-wc_teal hover:bg-wc_teal/30">Sign up</button>
      </form>
      <p className="mt-4 text-sm">
        Already have an account? <Link href="/auth/login" className="text-wc_lime">Log in</Link>
      </p>
    </div>
  )
}
