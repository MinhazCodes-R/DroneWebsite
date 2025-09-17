import React from "react";
import Link from "next/link";
import { FaCode, FaCog, FaBullhorn, FaRocket } from "react-icons/fa";
import { MdElectricalServices } from "react-icons/md";

export default function Recruitment() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-16 bg-gradient-to-b from-white to-gray-50">
      <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-900 mb-6 sm:mb-8 underline text-center">
        Join Our Team
      </h1>
      <div className="mb-12">
        <span className="inline-block bg-green-100 text-green-800 text-lg font-bold px-6 py-3 rounded-full shadow-lg">
          🚀 Now Hiring!
        </span>
      </div>

      <div className="max-w-4xl mx-auto text-center mb-8">
        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-8">
          We're actively looking for passionate, skilled students to join our team! Whether you're interested in 
          aerodynamics, electronics, programming, or project management, we have opportunities for you to contribute 
          to exciting drone projects and competitions.
        </p>

        <div className="flex justify-between items-center mb-10 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-3xl hover:bg-blue-200 transition-all duration-300 cursor-pointer transform hover:scale-110 shadow-lg mx-auto mb-3">
              <FaCode />
            </div>
            <span className="text-sm font-medium text-gray-700">Software</span>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-3xl hover:bg-green-200 transition-all duration-300 cursor-pointer transform hover:scale-110 shadow-lg mx-auto mb-3">
              <MdElectricalServices />
            </div>
            <span className="text-sm font-medium text-gray-700">Electrical</span>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-3xl hover:bg-purple-200 transition-all duration-300 cursor-pointer transform hover:scale-110 shadow-lg mx-auto mb-3">
              <FaCog />
            </div>
            <span className="text-sm font-medium text-gray-700">Mechanical</span>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-3xl hover:bg-orange-200 transition-all duration-300 cursor-pointer transform hover:scale-110 shadow-lg mx-auto mb-3">
              <FaBullhorn />
            </div>
            <span className="text-sm font-medium text-gray-700">Media & Fundraising</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 text-white">
          <h2 className="text-xl font-bold mb-3">Ready to Take Flight?</h2>
          <p className="text-gray-200 mb-4 text-sm">
            Join us in pushing the boundaries of drone technology!
          </p>
          
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfnpJS234n3Iare9axznv3hUK4MH-q0tIiy1bqezYKq2yCehA/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group">
              Apply Now
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
}
