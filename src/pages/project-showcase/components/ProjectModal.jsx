import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose, onViewDemo }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative bg-background rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border p-6 flex items-center justify-between">
              <div className="flex items-center">
                <h2 className="text-2xl font-bold text-text-primary mr-4">
                  {project?.title}
                </h2>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                  project?.type === 'freelance' ?'bg-success/20 text-success border border-success/30'
                    : project?.type === 'agency' ?'bg-accent/20 text-accent border border-accent/30' :'bg-primary/20 text-primary border border-primary/30'
                }`}>
                  {project?.type}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-muted rounded-lg transition-colors duration-fast"
              >
                <Icon name="X" size={24} className="text-text-secondary" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Project Image */}
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <Image
                  src={project?.image}
                  alt={project?.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                <Button
                  variant="default"
                  onClick={() => onViewDemo(project)}
                  iconName="ExternalLink"
                  iconPosition="left"
                  iconSize={16}
                >
                  Live Demo
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open(project?.githubUrl, '_blank')}
                  iconName="Github"
                  iconPosition="left"
                  iconSize={16}
                >
                  View Code
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => window.open(project?.figmaUrl, '_blank')}
                  iconName="Figma"
                  iconPosition="left"
                  iconSize={16}
                >
                  Design Files
                </Button>
              </div>

              {/* Project Details Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Problem Statement */}
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-3 flex items-center">
                      <Icon name="AlertCircle" size={18} className="mr-2 text-accent" />
                      Problem Statement
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {project?.problemStatement}
                    </p>
                  </div>

                  {/* Technical Approach */}
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-3 flex items-center">
                      <Icon name="Lightbulb" size={18} className="mr-2 text-primary" />
                      Technical Approach
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-4">
                      {project?.technicalApproach}
                    </p>
                    
                    {/* Code Snippet */}
                    <div className="bg-muted rounded-lg p-4 border border-border">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-text-primary">
                          Key Implementation
                        </span>
                        <Icon name="Code2" size={16} className="text-text-secondary" />
                      </div>
                      <pre className="text-sm text-text-secondary font-mono overflow-x-auto">
                        <code>{project?.codeSnippet}</code>
                      </pre>
                    </div>
                  </div>

                  {/* Results & Impact */}
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-3 flex items-center">
                      <Icon name="TrendingUp" size={18} className="mr-2 text-success" />
                      Results & Impact
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {project?.results?.map((result, index) => (
                        <div key={index} className="bg-muted rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-accent mb-1">
                            {result?.value}
                          </div>
                          <div className="text-sm text-text-secondary">
                            {result?.metric}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Client Testimonial */}
                  {project?.testimonial && (
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                      <div className="flex items-start">
                        <Icon name="Quote" size={24} className="text-accent mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-text-primary italic mb-4 leading-relaxed">
                            "{project?.testimonial?.text}"
                          </p>
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mr-3">
                              <span className="text-white font-bold">
                                {project?.testimonial?.author?.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <div className="font-semibold text-text-primary">
                                {project?.testimonial?.author}
                              </div>
                              <div className="text-sm text-text-secondary">
                                {project?.testimonial?.role}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Project Info */}
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-4">Project Details</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-text-secondary">Timeline</span>
                        <span className="text-text-primary font-medium">{project?.timeline}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-text-secondary">Year</span>
                        <span className="text-text-primary font-medium">{project?.year}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-text-secondary">Industry</span>
                        <span className="text-text-primary font-medium">{project?.industry}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-text-secondary">Team Size</span>
                        <span className="text-text-primary font-medium">{project?.teamSize}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-4">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project?.techStack?.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-background text-text-primary text-xs rounded-md font-medium border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-4">Performance</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Icon name="Zap" size={14} className="mr-2 text-warning" />
                          <span className="text-sm text-text-secondary">Lighthouse Score</span>
                        </div>
                        <span className="text-sm font-medium text-text-primary">
                          {project?.performance?.score}/100
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Icon name="Clock" size={14} className="mr-2 text-success" />
                          <span className="text-sm text-text-secondary">Load Time</span>
                        </div>
                        <span className="text-sm font-medium text-text-primary">
                          {project?.performance?.loadTime}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Icon name="Users" size={14} className="mr-2 text-accent" />
                          <span className="text-sm text-text-secondary">Monthly Users</span>
                        </div>
                        <span className="text-sm font-medium text-text-primary">
                          {project?.performance?.users}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* GitHub Stats */}
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-4">Repository Stats</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Icon name="Star" size={14} className="mr-2 text-warning" />
                          <span className="text-sm text-text-secondary">Stars</span>
                        </div>
                        <span className="text-sm font-medium text-text-primary">
                          {project?.metrics?.stars}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Icon name="GitFork" size={14} className="mr-2 text-primary" />
                          <span className="text-sm text-text-secondary">Forks</span>
                        </div>
                        <span className="text-sm font-medium text-text-primary">
                          {project?.metrics?.forks}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Icon name="GitCommit" size={14} className="mr-2 text-accent" />
                          <span className="text-sm text-text-secondary">Commits</span>
                        </div>
                        <span className="text-sm font-medium text-text-primary">
                          {project?.metrics?.commits}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;