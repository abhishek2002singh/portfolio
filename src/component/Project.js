import React from "react";
import ezzimartPhoto from '../image/3.png'
import devTenderPhoto from '../image/devtender 1.png'
import neyflixPhoto from '../image/netflix.png'

const projects = [
  {
    title: "EzziMart",
    description:
      "EzziMart is an e-commerce platform offering seamless shopping experiences. It features product search, user authentication, cart management, and responsive design. Built with React, Redux, Tailwind CSS, and integrated with a backend API for real-time data fetching. The UI is clean and user-friendly, catering to a smooth shopping journey.",
    link: "https://super-biscuit-89c82b.netlify.app/",
    image: ezzimartPhoto,
    techStack: ["React", "Redux", "Tailwind CSS", "FakeStore API" ,"NodeJs" , " ExpressJs" , "MongoDB"],
  },
  {
    title: "DevTender",
    description:
      "DevTender is a developer-centric application inspired by Tinder. It connects developers for collaboration, featuring user authentication, profile management, and interactive features such as sending and receiving requests. The platform is built with a modern tech stack and offers real-time interactions and a clean, responsive UI.",
    link: "https://drive.google.com/uc?id=1HlBliK-oxetN7b2bkb5qr2GTLX4Zr_LW",
    image: devTenderPhoto,
    techStack: ["React", "Express", "MongoDB", "Tailwind CSS", "JWT"],
  },
  {
    title: "Netflix Clone",
    description:
      "This Netflix Clone replicates the core functionalities of the popular streaming platform. Users can search for movies and TV shows using the Open Search Chat API, with Firebase managing authentication and user data. Built with React, Redux Toolkit, and Tailwind CSS, the project offers a responsive design optimized for all devices.",
    link: "https://drive.google.com/uc?id=1gevb9YhUz0lhqH0X5b5PYwjaCB6pdzGW",
    image: neyflixPhoto,
    techStack: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Firebase",
      "Open Search Chat API",
    ],
  },
];

const Project = () => {
  return (
    <div className="min-h-screen shadow-md py-10">
      <h1 className="text-center text-4xl font-extrabold text-blue-600 mb-10">
        Majore Projects
      </h1>
      <div className="space-y-10 px-6 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-blue-50"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-64 w-full object-cover"
            />
            <div className="p-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-5">
                <h3 className="text-lg font-semibold text-gray-700">Tech Stack:</h3>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  {project.techStack.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300"
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

export default Project;
