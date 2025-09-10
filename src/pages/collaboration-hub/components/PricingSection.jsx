import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const PricingSection = () => {
  const [selectedPackage, setSelectedPackage] = useState('custom');

  const pricingPackages = [
    {
      id: 'consultation',
      name: 'Free Consultation',
      price: '$0',
      duration: '30 minutes',
      description: 'Perfect for exploring your project needs and getting expert advice',
      features: [
        'Project requirements discussion',
        'Technical feasibility assessment',
        'Timeline and budget estimation',
        'Technology recommendations',
        'No commitment required'
      ],
      icon: 'MessageCircle',
      color: 'border-blue-200 bg-blue-50',
      buttonVariant: 'outline',
      popular: false
    },
    {
      id: 'hourly',
      name: 'Hourly Rate',
      price: '$85',
      duration: 'per hour',
      description: 'Flexible option for small tasks, maintenance, or ongoing support',
      features: [
        'Minimum 2-hour blocks',
        'Perfect for bug fixes',
        'Feature additions',
        'Code reviews',
        'Technical consulting'
      ],
      icon: 'Clock',
      color: 'border-green-200 bg-green-50',
      buttonVariant: 'outline',
      popular: false
    },
    {
      id: 'project',
      name: 'Project-Based',
      price: '$5,000+',
      duration: 'fixed scope',
      description: 'Complete project delivery with defined scope and timeline',
      features: [
        'Fixed price guarantee',
        'Detailed project planning',
        'Regular milestone updates',
        'Quality assurance testing',
        '30-day post-launch support'
      ],
      icon: 'Briefcase',
      color: 'border-accent bg-accent/5',
      buttonVariant: 'default',
      popular: true
    },
    {
      id: 'retainer',
      name: 'Monthly Retainer',
      price: '$3,200',
      duration: 'per month',
      description: 'Ongoing partnership for continuous development and support',
      features: [
        '40 hours per month included',
        'Priority support',
        'Dedicated communication channel',
        'Monthly strategy sessions',
        'Flexible hour rollover'
      ],
      icon: 'Calendar',
      color: 'border-purple-200 bg-purple-50',
      buttonVariant: 'outline',
      popular: false
    }
  ];

  const additionalServices = [
    {
      service: 'Performance Audit',
      price: '$500',
      description: 'Comprehensive analysis of your website\'s performance and optimization recommendations'
    },
    {
      service: 'Code Review',
      price: '$300',
      description: 'Professional review of existing codebase with improvement suggestions'
    },
    {
      service: 'Technical Documentation',
      price: '$400',
      description: 'Complete documentation of your project for future development'
    },
    {
      service: 'Training Session',
      price: '$200/hour',
      description: 'One-on-one training for your team on the delivered solution'
    }
  ];

  const projectSizeGuide = [
    {
      size: 'Small Projects',
      range: '$2,000 - $8,000',
      examples: ['Landing pages', 'Portfolio sites', 'Small business websites'],
      timeline: '1-3 weeks'
    },
    {
      size: 'Medium Projects',
      range: '$8,000 - $25,000',
      examples: ['E-commerce sites', 'Web applications', 'Custom dashboards'],
      timeline: '4-8 weeks'
    },
    {
      size: 'Large Projects',
      range: '$25,000 - $75,000',
      examples: ['Complex web apps', 'Multi-platform solutions', 'Enterprise systems'],
      timeline: '8-16 weeks'
    }
  ];

  const handlePackageSelect = (packageId) => {
    setSelectedPackage(packageId);
  };

  const handleGetQuote = (packageType) => {
    // This would typically open a contact form or redirect to consultation booking
    alert(`Let's discuss your ${packageType} needs! I'll redirect you to the consultation booking.`);
  };

  return (
    <div className="space-y-8">
      {/* Pricing Packages */}
      <div className="bg-card rounded-xl shadow-lg border border-border p-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-text-primary mb-2">
            Transparent Pricing
          </h3>
          <p className="text-text-secondary">
            Choose the engagement model that works best for your project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPackages?.map((pkg) => (
            <div
              key={pkg?.id}
              className={`relative rounded-xl border-2 p-6 transition-all duration-200 hover:shadow-md ${
                pkg?.popular 
                  ? 'border-accent shadow-md' 
                  : selectedPackage === pkg?.id
                    ? 'border-accent/50' :'border-border hover:border-accent/30'
              } ${pkg?.color}`}
            >
              {pkg?.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="bg-white p-3 rounded-lg inline-block mb-4">
                  <Icon name={pkg?.icon} size={24} className="text-accent" />
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">
                  {pkg?.name}
                </h4>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-text-primary">
                    {pkg?.price}
                  </span>
                  <span className="text-text-secondary ml-1">
                    {pkg?.duration}
                  </span>
                </div>
                <p className="text-sm text-text-secondary">
                  {pkg?.description}
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {pkg?.features?.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <Icon name="Check" size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={pkg?.buttonVariant}
                fullWidth
                onClick={() => handleGetQuote(pkg?.name)}
                iconName="ArrowRight"
                iconPosition="right"
              >
                {pkg?.id === 'consultation' ? 'Book Free Call' : 'Get Quote'}
              </Button>
            </div>
          ))}
        </div>
      </div>
      {/* Project Size Guide */}
      <div className="bg-card rounded-xl shadow-lg border border-border p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            Project Investment Guide
          </h3>
          <p className="text-text-secondary">
            Typical investment ranges based on project complexity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectSizeGuide?.map((guide, index) => (
            <div key={index} className="border border-border rounded-lg p-4">
              <h4 className="font-semibold text-text-primary mb-2">
                {guide?.size}
              </h4>
              <div className="text-lg font-bold text-accent mb-3">
                {guide?.range}
              </div>
              <div className="mb-3">
                <p className="text-sm text-text-secondary mb-2">Examples:</p>
                <ul className="text-sm text-text-secondary space-y-1">
                  {guide?.examples?.map((example, idx) => (
                    <li key={idx} className="flex items-center">
                      <Icon name="Dot" size={12} className="mr-1" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center text-sm text-text-secondary">
                <Icon name="Clock" size={14} className="mr-1" />
                Timeline: {guide?.timeline}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Additional Services */}
      <div className="bg-card rounded-xl shadow-lg border border-border p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            Additional Services
          </h3>
          <p className="text-text-secondary">
            Specialized services to enhance your project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {additionalServices?.map((service, index) => (
            <div key={index} className="border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-text-primary">
                  {service?.service}
                </h4>
                <span className="font-bold text-accent">
                  {service?.price}
                </span>
              </div>
              <p className="text-sm text-text-secondary">
                {service?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Payment & Terms */}
      <div className="bg-card rounded-xl shadow-lg border border-border p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            Payment Terms & Policies
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-text-primary mb-3 flex items-center">
              <Icon name="CreditCard" size={18} className="text-accent mr-2" />
              Payment Options
            </h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-center">
                <Icon name="Check" size={14} className="text-green-500 mr-2" />
                Bank transfer (preferred)
              </li>
              <li className="flex items-center">
                <Icon name="Check" size={14} className="text-green-500 mr-2" />
                PayPal or Stripe
              </li>
              <li className="flex items-center">
                <Icon name="Check" size={14} className="text-green-500 mr-2" />
                Cryptocurrency accepted
              </li>
              <li className="flex items-center">
                <Icon name="Check" size={14} className="text-green-500 mr-2" />
                Net 15 payment terms
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-3 flex items-center">
              <Icon name="Shield" size={18} className="text-accent mr-2" />
              Project Terms
            </h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-center">
                <Icon name="Check" size={14} className="text-green-500 mr-2" />
                50% deposit to start
              </li>
              <li className="flex items-center">
                <Icon name="Check" size={14} className="text-green-500 mr-2" />
                Milestone-based payments
              </li>
              <li className="flex items-center">
                <Icon name="Check" size={14} className="text-green-500 mr-2" />
                Source code ownership included
              </li>
              <li className="flex items-center">
                <Icon name="Check" size={14} className="text-green-500 mr-2" />
                30-day satisfaction guarantee
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-start">
              <Icon name="DollarSign" size={20} className="text-green-600 mr-3 mt-0.5" />
              <div>
                <h5 className="font-medium text-green-800 mb-2">
                  Investment Protection
                </h5>
                <p className="text-sm text-green-700">
                  All projects include a satisfaction guarantee. If you're not completely happy 
                  with the delivered work, I'll make it right or provide a full refund.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;