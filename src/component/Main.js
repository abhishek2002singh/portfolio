import React, { useEffect, useState } from "react";

const roles = [
  "Web Developer",
  "Frontend Developer",
  "Backend Developer",
  "Software Engineer",
  "and much more!",
];

const Main = () => {
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeEffect = () => {
      const currentText = roles[roleIndex];
      if (!isDeleting) {
        setCurrentRole((prev) => prev + currentText[charIndex]);
        if (charIndex < currentText.length - 1) {
          setCharIndex((prev) => prev + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        setCurrentRole((prev) => prev.slice(0, -1));
        if (currentRole.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setCharIndex(0);
        }
      }
    };

    const timer = setTimeout(typeEffect, isDeleting ? 200 : 350);
    return () => clearTimeout(timer);
  }, [currentRole, charIndex, roleIndex, isDeleting]);

  return (
    <main className="min-h-screen shadow-md flex flex-col items-center justify-center bg-lightBlue-100 text-gray-800">
      {/* Profile Section */}
      <div className="flex flex-col items-center">
        <img
          src="https://avatars.githubusercontent.com/u/108977081?v=4"
          alt="Abhishek Singh"
          className="w-40 h-40 rounded-full border-4 border-blue-600 shadow-lg"
        />
        <h1 className="text-5xl font-extrabold mt-6">I am Abhishek Singh</h1>
        <p className="text-3xl text-blue-600 mt-4 font-bold h-10">
          <span className="animate-typewriter">{currentRole}</span>
        </p>
        
        {/* Download CV Button */}
        <div className="mt-6">
          <a
            href="https://drive.google.com/file/d/1rDF_CHPOUAf0WAPHnsYxmyY_kWCPkGmt/view?usp=drive_link"
            download
            className="bg-blue-600 hover:bg-blue-500 text-white py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out"
          >
            View CV
          </a>
        </div>
        
        {/* Play Video Button with Icon */}
        {/* <div className="mt-6">
          <a
            href="#video"
            className="flex items-center bg-blue-600 hover:bg-blue-500 text-white py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Play Video
          </a>
        </div> */}
      </div>
    </main>
  );
};

export default Main;
