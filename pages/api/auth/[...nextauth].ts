import NextAuth, { Awaitable, User } from 'next-auth';
import { RequestInternal } from 'next-auth/core';
import CredentialsProvider, { CredentialInput } from 'next-auth/providers/credentials';

export default NextAuth({
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        session: async ({ session, token }) => {
            console.log('token', token);
            if (session?.user) {
                // @ts-ignore
                session.user.id = token.sub;
                // @ts-ignore
                session.user.name = token.username;
            }

            return session;
        },
        jwt: async ({ user, token }) => {
            if (user) {
                // @ts-ignore
                token.username = user.username;
            }
            return token;
        },
    },
    providers: [
        CredentialsProvider({
            credentials: {},
            async authorize(credentials: Record<string, string> | undefined) {
                const user = { id: '1', username: 'Mikhail' };

                if (user) {
                    return { ...user, hello: 'World' };
                } else {
                    return null;
                }
            },
        }),
    ],
});
