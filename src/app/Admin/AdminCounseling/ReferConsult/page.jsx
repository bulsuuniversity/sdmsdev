"use client"

import DataGridView from "./Datagridview";
import Layout from "../Layout";
import { useEffect, useState } from "react";
import InformationModal from "@/utils/InformationModal";
import { AiFillCloseCircle } from "react-icons/ai";
import Image from "next/image";
import { url, headers } from "@/app/libs/api";
import axios from "axios";
import AdminMenu from "@/components/AdminMenu";
import SendMessage from "@/components/SendMessage";
import { GiCheckMark } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";

const Page = () => {
    const [openMessage, setOpenMessage] = useState(false)
    const [clickedID, setClickedID] = useState()
    const [seeImage, setSeeImage] = useState(false)
    const [info, setInfo] = useState()
    const [openInfo, setOpenINfo] = useState(false)
    const [data, setData] = useState()

    const handleGetData = async () => {
        try {
            const response = await axios.get(`${url}/api/consultReferral`, { headers });
            setData(response.data)
            console.log(response)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        handleGetData()
    }, [])

    useEffect(() => {
        console.log("data for referral dtgv", data)
    }, [data])

    useEffect(() => {
        console.log("click id", clickedID)
        const clcikedInfo = data && Object.values(data).find(selfConsult => selfConsult.id === clickedID);
        setInfo(clcikedInfo)
    }, [clickedID])

    const suggestions = {
        one: `Your refferal is approved! Please come on our office together with ${info && info.referredStudent}.`,
        two: "Sorry, our schedule is full for that day. Please make another request. Date recommendations are:"
    }

    return (
        <AdminMenu>
            <Layout>
                {openInfo && info && <InformationModal>
                    <div className="relative p-6">
                        <div className="absolute -top-4 -right-4">
                            <button
                                onClick={() => setOpenINfo(false)} className="rounded-full text-red-600 bg-white">
                                <AiFillCloseCircle size={30} /></button>
                        </div>
                        <div className="grid gap-4 justify-center items-center">
                            <div className="grid gap-4 text-xs">
                                <label className="flex gap-3 justify-center items-center">
                                    <p className="font-bold">Ticket No.:</p>
                                    <div className="bg-gray-300 p-2">{info.id}</div>
                                </label>
                                <label className="flex gap-3">
                                    <p className="font-bold">Reason on referring for Consultation: </p>
                                    <div> {info.referralReason}</div>
                                </label>
                                <label className="grid gap-3">
                                    <p className="font-bold">Date of Referral: </p>
                                    <div>Name: {info.referralDate}</div>
                                </label>
                                <label className="grid">
                                    <p className="font-bold">Referred Student Details: </p>
                                    <div className="indent-4">Name:  {info.referredStudent}</div>
                                    <div className="indent-4">College: {info.referredStudentCollege}</div>
                                </label>
                                <label className="grid gap-3">
                                    <p className="font-bold">Describe the situation: </p>
                                    <div>{info.describeSituation}</div>
                                </label>
                                <label className="grid gap-3">
                                    <p className="font-bold">Referrer Details: </p>
                                    <div className="indent-4">Name:  {info.student.name}</div>
                                    <div className="indent-4">Contact No.: {info.student.phoneNumber}</div>
                                    <label onClick={() => setSeeImage(true)} className="flex gap-3">
                                        <p className="font-bold">View Profile Picture: </p>
                                        <div>{info.student.profile ? (info.student.profile).slice(-8) : "No profile uploaded"}</div>
                                    </label>
                                </label>
                                {openMessage && info && <SendMessage suggestions={suggestions} email={info.student.email} setClose={setOpenMessage} />}
                                {seeImage && info.attachment !== "" && <InformationModal>
                                    <div className="relative p-6">
                                        <div className="h-96">
                                            <Image width={400} height={200}
                                                className="object-fill h-96 w-96"
                                                src={info.student.profile} alt="attachment" />
                                        </div>
                                        <div className="absolute -top-4 -right-4">
                                            <button
                                                onClick={() => setSeeImage(false)} className="rounded-full text-red-600 bg-white">
                                                <AiFillCloseCircle size={30} /></button>
                                        </div>

                                    </div>
                                </InformationModal>}
                            </div>
                        </div>
                        <div className="absolute left-24 -bottom-10 flex justify-center gap-4">
                            <button onClick={() => setOpenMessage(true)} className="bg-amber-400 rounded-full p-2"><MdOutlineEmail size={32} /></button>
                            <button className="bg-green-600 rounded-full p-2"><GiCheckMark size={32} /></button>
                        </div>
                    </div>
                </InformationModal>}
                <div className="mx-10 my-6 border border-blue-400 border-2">
                    {data && data.length > 0 &&
                        <DataGridView
                            setOpenINfo={setOpenINfo}
                            setClickedID={setClickedID}
                            tableData={data}
                        />}
                </div>
            </Layout>
        </AdminMenu>
    );
}

export default Page;