import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { DiJavascript1, DiJava } from 'react-icons/di';
import { SiTailwindcss, SiRedux, SiExpress, SiMongodb, SiFirebase } from 'react-icons/si';

const skillsData = [
  {
    category: 'Technologies',
    skills: [
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Bootstrap', icon: <FaCss3Alt /> },  // Can use a different icon for Bootstrap
      { name: 'JavaScript', icon: <DiJavascript1 /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'Redux Toolkit', icon: <SiRedux /> },
      { name: 'Context API', icon: <FaReact /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Postman', icon: <FaDatabase /> },
      { name: 'Java', icon: <DiJava /> },
      { name: 'C', icon: <DiJavascript1 /> }, // You can use another C-related icon if needed
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGitAlt /> },
      { name: 'Firebase', icon: <SiFirebase /> },
    ],
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Time Management', icon: <FaDatabase /> }, // Add a relevant icon for time management
      { name: 'Communication', icon: <FaDatabase /> },
      { name: 'Adaptability', icon: <FaDatabase /> },
      { name: 'Problem-solving', icon: <FaDatabase /> },
      { name: 'Teamwork', icon: <FaDatabase /> },
      { name: 'Leadership', icon: <FaDatabase /> },
      { name: 'Work Ethic', icon: <FaDatabase /> },
    ],
  },
  {
    category: 'Coursework',
    skills: [
      { name: 'Introduction to Programming', icon: <FaDatabase /> },
      { name: 'Data Structures', icon: <FaDatabase /> },
      { name: 'Object Oriented Programming', icon: <FaDatabase /> },
      { name: 'Analysis and Design of Algorithms', icon: <FaDatabase /> },
      { name: 'Operating Systems', icon: <FaDatabase /> },
      { name: 'Database Management System', icon: <FaDatabase /> },
      { name: 'Computer Networks', icon: <FaDatabase /> },
    ],
  },
  {
    category: 'Areas of Interest',
    skills: [
      { name: 'Data Structures and Algorithms', icon: <FaDatabase /> },
      { name: 'Competitive Programming', icon: <FaDatabase /> },
      { name: 'Web Development', icon: <FaDatabase /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen shadow-md  py-10 px-6">
      <h1 className="text-center text-4xl font-extrabold text-blue-600 mb-12">Skills & Expertise</h1>

      <div className="max-w-6xl mx-auto">
        {skillsData.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{section.category}</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {section.skills.map((skill, idx) => (
                <li key={idx} className="flex items-center space-x-2 text-lg text-gray-700 hover:text-blue-600 transition-colors duration-300">
                  <span>{skill.icon}</span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
