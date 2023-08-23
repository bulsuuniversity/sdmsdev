const AboutButton = ({setViewPort}) => {
    return (
        <div
        onClick={() => setViewPort("aboutRef")}
        className={`flex items-center`}>
        <span className="mr-4">ABOUT</span>
    </div>
    );
}

export default AboutButton;