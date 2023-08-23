const ContactButton = ({setViewPort}) => {
    return (
        <div
        onClick={() => setViewPort("contactRef")}
            className={`flex items-center`}>
            <span className="mr-4">CONTACT US</span>
        </div>
    );
}

export default ContactButton;