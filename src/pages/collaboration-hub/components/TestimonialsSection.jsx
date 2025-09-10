import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'CTO',
      company: 'TechStart Inc.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: `Working with DevPortfolio Pro was exceptional. They delivered our React application ahead of schedule with pixel-perfect design implementation. The code quality was outstanding, and their communication throughout the project was professional and clear.`,
      rating: 5,
      project: 'E-commerce Platform',
      timeline: '6 weeks',
      budget: '$25,000'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Product Manager',
      company: 'InnovateCorp',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: `The attention to detail and technical expertise exceeded our expectations. Our website performance improved by 40% after the optimization work. I highly recommend DevPortfolio Pro for any frontend development needs.`,
      rating: 5,
      project: 'Performance Optimization',
      timeline: '3 weeks',
      budget: '$12,000'
    },
    {
      id: 3,
      name: 'Emily Johnson',
      role: 'Founder',
      company: 'Creative Studio',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: `From concept to deployment, the entire process was smooth and professional. They understood our vision perfectly and brought it to life with beautiful, responsive design. The project was delivered on time and within budget.`,
      rating: 5,
      project: 'Portfolio Website',
      timeline: '4 weeks',
      budget: '$8,500'
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Engineering Lead',
      company: 'DataFlow Systems',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: `Exceptional React development skills and deep understanding of modern frontend architecture. The component library they built for us is still being used across multiple projects. Great investment in our development infrastructure.`,
      rating: 5,
      project: 'Component Library',
      timeline: '8 weeks',
      budget: '$35,000'
    }
  ];

  const successMetrics = [
    {
      metric: '50+',
      label: 'Projects Completed',
      icon: 'CheckCircle'
    },
    {
      metric: '98%',
      label: 'Client Satisfaction',
      icon: 'Heart'
    },
    {
      metric: '24hr',
      label: 'Avg Response Time',
      icon: 'Clock'
    },
    {
      metric: '100%',
      label: 'On-Time Delivery',
      icon: 'Target'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentTestimonial = testimonials?.[activeTestimonial];

  return (
    <div className="space-y-8">
      {/* Success Metrics */}
      <div className="bg-card rounded-xl shadow-lg border border-border p-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            Proven Track Record
          </h3>
          <p className="text-text-secondary">
            Numbers that speak for themselves
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {successMetrics?.map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Icon name={item?.icon} size={24} className="text-accent" />
                </div>
              </div>
              <div className="text-2xl font-bold text-text-primary mb-1">
                {item?.metric}
              </div>
              <div className="text-sm text-text-secondary">
                {item?.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Featured Testimonial */}
      <div className="bg-card rounded-xl shadow-lg border border-border overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-accent p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">
              Client Success Stories
            </h3>
            <div className="flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors duration-200"
              >
                <Icon name="ChevronLeft" size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors duration-200"
              >
                <Icon name="ChevronRight" size={20} />
              </button>
            </div>
          </div>
          
          <div className="text-sm opacity-90">
            {activeTestimonial + 1} of {testimonials?.length} testimonials
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start space-x-4 mb-6">
            <div className="flex-shrink-0">
              <Image
                src={currentTestimonial?.avatar}
                alt={currentTestimonial?.name}
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h4 className="font-semibold text-text-primary">
                  {currentTestimonial?.name}
                </h4>
                <div className="flex">
                  {renderStars(currentTestimonial?.rating)}
                </div>
              </div>
              
              <p className="text-sm text-text-secondary mb-1">
                {currentTestimonial?.role} at {currentTestimonial?.company}
              </p>
              
              <div className="flex items-center space-x-4 text-xs text-text-secondary">
                <span className="flex items-center">
                  <Icon name="Briefcase" size={12} className="mr-1" />
                  {currentTestimonial?.project}
                </span>
                <span className="flex items-center">
                  <Icon name="Clock" size={12} className="mr-1" />
                  {currentTestimonial?.timeline}
                </span>
                <span className="flex items-center">
                  <Icon name="DollarSign" size={12} className="mr-1" />
                  {currentTestimonial?.budget}
                </span>
              </div>
            </div>
          </div>

          <blockquote className="text-text-primary leading-relaxed mb-6">
            "{currentTestimonial?.content}"
          </blockquote>

          {/* Testimonial Navigation Dots */}
          <div className="flex justify-center space-x-2">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === activeTestimonial ? 'bg-accent' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Client Logos */}
      <div className="bg-card rounded-xl shadow-lg border border-border p-6">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            Trusted by Leading Companies
          </h3>
          <p className="text-text-secondary">
            From startups to enterprise clients
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
          {/* Mock client logos */}
          <div className="text-center">
            <div className="bg-gray-200 rounded-lg p-4 mb-2">
              <div className="text-lg font-bold text-gray-600">TechStart</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gray-200 rounded-lg p-4 mb-2">
              <div className="text-lg font-bold text-gray-600">InnovateCorp</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gray-200 rounded-lg p-4 mb-2">
              <div className="text-lg font-bold text-gray-600">Creative Studio</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gray-200 rounded-lg p-4 mb-2">
              <div className="text-lg font-bold text-gray-600">DataFlow</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;