"use client"

import React, { useState } from "react";
import Layout from "@/components/Layout";
import Image from "next/image";

const Page = () => {
    const [formData, setFormData] = useState({
        referredStudent: "",
        college: "",
        reasonForReferral: "",
        situationDescription: "",
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
                <div className="md:block hidden col-span-1">
                    <Image className="object-cover scale-x-[-1]" src="/bg.png" width={500} height={700} />
                </div>
                <form className="md:col-span-2 col-span-1 grid gap-4 border border-black border-2 md:mx-24 px-12 py-4 bg-white rounded-lg" onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold">REFERRAL CONSULTATION FORM</h2>
                    <p className="text-xs italic">Please provide the details for the referral</p>
                    <label>
                        Referred Student:
                        <input
                            type="text"
                            name="referredStudent"
                            value={formData.referredStudent}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        College:
                        <input
                            type="text"
                            name="college"
                            value={formData.college}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <label>
                        Reason for Referral:
                        <select
                            className="border-b"
                            name="reasonForReferral"
                            value={formData.reasonForReferral}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select Reason</option>
                            <option value="Academic Issues">Academic Issues</option>
                            <option value="Behavioral Concerns">Behavioral Concerns</option>
                            <option value="Emotional Support">Emotional Support</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                    <label>
                        Describe the Situation:
                        <textarea
                            name="situationDescription"
                            value={formData.situationDescription}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                    </label>
                    <div className="flex justify-center">
                        <button className="bg-amber-200 font-bold p-2 m-2 w-1/2 border border-black rounded-[1.3rem]" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Page;
