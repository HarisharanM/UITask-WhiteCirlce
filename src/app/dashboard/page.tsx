import { auth } from "@/lib/auth"
import Link from "next/link"

export default async function DashboardPage() {
  const session = await auth()
  if (!session?.user) {
    return (
      <div className="mx-auto max-w-md px-6 py-16">
        <p className="mb-4">Not signed in.</p>
        <Link className="text-wc_lime" href="/auth/login">Go to login</Link>
      </div>
    )
  }
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-4 text-2xl font-bold">Dashboard</h1>
      <p>Welcome, {session.user.email}</p>
    </div>
  )
}
