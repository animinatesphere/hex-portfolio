import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails, onViewDemo }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-normal cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover transition-transform duration-normal group-hover:scale-105"
        />
        
        {/* Overlay on Hover */}
        <motion.div
          className="absolute inset-0 bg-primary/90 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="text-center text-white">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Button
                variant="outline"
                size="sm"
                onClick={(e) => {
                  e?.stopPropagation();
                  onViewDemo(project);
                }}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Icon name="ExternalLink" size={16} className="mr-2" />
                Live Demo
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={(e) => {
                  e?.stopPropagation();
                  window.open(project?.githubUrl, '_blank');
                }}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <Icon name="Github" size={16} className="mr-2" />
                Code
              </Button>
            </div>
            
            {/* Project Metrics */}
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <Icon name="Star" size={14} className="mr-1" />
                <span>{project?.metrics?.stars}</span>
              </div>
              <div className="flex items-center">
                <Icon name="GitFork" size={14} className="mr-1" />
                <span>{project?.metrics?.forks}</span>
              </div>
              <div className="flex items-center">
                <Icon name="Eye" size={14} className="mr-1" />
                <span>{project?.metrics?.views}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Type Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            project?.type === 'freelance' ?'bg-success/20 text-success border border-success/30'
              : project?.type === 'agency' ?'bg-accent/20 text-accent border border-accent/30' :'bg-primary/20 text-primary border border-primary/30'
          }`}>
            {project?.type}
          </span>
        </div>

        {/* Featured Badge */}
        {project?.featured && (
          <div className="absolute top-3 right-3">
            <div className="bg-warning text-warning-foreground px-2 py-1 text-xs font-medium rounded-full flex items-center">
              <Icon name="Star" size={12} className="mr-1" />
              Featured
            </div>
          </div>
        )}
      </div>
      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors duration-fast">
            {project?.title}
          </h3>
          <div className="flex items-center text-text-secondary text-sm">
            <Icon name="Calendar" size={14} className="mr-1" />
            {project?.year}
          </div>
        </div>

        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {project?.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project?.techStack?.slice(0, 4)?.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-text-primary text-xs rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
          {project?.techStack?.length > 4 && (
            <span className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-md">
              +{project?.techStack?.length - 4} more
            </span>
          )}
        </div>

        {/* Performance Metrics */}
        <div className="flex items-center justify-between text-sm text-text-secondary mb-4">
          <div className="flex items-center">
            <Icon name="Zap" size={14} className="mr-1 text-warning" />
            <span>{project?.performance?.score}/100</span>
          </div>
          <div className="flex items-center">
            <Icon name="Clock" size={14} className="mr-1 text-success" />
            <span>{project?.performance?.loadTime}</span>
          </div>
          <div className="flex items-center">
            <Icon name="Users" size={14} className="mr-1 text-accent" />
            <span>{project?.performance?.users}</span>
          </div>
        </div>

        {/* Client Testimonial Preview */}
        {project?.testimonial && (
          <div className="bg-muted p-3 rounded-lg mb-4">
            <p className="text-xs text-text-secondary italic mb-2">
              "{project?.testimonial?.text?.substring(0, 80)}..."
            </p>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mr-2">
                <span className="text-white text-xs font-bold">
                  {project?.testimonial?.author?.charAt(0)}
                </span>
              </div>
              <span className="text-xs font-medium text-text-primary">
                {project?.testimonial?.author}
              </span>
            </div>
          </div>
        )}

        {/* Action Button */}
        <Button
          variant="outline"
          fullWidth
          onClick={() => onViewDetails(project)}
          iconName="ArrowRight"
          iconPosition="right"
          iconSize={16}
        >
          View Case Study
        </Button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;