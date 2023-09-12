import { useSession } from 'next-auth/react';
import Header from './Header';
import Footer from './Footer';

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
        return (
            <>
                <Header />
                <p>Unauthorized</p>
                <Footer />
            </>
        )
    }
    return <>{children}</>;
}

export { PrivateRoute, PrivateRouteAdmin };
