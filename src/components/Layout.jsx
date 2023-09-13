"use client"

import Header from "../components/Header"
import Footer from "./Footer";
import { PublicRoute } from "./auth";

const Layout = ({ children, setViewPort }) => {


    return (
        <PublicRoute>
            <div className="w-full mt-16">
                <Header setViewPort={setViewPort} />
                {children}
                <Footer />
            </div>
        </PublicRoute>
    );
}

export default Layout;