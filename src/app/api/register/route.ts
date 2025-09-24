import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json()
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }
    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) {
      return NextResponse.json({ error: "Email already in use" }, { status: 400 })
    }
    const passwordHash = await bcrypt.hash(password, 12)
    await prisma.user.create({ data: { email, name, passwordHash } })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Registration error" }, { status: 500 })
  }
}
