import React, { useState, useRef, useEffect } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { IoMdNavigate } from 'react-icons/io';
import { BiCommentError } from 'react-icons/bi';




const ProfileButton = () => {
    const [isopen, setIsOpen] = useState(false);
    const profileRef = useRef(null);

    const handleToggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    const handleClickOutside = event => {
        if (profileRef.current && !profileRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className={`flex items-center`} ref={profileRef}>
            <span onClick={handleToggleMenu} className="mr-4">
                <BsPersonCircle size={45}/>
            </span>
            {isopen && (
                <div className="fixed top-8 right-2 flex flex-col">
                    <div className="scale-y-[-1] flex justify-end text-blue-600">
                        <IoMdNavigate size={32}/>
                    </div>
                    <div className="bg-white w-max h-96">
                        <div className="flex text-red-900 text-sm w-full flex-col">
                            <div className="bg-gray-400 flex p-4 gap-4 flex-col">
                                <div className='flex gap-4 items-center'><BiCommentError size={32}/> MAKE A REPORT</div>
                                <div>CONSULTATION</div>
                                <div>REPORT LOGS</div>
                            </div>
                            <div className="bg-white flex gap-4 p-4 flex-col">
                                <div>PROFILE</div>
                                <div>SIGN OUT</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileButton;
