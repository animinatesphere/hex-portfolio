import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DemoModal = ({ project, isOpen, onClose }) => {
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
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative bg-background rounded-xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center">
                <Icon name="ExternalLink" size={20} className="mr-3 text-accent" />
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {project?.title} - Live Demo
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {project?.demoUrl}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(project?.demoUrl, '_blank')}
                  iconName="ExternalLink"
                  iconPosition="left"
                  iconSize={14}
                >
                  Open in New Tab
                </Button>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-muted rounded-lg transition-colors duration-fast"
                >
                  <Icon name="X" size={20} className="text-text-secondary" />
                </button>
              </div>
            </div>

            {/* Demo Content */}
            <div className="flex-1 relative">
              <iframe
                src={project?.demoUrl}
                className="w-full h-full border-0"
                title={`${project?.title} Demo`}
                loading="lazy"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
              />
              
              {/* Loading Overlay */}
              <div className="absolute inset-0 bg-muted flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full mx-auto mb-4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  <p className="text-text-secondary">Loading demo...</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-border bg-muted/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-text-secondary">
                  <div className="flex items-center">
                    <Icon name="Monitor" size={14} className="mr-1" />
                    <span>Desktop View</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Smartphone" size={14} className="mr-1" />
                    <span>Mobile Responsive</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Shield" size={14} className="mr-1" />
                    <span>Secure Connection</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(project?.githubUrl, '_blank')}
                    iconName="Github"
                    iconPosition="left"
                    iconSize={14}
                  >
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DemoModal;