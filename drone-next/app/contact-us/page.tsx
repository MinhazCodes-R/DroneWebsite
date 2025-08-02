"use client";

import React from "react";
import { FaGlobe, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker, HiMail } from "react-icons/hi";

export default function ContactUs() {
  const [result, setResult] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  interface Web3FormsResponse {
    success: boolean;
    message: string;
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setIsLoading(true);
    setResult("");

    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data: Web3FormsResponse = await response.json();

      if (data.success) {
        setResult("success");
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setResult("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setResult("error");
    } finally {
      setIsLoading(false);
    }
  };
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
              <a href="https://www.macdrones.ca/" className="p-3 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-colors group">
                <FaGlobe className="w-5 h-5 text-gray-700 group-hover:text-gray-900" />
              </a>
              <a href="https://www.instagram.com/mac_droneclub/" className="p-3 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-colors group">
                <FaInstagram className="w-5 h-5 text-gray-700 group-hover:text-gray-900" />
              </a>
              <a href="https://www.linkedin.com/company/mcmaster-aerial-drone-robotics-club/" className="p-3 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-colors group">
                <FaLinkedin className="w-5 h-5 text-gray-700 group-hover:text-gray-900" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-6 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Send a Message</h2>
          <form className="space-y-4" onSubmit={onSubmit}>
            <div>
              <label className="block text-md font-semibold text-gray-800 mb-1">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-md"
                placeholder="Your Name"
                name="name"
                required
              />
            </div>
            <div>
              <label className="block text-md font-semibold text-gray-800 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-md"
                placeholder="Your Email"
                name="email"
                required
              />
            </div>
            <div>
              <label className="block text-md font-semibold text-gray-800 mb-1">Message</label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all resize-none text-md"
                placeholder="Write your message here..."
                rows={4}
                required
                name="message"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-2 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-md"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {result === "success" && (
            <div className="mt-4 text-green-700 bg-green-50 border border-green-200 px-3 py-2 rounded-xl text-md">
              Message sent! We'll get back to you soon.
            </div>
          )}
          {result === "error" && (
            <div className="mt-4 text-red-700 bg-red-50 border border-red-200 px-3 py-2 rounded-xl text-md">
              Error sending message. Please try again.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
