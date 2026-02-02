import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import clientPromise from "../../../util/mongo";
import { MongoDBAdapter } from "@auth/mongodb-adapter";


export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Eğer error varsa login'e gönder
      if (url.includes("error")) {
        return `${baseUrl}/auth/login`;
      }
      // Başarılı login sonrası profile yönlendir
      return `${baseUrl}/profile`;
    },
  },
  session: {
    strategy: "database",
  },
});