

"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion

export default function MeetOurTeam() {
  const teamMembers = [
    {
      name: "Mark Atalla",
      role: "Co-Founder & Co-President, Electrical Team Lead",
      major: "Electrical Engineering II",
      email: "atallm7@mcmaster.ca",
      image: "/headshots/mark.jpeg",
    },
    {
      name: "Fady Hanna",
      role: "Co-Founder & Co-President, Electrical Team Lead",
      major: "iBioMed and Electrical Engineering II",
      email: "hannaf4@mcmaster.ca",
      image: "/headshots/fady.jpeg",
    },
    {
      name: "Taylor Dixon",
      role: "Administrator, Media & Fundraising Team Lead",
      major: "Civil Engineering II",
      email: "dixont5@mcmaster.ca",
      image: "/headshots/taylor.png",
    },
    {
      name: "Subodh Thallada",
      role: "Mechanical Team Lead",
      major: "Engineering I",
      email: "thallads@mcmaster.ca",
      image: "/headshots/subodh.jpg",
    },
    {
      name: "Minhaz Rakin",
      role: "Software Team Lead",
      major: "Computer Engineering II",
      email: "rakinm@mcmaster.ca",
      image: "/headshots/minhaz.jpg",
    },
    {
      name: "Sachin Gupta",
      role: "Software Team Lead",
      major: "Software Engineering II",
      email: "gupts38@mcmaster.ca",
      image: "/headshots/sachin.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle,rgba(245,245,245,1) 10%,rgba(200,200,200,1) 40%,rgba(30,30,30,1) 90%)] flex flex-col items-center px-6 py-12">
      {/* Page Title */}
      <h1 className="text-6xl font-bold text-black">Meet The Team</h1>

      {/* Team Members */}
      <div className="grid grid-cols-3 gap-8 mt-16 max-w-[1280px]">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center p-10" style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
            <motion.div
              whileHover={{ scale: 1.1 }} // Enlarge slightly on hover
              whileTap={{ scale: 0.95 }} // Shrink slightly when clicked
              transition={{ type: "spring", stiffness: 200, damping: 10 }} // Smooth animation
            >
              <Image
                className="w-[237px] h-[237px] rounded-full object-cover shadow-lg"
                src={member.image}
                alt={member.name}
                width={237}
                height={237}
              />
            </motion.div>
            <h3 className="text-black text-xl font-bold mt-4">{member.name}</h3>
            <p className="text-black text-lg">{member.role}</p>
            <p className="text-black text-sm">{member.major}</p>
            <a href={`mailto:${member.email}`} className="text-blue-400 underline">
              {member.email}
            </a>
          </div>
        ))}
      </div>

      <p className="max-w-[866px] text-center text-white text-xl font-normal mt-10">
         Our team is split into 4 subteams: Electrical, Software, Mechanical, and Media & Fundraising.
         We have 50 members across our team, and 6 team leads.
       </p>

       {/* Team Roles */}
       <div className="max-w-[1166px] mt-12 space-y-8">
         {/* Electrical Sub Team */}
         <div className="bg-gradient-to-r from-black to-gray-700 p-6 rounded-xl shadow-md">
           <h2 className="text-white text-2xl font-bold">Electrical Sub Team</h2>
           <p className="text-white text-xl font-normal">
             The electrical team is responsible for powering the drone, integrating sensors for data
             collection, and ensuring the communication systems function smoothly. They design and
             maintain the electrical systems that allow the drone to operate autonomously and interact
             with ground control.
           </p>
         </div>

         {/* Mechanical Sub Team */}
         <div className="bg-gradient-to-r from-black to-gray-700 p-6 rounded-xl shadow-md">
           <h2 className="text-white text-2xl font-bold">Mechanical Sub Team</h2>
           <p className="text-white text-xl font-normal">
             The mechanical team focuses on designing, building, and maintaining the physical structure
             of the drone. This includes constructing the frame using SolidWorks, installing landing gear,
             and ensuring the drone can withstand the stresses of flight while maintaining stability and
             durability.
           </p>
         </div>

         {/* Software Sub Team */}
         <div className="bg-gradient-to-r from-black to-gray-700 p-6 rounded-xl shadow-md">
           <h2 className="text-white text-2xl font-bold">Software Sub Team</h2>
           <p className="text-white text-xl font-normal">
             The software team programs the drone’s flight control system, enabling it to fly autonomously
             and respond to commands. They develop the algorithms for navigation, obstacle avoidance, and
             mission-specific tasks, ensuring the drone operates as intended during competitions.
           </p>
         </div>

         {/* Media & Fundraising Sub Team */}
         <div className="bg-gradient-to-r from-black to-gray-700 p-6 rounded-xl shadow-md">
           <h2 className="text-white text-2xl font-bold">Media & Fundraising Sub Team</h2>
           <p className="text-white text-xl font-normal">
             The media and fundraising team handles the club’s social media presence, promoting events and
            sharing updates with the community. They also organize fundraising activities, manage the budget,
            and work to secure financial support to ensure the team has the resources needed to succeed.
           </p>
         </div>
       </div>

    </div>
  );
}







// import React from "react";
// import Image from "next/image";

