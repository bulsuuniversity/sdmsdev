"use client"

import axios from "axios";
import { url, headers } from "@/app/libs/api";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useProfileData } from "@/app/libs/store";
import AdminMenu from "@/components/AdminMenu";

const page = () => {
    const { data: session } = useSession()
    const { profileData, getProfileData } = useProfileData()
    const emailData = {
        email: profileData.email,
        subject: "Key for SDMS Registration",
        message: "Hello we received your report and our officers are currently working on it",
        html: `<p>Hello we received your report and our officers are currently working on it</p>`
    }

    const sendMailer = async () => {
        try {
            const sendCode = await axios.post(`${url}/api/AdminSendMail`, emailData, { headers });
            console.log(sendCode)
        } catch (error) {
            console.error('Error:', error);
            setUploading(false)
        }
    }

    useEffect(() => {
        console.log("session adminreports", session)
        // getProfileData(session.id)
    }, [session])

    return (
        <AdminMenu>
            <div className="m-10">
                <button onClick={sendMailer} className="bg-blue-600 p-4">Send Message</button>
            </div>
        </AdminMenu>

    );
}

export default page;