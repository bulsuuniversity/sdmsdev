"use client"

import AdminMenu from "@/components/AdminMenu";
import axios from "axios";
import { useSession } from "next-auth/react";

const page = () => {
    const session = useSession()
    const handleClick = async () => {
        try {
            const response = await axios.put(`/api/adminAccountUpdate/${session.id}`, {
                name: 'Nicole',
                password: '1',
            });
            if (response.data.error) {
                console.log('Authentication error:', response.data.error);
            } else {
                console.log('Authentication successful:', response.data);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };
    return (
        <AdminMenu>
            <button onClick={handleClick}>Create</button>
        </AdminMenu>
    );
}

export default page;