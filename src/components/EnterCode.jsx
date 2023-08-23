import AccountModal from "@/utils/AccountModal";
import { useState, useEffect } from "react";
import ConfirmationModal from "@/utils/ConfirmationModal";

const EnterCode = ({ setActive }) => {
    const [code, setCode] = useState()
    const [submitted, setSubmitted] = useState(false)

    const closeModal = () => {
        setActive('')
    }

    const handleCodeChange = (e) => {
        setCode(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitted(true)
    }
    useEffect(() => {
        if (submitted) {
            const timer = setTimeout(() => {
                setSubmitted(false);
            }, 5000);
            return () => {
                clearTimeout(timer);
                setActive('button1')
            };
        }
    }, [submitted]);
    return (
        <AccountModal closeModal={closeModal}>
            <div className="bg-white p-6 shadow-lg flex justify-center z-10">
                <div className="mx-1 w-3/4">
                    <div className="flex flex-col text-xs justify-center">
                        <h2 className="text-2xl text-center font-semibold">Login</h2>
                        <h4 className="italic text-xs text-center">Please verify if it's you</h4>
                        <div className="bg-green-300 rounded-full text-center whitespace-normal m-4 p-4">Enter the verification code sent to you</div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 text-sm">
                            <input
                                type="text"
                                className="w-full text-xs px-3 py-2 border border-black"
                                value={code}
                                onChange={handleCodeChange}
                                placeholder="code"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 my-4 px-4 bg-blue-500 text-white  hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            {submitted && <ConfirmationModal>
                <div className="flex flex-col justify-center p-7 justify-center">
                    <div className="text-4xl font-bold whitespace-normal text-center ">
                        Succesfully Registered!
                    </div>
                    <div className="text-center">
                    Please wait for the admin to review and approve you account.
                    </div>
                    <div className="text-center italic text-xs">Redirecting you now to login page</div>
                    <span className="loader"/>
                </div>
            </ConfirmationModal>}
        </AccountModal>
    );
}

export default EnterCode;