

const ContactButton = ({ setViewPort }) => {

    const handleClick = () => {
        if (window.location.pathname === "/") {
            setViewPort("contactRef");;
        } else {
            window.location.href = "/"
            setViewPort("contactRef");
        }

    };
    return (
        <div
            onClick={handleClick}
            className={`flex items-center`}>
            <span className="mr-4">CONTACT US</span>
        </div>
    );
}

export default ContactButton;