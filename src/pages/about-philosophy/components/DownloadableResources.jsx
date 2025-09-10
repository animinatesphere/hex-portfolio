import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DownloadableResources = () => {
  const resources = [
    {
      title: "Complete Resume",
      description: "Detailed PDF resume with full work history, technical skills, and project highlights",
      fileSize: "2.3 MB",
      format: "PDF",
      icon: "FileText",
      downloadUrl: "#",
      lastUpdated: "December 2024"
    },
    {
      title: "Technical Portfolio",
      description: "Comprehensive portfolio document with detailed project case studies and code samples",
      fileSize: "5.7 MB",
      format: "PDF",
      icon: "FolderOpen",
      downloadUrl: "#",
      lastUpdated: "December 2024"
    },
    {
      title: "Speaking Materials",
      description: "Collection of presentation slides from tech talks and conference presentations",
      fileSize: "12.4 MB",
      format: "ZIP",
      icon: "Presentation",
      downloadUrl: "#",
      lastUpdated: "November 2024"
    },
    {
      title: "Code Samples",
      description: "Curated collection of code snippets and mini-projects demonstrating various skills",
      fileSize: "8.9 MB",
      format: "ZIP",
      icon: "Code2",
      downloadUrl: "#",
      lastUpdated: "December 2024"
    },
    {
      title: "Technical Articles",
      description: "Collection of published articles on frontend development, performance, and best practices",
      fileSize: "3.1 MB",
      format: "PDF",
      icon: "BookOpen",
      downloadUrl: "#",
      lastUpdated: "October 2024"
    },
    {
      title: "Recommendation Letters",
      description: "Professional recommendations from previous employers and clients",
      fileSize: "1.8 MB",
      format: "PDF",
      icon: "Award",
      downloadUrl: "#",
      lastUpdated: "September 2024"
    }
  ];

  const handleDownload = (resource) => {
    // Mock download functionality
    console.log(`Downloading ${resource?.title}...`);
    // In a real application, this would trigger the actual download
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">Resources & Downloads</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Access detailed documentation, code samples, and professional materials to get a comprehensive view of my experience and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resources?.map((resource, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-normal hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name={resource?.icon} size={24} className="text-accent" />
                </div>
                <div className="text-right">
                  <span className="text-xs bg-surface px-2 py-1 rounded text-text-secondary">
                    {resource?.format}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-primary mb-3">{resource?.title}</h3>
              <p className="text-text-secondary mb-4 leading-relaxed">{resource?.description}</p>

              <div className="flex items-center justify-between text-sm text-text-secondary mb-6">
                <span className="flex items-center">
                  <Icon name="HardDrive" size={14} className="mr-1" />
                  {resource?.fileSize}
                </span>
                <span className="flex items-center">
                  <Icon name="Calendar" size={14} className="mr-1" />
                  {resource?.lastUpdated}
                </span>
              </div>

              <Button
                variant="outline"
                fullWidth
                onClick={() => handleDownload(resource)}
                iconName="Download"
                iconPosition="left"
                iconSize={16}
              >
                Download
              </Button>
            </div>
          ))}
        </div>

        {/* Quick Access Section */}
        <div className="bg-surface rounded-xl p-8">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">Quick Access</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6">
              <h4 className="font-bold text-primary mb-3 flex items-center">
                <Icon name="Zap" size={20} className="mr-2 text-accent" />
                For Recruiters
              </h4>
              <p className="text-text-secondary mb-4">
                Get the essentials quickly with my resume and portfolio highlights.
              </p>
              <div className="space-y-2">
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => handleDownload(resources?.[0])}
                  iconName="FileText"
                  iconPosition="left"
                  iconSize={16}
                >
                  Download Resume
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDownload(resources?.[1])}
                  iconName="FolderOpen"
                  iconPosition="left"
                  iconSize={16}
                >
                  View Portfolio
                </Button>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6">
              <h4 className="font-bold text-primary mb-3 flex items-center">
                <Icon name="Code2" size={20} className="mr-2 text-accent" />
                For Developers
              </h4>
              <p className="text-text-secondary mb-4">
                Explore code samples and technical articles for deeper insights.
              </p>
              <div className="space-y-2">
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => handleDownload(resources?.[3])}
                  iconName="Code2"
                  iconPosition="left"
                  iconSize={16}
                >
                  Code Samples
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDownload(resources?.[4])}
                  iconName="BookOpen"
                  iconPosition="left"
                  iconSize={16}
                >
                  Technical Articles
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact for Custom Materials */}
        <div className="mt-16 text-center bg-card rounded-xl p-8">
          <Icon name="MessageSquare" size={48} className="text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-primary mb-4">Need Something Specific?</h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Looking for custom code samples, specific project details, or tailored materials for your evaluation process? I'm happy to provide additional resources.
          </p>
          <Button
            variant="default"
            onClick={() => window.location.href = '/collaboration-hub'}
            iconName="Mail"
            iconPosition="left"
            iconSize={16}
          >
            Request Custom Materials
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DownloadableResources;