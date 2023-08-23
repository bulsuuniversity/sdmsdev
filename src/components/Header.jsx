"use client"
import Image from "next/image";
import Logo from "../../public/Logo.png"
import { useRef, useState } from "react";
import LoginButton from "@/utils/LoginButton";
import RegisterButton from "@/utils/RegisterButton";
import Login from "./Login";
import Register from "./Register";
import EnterCode from "./EnterCode";
import AboutButton from "@/utils/AboutButton";
import ContactButton from "@/utils/ContactButton";
import Homebutton from "@/utils/Homebutton";
import ProfileButton from "@/utils/ProfileButton";


const Header = ({setViewPort}) => {
    const [active, setActive] = useState('')
    const [modal, setModal] = useState('')
    const [logedIn, setLogedIn] = useState(false)

    const handleButtonClick = (buttonName) => {
        setActive(buttonName);
    };

    const handleModal = (modalName) => {
        setModal(modalName);
    };

    return (
        <div className="fixed top-0 w-full bg-red-900 h-16 flex font-serif justify-between z-10">
            <div className="flex justify-start">
                <Image className="w-16 pl-3 pr-2 py-1" src={Logo} alt="Logo" />
                <span className="text-white text-2xl flex items-center">Bulacan State University</span>
            </div>
            <div className="flex cursor-pointer text-white text-2xl items-center justify-end">
                {logedIn ?
                    <>
                        <Homebutton setViewPort={setViewPort}/>
                        <ContactButton setViewPort={setViewPort}/>
                        <AboutButton setViewPort={setViewPort}/>
                        <ProfileButton />
                    </>
                    :
                    <>
                        <LoginButton handleButtonClick={handleButtonClick} active={active} />
                        <RegisterButton handleButtonClick={handleButtonClick} active={active} />
                    </>
                }
            </div>
            {active === 'button1' && <Login setActive={setActive} setLogedIn={setLogedIn}/>}
            {active === 'button2' && <Register setActive={setActive} />}
            {active === 'sendCode' && <EnterCode handleModal={handleModal} modal={modal} setActive={setActive} />}
        </div>
    );
}

export default Header;