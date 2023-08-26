"use client"

import { useState, useEffect } from "react";
import AccountModal from "@/utils/AccountModal";
import ConfirmationModal from "@/utils/ConfirmationModal";
import axios from "axios";
import Layout from "@/components/Layout";

const Login = ({ setActive, setLogedIn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setsuccess] = useState(false)
    const [setUp, setSetup] = useState(false)


    const closeModal = () => {
        setActive('');
    };
    const handleRegister = () => {
        setActive('button2');
    };



    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setsuccess(true);
    };

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                setsuccess(false);
            }, 1000);
            return () => {
                clearTimeout(timer);
                setActive('button1')
                setSetup(true)
            };
        }
    }, [success]);

    const handleOkay = () => {
        setSetup(false);
        setLogedIn(true)
        setActive('')
    }




    return (
        <Layout>
        <AccountModal closeModal={closeModal}>
            <div className="bg-white p-6 shadow-lg z-10">
                <div className="mx-4">
                    <div className="flex flex-col text-xs justify-center">
                        <h2 className="text-2xl text-center font-semibold">Login</h2>
                        <h4 className="italic py-4 text-center">Please enter the needed information below</h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 text-sm">
                            <input
                                type="email"
                                className="w-full text-xs px-3 py-2 border border-black"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="EMAIL"
                            // required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                className="w-full text-xs px-3 py-2 border border-black"
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder="PASSWORD"
                            // required
                            />
                            <div className="text-blue-500 text-xs text-end">Forgot your password? Click here.</div>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 my-4 px-4 bg-fuchsia-950 text-white  hover:bg-blue-600"
                        >
                            Log In
                        </button>
                        <div onClick={handleRegister} className="text-blue-500 cursor-pointer text-xs text-end">Don't have account? ?Register here.</div>
                    </form>
                </div>
            </div>
            {success && <ConfirmationModal>
                <div className="flex flex-col justify-center p-7 justify-center">
                    <div className="text-2xl font-bold whitespace-normal text-center ">
                        LOGIN SUCCESSFULL!
                    </div>
                    <div className="text-center italic text-sm">Redirecting you now to home page.</div>
                    <span className="loader" />
                </div>
            </ConfirmationModal>}
            {setUp &&
                <ConfirmationModal>
                    <div className="flex flex-col w-96 justify-center p-4 justify-center">
                        <div className="text-2xl font-bold whitespace-normal text-center ">
                            Please setup you profile first!
                        </div>
                        <div className="text-center italic text-sm">Personal information are needed to be filled out first before doing any proccess.</div>
                        <div className="flex justify-center mt-4">
                            <button className="bg-white w-max rounded-md px-5 py-1" onClick={handleOkay}>Okay</button>
                        </div>
                    </div>
                </ConfirmationModal>
            }
        </AccountModal>
        </Layout>
    );
}

export default Login;