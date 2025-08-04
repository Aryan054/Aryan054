'use client';

import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-gray-950 py-28 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-40">
        <div className="absolute w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-3xl -top-1/4 -left-1/4 animate-pulse-slow" />
        <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse-slow delay-1000" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:60px_60px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="uppercase tracking-widest text-yellow-400 font-medium">Get In Touch</span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Contact <span className="text-yellow-400">Me</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Interested in working together or have questions? Reach out through any of these channels.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Let's Connect</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm currently open to new opportunities, collaborations, and interesting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-1">Email</h4>
                  <a href="mailto:aryanrathod791@gmail.com" className="text-white hover:text-yellow-400 transition-colors">
                    aryanrathod791@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-1">Phone</h4>
                  <a href="tel:+918767514749" className="text-white hover:text-yellow-400 transition-colors">
                    +91 87675 14749
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-white">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-4">Social Profiles</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/aryan-rathod-546b5124a" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/Aryan054" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Hello Aryan, I'd like to talk about..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiSend className="w-5 h-5" />
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}