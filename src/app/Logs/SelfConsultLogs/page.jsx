"use client"

import DataGridView from "@/utils/DataGridView";
import LogsLayout from "@/components/LogsLayout";
import { useSelfConsultData } from "@/app/libs/store";
import { useEffect, useState } from "react";
import InformationModal from "@/utils/InformationModal";
import { AiFillCloseCircle } from "react-icons/ai";

const Page = () => {
    const { selfConsultData } = useSelfConsultData()
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
        if (selfConsultData) {
            const formattedData = selfConsultData.map((data) => ({
                zero: data.appointmentDate,
                one: data.id,
                two: data.consultationType,
                three: data.consultationReason,
                four: data.sentMessage,
                five: data.status,
            }));
            setData(formattedData)
        }
    }, [])

    const headerData = [
        "REQUESTED DATE",
        "TICKET NO.",
        "TYPE OF CONSULT",
        "REASON",
        "MESSAGE",
        "STATUS",
    ]

    useEffect(() => {
        console.log("click id", clickedID)
        const clcikedInfo = Object.values(selfConsultData).find(selfConsul => selfConsul.id === clickedID);
        setInfo(clcikedInfo)
    }, [clickedID])

    useEffect(() => {
        console.log(info)
    }, [info])


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
                        <h2 className="text-center text-lg font-bold">Consultation</h2>
                        <div className="grid gap-4 text-xs">
                            <label className="flex gap-3 justify-center items-center">
                                <p className="font-bold">Ticket No.:</p>
                                <div className="bg-gray-300 p-2">{info.id}</div>
                            </label>
                            <label className="flex gap-3">
                                <p className="font-bold">Reason for Consultaion: </p>
                                <div> {info.consultationReason}</div>
                            </label>
                            <label className="flex gap-3">
                                <p className="font-bold">Requested Date of appointment: </p>
                                <div> {info.appointmentDate}</div>
                            </label>
                            <label className="flex gap-3">
                                <p className="font-bold">Type of Consultation: </p>
                                <div> {info.consultationType}</div>
                            </label>
                        </div>
                    </div>
                </div>
            </InformationModal>}
            <div className="mx-10 my-6 border border-blue-400 border-2">
                {data && data.length > 0 && <DataGridView
                    setOpenINfo={setOpenINfo}
                    setClickedID={setClickedID}
                    headerData={headerData}
                    tableData={data} />}
            </div>
        </LogsLayout>
    );
}

export default Page;