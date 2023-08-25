"use client"

import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

const AdminLayout = ({ children }) => {

    return (
        <div className={`w-full `}>
            {children}
            <Footer />
        </div>
    );
};

export default AdminLayout;
