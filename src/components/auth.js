import { useSession } from 'next-auth/react';
import Header from './Header';
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
                <div className='grid justify-center items-center gap-4 my-20'>
                    <p>Unauthorized</p>
                    <div>
                        <iframe src="https://giphy.com/embed/4VY613vurPreyrIHux" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/americangods-season-2-starz-american-gods-4VY613vurPreyrIHux">via GIPHY</a></p>
                    </div>
                    <p>Please wait for the Admin to approve your account</p>
                    <a href='mailto:bulsubulacanUniversity@gmail.com'>Click to email the Admin</a>
                    <button onClick={handleLogout}>Log out</button>
                </div>
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
                <div className='grid justify-center items-center gap-4 my-20'>
                    <p>Unauthorized</p>
                    <div>
                        <iframe src="https://giphy.com/embed/4VY613vurPreyrIHux" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/americangods-season-2-starz-american-gods-4VY613vurPreyrIHux">via GIPHY</a></p>
                    </div>
                    <p>Please wait for the Admin to approve your account</p>
                    <a href='mailto:bulsubulacanUniversity@gmail.com'>Click to email the Admin</a>                </div>
                <button onClick={handleLogout}>Log out</button>
            </>
        )
    }
    return <>{children}</>;
}

export { PublicRoute, PrivateRoute, PrivateRouteAdmin };
