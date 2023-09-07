import Link from "next/link";
import { IoMdNotifications } from "react-icons/io";
import Layout from "./Layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


const LogsLayout = ({ children }) => {
    const router = useRouter()
    const [active, setActive] = useState()

    useEffect(() => {
        const currentLink = router.pathname;
        setActive(currentLink)
        console.log(currentLink)
    }, [router.pathname])

    return (
        <Layout>
            <div className="grid justify-center pb-2 items-center">
                <h2 className="text-2xl font-bold text-center mt-4 text-gray-600">LOGS</h2>
                <div className="flex gap-2 mt-4 justify-center">
                    <Link href={"/Logs/ReportedLogs"}
                        className={`${active === "/Logs/ReportedLogs" ? "bg-amber-400" : ""} 
                        rounded-lg flex border border-2 border-blue-400 p-2`}>
                        <div className="grid items-start"><IoMdNotifications /></div>
                        <div className="flex items-center"> REPORTED CASES</div>
                    </Link>
                    <Link href={"/Logs/SelfConsultLogs"}
                        className={`${active === "/Logs/SelfConsultLogs" ? "bg-amber-400" : ""} 
                        rounded-lg flex border border-2 border-blue-400 p-2`}>
                        <div className="grid items-start"><IoMdNotifications /></div>
                        <div className="flex items-center"> SELF CONSULTATION</div>
                    </Link>
                    <Link href={"/Logs/ReferredStudentsLogs"}
                        className={`${active === "/Logs/ReferredStudentsLogs" ? "bg-amber-400" : ""} 
                        rounded-lg flex border border-2 border-blue-400 p-2`}>
                        <div className="grid items-start"><IoMdNotifications /></div>
                        <div className="flex items-center"> REFERRED CONSULTATION</div>
                    </Link>
                </div>
                {children ? children : <div className="h-80"></div>}
            </div>
        </Layout>
    );
}

export default LogsLayout;