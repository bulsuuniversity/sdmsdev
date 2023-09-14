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
            {/* <PrivateRoute> */}
                {changeProfile &&
                    <SelectImage handleCLick={handleCLick} profileData={profileData} getProfileData={getProfileData} />
                }
                {profileData && profileData.id &&
                    <div className="bg-red-100 border xl:text-4xl border-red-600 border-2 h-screen p-4 z-1">
                        <div className="grid lg:grid-cols-5 grid-cols-1 bg-red-50 h-full items-center">
                            <div className="lg:col-span-1 lg:block lg:pl-6 flex justify-center">
                                <div className="relative px-6">
                                    <div className="absolute rounded-full bg-white border
                                     border-white border-8 overflow-hidden z-10 -left-3 xl:-top-96 -top-52">
                                        <div className="w-40 h-40 xl:w-96 xl:h-96 rounded-full overflow-hidden ">
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
                                    <div className="absolute z-10 mx-3 xl:top-24 xl:left-2 -top-6 -left-2 rounded-lg bg-orange-300">
                                        <button
                                            onClick={handleCLick}
                                            className="xl:text-6xl xl:w-[20rem] py-3 w-36">
                                            CHANGE PROFILE
                                        </button>
                                    </div>
                                    <div className="absolute xl:-top-28 -top-16 left-7 xl:left-10 overflow-hidden h-64 flex flex-col w-24 xl:w-[18rem] xl:h-[34rem] justify-center">
                                        <div className="bg-fuchsia-950 h-full">
                                        </div>
                                        <div className={`h-0 w-0 
                            xl:border-x-[9rem] border-x-transparent
                            xl:border-t-[3rem] border-fuchsia-950
                            border-x-[3rem]
                            border-t-[1rem]
                            `}>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 md:pl-32 xl:pl-60 text-xs xl:text-6xl md:text-xl w-full p-2">
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
            {/* </PrivateRoute> */}
        </Layout>
    );
}

export default page;