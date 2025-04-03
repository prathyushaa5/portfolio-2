import React from "react";
import photo1 from '../assets/images/c.jpg';
import photo2 from '../assets/images/c++.jpg';
import photo8 from '../assets/images/html.png';
import photo6 from '../assets/images/python.png';
import photo7 from '../assets/images/java.jpg';
import photo3 from '../assets/images/css.png';
import photo4 from '../assets/images/js.png';
import photo5 from '../assets/images/react.png';
import photo9 from '../assets/images/mongo.png';
import photo10 from '../assets/images/vs.webp';
import photo11 from '../assets/images/github.webp';
import photo12 from "../assets/images/tailwind.png";
import photo13 from '../assets/images/csharp.png';


const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center w-full p-10 bg-black text-white space-y-6 mt-20"
    >
      {/* Languages Section */}
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-4 text-gray-300 uppercase tracking-wide">
          Languages
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          {[photo1, photo2, photo6, photo7, photo3, photo4,photo13,photo8].map(
            (image, index) => (
              <img
                key={index}
                src={image}
                alt={`Skill ${index + 1}`}
                className="md:w-12 w-8 h-auto object-contain transition-transform transform hover:scale-110 hover:drop-shadow-lg"
              />
            )
          )}
        </div>
      </div>

      {/* Libraries & Tools Section */}
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-4 text-gray-300 uppercase tracking-wide">
          Libraries & Tools
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          {[photo5, photo9, photo10, photo11, photo12].map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Tool ${index + 1}`}
              className="md:w-12 w-8 h-auto object-contain transition-transform transform hover:scale-110 hover:drop-shadow-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
