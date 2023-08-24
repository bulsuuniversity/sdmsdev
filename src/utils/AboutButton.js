

const AboutButton = ({ setViewPort }) => {

    const handleClick = () => {
        if (window.location.pathname === "/") {
            setViewPort("aboutRef");
        } else {
            window.location.href = "/"
            setViewPort("aboutRef")
        }
    };
    return (
        <div
            onClick={handleClick}
            className={`flex items-center`}>
            <span className="mr-4">ABOUT</span>
        </div>
    );
}

export default AboutButton