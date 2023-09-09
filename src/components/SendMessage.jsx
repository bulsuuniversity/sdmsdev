import React, { useState } from 'react';
import axios from 'axios';
import InformationModal from '@/utils/InformationModal';
import useLoading from '@/utils/Loading';
import useConfirmation from '@/utils/ConfirmationHook';
import { AiFillCloseCircle } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';


function SendMessage({ suggestions, email, setClose }) {
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const { loading, startLoading, stopLoading } = useLoading()
    const { showConfirmation, ConfirmationDialog } = useConfirmation();

    const handleChoiceClick = (choice) => {
        setMessage(choice);
    };

    const emailData = {
        email: email,
        subject: "SDMS Admin",
        message: message,
        html: `<p>${message}</p>`
    }

    const handleSubmitReport = async () => {
        startLoading()
        try {
            const sendCode = await axios.post(`${url}/api/AdminSendMail`, emailData, { headers });
            console.log(sendCode)
            setSuccess(true)
            setMessage("")
            stopLoading()
        } catch (error) {
            console.error('Error:', error);
            stopLoading()
        }
    };

    const handleSendEmail = (e) => {
        e.preventDefault();
        showConfirmation('Are you sure you want to send message?', () => {
            handleSubmitReport()
        });
    };

    return (
        <InformationModal>
            <div className="relative text-lg sm:w-80 w-72 md:w-96 rounded-lg grid justify-center bg-gray-300 p-6">
                <div className="absolute -top-4 -right-4">
                    <button
                        onClick={() => setClose(false)} className="rounded-full text-red-600 bg-white">
                        <AiFillCloseCircle size={30} /></button>
                </div>
                <ConfirmationDialog />
                {success ?
                    <>
                        <div className='bg-amber-200 grid gap-4'>
                            <p>Sent Successfully!</p>
                            <button onClick={() => setSuccess(false)} className='bg-amber-600 rounded-lg p-4'>Okay</button>
                        </div>
                    </> :
                    <><div className='grid bg-gray-100 p-3 rounded-lg'>
                        <div className='relative grid mb-4'>
                            <label>Message:  </label>
                            <textarea
                                className='ml-4'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows="4"
                                cols="50"
                                placeholder="Enter your message..."
                            ></textarea>
                            <div className='absolute left-32 -bottom-4'>
                                <button onClick={() => setMessage("")} className='rounded px-2 bg-red-700 text-white'>Clear</button>
                            </div>
                        </div>


                        <div className='grid gap-2 rounded-lg bg-gray-100 divide-y'>
                            <button className='bg-gray-100 rounded-lg' onClick={() => handleChoiceClick(suggestions.one)}>
                                {suggestions.one}
                            </button>
                            <button className='bg-gray-100 rounded-lg' onClick={() => handleChoiceClick(suggestions.two)}>
                                {suggestions.two}
                            </button>
                        </div>
                    </div>

                        <div className="flex mt-4 justify-center">
                            <button disabled={loading} onClick={handleSendEmail}
                                className="bg-amber-400 rounded-full px-4 py-2 flex justify-center items-center">
                                <MdOutlineEmail size={32} /> {loading ? "Sending" : "SEND MESSAGE"}
                            </button>
                        </div>
                    </>}
            </div>
        </InformationModal>
    );
}

export default SendMessage;
