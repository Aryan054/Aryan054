'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaFire, FaLanguage } from 'react-icons/fa';

export default function GitHubStats() {
  return (
    <section className="relative bg-gray-950 py-28 text-white overflow-hidden">
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
          <span className="uppercase tracking-widest text-blue-400 font-medium">Development Activity</span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            GitHub <span className="text-blue-400">Statistics</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Quantitative insight into my coding contributions, streaks, and language preferences
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stats Card 1 */}
          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover:border-blue-500 transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                <FaGithub className="text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-white">Overall Stats</h3>
            </div>
            <div className="aspect-video overflow-hidden rounded-lg">
              <img
                src="https://github-readme-stats.vercel.app/api?username=aryan054&show_icons=true&theme=radical&rank_icon=github&hide_title=true"
                alt="GitHub Stats"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Stats Card 2 */}
          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm border border-pink-500/30 rounded-xl p-6 hover:border-pink-500 transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400">
                <FaFire className="text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-white">Contribution Streak</h3>
            </div>
            <div className="aspect-video overflow-hidden rounded-lg">
              <img
                src="https://github-readme-streak-stats.herokuapp.com?user=aryan054&theme=radical&date_format=M%20j%5B%2C%20Y%5D"
                alt="GitHub Streak"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Stats Card 3 */}
          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-purple-500 transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                <FaLanguage className="text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-white">Top Languages</h3>
            </div>
            <div className="aspect-video overflow-hidden rounded-lg">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=aryan054&layout=compact&theme=radical"
                alt="Top Languages"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Additional Metrics */}
        <motion.div
          className="mt-16 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { metric: "Total Repositories", value: "20+", icon: <FaCode className="text-blue-400" /> },
              { metric: "Total Commits", value: "500+", icon: <FaGithub className="text-green-400" /> },
              { metric: "Current Streak", value: "15 days", icon: <FaFire className="text-orange-400" /> },
              { metric: "Languages Used", value: "8+", icon: <FaLanguage className="text-purple-400" /> },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                <div className="flex justify-center text-3xl mb-3">
                  {item.icon}
                </div>
                <h4 className="text-3xl font-bold text-white mb-2">{item.value}</h4>
                <p className="text-gray-400 text-sm">{item.metric}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="https://github.com/Aryan054"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors duration-300"
          >
            View Full GitHub Profile
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}