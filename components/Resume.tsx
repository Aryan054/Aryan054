'use client';

import { motion } from 'framer-motion';
import { Download, FileText, Briefcase, GraduationCap } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="relative bg-gray-50 py-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
        <div className="absolute w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl -top-1/4 -left-1/4 animate-pulse-slow" />
        <div className="absolute w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse-slow delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="uppercase tracking-widest text-teal-600 font-medium">Professional Profile</span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            My <span className="text-teal-600">Resume</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A comprehensive overview of my technical expertise, education, and professional journey
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Resume Download Card */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-teal-500/20 transition-all duration-500 lg:col-span-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-600">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Complete Resume</h3>
                  <p className="text-gray-600">Detailed professional profile (PDF)</p>
                </div>
              </div>
              <motion.a
                href="/Aryan_Rathod_Resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-all duration-300 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-teal-500/20 transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900">Bachelor's in AI & Machine Learning</h4>
                <p className="text-gray-600 text-sm">Pune University</p>
                <p className="text-gray-500 text-xs">2020 - 2024</p>
              </div>
              {/* Add more education items as needed */}
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-teal-500/20 transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Internship</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900">Python FullStack With Data Analysis</h4>
                <p className="text-gray-600 text-sm">Qspiders, Wakad - Traning Institute</p>
                <p className="text-gray-500 text-xs">Present</p>
              </div>
              {/* Add more experience items as needed */}
            </div>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-teal-500/20 transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Key Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Django', 'Machine Learning', 'Data Analysis', 'SQL', 'Next.js', 'Tailwind CSS'].map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-teal-500/10 text-teal-700 text-sm rounded-full border border-teal-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}