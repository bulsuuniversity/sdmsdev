"use client"

import axios from "axios";
import { url, headers } from "@/app/libs/api";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const page = () => {
    const {data: session} = useSession()
    const phoneNumber = '09273420007'
    const message = "Hello we received your report and our officers are currently working on it"
    const handleSend = async () => {
        try {
            const response = await axios.post(`${url}/api/sendSms`, {phoneNumber, message}, { headers })
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        console.log(session)
    }, [session])

    return (
        <div className="m-10">
            <button onClick={() => handleSend()} className="bg-blue-600 p-4">Send Message</button>
        </div>
    );
}

export default page;