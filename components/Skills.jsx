import React from "react";
import { Stacks } from "@/public/skills";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="w-full p-2 lg:h-screen px-20">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="py-4 text-xl tracking-widest">Stacks</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Stacks.map((skill) => (
            <div className=" w-full flex items-center mx-auto p-6 shadow-xl  rounded-xl hover:scale-105 ease-in duration-300">
              <Image
                src={`/../public/skills/${skill.image}`}
                height={25}
                width={25}
                alt="/"
                className=" mr-4"
              />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
