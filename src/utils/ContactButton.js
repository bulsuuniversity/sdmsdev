import { useRouter } from "next/navigation";


const ContactButton = ({ setViewPort }) => {
const router = useRouter()
    const handleClick = () => {
        if (window.location.pathname === "/") {
            setViewPort("contactRef");;
        } else {
            router.push("/")
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