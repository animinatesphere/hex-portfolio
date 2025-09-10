import React from 'react';
import Icon from '../../../components/AppIcon';

const TechnicalPhilosophy = () => {
  const philosophyPrinciples = [
    {
      title: "User-Centric Development",
      description: "Every line of code should serve the end user. I prioritize accessibility, performance, and intuitive user experiences over flashy features.",
      icon: "Users",
      example: "Implemented lazy loading and code splitting that reduced initial page load time by 60% for a e-commerce platform."
    },
    {
      title: "Clean, Maintainable Code",
      description: "Code is read more often than it's written. I focus on clarity, consistency, and comprehensive documentation for future developers.",
      icon: "FileText",
      example: "Established component library and coding standards that reduced onboarding time for new team members from 2 weeks to 3 days."
    },
    {
      title: "Performance First",
      description: "Fast websites create better user experiences and business outcomes. I optimize for Core Web Vitals and real-world performance metrics.",
      icon: "Zap",
      example: "Optimized React app bundle size by 40% using dynamic imports and eliminated render-blocking resources."
    },
    {
      title: "Continuous Learning",
      description: "Technology evolves rapidly. I dedicate time weekly to learning new tools, frameworks, and best practices to stay current.",
      icon: "BookOpen",
      example: "Recently mastered Next.js 14 App Router and Server Components, implementing them in production within 2 months of release."
    },
    {
      title: "Collaborative Problem Solving",
      description: "The best solutions emerge from diverse perspectives. I actively seek feedback and collaborate closely with designers and backend developers.",
      icon: "MessageSquare",
      example: "Led cross-functional workshops that improved design-to-development handoff efficiency by 50% and reduced revision cycles."
    },
    {
      title: "Quality Through Testing",
      description: "Robust testing prevents bugs and enables confident refactoring. I write comprehensive unit, integration, and e2e tests.",
      icon: "Shield",
      example: "Implemented testing strategy that achieved 90% code coverage and reduced production bugs by 75% over 6 months."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">Technical Philosophy</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            My approach to frontend development is guided by principles that prioritize user experience, code quality, and continuous improvement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {philosophyPrinciples?.map((principle, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-normal hover:-translate-y-1">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Icon name={principle?.icon} size={32} className="text-accent" />
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-4">{principle?.title}</h3>
              <p className="text-text-secondary mb-6 leading-relaxed">{principle?.description}</p>
              
              <div className="bg-surface rounded-lg p-4">
                <h4 className="text-sm font-semibold text-primary mb-2 flex items-center">
                  <Icon name="Lightbulb" size={16} className="mr-2 text-accent" />
                  Real Example
                </h4>
                <p className="text-sm text-text-secondary italic">{principle?.example}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Code Quality Metrics */}
        <div className="mt-16 bg-surface rounded-xl p-8">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Code Quality Metrics</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <div className="text-sm text-text-secondary">Test Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">A+</div>
              <div className="text-sm text-text-secondary">Lighthouse Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">&lt;2s</div>
              <div className="text-sm text-text-secondary">Load Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-text-secondary">Accessibility</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalPhilosophy;