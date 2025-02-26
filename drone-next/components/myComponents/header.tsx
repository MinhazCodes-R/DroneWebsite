'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Home  } from 'lucide-react'

import {motion} from "framer-motion";

import React from "react";
import Modal from './modal/modal'

import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

  // const links = [

  //   {
  //     title: "Twitter",
  //     icon: (
  //       <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //     ),
  //     href: "#",
  //   },
  //   {
  //     title: "GitHub",
  //     icon: (
  //       <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //     ),
  //     href: "#",
  //   },
  // ];



  const Header = () => {


    const [modalOpen, setModalOpen] = useState(false);
    
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);



  const content_display ={
    menueitem:(
      <>


      <nav className="flex-grow">
        <ul className="space-y-2 w-[80vw]">
          <li>
            <Link onClick={close} href="./" className="flex items-center space-x-3 p-3 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors duration-200">

              <span className="font-medium">Home</span>
            </Link>
          </li>
          <li>
            <Link onClick={close} href="./experience" className="flex items-center space-x-3 p-3 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors duration-200">
           
              <span className="font-medium">
                About Us</span>
            </Link>
          </li>
          <li>
            <Link onClick={close} href="./experience" className="flex items-center space-x-3 p-3 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors duration-200">
           
              <span className="font-medium">
                Meet Our Team</span>
            </Link>
          </li>
          <li>
            <Link onClick={close} href="./projectsdone" className="flex items-center space-x-3 p-3 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors duration-200">
            
              <span className="font-medium">Competition</span>
            </Link>
          </li>
          <li>
            <Link onClick={close} href="./" className="flex items-center space-x-3 p-3 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors duration-200">
            
              <span className="font-medium">Our Drone</span>
            </Link>
          </li>
          <li>
            <Link onClick={close} href="./contactme" className="flex items-center space-x-3 p-3 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors duration-200">
           
              <span className="font-medium">Reqruitment</span>
            </Link>
          </li>
          
        </ul>
      </nav>
    
      </>
    )
  };
  

  return (
    <header className="bg-background shadow-sm w-[100vw] bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="h-10 flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center">
              <span className="sr-only"><div className='text-white'>Your Company</div></span>
              <span>
                {/* <div className="flex items-center justify-center h-[35rem] w-full">
                <FloatingDock
                  mobileClassName="translate-y-20" 
                  items={links}
                />
              </div> */}
            </span>
              {/* Replace with your logo */}

              <span className="ml-2 text-xl font-bold text-primary text-white">Logo</span>
            </Link>
          </div>
          <div className="md:hidden">
            <div

              onClick={open}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                >
                 <p className='text-white'>Hamburger Icon</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">

          <Link href="/" className="text-base font-medium text-foreground hover:text-primary">
            <motion.button whileHover={{scale:1.2}}>
              <div className='flex text-white'>
              
              Home
              </div>
            </motion.button>
              
            </Link>
            <Link href="/aboutus" className="text-base font-medium text-foreground hover:text-primary">
            <motion.button whileHover={{scale:1.2}}>
              <div className='flex text-white'>
              
              About Us
              </div>
            </motion.button>
              
            </Link>
            <Link href="/meet-our-team" className="text-base font-medium text-foreground hover:text-primary">
            <motion.button whileHover={{scale:1.2}}>
              <div className='flex text-white'>
              
              Meet Our Team
              </div>
            </motion.button>
              
            </Link>
            <Link href="/competition" className="text-base font-medium text-foreground hover:text-primary">
            <motion.button whileHover={{scale:1.2}}>

              <div className='flex text-white'>
              
              Competition
              </div>
              
              
              </motion.button>
            </Link>
            <Link href="/our-drone" className="text-base font-medium text-foreground hover:text-primary">
            <motion.button whileHover={{scale:1.2}}>

              <div className='flex text-white'>
              
              Our Drone

              </div>
              </motion.button>
            </Link>
            <Link href="/recruitment" className="text-base font-medium text-foreground hover:text-primary">
            <motion.button whileHover={{scale:1.2}}>

              <div className='flex text-white'>
              
              Recruitment

              </div>
              </motion.button>
            </Link>
            <Link href="/sponsors" className="text-base font-medium text-foreground hover:text-primary">
            <motion.button whileHover={{scale:1.2}}>

              <div className='flex text-white'>
              
              Sponsors

              </div>
              </motion.button>
            </Link>
            <Link href="/contact-us" className="text-base font-medium text-foreground hover:text-primary">
            <motion.button whileHover={{scale:1.2}}>

              <div className='flex text-white'>
              
              Contact

              </div>
              </motion.button>
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {/* <Button variant="ghost" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild className="ml-8">
              <Link href="/signup">Sign up</Link>
            </Button> */}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {modalOpen && <Modal modalOpen={modalOpen} contentdiv={content_display.menueitem} handleClose={close}/>}
      
    </header>
  )
}

export default Header

