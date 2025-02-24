import React from "react";
import logo from "../assets/logo.png";
import pcb from "../assets/images/other/pcb.png";

export default function OurDrone() {
  return (
    <div className="w-[1280px] h-[1158px] relative bg-[#fcf8ee] overflow-hidden">

      <div className="w-full h-[142px] absolute top-0 left-0 bg-[#88dae7] opacity-50 shadow-md" />
      <img
        className="w-[126px] h-[115px] absolute top-[13px] left-[28px]"
        src={logo.src}
        alt="Club Logo"
      />


      <div className="w-[865px] h-[81px] absolute top-[53px] left-[207px] text-center text-black text-4xl font-bold">
        McMaster Aerial Robotics & Drones Club
      </div>

      <div className="left-[572px] top-[195px] absolute text-[#2364aa] text-3xl font-bold font-['Inria Sans'] underline">
        Our Drone
      </div>

      <div className="w-[1280px] h-[1px] left-0 top-[142px] absolute bg-black"></div>

      {/*description*/}
      <div className="w-[987px] h-[71px] left-[154px] top-[245px] absolute text-center text-black text-xl font-normal font-['Inria Sans']">
        Our drone is a seamless combination of the expertise of our electrical, software, and mechanical subteams to create a high-performance drone.
      </div>

      {/*drone image (check google doc page, there is an image)*/}
      <img
        className="w-[317px] h-[260px] absolute top-[352px] left-[481px]"
        src={pcb.src}
        alt="Drone Image"
      />

      {/*breakdown*/}
      <div className="w-[1121px] h-[445px] left-[79px] top-[675px] absolute text-black text-2xl font-normal font-['Inria Sans']">
        The electrical team designs and integrates key components, ensuring efficient power distribution and signal processing. They work with batteries, ESCs, motors, and a Jetson Nano onboard computer, enabling real-time sensor integration and autonomous functionality.
        <br />
        <br />
        The software team develops intelligent flight algorithms, using TensorFlow and machine learning for object detection, navigation, and real-time data analysis. Using NVIDIA ISAAC Sim, they refine algorithms in a virtual environment, optimizing path planning and obstacle avoidance before real-world deployment.
        <br />
        <br />
        The mechanical team focuses on structural integrity, aerodynamics, and overall design using SolidWorks. They create a lightweight yet durable frame, design custom compartments to protect onboard electronics, and analyze aerodynamics to enhance flight efficiency and stability.
        <br />
        <br />
        Together, our subteams create an outstanding drone capable of autonomous flight, real-time decision-making, and optimized performance, preparing us to compete at the highest level.
      </div>
    </div>
  );
}