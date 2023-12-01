import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import UpstashRedis from "upstash-redis";

const upstashRedis = new UpstashRedis({
  url: process.env.UPSTASH_REDIS_URL,
  password: process.env.UPSTASH_REDIS_PASSWORD,
});

const authOptions = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session(session, user) {
      // Fetch user roles from Upstash Redis and add them to the session
      const roles = await upstashRedis.get(`user:${user.id}:roles`);
      return { ...session, roles: roles ? JSON.parse(roles) : [] };
    },
    async jwt(token, user) {
      // Add roles to the JWT token
      if (user) {
        const roles = await upstashRedis.get(`user:${user.id}:roles`);
        token.roles = roles ? JSON.parse(roles) : [];
      }
      return token;
    },
  },
  // Add other authOptions as needed
};

export default NextAuth(authOptions);
