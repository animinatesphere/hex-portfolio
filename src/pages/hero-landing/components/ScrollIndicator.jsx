import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ScrollIndicator = ({ onNavigate }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement?.scrollHeight - window.innerHeight;
      const progress = Math.min(scrolled / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollDown = () => {
    const nextSection = document.querySelector('#next-section');
    if (nextSection) {
      nextSection?.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('/project-showcase');
    }
  };

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3, duration: 0.6 }}
    >
      <div className="flex flex-col items-center space-y-4">
        {/* Progress Circle */}
        <div className="relative w-16 h-16">
          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
            {/* Background Circle */}
            <circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="4"
            />
            {/* Progress Circle */}
            <motion.circle
              cx="32"
              cy="32"
              r="28"
              fill="none"
              stroke="#ff6b35"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 28}`}
              strokeDashoffset={`${2 * Math.PI * 28 * (1 - scrollProgress)}`}
              transition={{ duration: 0.1 }}
            />
          </svg>
          
          {/* Scroll Button */}
          <motion.button
            onClick={handleScrollDown}
            className="absolute inset-2 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon 
              name="ChevronDown" 
              size={20} 
              className="text-white group-hover:text-accent transition-colors duration-300" 
            />
          </motion.button>
        </div>

        {/* Scroll Text */}
        <motion.div
          className="text-center"
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <p className="text-white/60 text-xs font-medium tracking-wider uppercase">
            Scroll
          </p>
          <p className="text-white/40 text-xs">
            Explore
          </p>
        </motion.div>

        {/* Animated Dots */}
        <div className="flex flex-col space-y-1">
          {[0, 1, 2]?.map((index) => (
            <motion.div
              key={index}
              className="w-1 h-1 bg-white/40 rounded-full"
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;