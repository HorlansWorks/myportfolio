import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 py-16 flex flex-col items-center justify-center">
      <h2>About</h2>
      <div className="max-w-[1240px] w-full md:grid grid-cols-3 md:px-20 gap-8 m-auto items-center justify-center">
        <div className=" col-span-1 flex justify-center">
          <div className=" bg-gray-100 shadow-lg w-[200px] rounded-md h-[250px] py-8"></div>
        </div>
        <div className="col-span-2 flex flex-col-reverse justify-center items-center">
          <p className="  text-justify w-[75%] py-4 text-gray-600">
            I'm a full-stack web developer with over six years experience in
            python programming. I'm presently focused on building responsive
            front-end web applications with react and Next (javascript
            libraries) and also building scalable backend with Django (python
            library).
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
