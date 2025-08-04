'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '/', id: 1 },
  { name: 'About', href: '#about', id: 2 },
  { name: 'Projects', href: '#projects', id: 3 },
  { name: 'Contact', href: '#contact', id: 4 },
];

const socialLinks = [
  { icon: <FiGithub className="text-lg" />, href: 'https://github.com/Aryan054', id: 1 },
  { icon: <FiLinkedin className="text-lg" />, href: 'https://www.linkedin.com/in/aryan-rathod-546b5124a', id: 2 },
  { icon: <FiMail className="text-lg" />, href: 'mailto:your-email@example.com', id: 3 },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link 
              href="/" 
              className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300 flex items-center"
            >
              <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
                A
              </span>
              <span className="hidden sm:inline">ryan Rathod</span>
            </Link>
          </motion.div>
          

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <motion.li 
                  key={link.id}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex items-center space-x-4 ml-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  aria-label={link.href.includes('github') ? 'GitHub' : link.href.includes('linkedin') ? 'LinkedIn' : 'Email'}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-400 hover:text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (would be implemented with state) */}
      {/* <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div> */}
    </motion.nav>
  );
}

