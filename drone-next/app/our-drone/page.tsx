import React from "react";
import Image from "next/image";
import pcb from "../assets/images/other/pcb.png";

export default function OurDrone() {
  return (
    <>
      {/* Main Section */}
      <div className="bg-[radial-gradient(circle,rgba(245,245,245,1) 10%,rgba(200,200,200,1) 40%,rgba(30,30,30,1) 90%)] flex flex-col items-center px-4 sm:px-6 py-12 sm:py-16">
        
        {/* Section Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-900 mb-6 sm:mb-8 underline text-center">
          Our Drone
        </h1>

        {/* Description */}
        <p className="max-w-3xl text-center text-black text-lg sm:text-xl font-normal px-4">
          Our drone is a seamless combination of the expertise of our electrical, software, and 
          mechanical subteams to create a high-performance drone.
        </p>

        {/* Drone Image */}
        <div className="w-full flex justify-center mt-8 sm:mb-12">
          <Image
            className="rounded-lg shadow-lg"
            src={pcb}
            alt="Drone Image"
            width={400}
            height={350}
          />
        </div>

      </div>

      {/* Breakdown Section */}
      <div className="bg-black min-h-[20px] p-6 sm:p-10 w-full">

        {/* Grid Layout for Teams */}
        <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
          {[
            {
              title: "Electrical Team",
              description:
                "The electrical team designs and integrates key components, ensuring efficient power distribution and signal processing. They work with batteries, ESCs, motors, and a Jetson Nano onboard computer, enabling real-time sensor integration and autonomous functionality.",
            },
            {
              title: "Software Team",
              description:
                "The software team develops intelligent flight algorithms, using TensorFlow and machine learning for object detection, navigation, and real-time data analysis. Using NVIDIA ISAAC Sim, they refine algorithms in a virtual environment, optimizing path planning and obstacle avoidance before real-world deployment.",
            },
            {
              title: "Mechanical Team",
              description:
                "The mechanical team focuses on structural integrity, aerodynamics, and overall design using SolidWorks. They create a lightweight yet durable frame, design custom compartments to protect onboard electronics, and analyze aerodynamics to enhance flight efficiency and stability.",
            },
            {
              title: "Collaborative Success",
              description:
                "Together, our subteams create an outstanding drone capable of autonomous flight, real-time decision-making, and optimized performance, preparing us to compete at the highest level.",
            },
          ].map((section, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl shadow-md text-white bg-[radial-gradient(circle,_rgba(80,80,80,1)_10%,_rgba(24,24,27,1)_90%)]"
            >
              <h2 className="text-2xl font-bold">{section.title}</h2>
              <p className="text-lg font-normal mt-2">{section.description}</p>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
