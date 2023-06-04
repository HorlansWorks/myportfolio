import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const NavBar = () => {
  const [Menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!Menu);
  };

  return (
    <div className="fixed w-full shadow-xl h-20 z-50 bg-[#ecf0f3]">
      <div className="z-10 flex items-center justify-between w-full h-full px-4 md:px-16">
        <h2 className="">smod</h2>
        <div className="">
          <ul className="hidden md:flex items-center">
            <Link href="/">
              <li className=" ml-10 text-sm uppercase border-gray-300 hover:border-b">
                Home
              </li>
            </Link>
            <Link href="/">
              <li className=" ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className=" ml-10 text-sm uppercase hover:border-b">
                Skills
              </li>
            </Link>
            <Link href="/">
              <li className=" ml-10 text-sm uppercase hover:border-b">
                projects
              </li>
            </Link>
            <Link href="/">
              <li className=" ml-10 text-sm uppercase hover:border-b">
                contact
              </li>
            </Link>
          </ul>
          <div onClick={toggleMenu} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          Menu
            ? "md:hidden fixed bg-black/70 h-screen w-full left-0 top-0 "
            : ""
        }
      >
        <div
          className={
            Menu
              ? "fixed w-[75%] h-screen p-10 ease-in duration-500 top-0 left-0 sm:w-[60%] md:w-[45%] bg-[#ecf0f3]"
              : "fixed w-[75%] h-screen p-10 ease-in duration-500 top-0 left-[-100%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3]"
          }
        >
          <div className="flex justify-between w-full border-b border-gray-300 items-center py-2">
            <div>
              <h3>smod</h3>
            </div>
            <div
              onClick={toggleMenu}
              className=" rounded-full shadow-lg shadow-gray-300 cursor-pointer p-3"
            >
              <AiOutlineClose />
            </div>
          </div>
          <ul>
            <Link href="/">
              <li className=" ml- py-4 text-sm uppercase border-gray-300 hover:border-b">
                Home
              </li>
            </Link>
            <Link href="/">
              <li className=" ml- py-4 text-sm uppercase border-gray-300 hover:border-b">
                About
              </li>
            </Link>
            <Link href="/">
              <li className=" ml- py-4 text-sm uppercase border-gray-300 hover:border-b">
                Skills
              </li>
            </Link>
            <Link href="/">
              <li className=" ml- py-4 text-sm uppercase border-gray-300 hover:border-b">
                projects
              </li>
            </Link>
            <Link href="/">
              <li className=" ml- py-4 text-sm uppercase border-gray-300 hover:border-b">
                contact
              </li>
            </Link>
          </ul>
          <div className=" mt-20 tracking-widest uppercase">
            <span className="text-[#5651e5]">Let's connect...</span>
            <div className="flex pt-6 justify-around w">
              <div className="cursor-pointer hover:scale-110 ease-in duration-75">
                <FaLinkedinIn size={25} />
              </div>
              <div className="cursor-pointer hover:scale-110 ease-in duration-75">
                <FaGithub size={25} />
              </div>
              <div className="cursor-pointer hover:scale-110 ease-in duration-75">
                <FaInstagram size={25} />
              </div>
              <div className="cursor-pointer hover:scale-110 ease-in duration-75">
                <AiOutlineMail size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
