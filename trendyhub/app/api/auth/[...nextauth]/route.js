import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
        // Name to display on sign in form (Eg. sign in with ...)
        name: "TrendyHub",

        credentials: {
            email: { label:"Email",type:"email",placeholder:"Your Email id"},
            password: {label:"Password",type:"password",placeholder:"Your password"}
        },
        async authorize(credentials,req) {
            const user = { id: "1", name: "John Doe", email: "jsmith@example.com", password: "example"};

            if (user) {
                // This will be replaced by JWT tokens later.
                return user;
            } else {
                // Error in logging the user.
                return null;
            }
        }
    }),
  ],
  pages: {
    signIn: '/signin',
    newUser: '/signup'
  }
})

export { handler as GET, handler as POST }