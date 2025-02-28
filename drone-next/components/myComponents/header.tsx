"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";
import React from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black shadow-sm w-full fixed top-0 left-0 z-50 flex justify-between items-center px-6 h-[80px]">
      {/* Logo */}
      <div className="text-white text-xl font-bold">Logo</div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          aria-label="Toggle menu"
        >
          <FiMenu />
        </button>
      </div>

      {/* Navigation Links for Desktop */}
      <nav className="hidden md:flex space-x-8">
        <Link href="/" className="text-white text-base font-medium">
          Home
        </Link>
        <Link href="/aboutus" className="text-white text-base font-medium">
          About Us
        </Link>
        <Link href="/meet-our-team" className="text-white text-base font-medium">
          Meet Our Team
        </Link>
        <Link href="/competition" className="text-white text-base font-medium">
          Competition
        </Link>
        <Link href="/our-drone" className="text-white text-base font-medium">
          Our Drone
        </Link>
        <Link href="/recruitment" className="text-white text-base font-medium">
          Recruitment
        </Link>
        <Link href="/sponsors" className="text-white text-base font-medium">
          Sponsors
        </Link>
        <Link href="/contact-us" className="text-white text-base font-medium">
          Contact
        </Link>
      </nav>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""} md:hidden absolute bg-black w-full top-[80px]`}>
        <Link href="/" className="block text-white py-2 text-center" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link href="/aboutus" className="block text-white py-2 text-center" onClick={() => setMenuOpen(false)}>
          About Us
        </Link>
        <Link href="/meet-our-team" className="block text-white py-2 text-center" onClick={() => setMenuOpen(false)}>
          Meet Our Team
        </Link>
        <Link href="/competition" className="block text-white py-2 text-center" onClick={() => setMenuOpen(false)}>
          Competition
        </Link>
        <Link href="/our-drone" className="block text-white py-2 text-center" onClick={() => setMenuOpen(false)}>
          Our Drone
        </Link>
        <Link href="/recruitment" className="block text-white py-2 text-center" onClick={() => setMenuOpen(false)}>
          Recruitment
        </Link>
        <Link href="/sponsors" className="block text-white py-2 text-center" onClick={() => setMenuOpen(false)}>
          Sponsors
        </Link>
        <Link href="/contact-us" className="block text-white py-2 text-center" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
