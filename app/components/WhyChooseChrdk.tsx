'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FastIcon, ReliableIcon, SimpleIcon } from './icons/FeatureIcons';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface WhyChooseItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  stats?: string;
}

const whyChooseItems: WhyChooseItem[] = [
  {
    icon: <FastIcon size={32} />,
    title: "Lightning Fast",
    description: "Find any item in seconds thanks to smart search and AI analysis",
    gradient: "from-blue-500 to-cyan-500",
    stats: "< 2 sec"
  },
  {
    icon: <ReliableIcon size={32} />,
    title: "Secure & Reliable", 
    description: "Your data is protected and synchronized in the cloud with encryption",
    gradient: "from-emerald-500 to-teal-500",
    stats: "99.9%"
  },
  {
    icon: <SimpleIcon size={32} />,
    title: "Simple & Intuitive",
    description: "Intuitive interface that every family member can understand",
    gradient: "from-purple-500 to-pink-500",
    stats: "0 learning"
  }
];

const WhyChooseChrdk: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <div ref={ref} className="w-full mt-16">
      {/* Enhanced background with animated patterns */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent_50%)]" />
        
        {/* Animated floating particles */}
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-60"
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full opacity-40"
          animate={{
            y: [10, -10, 10],
            x: [5, -5, 5],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-50"
          animate={{
            y: [-5, 15, -5],
            x: [-3, 7, -3],
            opacity: [0.5, 0.9, 0.5]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <div className="relative px-8 py-16 rounded-3xl border border-white/10 backdrop-blur-sm">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why choose{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Chrdk?
              </span>
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Over 10,000 families have already organized their belongings with our app
            </p>
          </motion.div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyChooseItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3 + index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-20 blur-sm`} />
                </div>
                
                <div className="relative p-8 text-center">
                  {/* Icon with animated glow */}
                  <motion.div 
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} mb-6 relative`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="text-white">
                      {item.icon}
                    </div>
                    
                    {/* Glow effect */}
                    <motion.div 
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-30 blur-lg scale-110`}
                      animate={{ 
                        scale: [1.1, 1.2, 1.1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>

                  {/* Stats badge */}
                  {item.stats && (
                    <motion.div 
                      className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${item.gradient} text-white text-sm font-semibold mb-4`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.stats}
                    </motion.div>
                  )}

                  {/* Title */}
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {item.description}
                  </p>

                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Button shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              Try for Free
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseChrdk;