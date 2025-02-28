import React from "react";

export default function Sponsors() {
  return (
    <div className="min-h-screen min-w-[100vw] bg-[radial-gradient(circle,_rgba(80,80,80,1)_10%,_rgba(30,30,30,1)_90%)] flex flex-col items-center px-6 py-16">
      
      {/* Section Title */}
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white mb-8">
        Our Sponsors
      </h1>

      {/* Sponsor Info */}
      <div className="max-w-3xl text-center text-white text-2xl font-normal mb-12">
        We are always looking for and welcoming sponsors to support our mission of innovation and
        hands-on learning in aerial robotics! Sponsorship helps us design and build advanced drones,
        compete in high-level competitions, and provide valuable opportunities for students.
      </div>

      <p className="max-w-2xl text-center text-white text-xl mb-12">
        In return, we offer **brand exposure, collaboration, and a chance to support the next
        generation of engineers**. If you're interested in partnering with us, we'd love to connect!
      </p>

      {/* Call to Action */}
      <div className="mt-6">
        <a 
          href="mailto:your_email@example.com"
          className="px-6 py-3 bg-gradient-to-r from-gray-900 to-black text-white text-lg rounded-lg shadow-md hover:shadow-lg transition duration-300"
        >
          Become a Sponsor
        </a>
      </div>

      {/* Sponsor Logos Placeholder
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16 max-w-6xl">
        {Array(6).fill("").map((_, index) => (
          <div key={index} className="flex items-center justify-center p-6 bg-white shadow-lg rounded-xl">
            <img
              className="w-40 h-20 object-contain"
              src={`https://via.placeholder.com/150?text=Sponsor+${index + 1}`} // Replace with actual logos
              alt={`Sponsor ${index + 1}`}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
}