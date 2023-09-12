"use client"


import Footer from "./Footer";
import { PrivateRouteAdmin } from "./auth";

const AdminLayout = ({ children }) => {

    return (
        <PrivateRouteAdmin>
            <div className={`w-full`}>
                {children}
                <div className="fixed bottom-0 w-screen">
                    <Footer />
                </div>
            </div>
        </PrivateRouteAdmin>
    );
};

export default AdminLayout;
