import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"
// import { db } from "../../../firebase";
// import { FirebaseAdapter } from "@next-auth/firebase-adapter";

export default NextAuth({
  
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  
  // adapter: FirebaseAdapter(db),
});