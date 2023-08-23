const Homebutton = ({setViewPort}) => {
    return (
        <div
        onClick={() => setViewPort("blogRef")}
        className={`flex items-center`}>
        <span className="mr-4">HOME</span>
    </div>
    );
}

export default Homebutton;