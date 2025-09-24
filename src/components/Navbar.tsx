"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { getSession, signOut } from "next-auth/react"

export default function Navbar() {
  const [authed, setAuthed] = useState(false)

  useEffect(() => {
    // Check session on mount to toggle buttons
    getSession().then((s) => setAuthed(Boolean(s?.user)))
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-wc_bg/80 backdrop-blur">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/Whitecircle.jpg" alt="Whitecircle" width={28} height={28} priority className="rounded" />
            <span className="text-lg font-bold">
              White<span className="text-wc_lime">circle</span>
            </span>
          </Link>

          <div className="hidden items-center gap-6 text-sm md:flex">
            <Link href="/#process" className="hover:text-wc_lime">Process</Link>
            <Link href="/#benefits" className="hover:text-wc_lime">Benefits</Link>
            <Link href="/#portfolio" className="hover:text-wc_lime">Portfolio</Link>
            <Link href="/#pricing" className="hover:text-wc_lime">Pricing</Link>
            <Link href="/#case-study" className="hover:text-wc_lime">Case Study</Link>

            {/* Auth section */}
            {!authed ? (
              <>
                <Link href="/auth/login" className="rounded-md border border-white/10 px-3 py-2 hover:bg-white/5">
                  Log in
                </Link>
                <Link href="/auth/register" className="rounded-md bg-wc_lime px-3 py-2 font-semibold text-black hover:brightness-95">
                  Sign up
                </Link>
              </>
            ) : (
              <>
                <Link href="/dashboard" className="rounded-md border border-white/10 px-3 py-2 hover:bg-white/5">
                  Dashboard
                </Link>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="rounded-md border border-white/10 px-3 py-2 hover:bg-white/5"
                >
                  Sign out
                </button>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

