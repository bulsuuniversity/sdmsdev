import React, { useState, useRef, useEffect } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { RiNavigationFill } from 'react-icons/ri';
import { BiCommentError } from 'react-icons/bi';
import { FaUserFriends } from 'react-icons/fa';
import { ImNewspaper } from 'react-icons/im';
import { FaUserCircle } from 'react-icons/fa';
import { VscSignOut } from 'react-icons/vsc';
import Link from 'next/link';

const ProfileButton = ({setLogedIn}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const profileRef = useRef(null);

    const handleToggleMenu = () => {
        setMenuOpen(prevState => !prevState);
        setLogedIn(true)
    };

    const handleClickOutside = event => {
        if (profileRef.current && !profileRef.current.contains(event.target)) {
            setMenuOpen(false);
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
            <span onClick={handleToggleMenu} className="mr-7">
                <BsPersonCircle size={45} />
            </span>
            {menuOpen && (
                <div className="fixed top-8 right-2 flex flex-col">
                    <div className='relative right-52 top-0'>
                        <div className="absolute top-0 -right-52 scale-y-[-1] text-blue-600">
                            <RiNavigationFill size={38} style={{ rotate: '45deg' }} />
                        </div>
                        <div className="absolute top-8 w-max">
                            <div className="flex text-red-900 shadow shadow-gray-500 text-sm w-full flex-col">
                                <div className="bg-gray-400 flex flex-col">
                                    <Link 
                                    href={'/MakeReport'}
                                    // onClick={handleToggleMenu}
                                    className='flex gap-4 border border-transparent p-4 hover:bg-gray-300 hover:border-gray-800 items-center'>
                                        <BiCommentError size={32} /> MAKE A REPORT</Link>
                                    <Link 
                                    href={'/Consult'}
                                    // onClick={handleToggleMenu}
                                    className='flex gap-4 border border-transparent p-4 hover:bg-gray-300 hover:border-gray-800 items-center'>
                                        <FaUserFriends size={32} /> CONSULTATION</Link>
                                    <Link 
                                    href={'/ReportLog'}
                                    // onClick={handleToggleMenu}
                                    className='flex gap-4 border border-transparent p-4 hover:bg-gray-300 hover:border-gray-800 items-center'>
                                        <ImNewspaper size={32} /> REPORT LOGS</Link>
                                </div>
                                <div className="bg-white flex flex-col">
                                    <Link 
                                    href={'/Profile'}
                                    // onClick={handleToggleMenu}
                                    className='flex gap-4 border border-transparent p-4 hover:bg-gray-300 hover:border-gray-800 items-center'>
                                        <FaUserCircle size={32} /> PROFILE</Link>
                                    <div className='flex gap-4 border border-transparent p-4 hover:bg-gray-300 hover:border-gray-800 items-center'>
                                        <VscSignOut size={32} /> SIGN OUT</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileButton;
