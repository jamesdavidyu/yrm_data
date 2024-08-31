import { authOptions } from "@/lib/authOptions";
import { getYRMDataApiHttpClient } from "@/lib/yrm-data-api-http-client";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };