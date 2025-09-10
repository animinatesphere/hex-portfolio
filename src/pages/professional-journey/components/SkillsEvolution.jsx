import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SkillsEvolution = ({ skillsData }) => {
  const [selectedYear, setSelectedYear] = useState(skillsData?.[skillsData?.length - 1]?.year);

  const selectedData = skillsData?.find(data => data?.year === selectedYear);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-card rounded-xl shadow-lg border border-border p-6 mb-12"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mr-3">
            <Icon name="TrendingUp" size={20} className="text-accent" />
          </div>
          <h3 className="text-xl font-semibold text-text-primary">Skills Evolution</h3>
        </div>
        
        {/* Year Selector */}
        <div className="flex space-x-2">
          {skillsData?.map((data) => (
            <button
              key={data?.year}
              onClick={() => setSelectedYear(data?.year)}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedYear === data?.year
                  ? 'bg-accent text-white' :'bg-muted text-text-secondary hover:bg-accent/10 hover:text-accent'
              }`}
            >
              {data?.year}
            </button>
          ))}
        </div>
      </div>
      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {selectedData?.skills?.map((skill, index) => (
          <motion.div
            key={skill?.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-muted/30 rounded-lg p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-text-primary">{skill?.name}</span>
              <span className="text-xs text-accent font-semibold">{skill?.level}%</span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-muted rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill?.level}%` }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-r from-accent to-accent/70 h-2 rounded-full"
              />
            </div>
            
            {/* Skill Category */}
            <div className="mt-2">
              <span className={`inline-block px-2 py-1 text-xs rounded-md font-medium ${
                skill?.category === 'Frontend' ? 'bg-blue-100 text-blue-700' :
                skill?.category === 'Backend' ? 'bg-green-100 text-green-700' :
                skill?.category === 'Tools'? 'bg-purple-100 text-purple-700' : 'bg-orange-100 text-orange-700'
              }`}>
                {skill?.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Evolution Summary */}
      <div className="mt-6 pt-6 border-t border-border">
        <h4 className="text-sm font-semibold text-text-primary mb-3">Growth Summary for {selectedYear}</h4>
        <p className="text-sm text-text-secondary leading-relaxed">{selectedData?.summary}</p>
      </div>
    </motion.div>
  );
};

export default SkillsEvolution;