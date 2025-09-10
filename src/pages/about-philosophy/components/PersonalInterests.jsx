import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PersonalInterests = () => {
  const interests = [
    {
      title: "Technology Exploration",
      description: "Always experimenting with emerging technologies, from AI/ML frameworks to new JavaScript libraries and development tools.",
      icon: "Cpu",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      relevance: "Keeps me ahead of industry trends and brings fresh perspectives to client projects."
    },
    {
      title: "Open Source Contribution",
      description: "Active contributor to React ecosystem projects and maintainer of several utility libraries used by the developer community.",
      icon: "Github",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?w=400&h=300&fit=crop",
      relevance: "Demonstrates commitment to code quality and collaborative development practices."
    },
    {
      title: "UI/UX Design",
      description: "Passionate about design systems, typography, and creating intuitive user interfaces that solve real problems elegantly.",
      icon: "Palette",
      image: "https://images.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg?w=400&h=300&fit=crop",
      relevance: "Bridges the gap between design and development, ensuring pixel-perfect implementations."
    },
    {
      title: "Photography",
      description: "Landscape and street photography enthusiast. Love capturing moments and understanding composition, lighting, and visual storytelling.",
      icon: "Camera",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
      relevance: "Develops visual eye for detail and composition that enhances web design sensibilities."
    },
    {
      title: "Hiking & Nature",
      description: "Regular hiker and nature enthusiast. Find that outdoor activities provide mental clarity and creative problem-solving insights.",
      icon: "Mountain",
      image: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?w=400&h=300&fit=crop",
      relevance: "Outdoor time enhances focus and provides fresh perspectives for tackling complex coding challenges."
    },
    {
      title: "Tech Mentoring",
      description: "Mentor junior developers through coding bootcamps and online communities, helping others navigate their frontend development journey.",
      icon: "Users",
      image: "https://images.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg?w=400&h=300&fit=crop",
      relevance: "Strengthens communication skills and keeps me connected to emerging developer perspectives."
    }
  ];

  const personalValues = [
    {
      value: "Continuous Growth",
      description: "Embracing challenges as opportunities to learn and improve",
      icon: "TrendingUp"
    },
    {
      value: "Authentic Collaboration",
      description: "Building genuine relationships based on trust and mutual respect",
      icon: "Handshake"
    },
    {
      value: "Quality Craftsmanship",
      description: "Taking pride in creating work that stands the test of time",
      icon: "Award"
    },
    {
      value: "User Empathy",
      description: "Always considering the human experience behind every interface",
      icon: "Heart"
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">Beyond the Code</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            My interests and hobbies shape my perspective as a developer, bringing creativity, empathy, and fresh insights to every project.
          </p>
        </div>

        {/* Personal Interests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {interests?.map((interest, index) => (
            <div key={index} className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-normal hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={interest?.image} 
                  alt={interest?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Icon name={interest?.icon} size={24} className="text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">{interest?.title}</h3>
                <p className="text-text-secondary mb-4 leading-relaxed">{interest?.description}</p>
                
                <div className="bg-surface rounded-lg p-3">
                  <h4 className="text-sm font-semibold text-accent mb-1 flex items-center">
                    <Icon name="Link" size={14} className="mr-2" />
                    Professional Relevance
                  </h4>
                  <p className="text-sm text-text-secondary italic">{interest?.relevance}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Personal Values */}
        <div className="bg-card rounded-xl p-8">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalValues?.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={item?.icon} size={28} className="text-accent" />
                </div>
                <h4 className="font-bold text-primary mb-2">{item?.value}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{item?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-16 bg-background rounded-xl p-8">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Fun Facts</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Icon name="Coffee" size={32} className="text-accent mx-auto mb-4" />
              <div className="text-2xl font-bold text-primary mb-2">500+</div>
              <div className="text-text-secondary">Cups of coffee while coding</div>
            </div>
            <div className="text-center">
              <Icon name="Mountain" size={32} className="text-accent mx-auto mb-4" />
              <div className="text-2xl font-bold text-primary mb-2">25+</div>
              <div className="text-text-secondary">Mountain peaks hiked</div>
            </div>
            <div className="text-center">
              <Icon name="BookOpen" size={32} className="text-accent mx-auto mb-4" />
              <div className="text-2xl font-bold text-primary mb-2">50+</div>
              <div className="text-text-secondary">Tech books read</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInterests;