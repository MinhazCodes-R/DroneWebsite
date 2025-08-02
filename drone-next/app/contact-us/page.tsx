import React from "react";
import { FaGlobe, FaPinterest, FaTwitter } from "react-icons/fa";
import { HiLocationMarker, HiMail } from "react-icons/hi";

export default function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-16 bg-white">

      {/* Page Title */}
      <h1 className="text-5xl font-bold text-gray-900 mb-3 text-center">
        Contact Us
      </h1>

      {/* Contact Section */}
      <div className="grid bg-white p-6 rounded-2xl shadow-lg grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl w-full">

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Have any questions? Feel free to reach out to us, and we'll get back to you as soon as possible.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-gray-700 text-xl">
                <HiLocationMarker />
              </div>
              <div>
                <span className="text-gray-900 font-semibold block">Location</span>
                <p className="text-gray-600">Information Technology at McMaster University</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-gray-700 text-xl">
                <HiMail />
              </div>
              <div>
                <span className="text-gray-900 font-semibold block">Email</span>
                <a href="mailto:drone@mcmaster.ca" className="text-blue-600 hover:text-blue-700 transition-colors">
                  drone@mcmaster.ca
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-colors group">
                <FaGlobe className="w-5 h-5 text-gray-700 group-hover:text-gray-900" />
              </a>
              <a href="#" className="p-3 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-colors group">
                <FaPinterest className="w-5 h-5 text-gray-700 group-hover:text-gray-900" />
              </a>
              <a href="#" className="p-3 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-colors group">
                <FaTwitter className="w-5 h-5 text-gray-700 group-hover:text-gray-900" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Send a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">Message</label>
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all resize-none"
                placeholder="Write your message here..."
                rows={5}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
