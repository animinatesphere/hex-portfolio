import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CareerHighlights = ({ highlights }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-card rounded-xl shadow-lg border border-border p-6 sticky top-24"
    >
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mr-3">
          <Icon name="Star" size={20} className="text-accent" />
        </div>
        <h3 className="text-xl font-semibold text-text-primary">Career Highlights</h3>
      </div>
      <div className="space-y-4">
        {highlights?.map((highlight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200"
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${highlight?.color}`}>
              <Icon name={highlight?.icon} size={16} className="text-white" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-text-primary mb-1">{highlight?.title}</h4>
              <p className="text-xs text-text-secondary leading-relaxed">{highlight?.description}</p>
              <span className="text-xs text-accent font-medium">{highlight?.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Stats Summary */}
      <div className="mt-6 pt-6 border-t border-border">
        <h4 className="text-sm font-semibold text-text-primary mb-4">Career Stats</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">5+</div>
            <div className="text-xs text-text-secondary">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">50+</div>
            <div className="text-xs text-text-secondary">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">15+</div>
            <div className="text-xs text-text-secondary">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">3</div>
            <div className="text-xs text-text-secondary">Leadership Roles</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CareerHighlights;