"use client"

import Layout from "@/components/Layout";
import Image from "next/image";
import { useState } from "react";
import PersonalInformation from "@/components/PersonalInformation";
import Link from "next/link";
import SelectImage from "@/utils/SelectImage";
import { useProfileData } from "../libs/store"
import { PrivateRoute } from "@/components/auth";


const page = () => {
    const [changeProfile, setChangeProfile] = useState(false)

    const { profileData, getProfileData } = useProfileData()

    const handleCLick = () => {
        setChangeProfile(!changeProfile)
    }

    return (
        <Layout>
            <PrivateRoute>
                {changeProfile &&
                    <SelectImage handleCLick={handleCLick} profileData={profileData} getProfileData={getProfileData} />
                }
                {profileData && profileData.id &&
                    <div className="bg-red-100 border xl:text-2xl border-2 h-screen p-4 z-1">
                        <div className="grid md:grid-cols-12 grid-cols-1 md:bg-red-50 bg-fuchsia-950 h-full items-center">
                            <div className="col-span-3 flex w-full h-full justify-start items-center">
                                <div className="bg-green-600">
                                    <div className="relative bg-blue-600 px-6">
                                        <div className="absolute -top-60 left-8 rounded-full bg-white border
                                     border-black border-8 overflow-hidden z-10 ">
                                            <div className="w-60 h-60 rounded-full overflow-hidden ">
                                                <Image alt="profile"
                                                    src={profileData.profile === null ?
                                                        "https://res.cloudinary.com/dckxajww8/image/upload/v1693269023/icons/profile_2_cotaml.png"
                                                        : profileData.profile}
                                                    width={500}
                                                    height={500}
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="absolute top-6 left-9 z-10 rounded-md bg-orange-300">
                                            <button
                                                onClick={handleCLick}
                                                className="text-2xl py-3 w-60">
                                                CHANGE PROFILE
                                            </button>
                                        </div>
                                        <div className="absolute left-20 -top-32 overflow-hidden h-64 flex flex-col w-32 w-[10rem] h-[19rem] justify-center">
                                            <div className="bg-fuchsia-950 h-full">
                                            </div>
                                            <div className={`h-0 w-0 
                                            border-x-[5rem] border-x-transparent
                                            border-t-[2rem] border-fuchsia-950
                                            `}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-9 bg-red-50 md:mt-0 mt-44 xl:ml-10 md:text-2xl p-2">
                                <div className="p-2">
                                    <h2 className="font-semibold">Account Information</h2>
                                    <div className="ml-4 font-medium flex gap-5">
                                        <div className="grid">
                                            <label htmlFor="email">Email:</label>
                                            <label htmlFor="idNumber">ID Number:</label>
                                            <label htmlFor="password">Password:</label>
                                        </div>
                                        <div className="grid">
                                            <div id="email">{profileData.email}</div>
                                            <div id="idNumber">{profileData.idNumber}</div>
                                            <div id="password">*********</div>
                                        </div>
                                    </div>
                                    <Link href={'/ChangePassword'} className="text-blue-500 text-sm">
                                        Want to change password? Click here.
                                    </Link>
                                </div>

                                <div className="p-6 bg-white relative">
                                    <PersonalInformation />
                                </div>
                            </div>
                        </div>
                    </div>}
            </PrivateRoute>
        </Layout>
    );
}

export default page;