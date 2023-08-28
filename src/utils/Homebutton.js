import { useRouter } from "next/navigation";

const Homebutton = ({ setViewPort }) => {
    const router = useRouter()
    const handleClick = () => {
        if (window.location.pathname === "/") {
            setViewPort("blogRef");;
        } else {
            router.push("/")
            setViewPort("blogRef");
        }
    };

    return (
        <div
            onClick={handleClick}
            className={`flex items-center`}>
            <span className="mr-4">HOME</span>
        </div>
    );
}

export default Homebutton;
