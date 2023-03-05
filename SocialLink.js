import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialLink() {
  const link = [
    {
      id: 1,
      child: (
        <>
          Linkedin
          <FaLinkedin size={25} />
        </>
      ),
      href: "https://www.linkedin.com/feed/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github
          <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/mri12-2003",
    },
    {
      id: 3,
      child: (
        <>
          Email
          <HiOutlineMail size={25} />
        </>
      ),
      href: "https://mail.google.com/mail/u/0/#inbox/",
    },
    {
      id: 4,
      child: (
        <>
          Resume
          <BsFillPersonLinesFill size={25} />
        </>
      ),
      href: "https://www.linkedin.com/feed/",
      download: true,
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
       
         
          {link.map(({ id, child, href, style, download }) => (
            <li
              key={id}
              className={
                "flex flex-row justify-between items-center w-40 h-14 px-4 bg-neutral-200 ml-[-110px] hover:ml-[-10px] duration-700 " +
                " " +
                style
              }
            >
           
              <a
                href={href}
                className="flex justify-between items-center w-full text-2xl "
                download={download}
                target="-blank"
              >
              
                <> {child} </>
              </a>{" "}
            </li>
          ))}{" "}
       

        {/* <li className="flex flex-row justify-between items-center w-40 h-14 px-4 bg-white ml-[-110px] hover:ml-[-10px] duration-500 ">
          <a
            href=""
            className="flex justify-between items-center w-full text-2xl "
          >
            <>
              Linkedin
              <FaLinkedin size={25} />
            </>
          </a>
        </li> */}
      </ul>
    </div>
  );
}
