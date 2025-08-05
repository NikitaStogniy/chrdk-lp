'use client';

import { motion } from 'framer-motion';
import ModernFeatureCard from '../components/ModernFeatureCard';
import WhyChooseChrdk from '../components/WhyChooseChrdk';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import {
  StorageIcon,
  SearchIcon,
  FamilyIcon,
  HistoryIcon,
  PhotoLocationIcon,
  SyncIcon
} from '../components/icons/FeatureIcons';

interface Feature {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  gradient: string;
}

const features: Feature[] = [
  {
    title: "Multiple Storages",
    description: "Manage up to 5 different storages from one phone: home, cottage, garage, office",
    image: "/about-1.png",
    icon: <StorageIcon size={28} />,
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    title: "Smart Search",
    description: "Find any item by name, description, or even by photo thanks to semantic search",
    image: "/about-2.png",
    icon: <SearchIcon size={28} />,
    gradient: "from-purple-500 to-pink-600"
  },
  {
    title: "Family Access",
    description: "Add family members to your storages for shared use and item tracking",
    image: "/about-3.png",
    icon: <FamilyIcon size={28} />,
    gradient: "from-green-500 to-emerald-600"
  },
  {
    title: "Usage History",
    description: "Track who and when took items with reason specified. Never lose anything important",
    image: "/about-1.png",
    icon: <HistoryIcon size={28} />,
    gradient: "from-orange-500 to-red-600"
  },
  {
    title: "Photos & Location",
    description: "Add photos and exact location in storage to each item",
    image: "/about-2.png",
    icon: <PhotoLocationIcon size={28} />,
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    title: "Synchronization",
    description: "All data syncs between devices in real time. Access from anywhere",
    image: "/about-3.png",
    icon: <SyncIcon size={28} />,
    gradient: "from-teal-500 to-green-600"
  }
];

const Features = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_70%)] opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_70%)] opacity-50" />
      
      <div ref={ref} className="relative py-20 px-8 max-w-[1450px] mx-auto">
        {/* Section Header with Staggered Animation */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h2 
            className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            App{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Features
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Everything you need to organize your belongings in one place
          </motion.p>
          
          {/* Animated divider */}
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full"
            initial={{ scaleX: 0 }}
            animate={isIntersecting ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        {/* Balanced Features Grid */}
        <div className="space-y-12">
          {/* First row - 3 cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={isIntersecting ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {features.slice(0, 3).map((feature, index) => (
              <ModernFeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                image={feature.image}
                icon={feature.icon}
                index={index}
                gradient={feature.gradient}
              />
            ))}
          </motion.div>

          {/* Second row - 3 cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={isIntersecting ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            {features.slice(3).map((feature, index) => (
              <ModernFeatureCard
                key={index + 3}
                title={feature.title}
                description={feature.description}
                image={feature.image}
                icon={feature.icon}
                index={index + 3}
                gradient={feature.gradient}
              />
            ))}
          </motion.div>
        </div>

        {/* Why Choose Chrdk Section */}
        <WhyChooseChrdk />
      </div>
    </div>
  );
};

export default Features;
