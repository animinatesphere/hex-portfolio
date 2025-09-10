import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SkillCategoryCard = ({ category, skills, icon, gradient, delay = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const getProficiencyLabel = (level) => {
    if (level >= 90) return { label: 'Expert', color: 'text-green-600' };
    if (level >= 75) return { label: 'Advanced', color: 'text-blue-600' };
    if (level >= 50) return { label: 'Intermediate', color: 'text-yellow-600' };
    return { label: 'Beginner', color: 'text-gray-600' };
  };

  const averageLevel = Math.round(skills?.reduce((sum, skill) => sum + skill?.level, 0) / skills?.length);

  return (
    <motion.div
      className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -2 }}
    >
      {/* Header */}
      <div 
        className={`bg-gradient-to-r ${gradient} p-6 cursor-pointer`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Icon name={icon} size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{category}</h3>
              <p className="text-white/80 text-sm">{skills?.length} skills</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-white">{averageLevel}%</div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Icon name="ChevronDown" size={20} className="text-white/80" />
            </motion.div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 w-full h-2 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white/80 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${averageLevel}%` }}
            transition={{ duration: 1, delay: delay + 0.5 }}
          />
        </div>
      </div>
      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 space-y-4">
              {skills?.map((skill, index) => {
                const proficiency = getProficiencyLabel(skill?.level);
                return (
                  <motion.div
                    key={skill?.name}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    onMouseEnter={() => setHoveredSkill(skill?.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                          <Icon name={skill?.icon} size={16} className="text-text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-text-primary group-hover:text-accent transition-colors">
                            {skill?.name}
                          </h4>
                          <p className="text-xs text-text-secondary">{skill?.experience}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`text-sm font-semibold ${proficiency?.color}`}>
                          {proficiency?.label}
                        </span>
                        <p className="text-xs text-text-secondary">{skill?.level}%</p>
                      </div>
                    </div>
                    {/* Skill Progress Bar */}
                    <div className="relative">
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${gradient} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill?.level}%` }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                        />
                      </div>
                      
                      {/* Hover Details */}
                      <AnimatePresence>
                        {hoveredSkill === skill?.name && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 bg-background border border-border rounded-lg p-3 shadow-lg z-10 min-w-64"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-text-primary">Recent Projects:</span>
                                <span className="text-xs text-text-secondary">{skill?.projects}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-text-primary">Learning Since:</span>
                                <span className="text-xs text-text-secondary">{skill?.learningSince}</span>
                              </div>
                              {skill?.certifications && (
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-medium text-text-primary">Certifications:</span>
                                  <div className="flex space-x-1">
                                    {skill?.certifications?.map((cert, i) => (
                                      <div key={i} className="w-2 h-2 bg-accent rounded-full" />
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SkillCategoryCard;