

const InformationModal = ({ children }) => {
    return (
        <div className={`fixed inset-0 flex bg-opacity-50 bg-gray-200 flex-col items-center justify-center z-50`}>
            <div className="border border-black border-2 bg-red-200 rounded-lg font-sans">
                {/* Place the design of forms here */}
                {children}
            </div>
        </div>
    );
}

export default InformationModal;