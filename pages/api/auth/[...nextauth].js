import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
// import { db } from "../../../firebase";
// import { FirebaseAdapter } from "@next-auth/firebase-adapter";

export default NextAuth({
  
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.LOGIN_GITHUB_ID,
      clientSecret: process.env.LOGIN_GITHUB_SECRET,
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET
    // })
    
  ],
  pages: {
    // signIn: '/auth/signin',
    // signOut: '/auth/signout',
  },
  callbacks:{
    async session({session,token,user}){
      session.user.usename = session.user.name
      .split("")
      .join("")
      .toLocaleLowerCase()

      session.user.uid = token.sub
      return session;
    }
  }
  
  // adapter: FirebaseAdapter(db),
});