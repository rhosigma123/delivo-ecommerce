import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";
import apiClient from "@/lib/axiosInterceptor";

interface Credentials {
  phone: string;
  otp: string;
  verificationId: string;
}

async function refreshAccessToken(token: any) {
  try {
    const response = await apiClient.post("/auth/refresh-token", {
      refreshToken: token.refreshToken,
    });

    const accessToken = response.data.accessToken;
    if (!accessToken) {
      throw new Error("Failed to refresh token");
    }

    const decodedToken = jwtDecode<{ exp?: number }>(accessToken);

    if (!decodedToken.exp) {
      throw new Error("No Expiry in decoded token");
    }

    return {
      ...token,
      accessToken: accessToken,
      refreshToken: token.refreshToken,
      accessTokenExpires: decodedToken.exp * 1000,
    };
  } catch (error) {
    console.error("Failed to refresh access token:", error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: {
          label: "Phone",
          type: "text",
        },
      },
      async authorize(credentials) {
        const { phone, otp, verificationId } = credentials as Credentials;

        try {
          const response = await apiClient.post("/auth/login/otp/verify", {
            phone,
            otp,
            verificationId,
          });

          const user = response.data.user;
          console.log(user);

          if (user) {
            return {
              id: user.id,
              fullName: user.fullName,
              role: user.role,
              accessToken: user.token,
              refreshToken: user.refreshToken,
            };
          } else {
            throw new Error("Invalid phone or password");
          }
        } catch (error) {
          console.error("Login error:", error);
          throw new Error("Login failed. Please try again.");
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, account, user }) {
      // Initial login, store user info and token
      if (account && user) {
        return {
          ...token,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
          id: user.id,
          fullName: user.fullName,
          role: user.role,
          accessTokenExpires: Date.now() + 60 * 60 * 1000, // 1 hour expiry time
        };
      }

      // Check if the token is still valid
      if (Date.now() < token.accessTokenExpires) {
        return token; // Token is valid, return it
      }

      // Token has expired, refresh it
      return refreshAccessToken(token);
    },

    async session({ session, token }) {
      session.user = token;

      return session;
    },
  },

  pages: {
    signIn: "/signin",
    signOut: "/signin",
    error: "/error",
  },
  debug: true,
});
