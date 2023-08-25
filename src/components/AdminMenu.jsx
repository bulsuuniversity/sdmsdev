import Image from "next/image";
import Logo from "../../public/Logo.png"
import Link from "next/link";

const AdminMenu = ({ children }) => {
    return (
        <div className="w-full flex">
            <div className="bg-gray-800 h-full w-1/4">
                <div className="flex text-lg text-purple-600 items-center gap-5"><Image height={50} width={50} src={Logo} /> Admin</div>
                <div className="text-white grid">
                    <Link href={'./'}>Dashboard</Link>
                    <Link href={'./'}>Student Records</Link>
                    <Link href={'./'}>Reports</Link>
                    <Link href={'./'}>Counselling</Link>
                    <Link href={'./'}>Settings</Link>
                    <Link href={'./'}>Logout</Link>
                </div>
            </div>
            {children}
        </div>
    );
}

export default AdminMenu;