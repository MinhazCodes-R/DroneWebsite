"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion

export default function MeetOurTeam() {
  const teamMembers = [
    {
      name: "Mark Atalla",
      role: "Co-Founder & Co-President, Electrical Team Lead",
      major: "Electrical Engineering III",
      email: "atallm7@mcmaster.ca",
      image: "/headshots/mark.jpeg",
    }, 
    {
      name: "Fady Hanna",
      role: "Co-Founder & Co-President, Electrical Team Lead",
      major: "iBioMed and Electrical Engineering III",
      email: "hannaf4@mcmaster.ca",
      image: "/headshots/fady.jpeg",
    },
    {
      name: "Amber Morrison",
      role: "Administrator, Media & Fundraising Team Lead",
      major: "iBioMed and Mechanical Engineering III",
      email: "morria71@mcmaster.ca",
      image: "/headshots/amber.png",
    },
    {
      name: "Subodh Thallada",
      role: "Mechanical Team Lead",
      major: "Engineering II",
      email: "thallads@mcmaster.ca",
      image: "/headshots/subodh.jpg",
    },
    {
      name: "Minhaz Rakin",
      role: "Software Team Lead",
      major: "Computer Engineering III",
      email: "rakinm@mcmaster.ca",
      image: "/headshots/minhaz.jpg",
    },
    {
      name: "Sachin Gupta",
      role: "Software Team Lead",
      major: "Software Engineering III",
      email: "gupts38@mcmaster.ca",
      image: "/headshots/sachin.jpeg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-16 bg-white-100">
      {/* Page Title - Adjusted to Match Other Pages */}
      {/* <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">Meet The Team</h1> */}
      <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-900 mb-6 sm:mb-8 underline text-center">
      Meet The Team
        </h1>

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-12 max-w-[1280px] w-full px-4">
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center p-6 md:p-10 rounded-lg bg-white shadow-md"
          >
            <motion.div
              whileHover={{ scale: 1.1 }} // Enlarge slightly on hover
              whileTap={{ scale: 0.95 }} // Shrink slightly when clicked
              transition={{ type: "spring", stiffness: 200, damping: 10 }} // Smooth animation
            >
              <Image
                className="w-32 h-32 md:w-[237px] md:h-[237px] rounded-full object-cover shadow-lg"
                src={member.image}
                alt={member.name}
                width={237}
                height={237}
              />
            </motion.div>
            <h3 className="text-gray-900 text-lg md:text-xl font-bold mt-4 text-center">{member.name}</h3>
            <p className="text-gray-800 text-sm md:text-lg text-center">{member.role}</p>
            <p className="text-gray-700 text-xs md:text-sm text-center">{member.major}</p>
            <a href={`mailto:${member.email}`} className="text-blue-600 text-sm md:text-base underline mt-1">
              {member.email}
            </a>
          </div>
        ))}
      </div>

      <p className="max-w-[866px] text-center text-gray-800 text-lg md:text-xl font-normal mt-10 px-4">
        Our team is split into 4 subteams: Electrical, Software, Mechanical, and Media & Fundraising.
        We have 50 members across our team, and 6 team leads.
      </p>

      {/* Team Roles */}
      <div className="max-w-[1166px] w-full mt-12 space-y-6 md:space-y-8 px-4">
        {/* Electrical Sub Team */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 md:p-8 rounded-xl shadow-md">
          <h2 className="text-white text-xl md:text-2xl font-bold text-center">Electrical Sub Team</h2>
          <p className="text-white text-sm md:text-lg text-center">
            The electrical team is responsible for powering the drone, integrating sensors for data
            collection, and ensuring the communication systems function smoothly. They design and
            maintain the electrical systems that allow the drone to operate autonomously and interact
            with ground control.
          </p>
        </div>

        {/* Mechanical Sub Team */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 md:p-8 rounded-xl shadow-md">
          <h2 className="text-white text-xl md:text-2xl font-bold text-center">Mechanical Sub Team</h2>
          <p className="text-white text-sm md:text-lg text-center">
            The mechanical team focuses on designing, building, and maintaining the physical structure
            of the drone. This includes constructing the frame using SolidWorks, installing landing gear,
            and ensuring the drone can withstand the stresses of flight while maintaining stability and
            durability.
          </p>
        </div>

        {/* Software Sub Team */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 md:p-8 rounded-xl shadow-md">
          <h2 className="text-white text-xl md:text-2xl font-bold text-center">Software Sub Team</h2>
          <p className="text-white text-sm md:text-lg text-center">
            The software team programs the drone’s flight control system, enabling it to fly autonomously
            and respond to commands. They develop the algorithms for navigation, obstacle avoidance, and
            mission-specific tasks, ensuring the drone operates as intended during competitions.
          </p>
        </div>

        {/* Media & Fundraising Sub Team */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 md:p-8 rounded-xl shadow-md">
          <h2 className="text-white text-xl md:text-2xl font-bold text-center">Media & Fundraising Sub Team</h2>
          <p className="text-white text-sm md:text-lg text-center">
            The media and fundraising team handles the club’s social media presence, promoting events and
            sharing updates with the community. They also organize fundraising activities, manage the budget,
            and work to secure financial support to ensure the team has the resources needed to succeed.
          </p>
        </div>
      </div>
    </div>
  );
}
