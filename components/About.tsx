'use client';

import { motion } from 'framer-motion';
import { FaPython, FaReact } from 'react-icons/fa';
import { SiDjango, SiNextdotjs, SiTailwindcss, SiMysql } from 'react-icons/si';
import { TbChartBar } from 'react-icons/tb';

export default function About() {
  const technologies = [
    { icon: <FaPython className="text-4xl" />, name: "Python" },
    { icon: <SiDjango className="text-4xl" />, name: "Django" },
    { icon: <SiMysql className="text-4xl" />, name: "SQL" },
    { icon: <TbChartBar className="text-4xl" />, name: "Data Analytics" },
    { icon: <FaReact className="text-4xl" />, name: "React" },
    { icon: <SiNextdotjs className="text-4xl" />, name: "Next.js" },
    { icon: <SiTailwindcss className="text-4xl" />, name: "Tailwind CSS" },
  ];

  return (
    <motion.section
      id="about"
      className="relative min-h-screen bg-gray-900 text-white py-32 px-6 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:60px_60px]"></div>
      </div>

      {/* Glowing background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl -top-1/4 -left-1/4 animate-pulse-slow" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse-slow delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="uppercase tracking-widest text-blue-400 font-medium">About Me</span>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Professional Profile
            </motion.h2>
          </motion.div>

          <motion.div
            className="space-y-6 text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-lg leading-relaxed">
              I'm <span className="text-blue-400 font-medium">Aryan Rathod</span>, an AI/ML graduate and full-stack developer based in Pune, India. With a strong foundation in computer science and specialized knowledge in artificial intelligence, I build intelligent, data-driven applications that solve real-world problems.
            </p>

            <p className="text-lg leading-relaxed">
              My expertise spans the entire development stack, from crafting robust backend systems with <span className="text-blue-400">Python & Django</span> to building responsive frontends with modern frameworks like <span className="text-blue-400">Next.js</span>. I particularly enjoy working at the intersection of data and application development.
            </p>

            <p className="text-lg leading-relaxed">
              Currently, I'm focused on enhancing my skills in cloud architecture and scalable system design while continuing to deliver high-quality solutions for complex technical challenges.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Technical Proficiencies</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="flex flex-col items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-3 bg-gray-700/50 rounded-lg hover:bg-blue-500/10 transition-colors duration-300">
                    {tech.icon}
                  </div>
                  <span className="text-sm text-gray-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-blue-400">Bachelor's in Artificial Intelligence & Machine Learning</h4>
                <p className="text-gray-400">Pune University</p>
                <p className="text-sm text-gray-500">2021 - 2025</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}