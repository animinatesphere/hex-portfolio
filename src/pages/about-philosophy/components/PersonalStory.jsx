import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PersonalStory = () => {
  const storyMilestones = [
    {
      year: "2018",
      title: "The Spark",
      description: "First line of code written in a college computer lab. What started as curiosity became passion when I built my first interactive webpage.",
      icon: "Zap",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop"
    },
    {
      year: "2019",
      title: "Deep Dive",
      description: "Spent countless nights learning JavaScript, React, and modern web technologies. Built 20+ projects to master the fundamentals.",
      icon: "Code2",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?w=400&h=300&fit=crop"
    },
    {
      year: "2020",
      title: "First Impact",
      description: "Landed my first frontend role and shipped features used by thousands of users. Learned the importance of user-centric design.",
      icon: "Rocket",
      image: "https://images.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg?w=400&h=300&fit=crop"
    },
    {
      year: "2021-2023",
      title: "Growth & Leadership",
      description: "Led frontend initiatives, mentored junior developers, and architected scalable solutions for complex business problems.",
      icon: "TrendingUp",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
    },
    {
      year: "2024-Present",
      title: "Innovation Focus",
      description: "Specializing in performance optimization, accessibility, and emerging frontend technologies while building meaningful digital experiences.",
      icon: "Lightbulb",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">My Journey</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From curious beginner to passionate frontend architect, here's how my love for creating digital experiences evolved over the years.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border hidden lg:block"></div>

          <div className="space-y-12">
            {storyMilestones?.map((milestone, index) => (
              <div key={milestone?.year} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-8`}>
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'} text-center lg:text-left mb-8 lg:mb-0`}>
                  <div className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-normal">
                    <div className="flex items-center justify-center lg:justify-start mb-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                        <Icon name={milestone?.icon} size={24} className="text-accent" />
                      </div>
                      <span className="text-2xl font-bold text-accent">{milestone?.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4">{milestone?.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{milestone?.description}</p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex w-4 h-4 bg-accent rounded-full border-4 border-background shadow-sm z-10"></div>

                {/* Image */}
                <div className="flex-1">
                  <div className="relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow duration-normal">
                    <Image 
                      src={milestone?.image} 
                      alt={milestone?.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalStory;