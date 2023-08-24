

const Homebutton = ({ setViewPort }) => {

    const handleClick = () => {
        if (window.location.pathname === "/") {
            setViewPort("blogRef");;
        } else {
            window.location.href = "/"
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
