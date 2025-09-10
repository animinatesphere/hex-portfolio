import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-card rounded-xl shadow-lg border border-border p-6 hover:shadow-xl transition-all duration-300"
    >
      {/* Quote Icon */}
      <div className="flex justify-center mb-4">
        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
          <Icon name="Quote" size={20} className="text-accent" />
        </div>
      </div>
      {/* Testimonial Text */}
      <blockquote className="text-text-secondary text-center leading-relaxed mb-6 italic">
        "{testimonial?.content}"
      </blockquote>
      {/* Author Info */}
      <div className="flex items-center justify-center space-x-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
          <Image
            src={testimonial?.authorImage}
            alt={testimonial?.authorName}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <h4 className="text-sm font-semibold text-text-primary">{testimonial?.authorName}</h4>
          <p className="text-xs text-text-secondary">{testimonial?.authorRole}</p>
          <p className="text-xs text-accent font-medium">{testimonial?.company}</p>
        </div>
      </div>
      {/* Rating */}
      <div className="flex justify-center mt-4 space-x-1">
        {[...Array(5)]?.map((_, i) => (
          <Icon
            key={i}
            name="Star"
            size={16}
            className={`${i < testimonial?.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
      </div>
      {/* Relationship */}
      <div className="mt-4 text-center">
        <span className="inline-block px-3 py-1 bg-muted text-text-secondary text-xs rounded-full">
          {testimonial?.relationship}
        </span>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;