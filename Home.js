import React from "react";
// import { icons } from "react-icons";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { Link } from "react-scroll";
export default function Home() {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black via-gray-600 bg-gray-500 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4  md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl pt-16 sm:text-5xl font-bold text-white">
            I am Mritunjay Sharan
          </h2>
          <p className="text-gray-200 py-4 max-w-md text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <div>
            <Link
              to="Project"
              smooth duration={600}
              className="group text-white w-fit items-center rounded-md  bg-gradient-to-b from-cyan-400 to-blue-400 cursor-pointer bord border-solid  flex flex-row p-3 "
              
              // bg-teal-50
              //  bg-gradient-to-b from-cyan-400 to-blue-300
            >
              Project
              <span className="ml-2 group-hover:rotate-90 duration-300 ">
                <BsArrowRightSquareFill size={20} />
              </span>
            </Link>
          </div>
        </div>
        {/* <div>
            <img src="" alt="My "/>
          </div> */}
      </div>
    </div>
  );
}
