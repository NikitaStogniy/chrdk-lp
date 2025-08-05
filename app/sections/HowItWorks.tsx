"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      title: "Create Storage",
      description:
        "Add a new storage (home, garage, cottage) and give it a name",
      icon: "🏠",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100",
    },
    {
      number: "02",
      title: "Add Items",
      description:
        "Take photos of items, specify their location and add a description",
      icon: "📦",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      hoverColor: "hover:bg-green-100",
    },
    {
      number: "03",
      title: "Invite Family",
      description: "Add family members for shared storage use",
      icon: "👥",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      hoverColor: "hover:bg-purple-100",
    },
    {
      number: "04",
      title: "Find Anything",
      description: "Use search by name, description or photo for quick finding",
      icon: "🔍",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50",
      hoverColor: "hover:bg-orange-100",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : { scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">
              How It Works
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Just 4 Simple Steps
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Start organizing your belongings easily and efficiently with our
            application
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={containerRef} className="relative">
          {/* Animated connection line */}
          <motion.div
            className="hidden lg:block absolute top-24 left-0 right-0 h-1 mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{
              background:
                "linear-gradient(90deg, transparent 12.5%, #e5e7eb 12.5%, #e5e7eb 87.5%, transparent 87.5%)",
              transformOrigin: "left",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative group cursor-pointer ${step.bgColor} ${step.hoverColor} rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:scale-105`}
                initial={{ opacity: 0, y: 50, rotateY: -10 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        rotateY: 0,
                      }
                    : {
                        opacity: 0,
                        y: 50,
                        rotateY: -10,
                      }
                }
                transition={{
                  duration: 0.8,
                  delay: index * 0.2 + 0.3,
                  type: "spring",
                  stiffness: 100,
                }}
                onHoverStart={() => setActiveStep(index)}
                onHoverEnd={() => setActiveStep(null)}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full opacity-60"
                  animate={{
                    scale: activeStep === index ? [1, 1.2, 1] : 1,
                    opacity: activeStep === index ? [0.6, 1, 0.6] : 0.6,
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-1 -left-1 w-3 h-3 bg-white rounded-full opacity-40"
                  animate={{
                    scale: activeStep === index ? [1, 1.3, 1] : 1,
                    opacity: activeStep === index ? [0.4, 0.8, 0.4] : 0.4,
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                />

                {/* Step number */}
                <motion.div
                  className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-white font-bold text-lg">
                    {step.number}
                  </span>
                </motion.div>

                {/* Icon container */}
                <motion.div
                  className="relative mb-6 mt-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-md group-hover:shadow-xl transition-shadow duration-300">
                    <span className="text-3xl filter group-hover:grayscale-0 transition-all duration-300">
                      {step.icon}
                    </span>
                  </div>

                  {/* Glow effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.2 }}
                  />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <motion.h3
                    className="text-xl font-bold mb-4 text-gray-900"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 leading-relaxed text-sm"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {step.description}
                  </motion.p>
                </div>

                {/* Progress indicator */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${step.color} rounded-b-3xl`}
                  initial={{ width: 0 }}
                  animate={
                    activeStep === index ? { width: "100%" } : { width: 0 }
                  }
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-24 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-400/20 to-blue-500/20 rounded-full blur-2xl" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Ready to start?
                </h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Join thousands of users who are already organizing their
                  belongings with Chrdk
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="#download"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-center shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Download App
                  </motion.a>
                  <motion.a
                    href="/help/faq"
                    className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-700 hover:border-gray-500 transition-all duration-300 text-center"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    FAQ
                  </motion.a>
                </div>
              </div>

              <div className="text-center lg:text-right">
                <motion.div
                  className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="flex flex-col items-center"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                      1000+
                    </div>
                    <div className="text-sm text-gray-300">Users</div>
                  </motion.div>
                  <div className="w-px h-16 bg-gray-600"></div>
                  <motion.div
                    className="flex flex-col items-center"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                      10k+
                    </div>
                    <div className="text-sm text-gray-300">
                      Items found
                    </div>
                  </motion.div>
                  <div className="w-px h-16 bg-gray-600"></div>
                  <motion.div
                    className="flex flex-col items-center"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                      5
                    </div>
                    <div className="text-sm text-gray-300">Max storages</div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;
