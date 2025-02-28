import React from "react";

export default function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-16 bg-white-100">
      
      {/* Page Title */}
      <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
        Contact Us
      </h1>

      {/* Contact Section */}
      <div className="grid bg-neutral-200 p-10 rounded-2xl grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
        
        {/* Contact Information */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-6">
            Have any questions? Feel free to reach out to us, and we’ll get back to you as soon as possible.
          </p>
          
          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-gray-900 text-xl font-semibold">📍 Location:</span>
              <p className="text-gray-700">Somewhere at McMaster</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-900 text-xl font-semibold">📧 Email:</span>
              <a href="mailto:ourcontact@gmail.com" className="text-blue-600 underline">
                ourcontact@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-900 text-xl font-semibold">📞 Phone:</span>
              <p className="text-gray-700">Some number</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 mt-6">
            <a href="#" className="text-gray-700 hover:text-blue-600 text-lg transition">
              Website
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 text-lg transition">
              Instagram
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 text-lg transition">
              Twitter
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-lg text-gray-800 font-medium">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-lg text-gray-800 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-lg text-gray-800 font-medium">Message</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Write your message here..."
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gray-900 to-black text-white py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
