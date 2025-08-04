'use client';

import { motion } from 'framer-motion';
import {
  SiPython, SiDjango, SiMysql, SiPandas,
  SiHtml5, SiCss3, SiGit, SiNextdotjs,
  SiTailwindcss, SiNumpy, SiScikitlearn, SiTensorflow
} from 'react-icons/si';
import { FaChartLine, FaServer } from 'react-icons/fa';

const skillCategories = [
  {
    title: "Backend Development",
    skills: [
      { name: 'Python', icon: <SiPython className="w-full h-full" />, color: "text-yellow-400" },
      { name: 'Django', icon: <SiDjango className="w-full h-full" />, color: "text-green-500" },
      { name: 'REST APIs', icon: <FaServer className="w-full h-full" />, color: "text-blue-400" },
    ]
  },
  {
    title: "Data Science",
    skills: [
      { name: 'Pandas', icon: <SiPandas className="w-full h-full" />, color: "text-white" },
      { name: 'NumPy', icon: <SiNumpy className="w-full h-full" />, color: "text-blue-300" },
      { name: 'scikit-learn', icon: <SiScikitlearn className="w-full h-full" />, color: "text-orange-400" },
      { name: 'TensorFlow', icon: <SiTensorflow className="w-full h-full" />, color: "text-orange-500" },
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: 'HTML5', icon: <SiHtml5 className="w-full h-full" />, color: "text-orange-500" },
      { name: 'CSS3', icon: <SiCss3 className="w-full h-full" />, color: "text-blue-600" },
      { name: 'Next.js', icon: <SiNextdotjs className="w-full h-full" />, color: "text-white" },
      { name: 'Tailwind', icon: <SiTailwindcss className="w-full h-full" />, color: "text-cyan-400" },
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: 'Git', icon: <SiGit className="w-full h-full" />, color: "text-red-500" },
      { name: 'SQL', icon: <SiMysql className="w-full h-full" />, color: "text-blue-400" },
      { name: 'Data Viz', icon: <FaChartLine className="w-full h-full" />, color: "text-green-400" },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-gray-950 py-28 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-40">
        <div className="absolute w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl -top-1/4 -left-1/4 animate-pulse-slow" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse-slow delay-1000" />
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
          <span className="uppercase tracking-widest text-blue-400 font-medium">Technical Expertise</span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            My <span className="text-yellow-300">Skills</span> & Technologies
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex flex-col items-center gap-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: catIndex * 0.15 + skillIndex * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gray-800 flex items-center justify-center p-3 ${skill.color} hover:bg-gray-700 transition-all duration-300`}>
                      {skill.icon}
                    </div>
                    <span className="text-white font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency level indicator */}
        <motion.div
          className="mt-16 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Proficiency Overview</h3>
          <div className="space-y-6">
            {[
              { skill: 'Python & Django', level: '90%' },
              { skill: 'Data Analysis', level: '85%' },
              { skill: 'SQL Databases', level: '80%' },
              { skill: 'Frontend Development', level: '75%' },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>{item.skill}</span>
                  <span>{item.level}</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-blue-300 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: item.level }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}