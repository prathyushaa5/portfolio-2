import React from "react";
import  { useState } from 'react';
import photo1 from '../assets/images/c.jpg'
import photo2 from '../assets/images/c++.jpg'
import photo8 from '../assets/images/html.png'
import photo6 from '../assets/images/python.png'
import photo7 from '../assets/images/java.jpg'
import photo3 from '../assets/images/css.png'
import photo4 from '../assets/images/js.png'
import photo5 from '../assets/images/react.png'
import photo9 from '../assets/images/mongo.png'
import photo10 from '../assets/images/vs.webp'
import photo11 from '../assets/images/github.webp'
import photo12 from "../assets/images/tailwind.png"
const Skills = () => {
  
  return (
    
    <>
    <section id="skills"className="flex w-full p-10 bg-black text-white flex-wrap flex-col justify-center ml-0 mr-0 mt-20 gap-4">
      <div className="flex items-center gap-3  justify-center  align-center">
        Languages:<img src={photo1} alt="Photo 1" className=" md:w-12  w-6 " />
        <img src={photo2} alt="Photo 2" className=" md:w-12 w-6 " />
        <img src={photo8} alt="Photo 3" className=" md:w-12 w-6 " />
        <img src={photo6} alt="Photo 4" className="  md:w-12 w-6 " />
        <img src={photo7} alt="Photo 5" className="  md:w-12 w-6 " />
        <img src={photo3} alt="Photo 6" className=" md:w-12 w-6 " />
        <img src={photo4} alt="Photo 7" className=" md:w-12  w-6 " />
      </div>
      <div className="flex items-center  justify-center gap-4">
        Libraries&Tools:
        <img src={photo5} alt="Photo 2" className=" md:w-12 w-6 " />
        <img src={photo9} alt="Photo 3" className=" md:w-12 w-6 " />
        <img src={photo10} alt="Photo 3" className=" md:w-12 w-6 " />
        <img src={photo11} alt="Photo 3" className=" md:w-12 w-6 " />
       <img src={photo12} alt="Photo 4" className=" md:w-12 w-6"/>
      </div>
      </section>
    </>
  );
};

export default Skills;
