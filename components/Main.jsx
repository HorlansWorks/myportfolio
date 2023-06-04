import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div>
          <p className="uppercase tracking-widest  text-gray-600">Welcome</p>
          <h1 className="py-4 text-gray-600">
            Hey, I'm <span className="text-[#6561e6]">Samuel</span>
          </h1>
          <h2 className="py-1 text-gray-700 text-lg">
            A full-stack web developer
          </h2>
          <p className="text-gray-600 text-justify max-w-[70%] m-auto md:max-w-[50%]">
            I'm a full-stack web developer with over six years experience in
            python programming. I'm presently focused on building responsive
            front-end web applications with react and Next (javascript
            libraries) and also building scalable backend with Django (python
            library).
          </p>
          <div className="flex items-center justify-between max-w-[330px] mx-auto pt-8">
            <div className="shadow-lg shadow-gray-400 rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-75">
              <FaLinkedinIn size={20} />
            </div>
            <div className="shadow-lg shadow-gray-400 rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-75">
              <FaGithub size={20} />
            </div>
            <div className="shadow-lg shadow-gray-400 rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-75">
              <FaInstagram size={20} />
            </div>
            <div className="shadow-lg shadow-gray-400 rounded-full p-4 cursor-pointer hover:scale-110 ease-in duration-75">
              <AiOutlineMail size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
