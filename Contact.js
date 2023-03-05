import React from "react";

export default function Contact() {
  return (
    <div
      name="Contact"
      className="w-full h-screen bg-gradient-to-b from-black  to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 hover:border-b-2 cursor-pointer border-gray-500">
            Contact
          </p>
          <p className="my-6 text-2xl    border-gray-500  cursor-pointer">
            Get in Touch with me
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/a237a252-6125-43bd-a10b-85d3822578c5"
            method="POST"
            className="flex  flex-col w-full md:w-1/2  "
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name "
              className="p-2 bg-transparent border-2 rounded-sm text-white focus-white focus:outline-none"
            />

            <input
              required
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 my-4 bg-transparent border-2 rounded-sm text-white focus-white focus:outline-none"
            />

            <textarea
              name="message"
              placeholder="Message here"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-sm text-white focus:outline-none"
            ></textarea>

            <button className="   text-white bg-gradient-to-b from-cyan-400 to-blue-400 px-5  py-2  text-xl mx-auto flex items-center rounded-sm my-2 hover:scale-105 duration-300  sm-flex flex-col  ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
