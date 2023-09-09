import Link from "next/link";
import { useEffect, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { usePathname } from "next/navigation";
import AdminMenu from "@/components/AdminMenu";

const Layout = ({ children }) => {
    const currentActive = usePathname()
    const [active, setActive] = useState()

    useEffect(() => {
        setActive(currentActive)
    }, [currentActive])

    return (
        <AdminMenu>
            <div className="grid">
                <div className="m-7 flex items-center">
                    <FaUserFriends size={70} /> <p className="border border-2 border-black h-16 mx-4" />
                    <p className="font-bold text-xl">Counselling</p>
                </div>
                <div className="flex justify-center">
                    <div className="rounded-full md:bg-gray-400 grid gap-2 md:gap-0 sm:flex">
                        <Link href={"/Admin/AdminCounseling/SelfConsult"}
                            className={`sm:pl-4 px-1 sm:pr-2 py-2 hover:text-white hover:rounded-full hover:bg-amber-700 ${active === "/Admin/AdminCounseling/SelfConsult" ?
                                "bg-amber-700 rounded-full text-white" : "bg-gray-400 rounded-full"}`}>
                            SELF-CONSULTATION</Link>
                        <Link href={"/Admin/AdminCounseling/ReferConsult"}
                            className={`sm:pl-2 px-2 sm:pr-4 py-2 hover:text-white hover:rounded-full hover:bg-amber-700 ${active === "/Admin/AdminCounseling/ReferConsult" ?
                                "bg-amber-700 rounded-full text-white" : "bg-gray-400 rounded-full"}`}>
                            REFERRAL CONSULTATION</Link>
                    </div>
                </div>
            </div>
            {children}
        </AdminMenu>
    );
}

export default Layout;