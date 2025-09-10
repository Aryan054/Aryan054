// app/components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

export default function Hero() {
  return (
  <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-gray-900 to-black text-white pt-24">
      <div className="w-full flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="mb-8 flex justify-center"
        >
          <motion.img
            src="/My Pic.jpeg"
            alt="Aryan Rathod"
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-blue-400 object-cover shadow-xl mx-auto"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-4 w-full"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
            Aryan <span className="text-blue-400">Rathod</span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-300 font-medium">
            AI/ML Specialist | Full Stack Developer | Data Analyst
          </h2>
        </motion.div>

        <motion.p
          className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Passionate about building intelligent solutions and transforming data into actionable insights. Currently focused on Python, Django, and machine learning applications.
        </motion.p>

        <motion.div
          className="flex justify-center space-x-4 sm:space-x-6 mt-8 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a 
            href="https://github.com/Aryan054" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-blue-500 transition-all duration-300 text-white shadow-lg"
            aria-label="GitHub"
          >
            <FiGithub className="text-xl" />
          </a>
          <a 
            href="https://www.linkedin.com/in/aryan-rathod-546b5124a" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-blue-600 transition-all duration-300 text-white shadow-lg"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="text-xl" />
          </a>
          <a 
            href="mailto:your-email@example.com" 
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-red-500 transition-all duration-300 text-white shadow-lg"
            aria-label="Email"
          >
            <HiOutlineMail className="text-xl" />
          </a>
          <a 
            href="/Rathod_Aryan_CV.pdf" 
            download
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-green-500 transition-all duration-300 text-white shadow-lg"
            aria-label="Download Resume"
          >
            <FiDownload className="text-xl" />
          </a>
        </motion.div>

        {/* Optionally, keep the connect button for professionalism */}
        <motion.div
          className="mt-12 w-full flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a 
            href="#contact" 
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-all duration-300 shadow-lg inline-flex items-center"
          >
            Let's Connect
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}