import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.jpg";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project_5.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Blood Managment System using TKinter",
      github_link: "https://github.com/prathyushaa5/BloodManagmentSystem",
    },
    {
      img: project2,
      name: "Art Gallery System using HTML, CSS and JS",
      github_link: "https://github.com/prathyushaa5/artgallery",
    },
    {
      img: project3,
      name: "Weather App using React and open-weather API",
      github_link: "https://github.com/prathyushaa5/WeatherApp",
    },
    {
      img: project4,
      name: "Book Bridge-A user friendly website  Using MERN Stack",
      github_link: "https://github.com/prathyushaa5/Book-Store",
    },
    {
      img:project5,
      name:"MemoirIt",
      github_link:"https://github.com/prathyushaa5/MemoirIt.git",
    }
  ];

  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
      </div>
      <br />
      <div className="flex justify-center max-w-6xl px-5 mx-auto">
        <div className="w-full lg:w-2/3">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt={project_info.name} className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                   
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
