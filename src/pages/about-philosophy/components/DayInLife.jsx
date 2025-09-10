import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const DayInLife = () => {
  const [selectedDay, setSelectedDay] = useState('workday');

  const schedules = {
    workday: [
      { time: "6:30 AM", activity: "Morning Routine", description: "Coffee, meditation, and reviewing tech news", icon: "Coffee" },
      { time: "8:00 AM", activity: "Deep Work Block", description: "Complex feature development and architecture decisions", icon: "Code2" },
      { time: "10:30 AM", activity: "Team Standup", description: "Sync with team, discuss blockers and priorities", icon: "Users" },
      { time: "11:00 AM", activity: "Code Review", description: "Review PRs, provide feedback, and merge approved changes", icon: "GitPullRequest" },
      { time: "1:00 PM", activity: "Lunch & Learning", description: "Eat while watching tech talks or reading documentation", icon: "BookOpen" },
      { time: "2:00 PM", activity: "Feature Implementation", description: "Building user-facing features with focus on UX", icon: "Layers" },
      { time: "4:00 PM", activity: "Testing & Debugging", description: "Writing tests, fixing bugs, and performance optimization", icon: "Bug" },
      { time: "5:30 PM", activity: "Documentation", description: "Update docs, write commit messages, plan tomorrow", icon: "FileText" },
      { time: "7:00 PM", activity: "Personal Projects", description: "Side projects, open source contributions, or learning", icon: "Lightbulb" }
    ],
    weekend: [
      { time: "8:00 AM", activity: "Slow Morning", description: "Coffee, reading, and planning the day ahead", icon: "Coffee" },
      { time: "10:00 AM", activity: "Open Source", description: "Contributing to open source projects and community", icon: "Github" },
      { time: "12:00 PM", activity: "Learning Time", description: "New technologies, courses, or technical books", icon: "BookOpen" },
      { time: "2:00 PM", activity: "Side Projects", description: "Personal projects and experimental ideas", icon: "Lightbulb" },
      { time: "4:00 PM", activity: "Tech Content", description: "Writing blog posts or creating tutorials", icon: "Edit3" },
      { time: "6:00 PM", activity: "Outdoor Time", description: "Exercise, nature walks, or sports activities", icon: "TreePine" },
      { time: "8:00 PM", activity: "Social Time", description: "Family, friends, or tech community meetups", icon: "Users" }
    ]
  };

  const workHabits = [
    {
      title: "Pomodoro Technique",
      description: "25-minute focused work sessions with 5-minute breaks for sustained productivity",
      icon: "Clock"
    },
    {
      title: "Version Control Discipline",
      description: "Atomic commits with descriptive messages and feature branch workflow",
      icon: "GitBranch"
    },
    {
      title: "Continuous Refactoring",
      description: "Regular code cleanup and optimization to maintain code quality",
      icon: "RefreshCw"
    },
    {
      title: "Documentation First",
      description: "Writing clear documentation before and during development",
      icon: "FileText"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">A Day in My Life</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Peek behind the scenes to see how I structure my days for maximum productivity and continuous learning.
          </p>
        </div>

        {/* Day Type Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-surface rounded-lg p-1 flex">
            <button
              onClick={() => setSelectedDay('workday')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-normal ${
                selectedDay === 'workday' ?'bg-accent text-white shadow-sm' :'text-text-secondary hover:text-primary'
              }`}
            >
              <Icon name="Briefcase" size={20} className="mr-2 inline" />
              Workday
            </button>
            <button
              onClick={() => setSelectedDay('weekend')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-normal ${
                selectedDay === 'weekend' ?'bg-accent text-white shadow-sm' :'text-text-secondary hover:text-primary'
              }`}
            >
              <Icon name="Calendar" size={20} className="mr-2 inline" />
              Weekend
            </button>
          </div>
        </div>

        {/* Schedule Timeline */}
        <div className="bg-card rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">
            {selectedDay === 'workday' ? 'Typical Workday Schedule' : 'Weekend Routine'}
          </h3>
          
          <div className="space-y-6">
            {schedules?.[selectedDay]?.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-surface transition-colors duration-normal">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-sm font-semibold text-accent">{item?.time}</span>
                </div>
                <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name={item?.icon} size={20} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-primary mb-1">{item?.activity}</h4>
                  <p className="text-text-secondary text-sm">{item?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Habits */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Core Work Habits</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workHabits?.map((habit, index) => (
              <div key={index} className="bg-surface rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-normal">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={habit?.icon} size={24} className="text-accent" />
                </div>
                <h4 className="font-semibold text-primary mb-3">{habit?.title}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">{habit?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Productivity Stats */}
        <div className="mt-16 bg-surface rounded-xl p-8">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Productivity Metrics</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">6-8</div>
              <div className="text-text-secondary">Deep Work Hours/Day</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-text-secondary">Commits/Week</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">2-3</div>
              <div className="text-text-secondary">Learning Hours/Day</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DayInLife;