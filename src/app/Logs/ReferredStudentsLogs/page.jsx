"use client"

import DataGridView from "@/utils/DataGridView";
import LogsLayout from "@/components/LogsLayout";
import { useReferConsultData } from "@/app/libs/store";
import { useEffect, useState } from "react";
import InformationModal from "@/utils/InformationModal";
import { AiFillCloseCircle } from "react-icons/ai";

const Page = () => {
    const { referConsultData } = useReferConsultData()
    const [clickedID, setClickedID] = useState()
    const [info, setInfo] = useState()
    const [openInfo, setOpenINfo] = useState(false)
    const [data, setData] = useState(
        {
            zero: "",
            one: "",
            two: "",
            three: "",
            four: "",
            five: "",
        })

    useEffect(() => {
        if (referConsultData) {
            const formattedData = referConsultData.map((data) => ({
                zero: data.referralDate,
                one: data.id,
                two: data.referredStudent,
                three: data.referralReason,
                four: data.sentMessage,
                five: data.status,
            }));
            setData(formattedData) 
        }
    }, [])

    const headerData = [
        "REFERRAL DATE",
        "TICKET NO.",
        "NAME",
        "REASON",
        "MESSAGE",
        "STATUS",
    ]

    useEffect(() => {
        const clcikedInfo = Object.values(referConsultData).find(selfConsul => selfConsul.id === clickedID);
        setInfo(clcikedInfo)
    }, [clickedID])

    return (
        <LogsLayout>
            {openInfo && info && <InformationModal>
                <div className="relative p-6">
                    <div className="absolute -top-4 -right-4">
                        <button
                            onClick={() => setOpenINfo(false)} className="rounded-full text-red-600 bg-white">
                            <AiFillCloseCircle size={30} /></button>
                    </div>
                    <div className="grid gap-4 justify-center items-center">
                        <h2 className="text-center text-lg font-bold">Referred Consultation</h2>
                        <div className="grid gap-4 text-xs">
                            <label className="flex gap-3 justify-center items-center">
                                <p className="font-bold">Ticket No.:</p>
                                <div className="bg-gray-300 p-2">{info.id}</div>
                            </label>
                            <label className="flex gap-3">
                                <p className="font-bold">Reason for Referring: </p>
                                <div> {info.referralReason}</div>
                            </label>
                            <label className="flex gap-3">
                                <p className="font-bold">Referred Student: </p>
                                <div> {info.referredStudent}</div>
                            </label>
                            <label className="flex gap-3">
                                <p className="font-bold">College Department: </p>
                                <div> {info.referredStudentCollege}</div>
                            </label>
                            <label className="flex gap-3">
                                <p className="font-bold">Date of the Referral: </p>
                                <div> {info.referralDate}</div>
                            </label>
                            <label className="flex gap-3">
                                <p className="font-bold">Describe the Situation: </p>
                                <div> {info.describeSituation}</div>
                            </label>
                        </div>
                    </div>
                </div>
            </InformationModal>}
            <div className="mx-10 my-6 border border-blue-400 border-2">
                {data && data.length > 0 ? <DataGridView
                    setOpenINfo={setOpenINfo}
                    setClickedID={setClickedID}
                    headerData={headerData}
                    tableData={data} />: <div>No Logs Found</div>}
            </div>
        </LogsLayout>
    );
}

export default Page;