"use client"

import { IoIosPeople } from "react-icons/io";
import { PiNotePencilFill } from "react-icons/pi";
import { GiDiscussion } from "react-icons/gi";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import AdminMenu from "./AdminMenu";

const DashboardLayout = ({ children }) => {
    const [response, setResponse] = useState()
    const [dashboard, setDashboard] = useState('')

    const handleSubmit = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/studentAccount');
            console.log('Response:', response);
            setResponse(response.data)
        } catch (error) {
            console.error('Error:', error);
        }
    };


    useEffect(() => {
        const currentPath = window.location.pathname;

        if (currentPath === "/Admin/AdminDashboard/StudentRecords") {
            setDashboard('StudentRecords');
        } else if (currentPath === "/Admin/AdminDashboard/Counselling") {
            setDashboard('Counselling');
        } else if (currentPath === "/Admin/AdminDashboard/Reports") {
            setDashboard('Reports');
        }
    }, []);

    return (
        <AdminMenu>
            <div className="w-full h-full">
                <div className="w-full p-5 text-md font-bold">
                    Welcome Back!
                </div>
                <div className="flex justify-center gap-4 items-center">
                    <div className="text-md font-bold">Dashboard</div>
                    <div className={`flex bg-gray-400 text-xs rounded-lg `}>
                        <Link href={'/Admin/AdminDashboard/StudentRecords'}
                            className={`hover:bg-amber-400 ${dashboard === 'StudentRecords' && 'bg-amber-300'} rounded-lg grid justify-center p-1 items-center`}>
                            <div className="flex justify-center"><IoIosPeople size={32} /></div>
                            Student Records
                        </Link>
                        <Link href={'/Admin/AdminDashboard/Reports'}
                            className={`hover:bg-amber-400 ${dashboard === 'Reports' && 'bg-amber-300'} rounded-lg grid justify-center p-1 items-center`}>
                            <div className="flex justify-center"><PiNotePencilFill size={32} /></div>
                            Reports
                        </Link>
                        <Link href={'/Admin/AdminDashboard/Counselling'}
                            className={`hover:bg-amber-400 ${dashboard === 'Counselling' && 'bg-amber-300'} rounded-lg grid justify-center p-1 items-center`}>
                            <div className="flex justify-center"><GiDiscussion size={32} /></div>
                            Counselling
                        </Link>
                    </div>
                </div>
                <div className="grid justify-center items-center">
                    {children}
                </div>
            </div>
        </AdminMenu>
    );
}

export default DashboardLayout;