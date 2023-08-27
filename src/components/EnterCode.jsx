import { useState, useEffect } from "react";
import ConfirmationModal from "@/utils/ConfirmationModal";
import axios from "axios";
import { useRouter } from "next/navigation";


const EnterCode = ({ registerData, sentCode }) => {
    const [code, setCode] = useState()
    const [submitted, setSubmitted] = useState(false)
    const [xCode, setXCode] = useState(false)
    const [uploading, setUploading] = useState(false)
    const router = useRouter()

    const handleChange = (e) => {
        e.preventDefault()
        setCode(e.target.value)
    }

    useEffect(() => {
      const timer = setTimeout(() => {
        setSubmitted(false)
      }, 2000); 
      return () => {
        router.push("./Login")
        clearTimeout(timer); 
      };
    }, [submitted]);
    
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'sikretong-malupet',
        'Accept': 'application/json',
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setUploading(true)
        if (sentCode === code) {
            try {
                const response = await axios.post('http://localhost:3000/api/studentAccount', registerData, { headers });
                console.log('Response:', response.data);
                setUploading(false)
                setSubmitted(true)
            } catch (error) {
                console.error('Error:', error);
                setUploading(false)
            }
        } else {
            setXCode(true)
            setUploading(false)
        }
    };

    return (
        <>
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
                                onChange={handleChange}
                                placeholder="code"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 my-4 px-4 bg-blue-500 text-white  hover:bg-blue-600"
                            disabled={uploading}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            {xCode &&
                <ConfirmationModal>
                    <div className="text-xl font-bold whitespace-normal text-center ">
                        Wrong code entered!
                        <div className="italic text-xs">Please open your gmail account for the code sent.</div>
                        <button onClick={() => setXCode(false)} className="p-2 m-4 text-md rounded-lg bg-amber-400">Okay</button>
                    </div>
                </ConfirmationModal>
            }
            {submitted && <ConfirmationModal>
                <div className="flex flex-col justify-center p-7 justify-center">
                    <div className="text-4xl font-bold whitespace-normal text-center ">
                        Succesfully Registered!
                    </div>
                    <div className="text-center">
                        Please wait for the admin to review and approve you account.
                    </div>
                    <div className="text-center italic text-xs">Redirecting you now to login page</div>
                    <span className="loader" />
                </div>
            </ConfirmationModal>}
        </>
    );
}

export default EnterCode;