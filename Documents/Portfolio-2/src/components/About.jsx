import React from "react";
import aboutImg from "../assets/images/about.png";

const About = () => {
  const cvUrl = "/Resume(1).pdf"; // Absolute path to the file in the public folder

  return (
    <section id="about" className="py-10 bg-black text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>

        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 mx-auto">
                I am Prathyusha, a 20-year-old engineering student from Surathkal, Mangalore. Currently, I am in my fourth year of studying Computer Science at St. Joseph Engineering College, Mangalore. Passionate about technology and problem-solving, I am eager to continue expanding my knowledge and skills in the field of computer science.
              </p>

              <br />
              <br />

              <a href={cvUrl} download="Resume(1).pdf">
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
