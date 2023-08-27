"use client"

import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect } from 'react';

function AuthComponent() {
    const { data: session } = useSession();

    useEffect(() => {
        console.log(session)
    }, [session])

    const handleSignIn = () => {
        signIn('credentials', {
            email: 'Aron@gmail.com',
            password: '1'
        })
    }
    if (session) {
        return (
            <div>
                <p>Welcome, !</p>
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
