"use client"

import LogsLayout from "@/components/LogsLayout";
import { useEffect } from "react";
import {
    useReferConsultData,
    useSelfConsultData,
    useProfileData,
    useReportData
} from "@/app/libs/store";

const Page = () => {
    const { getSelfConsultData } = useSelfConsultData()
    const { getReferConsultData } = useReferConsultData()
    const { reportData, getReportData } = useReportData()
    const { profileData } = useProfileData()
    useEffect(() => {
        getSelfConsultData(profileData.id)
    }, [profileData])

    useEffect(() => {
        getReferConsultData(profileData.id)
    }, [profileData])

    useEffect(() => {
        getReportData(profileData.id)
    }, [profileData])

    console.log("report data", reportData)

    useEffect(() => {
        if (profileData && !profileData.id) {
            router.push('/Login')
        }
    }, [profileData])

    return (
        <div>
            <LogsLayout />
        </div>
    );
}

export default Page;