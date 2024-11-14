import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

const config = {
	providers: [Google],
	basePath: "/api/auth",
} satisfies NextAuthConfig;

export const { handlers, signIn, signOut, auth } = NextAuth(config);
