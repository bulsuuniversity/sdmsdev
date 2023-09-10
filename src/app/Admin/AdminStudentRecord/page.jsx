"use client"

import DataGridView from "./Datagridview";
import { useEffect, useState } from "react";
import InformationModal from "@/utils/InformationModal";
import { AiFillCloseCircle } from "react-icons/ai";
import Image from "next/image";
import { url, headers } from "@/app/libs/api";
import axios from "axios";
import AdminMenu from "@/components/AdminMenu";
import { GiCheckMark } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { FaPeopleLine } from "react-icons/fa6";
import useConfirmation from "@/utils/ConfirmationHook";
import useLoading from "@/utils/Loading";

const Page = () => {
    const [clickedID, setClickedID] = useState()
    const [seeImage, setSeeImage] = useState(false)
    const [info, setInfo] = useState()
    const [openInfo, setOpenINfo] = useState(false)
    const [data, setData] = useState()
    const [openMessage, setOpenMessage] = useState(false)
    const [sentEmail, setSentEmail] = useState()
    const [success, setSuccess] = useState(false)
    const { showConfirmation, ConfirmationDialog } = useConfirmation();
    const { startLoading, loading, stopLoading } = useLoading()

    const emailData = {
        email: info && info.email,
        subject: "SDMS Admin",
        message: "This is to inform you that your registration account in SDMD is approved by the Admin.",
        html: `<p>This is to inform you that your registration account in SDMD is approved by the Admin.</p>`
    }

    const sendEmail = async () => {
        startLoading()
        try {
            const sendCode = await axios.post(`${url}/api/AdminSendMail`, emailData, { headers });
            console.log(sendCode)
            setSuccess(true)
            setSentEmail("")
            stopLoading()
        } catch (error) {
            console.error('Error:', error);
            stopLoading()
        }
    };


    const handleUpdateApi = async () => {
        startLoading()
        try {
            const response = await axios.put(`${url}/api/AdminApproveAccount/${info.id}`,
                { headers });
            setData(response.data)
            sendEmail()
            stopLoading()
            setSuccess(true)
        } catch (err) {
            console.log(err);
            stopLoading()
        }
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        showConfirmation('Are you sure you want to approve this account?', () => {
            handleUpdateApi()
        });
    };

    const handleGetData = async () => {
        startLoading()
        try {
            const response = await axios.get(`${url}/api/studentAccount`, { headers });
            setData(response.data)
            console.log("get accounts", response)
            stopLoading()
        } catch (err) {
            console.log(err);
            stopLoading()
        }
    }

    useEffect(() => {
        handleGetData()
    }, [])

    useEffect(() => {
        console.log("data for dtv reports", data)
    }, [data])

    useEffect(() => {
        console.log("click id", clickedID)
        const clcikedInfo = data && Object.values(data).find(selfConsult => selfConsult.id === clickedID);
        setInfo(clcikedInfo)
    }, [clickedID])



    return (
        <AdminMenu>
            <div className="m-7 flex items-center">
                <FaPeopleLine size={50} /> <p className="border border-2 border-black h-16 mx-4" />
                <p className="font-bold text-xl">Reports</p>
            </div>
            {openInfo && info && <InformationModal>
                <div className="relative p-6">
                    <div className="absolute -top-4 -right-4">
                        <button
                            onClick={() => setOpenINfo(false)} className="rounded-full text-red-600 bg-white">
                            <AiFillCloseCircle size={30} /></button>
                    </div>
                    <ConfirmationDialog />
                    {success && <InformationModal>
                        <div className='bg-amber-200 grid p-10 rounded-lg gap-4'>
                            <p>Approved Successfully!</p>
                            <button onClick={() => setSuccess(false)} className='bg-amber-600 rounded-lg py-2 px-4'>Okay</button>
                        </div>
                    </InformationModal>}
                    {loading && <InformationModal>
                        <div className="grid justify-center p-6">
                            <p>Please wait...</p>
                        </div>
                    </InformationModal>}
                    <div className="grid gap-4 justify-center items-center">
                        <div className="flex justify-center">
                            <div className="w-28 h-28 object-cover overflow-hidden rounded-full border-4 border-white mb-4">
                                {info.profile ?
                                    <Image
                                        src={info.profile}
                                        alt="Selected"
                                        width={600}
                                        height={600}
                                        className="object-cover"
                                        required
                                    /> : <Image
                                        src="https://res.cloudinary.com/dckxajww8/image/upload/v1693269023/icons/profile_2_cotaml.png"
                                        alt="Selected"
                                        width={600}
                                        height={600}
                                        className="object-cover"
                                        required
                                    />}
                            </div>
                        </div>
                        <div className="grid gap-2 text-xs">
                            <label className="flex gap-3 items-center">
                                <p className="font-bold">Student ID:</p>
                                <div className="bg-gray-300 p-2">{info.idNumber}</div>
                            </label>
                            <label className="flex gap-3">
                                <p className="font-bold">Email: </p>
                                <div> {info.email}</div>
                            </label>

                            <label className="flex gap-3">
                                <p className="font-bold">Name: </p>
                                <div> {info.name}</div>
                            </label>
                            <label className="flex gap-6">
                                <label className="flex gap-3">
                                    <p className="font-bold">College: </p>
                                    <div> {info.college}</div>
                                </label>
                                <label className="flex gap-3">
                                    <p className="font-bold">Year Level: </p>
                                    <div> {info.yearLevel}</div>
                                </label>
                            </label>
                            <label className="flex gap-3">
                                <p className="font-bold">Address: </p>
                                <div> {info.address}</div>
                            </label>
                            <label className="flex gap-3">
                                <p className="font-bold">Contact No.: </p>
                                <div> {info.phoneNumber}</div>
                            </label>
                        </div>
                    </div>
                    <div className={`absolute left-24 -bottom-8`}>
                        {info.status !== "Registered" && <button onClick={handleUpdate}
                            className="bg-green-600 rounded-full p-2">
                            <div><GiCheckMark size={32} /></div>
                        </button>}
                    </div>
                </div>
            </InformationModal>}
            <div className="md:mx-10 mx-1 my-10 border border-blue-400 border-2">
                {data && data.length > 0 &&
                    <DataGridView
                        setOpenINfo={setOpenINfo}
                        setClickedID={setClickedID}
                        tableData={data}
                    />}
            </div>
        </AdminMenu>
    );
}

export default Page;