import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroIntro = ({ onNavigate }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <motion.div
      className="flex-1 flex flex-col justify-center px-6 lg:px-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="mb-6">
        <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
          Available for new opportunities
        </span>
        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
          David
          <br />
          <span className="gradient-text">Rodriguez</span>
        </h1>
      </motion.div>
      <motion.div variants={itemVariants} className="mb-8">
        <p className="text-xl lg:text-2xl text-gray-300 mb-4 leading-relaxed">
          Frontend Developer & UI/UX Enthusiast
        </p>
        <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
          Crafting exceptional digital experiences with modern web technologies. 
          Specializing in React, TypeScript, and performance optimization to bring 
          innovative ideas to life.
        </p>
      </motion.div>
      <motion.div 
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4 mb-12"
      >
        <Button
          variant="default"
          size="lg"
          onClick={() => onNavigate('/project-showcase')}
          iconName="ArrowRight"
          iconPosition="right"
          iconSize={20}
          className="bg-accent hover:bg-accent/90 text-white px-8 py-4"
        >
          View My Work
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => onNavigate('/collaboration-hub')}
          iconName="MessageSquare"
          iconPosition="left"
          iconSize={20}
          className="border-white/20 text-white hover:bg-white/10 px-8 py-4"
        >
          Let's Collaborate
        </Button>
      </motion.div>
      <motion.div 
        variants={itemVariants}
        className="flex items-center space-x-8"
      >
        <div className="flex items-center space-x-2 text-gray-300">
          <Icon name="MapPin" size={16} />
          <span className="text-sm">San Francisco, CA</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-300">
          <Icon name="Clock" size={16} />
          <span className="text-sm">PST Timezone</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroIntro;