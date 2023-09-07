import Image from "next/image";
import Logo from "../../public/Logo.png"
import Link from "next/link";
import AdminLayout from "./AdminLayout";

const AdminMenu = ({ children }) => {
    return (
        <AdminLayout>
            <div className="grid grid-cols-12 h-screen bg-gray-200">
                <div className="bg-gray-800 col-span-3 p-4">
                    <div className="flex text-lg text-purple-600 items-center gap-5"><Image alt="design" height={50} width={50} src={Logo} /> Admin</div>
                    <div className="text-white grid px-5 grid gap-4 mt-4">
                        <Link href={'/Admin/AdminDashboard'}>Dashboard</Link>
                        <Link href={'/Admin/AdminStudentRecord'}>Student Records</Link>
                        <Link href={'/Admin/AdminReports'}>Reports</Link>
                        <Link href={'/Admin/AdminCounseling'}>Counselling</Link>
                        <Link href={'/Admin/AdminSettings'}>Settings</Link>
                        <Link href={'/Admin/Login'}>Logout</Link>
                    </div>
                </div>
                <div className="col-span-9">
                      {children}
                </div>
            </div>
        </AdminLayout>
    );
}

export default AdminMenu;