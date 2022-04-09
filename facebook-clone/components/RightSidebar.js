import React from 'react';
import { RiVideoAddFill } from 'react-icons/ri';
import { BiSearch } from 'react-icons/bi';
import { CgMoreAlt } from 'react-icons/cg';
import Contacts from './Contacts';


const RightSidebar = () => {
  return (
    <div className='hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]'>
        <div className='flex items-center text-gray-500'>
            <p className='flex text-lg font-semibold flex-grow'>Contacts</p>
            <div className='flex space-x-1 px-2'>
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <RiVideoAddFill />
                </div>
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <BiSearch />
                </div>
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <CgMoreAlt />
                </div>
            </div>
        </div>
        <Contacts src='https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinyrgb&dpr=2&w-500'
        name='Amy Vang'
        status='Online'/>
        <Contacts src='https://www.mckinsey.com/~/media/mckinsey/careers%20redesign/meet%20our%20people/profiles/yetunde/yetunde_1132x1224.jpg?mw=1536&car=48:59&cpx=Left&cpy=Top'
        name='McKinsey Jones'
        status='Online'/>
        <Contacts src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
        name='Alice Royce'
        status='Offline'/>
    </div>
  )
}

export default RightSidebar;