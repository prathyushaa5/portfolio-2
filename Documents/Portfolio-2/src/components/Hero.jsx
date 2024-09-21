import React from "react";
import myimage from "../assets/images/prathyusha.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex md:flex-row flex-col items-center bg-black"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img 
          src={myimage} 
          alt="Hero" 
          className="w-2/4 md:w-96 rounded-full h-auto object-cover" 
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Prathyusha</span>
          </h1>
          
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-2xl flex items-center md:justify-start justify-center gap-5">
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com/_prathyushha/" target="_self" rel="noopener noreferrer" className="text-white hover:text-gray-500">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="https://www.linkedin.com/in/prathyusha-acharya/" target="_self" rel="noopener noreferrer" className="text-white hover:text-gray-500">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="https://github.com/prathyushaa5" target="_self" rel="noopener noreferrer" className="text-white hover:text-gray-500">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
  