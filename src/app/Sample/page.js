"use client"

import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';

function AuthComponent() {
    const { data: session } = useSession();

    const handleSignIn = () => {
        signIn('credentials', {
            email: 'Aron@gmail.com',
            password: '1'
        })
    }
    if (session) {
        return (
            <div>
                <p>Welcome, {session.user.username}!</p>
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        );
    } else {
        return (
            <div>
                <p>You are not signed in.</p>
                <button onClick={handleSignIn}>Sign in</button>
            </div>
        );
    }
}

export default AuthComponent;
