

const ConfirmationModal = ({ children }) => {
    return (
        <div className={`fixed inset-0 flex bg-opacity-50 bg-gray-200 flex-col items-center mt-16 justify-center z-50`}>
            <div style={{background: 'radial-gradient(circle, rgba(243,209,176,1) 20%, rgba(181,86,82,1) 70%)'}}
             className="p-3 rounded-lg font-sans">
                {/* Place the design of forms here */}
                {children}
            </div>
        </div>
    );
}

export default ConfirmationModal;