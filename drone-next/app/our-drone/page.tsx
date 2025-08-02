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

        <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          <div className="flex-shrink-0">
            <Image
              className="rounded-2xl shadow-lg"
              src={"/sitePictures/drone.jpeg"}
              alt="Drone Image"
              width={400}
              height={350}
            />
          </div>

          <div className="flex-1 text-center lg:text-left">
            {/* Description */}
            <p className="text-black text-lg sm:text-xl font-normal mb-6">
              Our drone is a seamless combination of the expertise of our electrical, software, and
              mechanical subteams to create a high-performance drone.
            </p>

            {/* Additional Details */}
            <p className="text-black text-base sm:text-lg font-normal mb-4">
              Built with cutting-edge technology and innovative design, this autonomous vehicle represents
              months of dedicated engineering and collaboration. From custom circuit boards to advanced
              machine learning algorithms, every component has been carefully selected and optimized.
            </p>

            <p className="text-black text-base sm:text-lg font-normal">
              Our drone features real-time obstacle detection, GPS navigation, and autonomous flight
              capabilities. Powered by a Jetson Nano computer and equipped with high-resolution cameras,
              it's designed to excel in competitive environments while maintaining exceptional stability
              and performance.
            </p>
          </div>

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
              className="p-6 rounded-xl shadow-lg text-white bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 border border-gray-600 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {section.title}
              </h2>
              <p className="text-gray-200 text-lg font-normal leading-relaxed">
                {section.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
