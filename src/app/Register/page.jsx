"use client"

import { useState, useEffect } from "react";
import AccountModal from "@/utils/AccountModal";
import axios from "axios";
import Layout from "@/components/Layout";
import Link from "next/link";

const Register = ({ setActive }) => {
    const closeModal = () => {
        setActive('');
    };

    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [credentials, setCredentials] = useState()
    const [uploading, setUploading] = useState(false)
    const [idNum, setIdNum] = useState("")

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleIdNUmChange = (e) => {
        setIdNum(e.target.value)
    }

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handlePictureChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                if (file.type.startsWith("image/")) {
                    setCredentials(reader.result);

                } else {
                    setCredentials('');
                }
            };
        }


    };

    const data = {
        email: email,
        idNumber: idNum,
        phoneNumber: phoneNumber,
        credentials: credentials,
        password: confirmPassword
    };
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'sikretong-malupet',
        'Accept': 'application/json',
    };

    const handleSubmit = async (e) => {
        setUploading(true)
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/studentAccount', data, { headers });
            console.log('Response:', response.data);
            setActive('sendCode');
            setUploading(false)
        } catch (error) {
            console.error('Error:', error);
            setUploading(false)
        }
    };



    return (
        <Layout>
            <AccountModal closeModal={closeModal}>
                <div className="bg-white p-6 shadow-lg z-10">
                    <div className="mx-4">
                        <div className="flex flex-col text-xs justify-center">
                            <h2 className="text-2xl text-center font-semibold">Register</h2>
                            <h4 className="italic py-4 text-center">Please enter the needed information below.</h4>
                        </div>
                        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                            <div className="grid">
                                <div className="mb-4 text-sm">
                                    <input
                                        type="email"
                                        className="w-full text-xs px-3 py-2 border border-black"
                                        value={email}
                                        onChange={handleEmailChange}
                                        placeholder="EMAIL"
                                        required
                                    />
                                </div>
                                <div className="mb-4 text-sm">
                                    <input
                                        type="tel"
                                        className="w-full text-xs px-3 py-2 border border-black"
                                        value={phoneNumber}
                                        onChange={handlePhoneNumberChange}
                                        placeholder="PHONE NUMBER"
                                        maxLength={13}
                                        required
                                    />
                                </div>
                                <div className="mb-4 text-sm">
                                    <input
                                        type="text"
                                        value={idNum}
                                        className="w-full text-xs px-3 py-2 border border-black"
                                        onChange={handleIdNUmChange}
                                        placeholder="ID Number"
                                        required
                                    />
                                </div>
                                <div className="mb-4 text-sm">
                                    <input
                                        type="password"
                                        className="w-full text-xs px-3 py-2 border border-black"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        placeholder="PASSWORD"
                                        required
                                    />
                                </div>
                                <div className="mb-4 text-sm">
                                    <input
                                        type="password"
                                        className="w-full text-xs px-3 py-2 border border-black"
                                        value={confirmPassword}
                                        onChange={handleConfirmPasswordChange}
                                        placeholder="CONFIRM PASSWORD"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid">

                                <div className="mb-4 text-sm">
                                    <div>Please upload your school credentials.</div>
                                    <div className="italic mt-4">Make sure the file is in *jpg/*png file format</div>
                                    <input
                                        id="credentials"
                                        type="file"
                                        className="w-full text-xs px-3 mt-2 py-2 border border-black"
                                        onChange={handlePictureChange}
                                        accept="image/*"
                                        title="Credentials"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className={`w-full py-1 my-1 px-4 ${uploading ? "bg-gray-600" : 'bg-fuchsia-950 hover:bg-blue-600'}  text-white `}
                                    disabled={uploading}
                                >
                                    Register
                                </button>
                                <Link href={'/Login'} onClick={() => setActive('button1')}
                                className="text-blue-500 cursor-pointer text-xs text-end">
                                    Already have an account? Log in here.
                                </Link>
                            </div>

                        </form>
                    </div>
                </div>
            </AccountModal>
        </Layout>
    );
}

export default Register;
