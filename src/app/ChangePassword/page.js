"use client"

import AccountModal from "@/utils/AccountModal";
import ConfirmationModal from "@/utils/ConfirmationModal";
import useLoading from "@/utils/Loading";
import { useProfileData } from "../libs/store";
import { useState } from "react";
import axios from "axios";
import { url, headers } from "../libs/api"; 


const Page = () => { 
    const [email, setEmail] = useState("");
    const { profileData } = useProfileData(); 
    const { loading, startLoading, stopLoading } = useLoading();
    const [sent, setSent] = useState(false);

    const handleSendCode = async (e) => {
        e.preventDefault();
        startLoading();
        try {
            const emailData = {
                email,
                subject: "Change password link",
                message: `Greetings! This is your password link. Please keep 
                it private and do not share it with other students.`,
                html: `<p>Greetings! This is your password link. Please keep 
                it private and do not share it with other students.</p>
                <a href="${url}/EnterPassword/${email}">Click this.</a> Ticket Number:`,
            };

            const sendCode = await axios.post(`${url}/api/Mailer`, emailData, headers);
            console.log(sendCode);
            setSent(true);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            stopLoading();
        }
    };

    return (
        <AccountModal>
            {sent && <ConfirmationModal>
                <div>Please open your email account for the link</div>
            </ConfirmationModal>}
            <div className="grid justify-center items-center p-6 bg-white">
                <div className="text-bold text-center text-2xl">
                    {profileData.id !== "" ? 'Forgot Password' : 'Change Password'}
                </div>
                <div className="text-xs italic py-4">
                    Please enter the needed information below.
                </div>
                <form className="grid gap-2" onSubmit={handleSendCode}>
                    <input
                        type="email"
                        className="w-full text-xs px-3 py-2 border"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                        required
                    ></input>
                    <button
                        type="submit"
                        className={`text-white py-2 w-full ${loading ? 'bg-gray-600' : "bg-purple-600"}`}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </AccountModal>
    );
};

export default Page;
