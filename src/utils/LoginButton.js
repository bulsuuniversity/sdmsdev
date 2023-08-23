const LoginButton = ({handleButtonClick, active}) => {
    return (
        <div onClick={() => handleButtonClick("button1")}
        className={`flex items-center ${active === "button1" ? 'bg-[#ebac85] text-black' : 'bg-red-900'}`}>
        <div className="overflow-hidden flex relative items-center h-14">
            <div className={`h-0 w-0 
            border-y-[4rem] border-y-red-900 
            border-r-[6rem] 
             ${active === "button1" ? 'border-[#ebac85]' : 'border-orange-300'}
            `}></div>
            <div className={`h-0 w-0 absolute left-11 z-10 
            border-y-[4rem] border-y-transparent 
            border-r-[6rem]
             ${active === "button1" ? 'border-r-[#ebac85]' : 'border-r-red-900'}
            `}></div>
        </div>
        <span className="mr-4">Login</span>
    </div>
    );
}

export default LoginButton;