"use client"

import DataGridView from "@/utils/DataGridView";
import LogsLayout from "@/components/LogsLayout";
import { useReportData } from "@/app/libs/store";
import { useEffect, useState } from "react";
import ConfirmationModal from "@/utils/ConfirmationModal";
import { AiFillCloseCircle } from "react-icons/ai";
import Image from "next/image";

const Page = () => {
    const { reportData } = useReportData()
    const [clickedID, setClickedID] = useState()
    const [seeImage, setSeeImage] = useState(false)
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
        if (reportData) {
            const formattedData = reportData.map((data) => ({
                zero: data.dateOfIncident,
                one: data.id,
                two: data.offender,
                three: data.actionOfDiscipline,
                four: data.sentMessage,
                five: data.status,
            }));
            setData(formattedData)
        }
    }, [])

    const headerData = [
        "DATE REPORTED",
        "TICKET NO.",
        "OFFENDER",
        "INCIDENT",
        "MESSAGE",
        "STATUS",
    ]

    useEffect(() => {
        console.log("click id", clickedID)
        const clcikedInfo = Object.values(reportData).find(selfConsul => selfConsul.id === clickedID);
        setInfo(clcikedInfo)
    }, [clickedID])

    useEffect(() => {
        console.log(info)
    }, [info])


    return (
        <LogsLayout>
            {openInfo && info && <ConfirmationModal>
                <div className="relative p-6">
                    <div className="absolute -top-4 -right-4">
                        <button
                            onClick={() => setOpenINfo(false)} className="rounded-full text-red-600 bg-white">
                            <AiFillCloseCircle size={30} /></button>
                    </div>
                    <div className="grid gap-4 justify-center items-center">
                        <h2 className="text-center text-lg font-bold">Reported Case</h2>
                        <div className="grid gap-4 text-xs">
                            <label className="flex gap-3 justify-center items-center">
                                <p className="font-bold">Ticket No.:</p>
                                <div className="bg-gray-300 p-2">{info.id}</div>
                            </label>
                            <label className="flex gap-3">
                                <p className="font-bold">Action of Discipline: </p>
                                <div> {info.actionOfDiscipline}</div>
                            </label>
                            <label className="grid">
                                <p className="font-bold">Offender Details: </p>
                                <div className="indent-5"> {info.offender}</div>
                                <div className="indent-5"> {info.college}</div>
                            </label>
                            <label className="flex gap-3">
                                <p className="font-bold">Date of Incident: </p>
                                <div> {info.dateOfIncident}</div>
                            </label>
                            <label className="flex gap-3">
                                <p className="font-bold">Place/Platform of Incident: </p>
                                <div> {info.platformOfIncident}</div>
                            </label>
                            <label className="flex gap-3">
                                <p className="font-bold">Rate of Occurence: </p>
                                <div> {info.rateOfOccurence}</div>
                            </label>
                            <label className="flex gap-3">
                                <p className="font-bold">Describe the Situation: </p>
                                <div> {info.describeTheSituation}</div>
                            </label>
                            <label onClick={() => setSeeImage(true)} className="flex gap-3">
                                <p className="font-bold">Attachment: </p>
                                <div>{info.attachment != "" ? "No attachment" : (info.attachment).slice(-8)}</div>
                            </label>
                            {seeImage && info.attachment != "" && <ConfirmationModal>
                                <div className="h-96 w-96 object-cover">
                                    <Image width={500} height={500}
                                        className="object-cover"
                                        src={info.attachment} alt="attachment" />
                                </div>
                            </ConfirmationModal>}
                        </div>
                    </div>
                </div>
            </ConfirmationModal>}
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