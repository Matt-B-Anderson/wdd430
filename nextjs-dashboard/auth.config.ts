import type { NextAuthConfig } from "next-auth";

export const authConfig = {
	pages: {
		signIn: "/login",
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			if (nextUrl.pathname.startsWith("/dashboard")) {
				return !!auth?.user;
			}
			return true;
		},
	},
	providers: [],
} satisfies NextAuthConfig;
