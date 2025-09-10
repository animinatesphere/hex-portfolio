import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';

const ProfileSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const profileImages = [
    "/assets/images/15a-1756202833263.jpg",
    "/assets/images/15a-1756202833263.jpg",
    "/assets/images/15a-1756202833263.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % profileImages?.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [profileImages?.length]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <motion.div
      className="flex-1 flex items-center justify-center px-6 lg:px-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="relative">
        {/* Main Profile Image */}
        <motion.div
          className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary opacity-20 z-10"></div>
          <Image
            src={profileImages?.[currentImageIndex]}
            alt="Professional Developer - Frontend Specialist"
            className="w-full h-full object-cover transition-all duration-1000"
          />
        </motion.div>

        {/* Rotating Border */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-accent via-primary to-accent bg-clip-border"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            background: 'linear-gradient(45deg, #ff6b35, #1a365d, #ff6b35)',
            padding: '4px',
            borderRadius: '50%'
          }}
        >
          <div className="w-full h-full rounded-full bg-primary"></div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="text-white font-bold text-lg">⚡</span>
        </motion.div>

        <motion.div
          className="absolute -bottom-6 -left-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center"
          animate={{
            y: [0, 10, 0],
            x: [0, 5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <span className="text-white text-lg">💻</span>
        </motion.div>

        <motion.div
          className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-r from-accent to-primary rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />

        {/* Image Indicators */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {profileImages?.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-accent scale-125' :'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileSection;