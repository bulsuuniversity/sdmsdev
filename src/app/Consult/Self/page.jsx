"use client"

import React, { useState } from "react";
import Layout from "@/components/Layout";
import Image from "next/image";

const Page = () => {
    const [formData, setFormData] = useState({
        consultationReason: "",
        appointmentDate: "",
        consultationType: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your submission logic here
    };

    return (
        <Layout>
            <div className="p-10 grid grid-cols-3 bg-red-50">
                <form className="col-span-2 border border-black border-2 p-4 bg-white rounded-lg" onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold">SELF-CONSULTATION REQUEST FORM</h2>
                    <p className="text-xs italic">Please fill out the needed details for the request</p>
                    <div className="">Ticket No.: _______</div>
                    <label>
                        Reason for consultation:
                        <select
                            className="border-b"
                            name="consultationReason"
                            value={formData.consultationReason}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select Status</option>
                            <option value="Depression">Depression</option>
                            <option value="Anxiety">Anxiety</option>
                            <option value="Family issues">Family issues</option>
                            <option value="Stress">Stress</option>
                            <option value="Social phobia">Social phobia</option>
                            <option value="Others">Other/s</option>
                        </select>
                    </label>
                    <label>
                        Requested date of appointment:
                        <input
                            type="date"
                            placeholder="select date"
                            name="appointmentDate"
                            value={formData.appointmentDate}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Type of consultation:
                        <select
                            className="border-b"
                            name="consultationType"
                            value={formData.consultationType}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Please select an option</option>
                            <option value="Physically">Physically</option>
                            <option value="Virtually">Virtually</option>
                        </select>
                    </label>
                    <button type="submit">Submit</button>
                </form>
                <div className="col-span-1"> 
                    <Image className="object-cover" src="/bg.png" width={500} height={700} />
                </div>
            </div>
        </Layout>
    );
};

export default Page;
