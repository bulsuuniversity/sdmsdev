import { useSession } from 'next-auth/react';
import Header from './Header';
import Footer from './Footer';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';


function PublicRoute({ children }) {
    const { data: session } = useSession();
    const router = useRouter()

    useEffect(() => {
        if (session && session.role === 'admin') {
            router.push("/Admin")
        }
    }, [])

    return (
        <>
            <Header />
            {children}
        </>)
}

function PrivateRoute({ children }) {
    const router = useRouter()
    const handleLogout = (e) => {
        e.preventDefault();
        signOut()
        router.push("/Login")
    };
    const { data: session } = useSession();

    if (!session) {
        return (
            <>
                <Header />
                <p className='my-20'>Please log in to access this page.</p>
            </>
        )
    } else if (session && session.status !== 'Registered') {
        return (
            <>
                <Header />
                <p className='my-20'>Please wait for the admin to Approve your account</p>
                <button onClick={handleLogout}>Log out</button>
            </>
        )
    }
    else if (session && session.role === 'admin') {
        useEffect(() => {
            router.push("/Admin")
        }, [])
    }
    return <>{children}</>;
}


function PrivateRouteAdmin({ children }) {
    const { data: session } = useSession();
    const router = useRouter()
    const handleLogout = (e) => {
        e.preventDefault();
        signOut()
        router.push("/Login")
    };
    if (!session) {
        return (
            <>
                <Header />
                <div className='flex gap-10 my-20'>
                    <p>Unauthorized</p>
                    <Link href={"/Admin/AdminLogin"}>Click to Login Admin</Link>
                </div>
            </>
        )
    } else if (session && session.role !== "admin") {
        return (
            <>
                <Header />
                <div className='flex gap-14 my-20'>
                    <p>Unauthorized</p>
                    <button onClick={handleLogout}>Log out</button>
                </div>

            </>
        )
    } else if (session && session.role === "admin" && session.status !== "Registered") {
        return (
            <>
                <Header />
                <div className='grid gap-4 my-20'>
                    <p>Unauthorized</p>
                    <p>Please wait for the Admin to approve your account</p>
                    <a href='mailto:bulsubulacanUniversity@gmail.com'>Click to email the Admin</a>                </div>
                <button onClick={handleLogout}>Log out</button>
            </>
        )
    }
    return <>{children}</>;
}

export { PublicRoute, PrivateRoute, PrivateRouteAdmin };
