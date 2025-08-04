'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      href: "https://github.com/Aryan054",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/aryan-rathod-546b5124a",
      label: "LinkedIn"
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      href: "mailto:aryanrathod791@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="relative bg-gray-950 border-t border-gray-800 py-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
        <div className="absolute w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl -top-1/4 -left-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <motion.div 
            className="flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center text-white transition-colors duration-300"
                aria-label={link.label}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} <span className="text-blue-400">Aryan Rathod</span>. All rights reserved.
          </motion.p>

          {/* Credits */}
          <motion.p
            className="text-gray-500 text-xs"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Designed & Built with Next.js, Tailwind CSS and Framer Motion
          </motion.p>
        </div>
      </div>
    </footer>
  );
}