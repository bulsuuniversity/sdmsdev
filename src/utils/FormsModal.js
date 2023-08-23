import { IoMdCloseCircle } from "react-icons/io";

const FormsModal = ({ closeModal, children }) => {
    return (
        <div style={{ backgroundImage: 'URL("/bulacan-state-university.jpg")' }}
            className={`fixed inset-0 flex bg-no-repeat bg-center flex-col items-center mt-16 justify-center z-50`}>
            <div className="relative">
                <div className="absolute right-0 top-0 flex justify-end ">
                    <button
                        className="text-gray-500 hover:text-gray-700 rounded-full bg-white"
                        onClick={closeModal}
                    >
                        <IoMdCloseCircle size={28} style={{ color: 'red' }} />
                    </button>
                </div>
                <div className="p-3 font-sans">
                    {/* Place the design of forms here */}
                    {children}
                </div>
            </div>
        </div>
    );
}

export default FormsModal;