'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChartBar } from 'react-icons/fa';
import { SiPython, SiDjango, SiPandas, SiHtml5, SiCss3 } from 'react-icons/si';
import { TbBrandPython, TbBrandMysql, TbBrain } from 'react-icons/tb';

const projects = [
  {
    title: 'College Admission Chatbot',
    description: 'Developed an intelligent multilingual chatbot using machine learning and Django framework to automate student queries and streamline the admission process.',
    tech: [
      { name: 'Python', icon: <SiPython className="w-5 h-5" /> },
      { name: 'Django', icon: <SiDjango className="w-5 h-5" /> },
      { name: 'ML/NLP', icon: <TbBrain className="w-5 h-5" /> },
    ],
    github: 'https://github.com/Aryan054/college-chatbot',
    demo: 'http://127.0.0.1:8000/',
    image: 'https://thfvnext.bing.com/th/id/OIP.PHzsL5fQvcV4bgfd6_4JOwHaFG?w=244&h=180&c=7&r=0&o=7&cb=thfvnext&pid=1.7&rm=3'
  },
  {
    title: 'BigMart Sales Analysis',
    description: 'Conducted comprehensive retail sales data analysis using Python and Power BI, uncovering key insights to optimize inventory and pricing strategies.',
    tech: [
      { name: 'Pandas', icon: <SiPandas className="w-5 h-5" /> },
      { name: 'Power BI', icon: <FaChartBar className="w-5 h-5" /> },
      { name: 'Data Viz', icon: <TbBrandPython className="w-5 h-5" /> },
    ],
    github: 'https://drive.google.com/file/d/1X5zZtTalw2aZkx5l0uCh1x1_KO8Tok67/view?usp=sharing',
    demo: 'https://drive.google.com/file/d/1X5zZtTalw2aZkx5l0uCh1x1_KO8Tok67/view?usp=sharing',
    image: 'https://i.ytimg.com/vi/q4zm-kMitCg/maxresdefault.jpg'
  },
  {
    title: 'Doctor Appointment System',
    description: 'Built a full-featured appointment management system with Django backend, enabling patients to book and manage doctor appointments seamlessly.',
    tech: [
      { name: 'Django', icon: <SiDjango className="w-5 h-5" /> },
      { name: 'SQL', icon: <TbBrandMysql className="w-5 h-5" /> },
      { name: 'Frontend', icon: <SiHtml5 className="w-5 h-5" /> },
    ],
    github: 'https://github.com/Aryan054/Healthcare-Management',
    demo: 'http://127.0.0.1:8000/',
    image: 'https://tse4.mm.bing.net/th/id/OIP.TTO1U8duT1-lzwcsRNgDGwHaDl?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    title: 'Teacher Management',
    description: 'Teacher Management System is a web-based application designed to manage teacher records efficiently. It allows adding, updating, viewing, and deleting teacher details, helping schools and colleges streamline staff information management.',
    tech: [
     { name: 'Python', icon: <SiPython className="w-5 h-5" /> },
     { name: 'Django', icon: <SiDjango className="w-5 h-5" /> },
     { name: 'HTML', icon: <SiHtml5 className="w-5 h-5" /> },
     { name: 'CSS', icon: <SiCss3 className="w-5 h-5" /> },
     { name: 'Django ORM', icon: <SiDjango className="w-5 h-5" /> },
    
    ],
    github: 'https://github.com/Aryan054/fullstack-intern-project',
    demo: 'http://localhost:3000/register',
    image: 'https://varthana.com/school/wp-content/uploads/2023/02/B166.jpg'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-gray-950 py-28 text-white overflow-hidden">
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
          <span className="uppercase tracking-widest text-blue-400 font-medium">Portfolio</span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Featured <span className="text-blue-400">Projects</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A selection of my recent work showcasing technical skills and problem-solving abilities
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-blue-500 transition-all duration-500 h-full flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80 z-10"></div>
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-600">
                  Project Image
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                    {project.tech[0].icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-400 mb-6 flex-1">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm text-gray-500 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, i) => (
                      <div key={i} className="flex items-center gap-2 bg-gray-800/50 px-3 py-1.5 rounded-lg border border-gray-700">
                        {tech.icon}
                        <span className="text-sm text-gray-300">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-auto pt-4 border-t border-gray-800">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                  >
                    <FaGithub className="text-blue-400" />
                    <span>View Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <a
            href="https://github.com/Aryan054"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors duration-300"
          >
            View All Projects
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}