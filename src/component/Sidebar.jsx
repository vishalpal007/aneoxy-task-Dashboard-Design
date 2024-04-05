import React, { useState } from 'react';
import logo from '../assets/logo.avif';
import { FaRegBell, FaSearch, FaCaretDown } from "react-icons/fa";
import { PiHandTap } from "react-icons/pi";
import { GoClock } from "react-icons/go";
import { RiDiscussLine } from "react-icons/ri";

const Sidebar = () => {
    const [dropdown, setDropdown] = useState(false);

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    return (
        <div className='sidebar w-[300px]'>
            <div className='flex justify-between items-center py-4'>
                <div className='flex items-center gap-2'>
                    <img className='avatar h-6 w-6 rounded-full' src={logo} alt="logo" />
                    <h1 className='font-bold'>refero team</h1>
                </div>
                <FaRegBell />
            </div>

            <div className='flex items-center justify-between gap-2 mb-2'>
                <label className="input input-bordered flex items-center gap-2 h-10 w-full max-w-xs md:max-w-full">
                    <PiHandTap />
                    <input type="text" className="grow h-10 w-auto" placeholder="Ask your AI assistant" />
                </label>
                <div className='bg-white h-10 w-10 rounded-box flex justify-center items-center'>
                    <FaSearch />
                </div>
            </div>

            <div className='bg-gray-200 p-4 rounded-lg'>
                <h1 className='font-bold text-sm my-1 text-stone-950'>Your team used 8/50 free docs</h1>
                <h1 className='text-sm text-stone-950'>Upgrade to create unlimited docs</h1>
            </div>

            <div className='my-6 '>
                <div className='flex gap-2 items-center py-2 text-gray-700 font-semibold'>
                    <GoClock />
                    <h1 className='text-stone-950'>Catch up</h1>
                </div>

                <div className='flex gap-2 items-center py-2 text-gray-700 font-semibold'>
                    <RiDiscussLine />
                    <h1 className='text-stone-950'>Discussions</h1>
                </div>
            </div>

            <div className='my-6 '>
                <h1 className='font-bold mb-4'>Favorites</h1>
                <h1 className='px-6 text-stone-950 font-semibold'>👋 Getting started</h1>
            </div>

            <div className='my-6 '>
                <h1 className='font-bold mb-4'>My Channels</h1>
                <div className='my-4'>
                    <h1 onClick={toggleDropdown} className='flex items-center gap-2 cursor-pointer'>
                        <FaCaretDown />
                        My private channel
                    </h1>
                    {dropdown ? (
                        <div className='px-6 text-stone-900 font-semibold bg-sky-200 p-2 rounded-lg mt-4'>
                            👋 Getting started
                        </div>
                    ) : null}
                </div>

                <div className='my-4'>
                    <h1 onClick={toggleDropdown} className='flex items-center gap-2 cursor-pointer'>
                        <FaCaretDown />
                        Engineering
                    </h1>
                </div>

                <div className='my-4'>
                    <h1 onClick={toggleDropdown} className='flex items-center gap-2 cursor-pointer'>
                        <FaCaretDown />
                        Product
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
