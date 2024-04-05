import React from 'react'
import { BsWindowSidebar } from "react-icons/bs";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";
import { FaRegComment, FaStar } from "react-icons/fa";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import img from '../assets/img.jpg'
import { HiOutlineLightBulb } from "react-icons/hi";







const Content = () => {
    return <>
        <div className='flex justify-between py-3  px-6  w-full'>
            <div className='flex  text-gray-400 gap-4 text-sm font-semibold items-center'>
                <span><BsWindowSidebar /></span>
                <span><FaLessThan /></span>
                <span><FaGreaterThan /></span>
                <span className='flex items-center gap-2'>
                    <MdLockOutline />
                    <h1>My private channel / 👋 Getting started</h1>
                </span>
            </div>
            <div className='flex  text-gray-400 gap-4 text-sm font-semibold items-center'>
                <h1>Share</h1>
                <span><FaRegComment /></span>
                <span className='text-yellow-400'><FaStar /></span>
                <span><IoEllipsisVerticalOutline /></span>
            </div>
        </div>

        <div className='px-12 py-4'>
            <h1 className='font-bold text-5xl mb-8'>Getting started</h1>

            <div className='bg-stone-100 p-4 rounded-lg w-[80%] text-base text-gray-950'>
                <h1 className='pb-4 text-pretty'>
                    This doc is in your <span className='font-bold'>private channel,</span> where you can store your private work. You can share docs one by one from here, but to properly organize your team's knowledge base, use <span className='font-bold'>workspace channels.</span>
                </h1>
                <h1>
                    You can make channels <span className='font-bold'>public</span> to make all docs visible to everyone on the team, or <span className='font-bold'>private</span> if you want the channel's docs to only be visible by a selection of teammates.
                </h1>
            </div>


            <h1 className='text-3xl font-bold w-[80%] mt-8'>
                Collaborate with your team with these three features
            </h1>

            <h1 className='text-2xl font-bold w-[80%] mt-8'>
                ✍ Docs
            </h1>

            <div className='mt-6 w-[80%]'>
                <img src={img} alt="" />
            </div>

            <div className='w-[80%] mt-4'>
                <label className="input input-bordered flex items-center gap-2 h-10 w-full max-w-xs md:max-w-full">
                    <HiOutlineLightBulb />
                    <input type="text" className="grow h-10 w-auto" placeholder="Give it a go by typing / below" />
                </label>
            </div>

        </div>

    </>
}

export default Content