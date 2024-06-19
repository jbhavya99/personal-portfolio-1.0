import React from "react";
import html from "../assets/html.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import cpp from "../assets/cpp2.png";
import python from "../assets/python2.png";
import algorithms from "../assets/algorithms.png";

const experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
      progress: "49%",
    },
    {
      id: 2,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-400",
      progress: "70%",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
      progress: "45%",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-red-300",
      progress: "69%",
    },
    {
      id: 5,
      src: cpp,
      title: "CPP",
      style: "shadow-violet-600",
      progress: "65%",
    },
    {
      id: 6,
      src: algorithms,
      title: "Algorithms",
      style: "shadow-pink-400",
      progress: "75%",
    },
    {
      id: 7,
      src: python,
      title: "Python",
      style: "shadow-white",
      progress: "38%",
    },
  ];
  return (
    <div name="Skills" className="border-b border-neutral-900 pb-4">
      <h1 className="mt-12 md:my-16 text-center text-4xl">
        Technologies / Skills
      </h1>

      {/* <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white"> */}
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center min-h-screen text-white">
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style, progress }) => (
            <div
              key={id}
              // USE BACKTICKS (left of 1) TO MAKE STYLES APPLY
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
              <div className="w-full bg-slate-600 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="h-2.5 bg-blue-300 rounded-full"
                  //   THE BELOW IS THE CORRECT WAY TO APPLY STYLE, O/W WHOLE PAGE IS BLANK
                  style={{ width: `${progress}` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default experience;
