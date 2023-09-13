import { IoMdCloseCircle } from "react-icons/io";
import Link from "next/link";
const AccountModal = ({ children }) => {
    return (
        <div style={{ backgroundImage: 'URL("/bulacan-state-university.jpg")' }}
            className={`fixed inset-0 flex bg-no-repeat w-screen h-screen bg-cover flex-col items-center mt-16 justify-center`}>
            <div className="relative">
                <div className="absolute right-0 top-0 flex justify-end ">
                    <Link
                        className="text-gray-500 hover:text-gray-700 rounded-full bg-white"
                        href={'/'}
                    >
                        <IoMdCloseCircle size={28} style={{ color: 'red' }} />
                    </Link>
                </div>
                <div className="p-3 font-sans">
                    {/* Place the design of forms here */}
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AccountModal;