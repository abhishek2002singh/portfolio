import React from 'react';

const certifications = [
  {
    title: 'Young Turks Round 1',
    description: 'Scored 95.05, selected in the top 5 percentage out of 6,00,000 participants.',
    link: 'https://www.naukri.com/campus/certificates/young_turks_round_1_achievement/v0/6707efe05abe131f423e3d43', // Replace with your actual link
  },
  {
    title: 'Almabetter: Full Stack Developer',
    description: 'Full Stack Developer certification, including advanced web development concepts.',
    // link: 'https://example.com/almabetter-full-stack', // Replace with your actual link
  },
  // Add more certifications here
];

const Certification = () => {
  return (
    <div className="min-h-screen shadow-md py-10 px-6">
      <h1 className="text-center text-4xl font-extrabold text-blue-600 mb-12">Certifications & Achievements</h1>

      <div className="max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <div key={index} className="mb-8 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{cert.title}</h2>
            <p className="text-lg text-gray-700 mb-4">{cert.description}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              View Certification
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;
