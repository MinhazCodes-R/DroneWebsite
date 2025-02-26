"use client"
import HomePage from "../components/HomePage";
import Header from "../components/myComponents/header";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";

import { WavyBackground } from "../components/ui/wavy-background";



export default function Page() {
  return (
    <div className="h-screen bg-black w-full">

      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        McMaster Aerial Robotics
        </p>
        <p className="text-base md:text-xl mt-4 text-white font-normal inter-var text-center">
          Engineering The Skies One Drone at a Time
        </p>
      </WavyBackground>

    </div>
  );
}