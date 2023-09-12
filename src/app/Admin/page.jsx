"use client"

import AdminMenu from "@/components/AdminMenu";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const route = () => {
    const {data: session} = useSession()
    const router = useRouter()

    if (!session) {
        router.push("/Admin/AdminLogin")
    }
    if (session && session.role !== "Admin") {
        return <div>Unauthorized</div>
    }
    return (
        <AdminMenu />
    );
}

export default route;