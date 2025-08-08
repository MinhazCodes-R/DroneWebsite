"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion
import { MdElectricalServices, MdCampaign } from "react-icons/md";
import { GiGears } from "react-icons/gi";
import { FaCode } from "react-icons/fa";

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
    {
      name: "Emily Moonin",
      role: "Media & Fundraising Team Lead Co-Lead",
      major: "iBioMed and Mechanical Engineering II",
      email: "moonine@mcmaster.ca",
      image: "/headshots/Emily.png",
    },
    {
      name: "Aaron Zhao",
      role: "Mechanical Team Co-Lead",
      major: "Mechanical Engineering III",
      email: "zhaoa38@mcmaster.ca",
      image: "/headshots/Aaron.png",
    },
    {
      name: "Naomi CG",
      role: "Media & Fundraising Team Lead Co-Lead",
      major: "iBioMed and Mechanical Engineering II",
      email: "couturen@mcmaster.ca",
      image: "/headshots/Naomi.png",
    },
     {
      name: "Taysir Alam",
      role: "Electrical Team Co-Lead",
      major: "Automation Sys Eng Tech IV",
      email: "alamt10@mcmaster.ca",
      image: "/headshots/Taysir.png",
    },
    {
      name: "Cristina IS",
      role: "Mechanical Team Co-Lead",
      major: "Mechanical Engineering III",
      email: "irassarc@mcmaster.ca",
      image: "/headshots/Cristina.png",
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 max-w-[1280px] w-full px-4">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-white rounded-3xl shadow-xl shadow-gray-300/40 hover:shadow-2xl transition-shadow duration-300 p-8 md:p-10 my-6"
            whileHover={{ y: -8, scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 180, damping: 14 }}
          >
            <div className="relative -mt-16 mb-4">
              <Image
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
                src={member.image}
                alt={member.name}
                width={160}
                height={160}
              />
            </div>
            <div className="flex flex-col items-center w-full">
              <h3 className="text-gray-900 text-xl md:text-2xl font-extrabold text-center mb-1">{member.name}</h3>
              <p className="text-gray-700 text-base md:text-lg font-medium text-center mb-1">{member.role}</p>
              <p className="text-gray-500 text-sm md:text-base text-center mb-2">{member.major}</p>
              <a
                href={`mailto:${member.email}`}
                className="text-blue-600 text-sm md:text-base font-semibold underline underline-offset-2 hover:text-blue-800 transition-colors"
              >
                {member.email}
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center w-full mt-10">
        <p className="text-center text-gray-800 text-lg md:text-xl font-normal leading-relaxed">
          Our team is split into 4 subteams: <span className="font-semibold text-gray-900">Electrical</span>, <span className="font-semibold text-gray-900">Software</span>, <span className="font-semibold text-gray-900">Mechanical</span>, and <span className="font-semibold text-gray-900">Media & Fundraising</span>.<br />
          We have <span className="font-semibold text-gray-900">50 members</span> across our team, and <span className="font-semibold text-gray-900">6 team leads</span>.
        </p>
      </div>

      {/* Team Roles Grid */}
      {/* Electrical Sub Team */}
      <div className="max-w-[1166px] w-full mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
          <span className="text-4xl mb-3 text-yellow-300">
            <i className="inline-block">
              <MdElectricalServices size={40} />
            </i>
          </span>
          <h2 className="text-white text-xl md:text-2xl font-bold text-center mb-2">Electrical Sub Team</h2>
          <p className="text-white text-sm md:text-lg text-center">
            The electrical team is responsible for powering the drone, integrating sensors for data
            collection, and ensuring the communication systems function smoothly. They design and
            maintain the electrical systems that allow the drone to operate autonomously and interact
            with ground control.
          </p>
        </div>

        {/* Software Sub Team */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
          <span className="text-4xl mb-3 text-blue-300">
            <i className="inline-block">
              <FaCode size={40} />
            </i>
          </span>
          <h2 className="text-white text-xl md:text-2xl font-bold text-center mb-2">Software Sub Team</h2>
          <p className="text-white text-sm md:text-lg text-center">
            The software team programs the drone’s flight control system, enabling it to fly autonomously
            and respond to commands. They develop the algorithms for navigation, obstacle avoidance, and
            mission-specific tasks, ensuring the drone operates as intended during competitions.
          </p>
        </div>

        {/* Mechanical Sub Team */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
          <span className="text-4xl mb-3 text-green-300">
            <i className="inline-block">
              <GiGears size={40} />
            </i>
          </span>
          <h2 className="text-white text-xl md:text-2xl font-bold text-center mb-2">Mechanical Sub Team</h2>
          <p className="text-white text-sm md:text-lg text-center">
            The mechanical team focuses on designing, building, and maintaining the physical structure
            of the drone. This includes constructing the frame using SolidWorks, installing landing gear,
            and ensuring the drone can withstand the stresses of flight while maintaining stability and
            durability.
          </p>
        </div>


        {/* Media & Fundraising Sub Team */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 md:p-8 rounded-xl shadow-md flex flex-col items-center">
          <span className="text-4xl mb-3 text-pink-300">
            <i className="inline-block">
              <MdCampaign size={40} />
            </i>
          </span>
          <h2 className="text-white text-xl md:text-2xl font-bold text-center mb-2">Media & Fundraising Sub Team</h2>
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
