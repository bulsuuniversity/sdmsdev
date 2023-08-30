"use client"

import Layout from "@/components/Layout";
import Image from "next/image";
import { useState } from "react";
import PersonalInformation from "@/components/PersonalInformation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import axios from "axios";
import { url, headers } from "../libs/api";
import SelectImage from "@/utils/SelectImage";
import { useProfileData } from "../libs/store"


const page = () => {
    const [profile, setProfile] = useState('https://res.cloudinary.com/dckxajww8/image/upload/v1693269023/icons/profile_2_cotaml.png')
    const { data: session } = useSession()
    const [changeProfile, setChangeProfile] = useState(false)

    const { profileData, getProfileData } = useProfileData()

    const handleCLick = () => {
        setChangeProfile(!changeProfile)
    }

    const getProfile = async () => {
        try {
            const response = await axios.get(`${url}/api/studentAccount/${session.id}`, { headers });
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Layout>
            {changeProfile &&
                <SelectImage session={session} setProfile={setProfile} handleCLick={handleCLick} />
            }
            <div className="bg-red-100 p-4 z-10">
                <div className="h-screen bg-gray-300 w-full">
                    <div className="m-10">{profileData && profileData.email}</div>
                   {session && <button onClick={() => getProfileData(session.id)} className="bg-blue-600 p-4 rounded-lg">Get profile data</button>}
                </div>
                <div className="grid md:grid-cols-5 grid-cols-1 bg-red-50 items-center">
                    {/* <button onClick={getProfile} className="rounded-lg bg-blue-700 p-4">Get Profile</button> */}
                    <div className="col-span-1 md:mt-0 mt-52">
                        <div className="relative ml-5 px-6">
                            <div className="absolute rounded-full bg-white border border-white border-8 overflow-hidden z-10 -left-3 -top-52">
                                <div className="w-40 h-40 rounded-full overflow-hidden ">
                                    <Image alt="profile"
                                        src={profile}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                            <div className="absolute z-10 mx-3 -top-6 -left-2 rounded-lg bg-orange-300">
                                <button
                                    onClick={handleCLick}
                                    className="text-2xl py-3 w-36">
                                    CHANGE PROFILE
                                </button>
                            </div>
                            <div className="absolute -top-16 left-7 overflow-hidden h-64 flex flex-col w-24 justify-center">
                                <div className="bg-fuchsia-950 h-full">
                                </div>
                                <div className={`h-0 w-0 
                            border-x-[3rem] border-x-transparent
                            border-t-[1rem] border-fuchsia-950`}>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 md:mt-0 mt-72 text-xs md:text-2xl w-full p-2">
                        <div className="p-2">
                            <h2 className="font-semibold">Account Information</h2>
                            <div className="ml-4 font-medium flex gap-5">
                                <div className="grid">
                                    <label htmlFor="email">Email:</label>
                                    <label htmlFor="idNumber">ID Number:</label>
                                    <label htmlFor="password">Password:</label>
                                </div>
                                <div className="grid">
                                    <div id="email">{session && session.email}</div>
                                    <div id="idNumber">{session && session.idNumber}</div>
                                    <div id="password">Hidden</div>
                                </div>
                            </div>
                            <Link href={'/ChangePassword'} className="text-blue-500 text-sm">
                                Want to change password? Click here.
                            </Link>
                        </div>

                        <div className="p-6 bg-white relative">
                            <PersonalInformation session={session} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default page;