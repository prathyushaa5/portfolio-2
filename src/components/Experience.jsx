import React from "react";

const experiences = [
  {
    type: "Experience",
    title: "Graduate Engineering Trainee",
    company: "Safesend Technologies",
    duration: "2025 - Present",
    description: "Full Stack Developer Intern",
  },
  {
    type: "Education",
    title: "Bachelors of Engineering in Computer Science",
    company: "St. Joseph Engineering College, Mangalore",
    duration: "2021 - 2025",
    description: "Pursuing B.E. in Computer Science and Engineering",
  },
  {
    type: "Education",
    title: "Pre-University",
    company: "Govinda Dasa Pre-University College, Surathkal",
    duration: "2019 - 2021",
    description: "Physics, Chemistry, Mathematics and Computer Science",
  },
  {
    type: "Education",
    title: "Schooling",
    company: "Delhi Public School, Mangalore",
    duration: "2007 - 2021",
    description: "Completed schooling with a focus on Science and Mathematics",
  },
];

const Experience = () => {
  return (
    <section className="py-10 px-5 max-w-5xl mx-auto relative" id="experience">
      <h3 className="text-4xl font-semibold text-center text-white mb-16 relative z-10">
        My <span className="text-cyan-600">Journey</span>
      </h3>

      {/* Timeline Line (Now Starts Below Heading) */}
      <div className="absolute left-1/2 top-20 transform -translate-x-1/2 h-[90%] w-1 bg-cyan-600"></div>

      <div className="relative">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center md:items-start mb-10 relative ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Circle Indicator */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-5 w-5 h-5 bg-cyan-600 rounded-full border-4 border-gray-900"></div>

            {/* Content Box */}
            <div
              className={`bg-slate-800 p-5 rounded-lg shadow-lg w-full md:w-5/12 ${
                index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
              }`}
            >
              <span className="bg-cyan-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
                {exp.type}
              </span>
              <h3 className="text-xl font-bold mt-3">{exp.title}</h3>
              <p className="text-gray-400">
                {exp.company} • {exp.duration}
              </p>
              <p className="text-gray-300 mt-2">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
