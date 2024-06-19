import React from "react";
import profilePhoto2 from "../assets/Bhavya Jain Image.jpg";
import { BiLock } from "react-icons/bi";
import { LuGraduationCap } from "react-icons/lu";

const about = () => {
  return (
    <div name="About" className="border-b border-neutral-900 pb-4">
      <h1 className="mt-12 md:my-16 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="w-full md:w-4/5 md:flex flex-row p-4 mx-auto">
        <div className="flex justify-center md:w-3/4">
          <img
            src={profilePhoto2}
            alt="me"
            className="rounded-2xl mx-auto w-1/2 md:w-full hidden md:block"
          />
        </div>
        <div className="px-12 md:pt-4">
          <p>
            Hello, My name is Bhavya Jain. I am currently pursuing a B.Tech
            degree in Mathematics and Computing at Delhi Technological
            University.
          </p>
          <br />
          <p>
            I enjoy problem solving, writing codes and like to develop beautiful
            looking websites. In this rapidly growing technological environment,
            I am one of those who enjoy adapting themselves to the new aspects.
            I am constantly working on making myself better and make a positive
            impact in the world. Apart from these, I do have a keen interest in
            financial markets and investing.
          </p>
        </div>
      </div>
      <h2 className="mt-16 underline text-3xl px-16 md:px-44">My Education</h2>
      {/* BELOW CODE IS COPIED FROM https://flowbite.com/docs/components/timeline/ */}
      <section class="body-font text-slate-300 relative z-1">
        <div class="container px-5 mx-auto flex flex-wrap py-12 md:py-24">
          {/* FIRST PART OF SECTION */}
          <div class="flex relative pt-10 pb-20 sm:w-2/3 mx-8 md:mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 relative z-1"></div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <LuGraduationCap size={50} />
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-200 mb-1 text-xl">
                  Delhi Technological University
                </h2>
                <p class="leading-relaxed">(2021-Present)</p>
                <p> Pursuing B.Tech in Mathematics & Computing.</p>
                <p class="leading-relaxed"> Score - 8.74 (present)</p>
              </div>
            </div>
          </div>
          {/* SECOND PART OF SECTION */}
          <div class="flex relative pt-10 pb-20 sm:w-2/3 mx-8 md:mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 relative z-1"></div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <LuGraduationCap size={50} />
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-200 mb-1 text-xl">
                  Aaryan International School
                </h2>
                <p class="leading-relaxed">(2018-2020)</p>
                <p class="leading-relaxed">
                  {" "}
                  Completed my 12th class from CBSE board.
                </p>
                <p class="leading-relaxed"> Scored 91.4% in AISSCE'2020.</p>
              </div>
            </div>
          </div>

          {/* THIRD PART OF THE SECTION */}
          <div class="flex relative pb-20 sm:w-2/3 mx-8 md:mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 relative z-1"></div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <LuGraduationCap size={40} />
              </div>
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-200 mb-1 text-xl">
                  S.D. Public School
                </h2>
                <p class="leading-relaxed">( -2018)</p>
                <p class="leading-relaxed">
                  {" "}
                  Completed my 10th class from CBSE board.
                </p>
                <p class="leading-relaxed"> Scored 96.4% in AISSE'2018.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
