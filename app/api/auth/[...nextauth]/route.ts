import NextAuth from "next-auth";
import NaverProvider from "next-auth/providers/naver";

const handler = NextAuth({
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID || "",
      clientSecret: process.env.NAVER_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.SECRET_KEY,
  callbacks: {
    session({ session, token, user }) {
      if (!session.user?.email) {
        new Error("이메일이 존재하지 않습니다");
      }

      return session;
    },
  },
});

export { handler as GET, handler as POST };
