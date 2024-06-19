import React from "react";
import profilePhoto from "../assets/myImage.png";
import { MdDownload } from "react-icons/md";
import resume from "../../public/Myresume (5).pdf";

const home = () => {
  return (
    <div
      name="Home"
      // className='h-screen w-full border-b border-neutral-900' W-FULL DOES NOT MAKE A DIFFERENCE RIGHT NOW>
      className="h-screen border-b border-neutral-900"
    >
      {/* className='h-screen w-full border-b border-neutral-900 pb-4 lg:mb-36' THIS MAKES A MARGIN AT BOTTOM> */}
      {/* <div className='w-full lg:w-1/2'> */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row px-4 pb-4">
        <div className="flex flex-col justify-center h-full">
          <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent text-2xl md:text-4xl  pt-20 md:pt-0">
            Programmer & Frontend Developer
          </span>
          <h1 className="pb-6 md:pb-8 text-4xl tracking-tight lg:mt-3 lg:text-8xl text-gray-200">
            Bhavya Jain
          </h1>
          <p className="font-light text-white max-w-md">
            I am a passionate techy geek. I like developing beautiful websites.
            I am proficient in problem solving and algorithms too.
          </p>
          {/* <span>
              <button <a href={resume} className='cursor-default'></a> className='text-white w-fit px-3 md:px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-400 transform hover:shadow-lg hover:scale-95 duration-200 cursor-pointer'>
                My-Resume
                <span className='pl-3'>
              
                <MdDownload />
              
                </span>
              </button>
            </span> */}
          <div>
            <a href={resume} download className="inline-block">
              <button className="text-white w-fit px-3 md:px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-400 transform hover:shadow-lg hover:scale-95 duration-200 cursor-pointer">
                My-Resume
                <span className="pl-3">
                  <MdDownload />
                </span>
              </button>
            </a>
          </div>
        </div>
        {/* after the content div, we need picture */}
        <div className="w-full md:w-1/2 md:p-8">
          <div className="flex justify-center">
            <img
              src={profilePhoto}
              alt="my profile"
              className="rounded-2xl mx-auto w-1/2 md:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
