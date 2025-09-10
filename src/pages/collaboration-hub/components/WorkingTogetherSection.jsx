import React from 'react';
import Icon from '../../../components/AppIcon';

const WorkingTogetherSection = () => {
  const processSteps = [
    {
      step: 1,
      title: 'Discovery & Planning',
      description: 'We start with a detailed consultation to understand your goals, requirements, and technical needs.',
      duration: '1-2 days',
      deliverables: ['Project scope document', 'Technical requirements', 'Timeline & milestones'],
      icon: 'Search'
    },
    {
      step: 2,
      title: 'Design & Architecture',
      description: 'I create wireframes, design systems, and technical architecture based on your requirements.',
      duration: '3-5 days',
      deliverables: ['Wireframes & mockups', 'Component library', 'Technical architecture'],
      icon: 'Palette'
    },
    {
      step: 3,
      title: 'Development & Testing',
      description: 'Clean, efficient code development with regular updates and thorough testing throughout.',
      duration: '2-8 weeks',
      deliverables: ['Weekly progress updates', 'Staging environment', 'Quality assurance testing'],
      icon: 'Code'
    },
    {
      step: 4,
      title: 'Launch & Support',
      description: 'Deployment to production with documentation, training, and ongoing support options.',
      duration: '1-2 days',
      deliverables: ['Production deployment', 'Documentation', '30-day support included'],
      icon: 'Rocket'
    }
  ];

  const communicationPreferences = [
    {
      method: 'Project Updates',
      frequency: 'Weekly',
      description: 'Detailed progress reports with screenshots and next steps',
      icon: 'FileText'
    },
    {
      method: 'Video Calls',
      frequency: 'Bi-weekly',
      description: 'Face-to-face check-ins to discuss progress and address questions',
      icon: 'Video'
    },
    {
      method: 'Slack/Email',
      frequency: 'Daily',
      description: 'Quick updates, questions, and real-time communication',
      icon: 'MessageSquare'
    },
    {
      method: 'Demo Sessions',
      frequency: 'Per milestone',
      description: 'Live demonstrations of completed features and functionality',
      icon: 'Monitor'
    }
  ];

  const projectManagement = [
    {
      tool: 'Notion',
      purpose: 'Project documentation and knowledge base',
      access: 'Shared workspace with real-time updates'
    },
    {
      tool: 'GitHub',
      purpose: 'Code repository and version control',
      access: 'Private repository with commit history'
    },
    {
      tool: 'Figma',
      purpose: 'Design collaboration and feedback',
      access: 'Shared design files with comment system'
    },
    {
      tool: 'Vercel/Netlify',
      purpose: 'Staging and production deployments',
      access: 'Preview links for testing and feedback'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Process Overview */}
      <div className="bg-card rounded-xl shadow-lg border border-border p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            Development Process
          </h3>
          <p className="text-text-secondary">
            A proven methodology that ensures quality results and clear communication
          </p>
        </div>

        <div className="space-y-6">
          {processSteps?.map((step, index) => (
            <div key={step?.step} className="relative">
              {/* Connector Line */}
              {index < processSteps?.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-16 bg-border" />
              )}
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-semibold">
                    <Icon name={step?.icon} size={20} />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-text-primary">
                      {step?.title}
                    </h4>
                    <span className="text-sm text-text-secondary bg-muted px-3 py-1 rounded-full">
                      {step?.duration}
                    </span>
                  </div>
                  
                  <p className="text-text-secondary mb-3">
                    {step?.description}
                  </p>
                  
                  <div>
                    <h5 className="text-sm font-medium text-text-primary mb-2">
                      Key Deliverables:
                    </h5>
                    <ul className="space-y-1">
                      {step?.deliverables?.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center text-sm text-text-secondary">
                          <Icon name="Check" size={14} className="text-green-500 mr-2" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Communication Preferences */}
      <div className="bg-card rounded-xl shadow-lg border border-border p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            Communication & Updates
          </h3>
          <p className="text-text-secondary">
            Stay informed throughout the entire development process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {communicationPreferences?.map((comm, index) => (
            <div key={index} className="border border-border rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <Icon name={comm?.icon} size={20} className="text-accent" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-text-primary">
                      {comm?.method}
                    </h4>
                    <span className="text-xs text-text-secondary bg-muted px-2 py-1 rounded">
                      {comm?.frequency}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary">
                    {comm?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Project Management Tools */}
      <div className="bg-card rounded-xl shadow-lg border border-border p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            Project Management & Tools
          </h3>
          <p className="text-text-secondary">
            Professional tools for seamless collaboration and transparency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectManagement?.map((tool, index) => (
            <div key={index} className="border border-border rounded-lg p-4">
              <h4 className="font-semibold text-text-primary mb-2">
                {tool?.tool}
              </h4>
              <p className="text-sm text-text-secondary mb-2">
                {tool?.purpose}
              </p>
              <div className="flex items-center text-xs text-accent">
                <Icon name="Users" size={12} className="mr-1" />
                {tool?.access}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Expectations & Policies */}
      <div className="bg-card rounded-xl shadow-lg border border-border p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            Working Expectations
          </h3>
          <p className="text-text-secondary">
            Clear guidelines for a successful partnership
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-text-primary mb-3 flex items-center">
              <Icon name="Clock" size={18} className="text-accent mr-2" />
              Response Times
            </h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-center">
                <Icon name="Check" size={14} className="text-green-500 mr-2" />
                Email: Within 4 hours (business days)
              </li>
              <li className="flex items-center">
                <Icon name="Check" size={14} className="text-green-500 mr-2" />
                Urgent issues: Within 1 hour
              </li>
              <li className="flex items-center">
                <Icon name="Check" size={14} className="text-green-500 mr-2" />
                Project updates: Weekly on Fridays
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-3 flex items-center">
              <Icon name="Shield" size={18} className="text-accent mr-2" />
              Quality Assurance
            </h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-center">
                <Icon name="Check" size={14} className="text-green-500 mr-2" />
                Code review for every feature
              </li>
              <li className="flex items-center">
                <Icon name="Check" size={14} className="text-green-500 mr-2" />
                Cross-browser testing included
              </li>
              <li className="flex items-center">
                <Icon name="Check" size={14} className="text-green-500 mr-2" />
                30-day bug fix guarantee
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-start">
              <Icon name="Info" size={20} className="text-blue-600 mr-3 mt-0.5" />
              <div>
                <h5 className="font-medium text-blue-800 mb-2">
                  Ready to get started?
                </h5>
                <p className="text-sm text-blue-700">
                  Every project begins with a free consultation to ensure we're the right fit. No commitment required until you're completely satisfied with the project plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingTogetherSection;