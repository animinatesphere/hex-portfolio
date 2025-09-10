import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const AchievementMetrics = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    experience: 0,
    satisfaction: 0
  });

  const finalValues = {
    projects: 47,
    experience: 5,
    satisfaction: 98
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => ({
        projects: Math.min(prev?.projects + Math.ceil(finalValues?.projects / steps), finalValues?.projects),
        experience: Math.min(prev?.experience + Math.ceil(finalValues?.experience / steps), finalValues?.experience),
        satisfaction: Math.min(prev?.satisfaction + Math.ceil(finalValues?.satisfaction / steps), finalValues?.satisfaction)
      }));
    }, stepDuration);

    const timeout = setTimeout(() => {
      clearInterval(timer);
      setCounters(finalValues);
    }, duration);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  const metrics = [
    {
      icon: 'FolderOpen',
      value: counters?.projects,
      suffix: '+',
      label: 'Projects Delivered',
      color: 'text-accent'
    },
    {
      icon: 'Calendar',
      value: counters?.experience,
      suffix: '+',
      label: 'Years Experience',
      color: 'text-blue-400'
    },
    {
      icon: 'Star',
      value: counters?.satisfaction,
      suffix: '%',
      label: 'Client Satisfaction',
      color: 'text-green-400'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <motion.div
      className="absolute bottom-20 left-6 lg:left-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col sm:flex-row gap-6">
        {metrics?.map((metric, index) => (
          <motion.div
            key={metric?.label}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-4 min-w-[140px]"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'rgba(255, 255, 255, 0.15)'
            }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-full bg-white/10 ${metric?.color}`}>
                <Icon name={metric?.icon} size={20} />
              </div>
              <div>
                <div className="flex items-baseline space-x-1">
                  <span className="text-2xl font-bold text-white">
                    {metric?.value}
                  </span>
                  <span className={`text-lg font-semibold ${metric?.color}`}>
                    {metric?.suffix}
                  </span>
                </div>
                <p className="text-sm text-gray-300 leading-tight">
                  {metric?.label}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AchievementMetrics;