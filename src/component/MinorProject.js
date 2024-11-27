import React from "react";

const minorProjects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my skills, projects, and contact details. Built using HTML, CSS, and JavaScript with a focus on responsive design.",
    link: "https://shiny-bombolone-44ac74.netlify.app/",
  },
  {
    title: "Converter Website",
    description:
      "A utility tool for unit conversions such as length, weight, and temperature. Developed with React and styled using Tailwind CSS.",
    link: "https://musical-mermaid-07e278.netlify.app/",
  },
  {
    title: "Password Generator",
    description:
      "A tool to generate strong, secure passwords with custom options like length and character types. Built with React and styled for simplicity.",
    link: "https://brilliant-zuccutto-b5b0b0.netlify.app/",
  },
  {
    title: "FoodVill Website",
    description:
      "A visually appealing website for a fictional food delivery service. Includes responsive design and attractive visuals.",
    link: "https://clever-dasik-b34570.netlify.app/",
  },
  {
    title: "And More",
    description:
      "Explore additional projects on my GitHub for a diverse range of web development work.",
    link: "https://github.com/your-github-profile", // Replace with your actual GitHub profile link
  },
];

const MinorProject = () => {
  return (
    <div className="min-h-screen shadow-md py-10 px-5">
      <h1 className="text-center text-4xl font-extrabold text-blue-600 mb-10">
        Minor Projects
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {minorProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-blue-50"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MinorProject;
