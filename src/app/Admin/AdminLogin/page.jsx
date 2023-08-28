"use client"

import AdminLayout from '@/components/AdminLayout';
import { useSession, signIn, signOut } from 'next-auth/react';

const page = () => {
    const { data: session } = useSession();

    const handleSignIn = () => {
        signIn('credentials', {
            username: 'Nicole',
            password: '1'
        })
    }
    if (session) {
        console.log(session)
        return (
            <AdminLayout>
                <p>Welcome, {session.user.username}!</p>
                <button onClick={() => signOut()}>Sign out</button>
            </AdminLayout>
        );
    } else {
        return (
            <AdminLayout>
                <p>You are not signed in.</p>
                <button onClick={handleSignIn}>Sign in</button>
            </AdminLayout>
        );
    }
}

export default page;

