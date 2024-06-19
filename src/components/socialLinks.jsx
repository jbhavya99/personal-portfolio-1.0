import React from 'react'
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const socialLinks = () => {
  return (
    <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {/* <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500'> THIS IS OKAY, LET'S WORK ON ANIMATION STUFF*/}
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] rounded-tr-md hover:ml-[-10px] hover:rounded-lg duration-500 bg-gray-600 hover:bg-gray-700'>
                <a href="https://www.linkedin.com/in/bhavya-jain-096552229/" className='flex justify-between items-center w-full text-white'>
                    <>
                    LinkedIn <FaLinkedin size={30}/>
                    </>
                </a>
            </li>
            {/* JUST NOT USING THE LINKS AND MAKING COPIES */}
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px]  hover:ml-[-10px] hover:rounded-lg duration-500 bg-gray-600 hover:bg-gray-700'>
                <a href="https://github.com" className='flex justify-between items-center w-full text-white'>
                    <>
                    GitHub <FaGithub size={30}/>
                    </>
                </a>
            </li>
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px]  hover:ml-[-10px] hover:rounded-lg duration-500 bg-gray-600 hover:bg-gray-700'>
                <a href="https://www.instagram.com/bhavya.jain_09/" className='flex justify-between items-center w-full text-white'>
                    <>
                    Instagram <FaInstagram size={30}/>
                    </>
                </a>
            </li>
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] rounded-br-md hover:ml-[-10px] hover:rounded-lg duration-500 bg-gray-600 hover:bg-gray-700'>
                <a href="mailto: jbhavya310@gmail.com" className='flex justify-between items-center w-full text-white'>
                    <>
                    Mail <HiOutlineMail size={30}/>
                    </>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default socialLinks