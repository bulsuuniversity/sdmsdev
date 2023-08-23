"use client"

import Header from "../components/Header"
import Footer from "./Footer";

const Layout = ({ children, setViewPort }) => {
    return (
        <div className="w-full mt-14">
            <Header setViewPort={setViewPort}/>
            {children}
            <Footer />
        </div>
    );
}

export default Layout;