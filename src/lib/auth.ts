import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt"

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/auth/login", // Redirect users to this page if they are not authenticated
  },
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      // We are using a custom login form, so the credentials object can be minimal
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const email = credentials.email as string
        const password = credentials.password as string

        const user = await prisma.user.findUnique({ where: { email } })

        if (!user || !user.passwordHash) {
          console.log("Authentication failed: User not found or has no password.")
          return null
        }

        const passwordsMatch = await bcrypt.compare(password, user.passwordHash)

        if (!passwordsMatch) {
          console.log("Authentication failed: Passwords do not match.")
          return null
        }

        return { id: user.id, email: user.email, name: user.name }
      },
    }),
  ],
})