// export default function MeetOurTeam() {
//   const teamMembers = [
//     {
//       name: "Taylor Dixon",
//       role: "Administrator, Media & Fundraising Team Lead",
//       major: "Civil Engineering II",
//       email: "dixont5@mcmaster.ca",
//       image: "/headshots/taylor.png",
//     },
//     {
//       name: "Subodh Thallada",
//       role: "Mechanical Team Lead",
//       major: "Engineering I",
//       email: "thallads@mcmaster.ca",
//       image: "/headshots/subodh.jpg",
//     },
//     {
//       name: "Minhaz Rakin",
//       role: "Software Team Lead",
//       major: "Computer Engineering II",
//       email: "rakinm@mcmaster.ca",
//       image: "/headshots/minhaz.jpg",
//     },
//     {
//       name: "Sachin Gupta",
//       role: "Software Team Lead",
//       major: "Software Engineering II",
//       email: "gupts38@mcmaster.ca",
//       image: "/headshots/sachin.jpeg",
//     },
//     {
//       name: "Fady Hanna",
//       role: "Co-Founder & Co-President, Electrical Team Lead",
//       major: "iBioMed and Electrical Engineering II",
//       email: "hannaf4@mcmaster.ca",
//       image: "/headshots/fady.jpeg",
//     },
//     {
//       name: "Mark Atalla",
//       role: "Co-Founder & Co-President, Electrical Team Lead",
//       major: "Electrical Engineering II",
//       email: "atallm7@mcmaster.ca",
//       image: "/headshots/mark.jpeg",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[radial-gradient(circle,rgba(245,245,245,1) 10%,rgba(200,200,200,1) 40%,rgba(30,30,30,1) 90%)] flex flex-col items-center px-6 py-12">
//       {/* Page Title */}
//       <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-700">
//         Meet The Team
//       </h1>

//       {/* Team Members */}
//       <div className="grid grid-cols-3 gap-8 mt-16 max-w-[1280px]">
//         {teamMembers.map((member, index) => (
//           <div key={index} className="flex flex-col items-center">
//             <Image
//               className="w-[237px] h-[237px] rounded-full object-cover"
//               src={member.image}
//               alt={member.name}
//               width={237}
//               height={237}
//             />
//             <h3 className="text-black text-xl font-bold mt-4">{member.name}</h3>
//             <p className="text-blue-800 text-lg">{member.role}</p>
//             <p className="text-blue-900 text-sm">{member.major}</p>
//             <a href={`mailto:${member.email}`} className="text-blue-400 underline">
//               {member.email}
//             </a>
//           </div>
//         ))}
//       </div>

//       {/* Team Introduction */}
//       <p className="max-w-[866px] text-center text-white text-xl font-normal mt-10">
//         Our team is split into 4 subteams: Electrical, Software, Mechanical, and Media & Fundraising.
//         We have 50 members across our team, and 6 team leads.
//       </p>

//       {/* Team Roles */}
//       <div className="max-w-[1166px] mt-12 space-y-8">
//         {/* Electrical Sub Team */}
//         <div className="bg-gradient-to-r from-black to-gray-900 p-6 rounded-xl shadow-md">
//           <h2 className="text-red-100 text-2xl font-bold">Electrical Sub Team</h2>
//           <p className="text-white text-xl font-normal">
//             The electrical team is responsible for powering the drone, integrating sensors for data
//             collection, and ensuring the communication systems function smoothly. They design and
//             maintain the electrical systems that allow the drone to operate autonomously and interact
//             with ground control.
//           </p>
//         </div>

//         {/* Mechanical Sub Team */}
//         <div className="bg-gradient-to-r from-black to-gray-900 p-6 rounded-xl shadow-md">
//           <h2 className="text-white text-2xl font-bold">Mechanical Sub Team</h2>
//           <p className="text-white text-xl font-normal">
//             The mechanical team focuses on designing, building, and maintaining the physical structure
//             of the drone. This includes constructing the frame using SolidWorks, installing landing gear,
//             and ensuring the drone can withstand the stresses of flight while maintaining stability and
//             durability.
//           </p>
//         </div>

//         {/* Software Sub Team */}
//         <div className="bg-gradient-to-r from-black to-gray-900 p-6 rounded-xl shadow-md">
//           <h2 className="text-white text-2xl font-bold">Software Sub Team</h2>
//           <p className="text-white text-xl font-normal">
//             The software team programs the drone’s flight control system, enabling it to fly autonomously
//             and respond to commands. They develop the algorithms for navigation, obstacle avoidance, and
//             mission-specific tasks, ensuring the drone operates as intended during competitions.
//           </p>
//         </div>

//         {/* Media & Fundraising Sub Team */}
//         <div className="bg-gradient-to-r from-black to-gray-900 p-6 rounded-xl shadow-md">
//           <h2 className="text-white text-2xl font-bold">Media & Fundraising Sub Team</h2>
//           <p className="text-white text-xl font-normal">
//             The media and fundraising team handles the club’s social media presence, promoting events and
//             sharing updates with the community. They also organize fundraising activities, manage the budget,
//             and work to secure financial support to ensure the team has the resources needed to succeed.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }