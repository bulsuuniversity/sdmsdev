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
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ setViewPort }) => {
    //login or register forms for active to display
    const [active, setActive] = useState('')
    const [modal, setModal] = useState('')
    const [logedIn, setLogedIn] = useState()
    const [isopen, setIsOpen] = useState(false);

    const handleButtonClick = (buttonName) => {
        setActive(buttonName);
    };

    const handleModal = (modalName) => {
        setModal(modalName);
    };

    return (
        <div className="fixed top-0 w-screen bg-red-900 overflow-hidden h-16 flex font-serif justify-between z-10">
            <div className="flex justify-start">
                <Image className="w-16 h-16 pl-3 pr-2 py-1" src={Logo} alt="Logo" />
                <span className="text-white md:flex hidden text-2xl items-center">Bulacan State University</span>
            </div>
            <div className="flex w-full md:hidden cursor-pointer text-white pr-4 text-2xl items-center justify-end">
                <div onClick={() => setIsOpen(!isopen)}>
                    <GiHamburgerMenu size={32}/>
                </div>
                {isopen &&
                    <div className="fixed inset-0 top-16">
                       {logedIn ?
                        <div className="bg-red-900 flex flex-col gap-3 p-8 h-screen">
                            <Homebutton setViewPort={setViewPort} />
                            <ContactButton setViewPort={setViewPort} />
                            <AboutButton setViewPort={setViewPort} />
                            <ProfileButton setLogedIn={setLogedIn}/>
                        </div>
                        :
                        <>
                            <LoginButton handleButtonClick={handleButtonClick} active={active} />
                            <RegisterButton handleButtonClick={handleButtonClick} active={active} />
                        </>}
                    </div>
                }

            </div>
            <div className="md:flex hidden cursor-pointer text-white text-2xl items-center justify-end">
                {logedIn ?
                    <>
                        <Homebutton setViewPort={setViewPort} />
                        <ContactButton setViewPort={setViewPort} />
                        <AboutButton setViewPort={setViewPort} />
                        <ProfileButton setLogedIn={setLogedIn}/>
                    </>
                    :
                    <>
                        <LoginButton handleButtonClick={handleButtonClick} active={active} />
                        <RegisterButton handleButtonClick={handleButtonClick} active={active} />
                    </>
                }
            </div>
            {active === 'button1' && <Login setActive={setActive} setLogedIn={setLogedIn} />}
            {active === 'button2' && <Register setActive={setActive} />}
            {active === 'sendCode' && <EnterCode handleModal={handleModal} modal={modal} setActive={setActive} />}
        </div>
    );
}

export default Header;