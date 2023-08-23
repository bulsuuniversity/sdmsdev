import { useState } from "react";
import AccountModal from "@/utils/AccountModal";

const Register = ({ setActive }) => {
    const closeModal = () => {
        setActive('');
    };
    const HandleLogin = () => {
        setActive('button1');
    };

    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [picture, setPicture] = useState(null);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handlePictureChange = (e) => {
        // Handle picture upload logic here
        const file = e.target.files[0];
        setPicture(file);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setActive('sendCode');
        console.log("Register submitted");
        console.log("Email:", email);
        console.log("Phone Number:", phoneNumber);
        console.log("Picture:", picture);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);
    };

    return (
        <AccountModal closeModal={closeModal}>
            <div className="bg-white p-6 shadow-lg z-10">
                <div className="mx-4">
                    <div className="flex flex-col text-xs justify-center">
                        <h2 className="text-2xl text-center font-semibold">Register</h2>
                        <h4 className="italic py-4 text-center">Please enter the needed information below.</h4>
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
                        <div className="mb-4 text-sm">
                            <input
                                type="tel"
                                className="w-full text-xs px-3 py-2 border border-black"
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                                placeholder="PHONE NUMBER"
                                // required
                            />
                        </div>
                        <div className="mb-4 text-sm">
                            <input
                                type="file"
                                className="w-full text-xs px-3 py-2 border border-black"
                                onChange={handlePictureChange}
                                accept="image/*"
                            />
                        </div>
                        <div className="mb-4 text-sm">
                            <input
                                type="password"
                                className="w-full text-xs px-3 py-2 border border-black"
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder="PASSWORD"
                                // required
                            />
                        </div>
                        <div className="mb-4 text-sm">
                            <input
                                type="password"
                                className="w-full text-xs px-3 py-2 border border-black"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                placeholder="CONFIRM PASSWORD"
                                // required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 my-4 px-4 bg-fuchsia-950 text-white hover:bg-blue-600"
                        >
                            Register
                        </button>
                        <div onClick={HandleLogin} className="text-blue-500 cursor-pointer text-xs text-end">
                            Already have an account? Log in here.
                        </div>
                    </form>
                </div>
            </div>
        </AccountModal>
    );
}

export default Register;
