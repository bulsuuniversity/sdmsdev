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
            <div className="px-10 py-4 grid grid-cols-1 md:grid-cols-3 bg-red-50">
                <form className="md:col-span-2 col-span-1 grid gap-4 border border-black border-2 mx-24 px-12 py-4 bg-white rounded-lg" onSubmit={handleSubmit}>
                    <h2 className="text-2xl text-center font-bold">SELF-CONSULTATION REQUEST FORM</h2>
                    <p className="text-xs text-center italic">Please fill out the needed details for the request</p>
                    <div className="">Ticket No.: _______</div>
                    <label className="grid">
                        <p className="font-bold">Reason for consultation:</p>
                        <select
                            className="border-b-2"
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
                    <label className="grid">
                        <p className="font-bold">Requested date of appointment:</p>
                        <input
                            className="border-b-2"
                            type="date"
                            placeholder="select date"
                            name="appointmentDate"
                            value={formData.appointmentDate}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label className="grid">
                        <p className="font-bold">Type of consultation:</p>
                        <select
                            className="border-b-2"
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
                    <div className="flex justify-center">
                        <button className="bg-amber-200 font-bold p-2 m-2 w-1/2 border border-black rounded-[1.3rem]" type="submit">Submit</button>
                    </div>
                </form>
                <div className="col-span-1">
                    <Image className="object-cover scale-x-[-1]" src="/bg.png" width={500} height={700} />
                </div>
            </div>
        </Layout>
    );
};

export default Page;
