"use client"

import Layout from "@/components/Layout";
import { useState } from "react";
import { PiUserCircleFill } from "react-icons/pi";


const page = () => {
    const [profile, setProfile] = useState(<PiUserCircleFill size={100} />)
    return (
        <Layout>
            <div className="bg-red-100">
                <div className="p-4 grid grid-cols-5 bg-red-50 items-center">
                    <div className="col-span-1">
                        <div className="relative">
                            <div className="absolute p-6 z-10 -top-40 rounded-full bg-white">
                                <div className="rounded-full">
                                    {profile}
                                </div>
                            </div>
                            <div className="absolute -top-20 left-7  h-80 flex flex-col w-1/2 justify-center">
                                <div className="bg-fuchsia-800 h-full">
                                </div>
                                <div className={`h-0 w-0 
                                -left-7
                            border-x-[4rem] border-x-transparent
                            border-t-[2rem] border-fuchsia-800`}>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 w-full bg-red-400 ">
                        <div>
                            <h2>Account Information</h2>
                            <div className="ml-4">
                                <label for="email">Email:</label>
                                <div id="email">aaron@anablon</div>
                                <label for="studentID">Email:</label>
                                <div id="studentID">1-10699</div>
                                <label for="password">Password:</label>
                                <div id="password">1-10699</div>
                            </div>
                        </div>

                        <div>
                            <h2>Personal Information<PiUserCircleFill size={24} /></h2>
                            <form onSubmit={''}>
                                <label for="name">Name: </label>
                                <div id="name">Aaron Anablon</div>
                                <label for="contactNum">Contact No.: </label>
                                <div id="contactNum">1-10699</div>
                                <label for="year">Year Level: </label>
                                <div id="year">2ba</div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default page;