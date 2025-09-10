import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TimelineItem = ({ experience, index, isLast }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative flex items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-16 lg:mb-20`}
    >
      {/* Timeline Line */}
      <div className="absolute left-1/2 top-0 w-px bg-border h-full transform -translate-x-1/2 hidden lg:block">
        {!isLast && <div className="w-full h-full bg-gradient-to-b from-accent to-transparent opacity-30"></div>}
      </div>
      {/* Timeline Dot */}
      <div className="absolute left-1/2 top-8 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2 z-10 hidden lg:block">
        <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20"></div>
      </div>
      {/* Content Card */}
      <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-card rounded-xl shadow-lg border border-border p-6 hover:shadow-xl transition-all duration-300"
        >
          {/* Company Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src={experience?.companyLogo}
                  alt={`${experience?.company} logo`}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary">{experience?.company}</h3>
                <p className="text-sm text-text-secondary">{experience?.industry}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-accent">{experience?.duration}</p>
              <p className="text-xs text-text-secondary">{experience?.location}</p>
            </div>
          </div>

          {/* Role Information */}
          <div className="mb-4">
            <h4 className="text-xl font-semibold text-text-primary mb-2">{experience?.role}</h4>
            <p className="text-text-secondary leading-relaxed">{experience?.description}</p>
          </div>

          {/* Key Achievements */}
          <div className="mb-4">
            <h5 className="text-sm font-semibold text-text-primary mb-2 flex items-center">
              <Icon name="Trophy" size={16} className="mr-2 text-accent" />
              Key Achievements
            </h5>
            <ul className="space-y-1">
              {experience?.achievements?.slice(0, isExpanded ? experience?.achievements?.length : 2)?.map((achievement, idx) => (
                <li key={idx} className="text-sm text-text-secondary flex items-start">
                  <Icon name="ChevronRight" size={14} className="mr-2 mt-0.5 text-accent flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mb-4">
            <h5 className="text-sm font-semibold text-text-primary mb-2 flex items-center">
              <Icon name="Code2" size={16} className="mr-2 text-accent" />
              Technologies Used
            </h5>
            <div className="flex flex-wrap gap-2">
              {experience?.technologies?.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Expand/Collapse Button */}
          {experience?.achievements?.length > 2 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
              iconPosition="right"
              iconSize={16}
              className="mt-2"
            >
              {isExpanded ? 'Show Less' : 'Show More'}
            </Button>
          )}

          {/* Project Highlights (if expanded) */}
          {isExpanded && experience?.projectHighlights && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-border"
            >
              <h5 className="text-sm font-semibold text-text-primary mb-3 flex items-center">
                <Icon name="Briefcase" size={16} className="mr-2 text-accent" />
                Project Highlights
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {experience?.projectHighlights?.map((project, idx) => (
                  <div key={idx} className="bg-muted/50 rounded-lg p-3">
                    <h6 className="text-sm font-medium text-text-primary mb-1">{project?.name}</h6>
                    <p className="text-xs text-text-secondary">{project?.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
      {/* Mobile Timeline Indicator */}
      <div className="w-4 h-4 bg-accent rounded-full mt-8 mr-4 lg:hidden flex-shrink-0">
        <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20"></div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;