import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactMethods = () => {
  const contactMethods = [
    {
      type: 'email',
      title: 'Email Me',
      description: 'For detailed project discussions',
      value: 'adeyemipelumi1980@gmail.com',
      action: 'mailto:adeyemipelumi1980@gmail.com',
      icon: 'Mail',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      response: 'Usually responds within 4 hours'
    },
    {
      type: 'linkedin',
      title: 'LinkedIn Message',
      description: 'Professional networking',
      value: '/in/devportfolio-pro',
      action: 'https://linkedin.com/in/devportfolio-pro',
      icon: 'Linkedin',
      color: 'text-blue-700',
      bgColor: 'bg-blue-50',
      response: 'Active daily'
    },
    {
      type: 'phone',
      title: 'Phone Call',
      description: 'For urgent matters',
      value: '+2349021615849',
      action: 'tel:+2349021615849',
      icon: 'Phone',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      response: 'Available Mon-Fri, 9 AM - 6 PM ET'
    },
    {
      type: 'whatsapp',
      title: 'WhatsApp',
      description: 'Quick questions & updates',
      value: '+2349021615849',
      action: 'https://wa.me/2349021615849',
      icon: 'MessageCircle',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      response: 'Usually responds within 2 hours'
    }
  ];

  const handleContact = (method) => {
    if (method?.type === 'email') {
      window.location.href = method?.action;
    } else if (method?.type === 'phone') {
      window.location.href = method?.action;
    } else {
      window.open(method?.action, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="bg-card rounded-xl shadow-lg border border-border p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          Get In Touch
        </h3>
        <p className="text-text-secondary">
          Choose your preferred way to reach out
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactMethods?.map((method) => (
          <div
            key={method?.type}
            className="group border border-border rounded-lg p-4 hover:shadow-md transition-all duration-200 hover:border-accent/30"
          >
            <div className="flex items-start space-x-4">
              <div className={`${method?.bgColor} p-3 rounded-lg`}>
                <Icon 
                  name={method?.icon} 
                  size={24} 
                  className={method?.color}
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-text-primary mb-1">
                  {method?.title}
                </h4>
                <p className="text-sm text-text-secondary mb-2">
                  {method?.description}
                </p>
                <p className="text-sm font-medium text-text-primary mb-2 break-all">
                  {method?.value}
                </p>
                <p className="text-xs text-text-secondary mb-3">
                  {method?.response}
                </p>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleContact(method)}
                  iconName="ExternalLink"
                  iconPosition="right"
                  iconSize={14}
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Quick Contact Stats */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Icon name="Clock" size={20} className="text-accent mr-2" />
              <span className="font-semibold text-text-primary">Response Time</span>
            </div>
            <p className="text-sm text-text-secondary">
              Average 4 hours
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Icon name="Globe" size={20} className="text-accent mr-2" />
              <span className="font-semibold text-text-primary">Timezone</span>
            </div>
            <p className="text-sm text-text-secondary">
              Eastern Time (ET)
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Icon name="Languages" size={20} className="text-accent mr-2" />
              <span className="font-semibold text-text-primary">Languages</span>
            </div>
            <p className="text-sm text-text-secondary">
              English, Spanish
            </p>
          </div>
        </div>
      </div>
      {/* Emergency Contact */}
      <div className="mt-6 bg-red-50 rounded-lg p-4">
        <div className="flex items-start">
          <Icon name="AlertTriangle" size={20} className="text-red-600 mr-3 mt-0.5" />
          <div>
            <h5 className="font-medium text-red-800 mb-1">
              Emergency Support
            </h5>
            <p className="text-sm text-red-700 mb-2">
              For critical production issues with existing projects
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.location.href = 'tel:+2349021615849'}
              iconName="Phone"
              iconPosition="left"
              className="border-red-200 text-red-700 hover:bg-red-100"
            >
              Call Emergency Line
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMethods;