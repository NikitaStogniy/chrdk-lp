'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ModernFeatureCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  index: number;
  gradient: string;
}

const ModernFeatureCard: React.FC<ModernFeatureCardProps> = ({
  title,
  description,
  image,
  icon,
  index,
  gradient
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className="group relative cursor-pointer select-none touch-manipulation"
    >
      {/* Gradient background with animated border */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
      
      <div className="relative bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 h-full transition-all duration-500 group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-gray-900/10">
        
        {/* Icon with animated background */}
        <motion.div 
          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} mb-6 relative`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div className="text-white">
            {icon}
          </div>
          
          {/* Glow effect */}
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-50 blur-md scale-110 group-hover:opacity-75 transition-opacity duration-300`} />
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
          {title}
        </h3>

        {/* Image container with hover effects */}
        <div className="relative h-48 mb-6 rounded-2xl overflow-hidden bg-gray-50">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <Image 
              src={image} 
              alt={title} 
              fill 
              className="object-contain transition-transform duration-500 group-hover:scale-105" 
            />
          </motion.div>
          
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>

      </div>
    </motion.div>
  );
};

export default ModernFeatureCard;