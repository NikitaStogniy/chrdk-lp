'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SkeletonCard: React.FC = () => {
  return (
    <div className="group relative">
      <div className="relative bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 h-full">
        
        {/* Icon skeleton */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-200 mb-6 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
            animate={{ x: [-100, 300] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        </div>

        {/* Title skeleton */}
        <div className="mb-4">
          <div className="h-7 bg-gray-200 rounded-lg w-3/4 mb-2 overflow-hidden relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              animate={{ x: [-100, 300] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "linear",
                delay: 0.1
              }}
            />
          </div>
        </div>

        {/* Image skeleton */}
        <div className="relative h-48 mb-6 rounded-2xl overflow-hidden bg-gray-200">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
            animate={{ x: [-100, 300] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "linear",
              delay: 0.2
            }}
          />
        </div>

        {/* Description skeleton */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full overflow-hidden relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              animate={{ x: [-100, 300] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "linear",
                delay: 0.3
              }}
            />
          </div>
          <div className="h-4 bg-gray-200 rounded w-5/6 overflow-hidden relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              animate={{ x: [-100, 300] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "linear",
                delay: 0.4
              }}
            />
          </div>
          <div className="h-4 bg-gray-200 rounded w-2/3 overflow-hidden relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              animate={{ x: [-100, 300] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "linear",
                delay: 0.5
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;