import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ResourcesSection = () => {
  const [downloadedResources, setDownloadedResources] = useState(new Set());

  const downloadableResources = [
    {
      id: 'resume',
      title: 'Professional Resume',
      description: 'Complete CV with technical skills, experience, and project highlights',
      fileType: 'PDF',
      fileSize: '2.1 MB',
      icon: 'FileText',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      downloadCount: '1,247'
    },
    {
      id: 'portfolio',
      title: 'Portfolio Showcase',
      description: 'Detailed case studies of recent projects with technical breakdowns',
      fileType: 'PDF',
      fileSize: '8.5 MB',
      icon: 'Folder',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      downloadCount: '892'
    },
    {
      id: 'questionnaire',
      title: 'Project Questionnaire',
      description: 'Comprehensive form to help define your project requirements',
      fileType: 'PDF',
      fileSize: '1.3 MB',
      icon: 'ClipboardList',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      downloadCount: '634'
    },
    {
      id: 'tech-requirements',
      title: 'Technical Requirements Template',
      description: 'Template for documenting technical specifications and constraints',
      fileType: 'DOCX',
      fileSize: '0.8 MB',
      icon: 'Settings',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      downloadCount: '445'
    },
    {
      id: 'pricing-guide',
      title: 'Detailed Pricing Guide',
      description: 'Comprehensive breakdown of services and investment levels',
      fileType: 'PDF',
      fileSize: '1.9 MB',
      icon: 'DollarSign',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      downloadCount: '723'
    },
    {
      id: 'process-guide',
      title: 'Development Process Guide',
      description: 'Step-by-step overview of how I work and what to expect',
      fileType: 'PDF',
      fileSize: '3.2 MB',
      icon: 'GitBranch',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      downloadCount: '567'
    }
  ];

  const quickLinks = [
    {
      title: 'GitHub Profile',
      description: 'View my open source contributions and code samples',
      url: 'https://github.com/devportfolio-pro',
      icon: 'Github',
      external: true
    },
    {
      title: 'LinkedIn Profile',
      description: 'Professional background and recommendations',
      url: 'https://linkedin.com/in/devportfolio-pro',
      icon: 'Linkedin',
      external: true
    },
    {
      title: 'Technical Blog',
      description: 'Articles on frontend development and best practices',
      url: '/blog',
      icon: 'BookOpen',
      external: false
    },
    {
      title: 'Code Samples',
      description: 'Live examples and interactive demonstrations',
      url: '/code-playground',
      icon: 'Code',
      external: false
    }
  ];

  const handleDownload = (resource) => {
    // Simulate download process
    setDownloadedResources(prev => new Set([...prev, resource.id]));
    
    // In a real application, this would trigger the actual file download
    alert(`Downloading ${resource?.title}...\n\nThis would normally start your download. The file will be saved to your Downloads folder.`);
    
    // Reset download state after a delay
    setTimeout(() => {
      setDownloadedResources(prev => {
        const newSet = new Set(prev);
        newSet?.delete(resource?.id);
        return newSet;
      });
    }, 3000);
  };

  const handleQuickLink = (link) => {
    if (link?.external) {
      window.open(link?.url, '_blank', 'noopener,noreferrer');
    } else {
      // In a real application, this would use React Router
      alert(`Navigating to ${link?.title}...\n\nThis would normally take you to: ${link?.url}`);
    }
  };

  return (
    <div className="space-y-8">
      {/* Downloadable Resources */}
      <div className="bg-card rounded-xl shadow-lg border border-border p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            Downloadable Resources
          </h3>
          <p className="text-text-secondary">
            Everything you need to evaluate and plan your project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloadableResources?.map((resource) => {
            const isDownloading = downloadedResources?.has(resource?.id);
            
            return (
              <div
                key={resource?.id}
                className="border border-border rounded-lg p-4 hover:shadow-md transition-all duration-200 hover:border-accent/30"
              >
                <div className="flex items-start space-x-3 mb-4">
                  <div className={`${resource?.bgColor} p-3 rounded-lg`}>
                    <Icon 
                      name={resource?.icon} 
                      size={24} 
                      className={resource?.color}
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-text-primary mb-1">
                      {resource?.title}
                    </h4>
                    <p className="text-sm text-text-secondary mb-2">
                      {resource?.description}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-xs text-text-secondary">
                      <span className="flex items-center">
                        <Icon name="File" size={12} className="mr-1" />
                        {resource?.fileType}
                      </span>
                      <span className="flex items-center">
                        <Icon name="HardDrive" size={12} className="mr-1" />
                        {resource?.fileSize}
                      </span>
                      <span className="flex items-center">
                        <Icon name="Download" size={12} className="mr-1" />
                        {resource?.downloadCount}
                      </span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => handleDownload(resource)}
                  loading={isDownloading}
                  iconName={isDownloading ? "Loader" : "Download"}
                  iconPosition="left"
                  disabled={isDownloading}
                >
                  {isDownloading ? 'Downloading...' : 'Download'}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
      {/* Quick Links */}
      <div className="bg-card rounded-xl shadow-lg border border-border p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            Quick Links
          </h3>
          <p className="text-text-secondary">
            Explore more of my work and professional presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickLinks?.map((link, index) => (
            <div
              key={index}
              className="group border border-border rounded-lg p-4 hover:shadow-md transition-all duration-200 hover:border-accent/30 cursor-pointer"
              onClick={() => handleQuickLink(link)}
            >
              <div className="flex items-center space-x-3">
                <div className="bg-muted p-2 rounded-lg group-hover:bg-accent/10 transition-colors duration-200">
                  <Icon 
                    name={link?.icon} 
                    size={20} 
                    className="text-text-secondary group-hover:text-accent transition-colors duration-200"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-text-primary group-hover:text-accent transition-colors duration-200">
                      {link?.title}
                    </h4>
                    <Icon 
                      name={link?.external ? "ExternalLink" : "ArrowRight"} 
                      size={16} 
                      className="text-text-secondary group-hover:text-accent transition-colors duration-200"
                    />
                  </div>
                  <p className="text-sm text-text-secondary">
                    {link?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Resource Categories */}
      <div className="bg-card rounded-xl shadow-lg border border-border p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            Resource Categories
          </h3>
          <p className="text-text-secondary">
            Organized resources for different stages of your project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <Icon name="Search" size={32} className="text-blue-600 mx-auto" />
            </div>
            <h4 className="font-semibold text-text-primary mb-2">
              Discovery Phase
            </h4>
            <ul className="text-sm text-text-secondary space-y-1">
              <li>• Project questionnaire</li>
              <li>• Requirements template</li>
              <li>• Pricing guide</li>
              <li>• Process overview</li>
            </ul>
          </div>

          <div className="text-center">
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <Icon name="Users" size={32} className="text-green-600 mx-auto" />
            </div>
            <h4 className="font-semibold text-text-primary mb-2">
              Evaluation Phase
            </h4>
            <ul className="text-sm text-text-secondary space-y-1">
              <li>• Professional resume</li>
              <li>• Portfolio showcase</li>
              <li>• Code samples</li>
              <li>• Client testimonials</li>
            </ul>
          </div>

          <div className="text-center">
            <div className="bg-purple-50 p-4 rounded-lg mb-4">
              <Icon name="Rocket" size={32} className="text-purple-600 mx-auto" />
            </div>
            <h4 className="font-semibold text-text-primary mb-2">
              Collaboration Phase
            </h4>
            <ul className="text-sm text-text-secondary space-y-1">
              <li>• Development process</li>
              <li>• Communication guidelines</li>
              <li>• Project management tools</li>
              <li>• Support documentation</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-primary to-accent rounded-xl shadow-lg p-6 text-white">
        <div className="text-center mb-6">
          <Icon name="Mail" size={32} className="mx-auto mb-4 opacity-90" />
          <h3 className="text-xl font-semibold mb-2">
            Stay Updated
          </h3>
          <p className="opacity-90">
            Get notified about new resources, articles, and project insights
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="flex space-x-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button
              variant="secondary"
              iconName="Send"
              iconPosition="right"
              onClick={() => alert('Thank you for subscribing! You\'ll receive updates about new resources and insights.')}
            >
              Subscribe
            </Button>
          </div>
          <p className="text-xs opacity-75 mt-2 text-center">
            No spam, unsubscribe anytime. Privacy policy applies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;