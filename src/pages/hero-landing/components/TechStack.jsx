import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TechStack = () => {
  const techStack = [
    { name: 'React', icon: 'Code2', color: '#61DAFB', delay: 0 },
    { name: 'TypeScript', icon: 'FileCode', color: '#3178C6', delay: 0.2 },
    { name: 'Next.js', icon: 'Zap', color: '#000000', delay: 0.4 },
    { name: 'Tailwind', icon: 'Palette', color: '#06B6D4', delay: 0.6 },
    { name: 'Node.js', icon: 'Server', color: '#339933', delay: 0.8 },
    { name: 'GraphQL', icon: 'Database', color: '#E10098', delay: 1.0 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <motion.div
      className="absolute top-20 right-10 hidden xl:block"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="relative">
        {techStack?.map((tech, index) => {
          const angle = (index * 60) * (Math.PI / 180);
          const radius = 120;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={tech?.name}
              className="absolute w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group cursor-pointer"
              style={{
                left: x,
                top: y,
                transform: 'translate(-50%, -50%)'
              }}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.2, 
                backgroundColor: 'rgba(255, 255, 255, 0.2)' 
              }}
              animate={{
                y: [0, -5, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                y: {
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: tech?.delay
                },
                rotate: {
                  duration: 4 + index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: tech?.delay + 1
                }
              }}
            >
              <Icon 
                name={tech?.icon} 
                size={24} 
                className="text-white group-hover:text-accent transition-colors duration-300" 
              />
              {/* Tooltip */}
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {tech?.name}
                </div>
              </div>
              {/* Connecting Lines */}
              <motion.div
                className="absolute w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
                style={{
                  left: '50%',
                  top: '100%',
                  transform: 'translateX(-50%)'
                }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: tech?.delay + 0.5, duration: 0.5 }}
              />
            </motion.div>
          );
        })}

        {/* Central Hub */}
        <motion.div
          className="absolute w-8 h-8 bg-accent rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
};

export default TechStack;