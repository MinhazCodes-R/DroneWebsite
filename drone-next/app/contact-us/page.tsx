import React from "react";

export default function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-16">
      
      {/* Page Title */}
      <h1 className="text-5xl font-bold text-transparent bg-clip-text mb-8">
        Contact Us
      </h1>

      {/* Contact Section */}
      <div className="grid bg-neutral-200 p-10 rounded-2xl grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
        
        {/* Contact Information */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-6">
            Have any questions? Feel free to reach out to us, and we’ll get back to you as soon as possible.
          </p>
          
          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-gray-800 text-xl font-semibold">📍 Location:</span>
              <p className="text-gray-600">somewhere at McMaster</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-800 text-xl font-semibold">📧 Email:</span>
              <a href="mailto:contact@yourdomain.com" className="text-blue-500 underline">
                ourcontact@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-800 text-xl font-semibold">📞 Phone:</span>
              <p className="text-gray-600">some number</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 mt-6">
            <a href="#" className="text-gray-700 hover:text-blue-500 text-2xl transition">
              Website
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500 text-2xl transition">
              Instagram
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500 text-2xl transition">
              Twitter
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-lg text-gray-700 font-medium">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-lg text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-lg text-gray-700 font-medium">Message</label>
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
