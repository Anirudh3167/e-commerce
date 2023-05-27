import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';
import path from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

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
          
            const email = req.body['email'];
            const password = req.body['password'];

            //Find the absolute path of the json directory
            const jsonDirectory = path.join(process.cwd(), 'DBMS');
            //Read the json data file data.json
            const fileContents = await fs.readFile(jsonDirectory + '/users.json', 'utf8');
            const users = JSON.parse(fileContents);

            for (let i = 0; i < users['records'].length; i++) {
                if ((users['records'][i]['email'] === email) && (users['records'][i]['password'] === password)) {
                    return users['records'][i];
                }
            }

           
            // Error in logging the user.
            return null;
        }
    }),
  ],
  pages: {
    signIn: '/signin',
    newUser: '/signup'
  }
})

export { handler as GET, handler as POST }