"use client"

import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

const AdminLayout = ({ children }) => {

    return (
        <div className={`w-full`}>
            {children}
            <div className="fixed bottom-0 w-screen">
                  <Footer />
            </div>
        </div>
    );
};

export default AdminLayout;
