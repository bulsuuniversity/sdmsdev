"use client"

import Layout from "@/components/Layout";
import { useProfileData } from "../libs/store";
import { useState } from "react";
import axios from "axios";
import { url, headers } from "../libs/api";

const page = () => {
    const { profileData } = useProfileData()
    const [reportData, setReportData] = useState({
        reporter: profileData.id,
        actionOfDiscipline: '',
        offender: '',
        college: profileData.college,
        attachment: '',
        dateOfIncident: '',
        platformOfIncident: '',
        rateOfOccurrence: '',
        describeTheSituation: '',
        status: 'Pending',
    });

    const handleInputChange = (field, value) => {
        setReportData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <Layout>
            <div className="py-4 px-16">
                <div className="border grid justify-center border-black border-2 rounded-lg px-10 py-4">
                    <h2 className="text-4xl text-center">Report Form</h2>
                    <h3 className="text-xs italic grid justify-center "><p className="flex">Please fill the necessary details
                        denoted by &#40;<text className="text-red-600">&#42;</text>&#41;. Other information maybe</p>
                        <p className="text-center">optional but still providing its details might hasten the process.</p></h3>
                    <p className="indent-6">Ticket No.: ___________</p>
                    <form className=" grid grid-cols-2 gap-4 mx-16" onSubmit={handleSubmit}>
                        <div className="grid gap-4">
                            <label className="grid">
                                <div className="flex font-bold text-md"><p className="text-red-600">&#42;</p> Action of Discipline:</div>
                                <input
                                    className="border-b-2"
                                    placeholder=""
                                    type="text"
                                    value={reportData.actionOfDiscipline}
                                    onChange={(e) => handleInputChange('actionOfDiscipline', e.target.value)}
                                    required
                                />
                            </label>
                            <label className="grid">
                                <p className="font-bold text-md">Offender:</p>
                                <input
                                    className="border-b-2"
                                    placeholder=""
                                    type="text"
                                    value={reportData.offender}
                                    onChange={(e) => handleInputChange('offender', e.target.value)}

                                />
                            </label>
                            <label className="grid">
                                <p className="font-bold text-md"> College:</p>
                                <input
                                    className="border-b-2"
                                    placeholder=""
                                    type="text"
                                    value={reportData.college}
                                    onChange={(e) => handleInputChange('college', e.target.value)}

                                />
                            </label>
                            <label className="grid">
                                <p className="font-bold text-md"> Attachment:</p>
                                <input
                                    className="border-b-2"
                                    placeholder=""
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={(e) => handleInputChange('attachment', e.target.files[0])}

                                />
                            </label>
                        </div>
                        <div className="grid gap-4">
                            <label className="grid">
                                <div className="flex font-bold text-md"><p className="text-red-600">&#42;</p> Date of Incident:</div>
                                <input
                                    className="border-b-2"
                                    placeholder=""
                                    type="date"
                                    value={reportData.dateOfIncident}
                                    onChange={(e) => handleInputChange('dateOfIncident', e.target.value)}
                                    required
                                />
                            </label>
                            <label className="grid">
                                <div className="flex font-bold text-md"><p className="text-red-600">&#42;</p> Place/Platform of Incident:</div>
                                <input
                                    className="border-b-2"
                                    placeholder=""
                                    type="text"
                                    value={reportData.platformOfIncident}
                                    onChange={(e) => handleInputChange('platformOfIncident', e.target.value)}
                                    required
                                />
                            </label>
                            <label className="grid">
                                <div className="flex font-bold text-md"><p className="text-red-600">&#42;</p> Rate of Occurrence:</div>
                                <input
                                    className="border-b-2"
                                    placeholder=""
                                    type="text"
                                    value={reportData.rateOfOccurrence}
                                    onChange={(e) => handleInputChange('rateOfOccurrence', e.target.value)}
                                    required
                                />
                            </label>
                            <label className="grid">
                                <div className="flex font-bold text-md"><p className="text-red-600">&#42;</p>  Describe the Situation:</div>
                                <textarea
                                    className="border"
                                    placeholder="Please descride the details"
                                    value={reportData.describeTheSituation}
                                    onChange={(e) => handleInputChange('describeTheSituation', e.target.value)}
                                    required
                                />
                            </label>
                        </div>
                        <div className="relative w-full">
                            <button className="absolute -bottom-4 -right-20 bg-amber-400 rounded-lg p-4" type="submit">Submit Report</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default page;