import { useSession } from 'next-auth/react';
import Header from './Header';
import Footer from './Footer';

// A wrapper component for public routes
function PublicRoute({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>)
}

function PrivateRoute({ children }) {
    const { data: session } = useSession();

    if (!session) {
        return (
            <>
                <Header />
                <p>Please log in to access this page.</p>
                <Footer />
            </>
        )
    }
    return <>{children}</>;
}


function PrivateRouteAdmin({ children }) {
    const { data: session } = useSession();
    if (!session) {
        return (
            <>
                <Header />
                <p>Unauthorized</p>
                <Footer />
            </>
        )
    } else if (session && session.role !== "admin") {
        return(
            <>
                <Header />
                <p>Unauthorized</p>
                <Footer />
            </>
        )
    }
    return <>{children}</>;
}

export { PublicRoute, PrivateRoute, PrivateRouteAdmin };
