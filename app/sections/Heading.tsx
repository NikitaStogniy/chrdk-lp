"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Heading = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`,
          }}
        />
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"
        animate={floatingAnimation}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-20 blur-3xl"
        animate={{
          ...floatingAnimation,
          transition: { ...floatingAnimation.transition, delay: 1 },
        }}
      />

      <motion.div
        className="relative z-10 md:h-screen flex justify-between flex-col lg:flex-row items-start lg:items-center max-w-[1450px] mx-auto p-8 gap-8 lg:gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col gap-8 lg:max-w-[600px]">
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 text-purple-700 text-sm font-medium w-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              New: Smart AI organization
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent leading-tight">
              Everything in{" "}
              <span className="relative">
                its place
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-[500px]">
              Transform your home into an organized sanctuary with{" "}
              <span className="font-semibold text-purple-700">Chrdk</span>.
              Smart AI finds your items instantly, while beautiful organization
              brings peace to your space.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#download"
                className="group relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 text-center overflow-hidden"
              >
                <span className="relative z-10">Download Free App</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/help/faq"
                className="group border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 text-center backdrop-blur-sm bg-white/60"
              >
                <span className="group-hover:text-purple-700 transition-colors">
                  See How It Works
                </span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-row gap-6 items-center"
          >
            <div className="flex -space-x-3">
              {[
                { bg: "from-purple-500 to-pink-500", img: "👤" },
                { bg: "from-blue-500 to-indigo-500", img: "👩" },
                { bg: "from-green-500 to-emerald-500", img: "👨" },
                { bg: "from-orange-500 to-red-500", img: "👧" },
              ].map((user, index) => (
                <motion.div
                  key={index}
                  className={`w-12 h-12 bg-gradient-to-br ${user.bg} rounded-full border-3 border-white flex items-center justify-center text-white text-lg shadow-lg`}
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                >
                  {user.img}
                </motion.div>
              ))}
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full border-3 border-white flex items-center justify-center text-gray-600 text-sm font-bold shadow-lg"
                whileHover={{ scale: 1.1 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.9 }}
              >
                +1K
              </motion.div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="text-yellow-400 text-lg"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2 + i * 0.1 }}
                  >
                    ⭐
                  </motion.span>
                ))}
                <span className="text-sm font-semibold text-gray-700 ml-2">
                  4.9
                </span>
              </div>
              <p className="text-sm text-gray-600 font-medium">
                Loved by 1,000+ families worldwide
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="relative w-full lg:w-[600px] h-[600px] lg:h-[700px]"
        >
          {/* Phone mockup container with gradient border */}
          <div className="relative w-full h-full">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 rounded-[3rem] p-1"
              animate={{
                rotate: [0, 1, -1, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden shadow-2xl">
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/first.png"
                    alt="Chrdk app interface showing organized belongings"
                    fill
                    className="object-contain p-4"
                    priority
                  />
                  
                  {/* Floating UI elements */}
                  <motion.div
                    className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-purple-100"
                    animate={floatingAnimation}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-gray-700">
                        AI Organizing
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-8 right-8 bg-purple-600 text-white rounded-full p-3 shadow-lg"
                    animate={{
                      ...floatingAnimation,
                      transition: { ...floatingAnimation.transition, delay: 0.5 },
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Decorative elements around phone */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 0.6, 0.8],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-60 blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 0.4, 0.6],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: 1,
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Heading;
