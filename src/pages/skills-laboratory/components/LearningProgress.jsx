import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const LearningProgress = () => {
  const [activeTab, setActiveTab] = useState('current');

  const currentCourses = [
    {
      id: 1,
      title: "Advanced React Patterns",
      platform: "Frontend Masters",
      instructor: "Kent C. Dodds",
      progress: 75,
      totalHours: 8,
      completedHours: 6,
      category: "React",
      difficulty: "Advanced",
      nextLesson: "Compound Components Pattern",
      estimatedCompletion: "2 days",
      skills: ["React", "Design Patterns", "Component Architecture"]
    },
    {
      id: 2,
      title: "TypeScript Deep Dive",
      platform: "Pluralsight",
      instructor: "Dan Wahlin",
      progress: 45,
      totalHours: 12,
      completedHours: 5.4,
      category: "TypeScript",
      difficulty: "Intermediate",
      nextLesson: "Generic Constraints",
      estimatedCompletion: "1 week",
      skills: ["TypeScript", "Type Safety", "Advanced Types"]
    },
    {
      id: 3,
      title: "Web Performance Optimization",
      platform: "Udemy",
      instructor: "Maximilian Schwarzmüller",
      progress: 30,
      totalHours: 15,
      completedHours: 4.5,
      category: "Performance",
      difficulty: "Advanced",
      nextLesson: "Critical Rendering Path",
      estimatedCompletion: "2 weeks",
      skills: ["Performance", "Optimization", "Core Web Vitals"]
    }
  ];

  const completedCourses = [
    {
      id: 4,
      title: "Modern JavaScript ES2023",
      platform: "freeCodeCamp",
      instructor: "Brad Traversy",
      completedDate: "2024-08-15",
      rating: 5,
      certificate: true,
      totalHours: 10,
      category: "JavaScript",
      skills: ["ES6+", "Modern JavaScript", "Async/Await"]
    },
    {
      id: 5,
      title: "CSS Grid & Flexbox Mastery",
      platform: "CSS-Tricks",
      instructor: "Rachel Andrew",
      completedDate: "2024-07-28",
      rating: 5,
      certificate: true,
      totalHours: 6,
      category: "CSS",
      skills: ["CSS Grid", "Flexbox", "Responsive Design"]
    },
    {
      id: 6,
      title: "Node.js Complete Guide",
      platform: "Udemy",
      instructor: "Jonas Schmedtmann",
      completedDate: "2024-07-10",
      rating: 4,
      certificate: true,
      totalHours: 20,
      category: "Node.js",
      skills: ["Node.js", "Express", "MongoDB"]
    }
  ];

  const upcomingCourses = [
    {
      id: 7,
      title: "Rust Programming Language",
      platform: "The Rust Book",
      instructor: "Steve Klabnik",
      startDate: "2024-09-01",
      totalHours: 25,
      category: "Rust",
      difficulty: "Beginner",
      priority: "High",
      reason: "Systems programming & WebAssembly"
    },
    {
      id: 8,
      title: "GraphQL with Apollo",
      platform: "Apollo Odyssey",
      instructor: "Apollo Team",
      startDate: "2024-09-15",
      totalHours: 8,
      category: "GraphQL",
      difficulty: "Intermediate",
      priority: "Medium",
      reason: "API development enhancement"
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'text-red-600 bg-red-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const tabs = [
    { id: 'current', name: 'Current Learning', icon: 'BookOpen', count: currentCourses?.length },
    { id: 'completed', name: 'Completed', icon: 'CheckCircle', count: completedCourses?.length },
    { id: 'upcoming', name: 'Planned', icon: 'Calendar', count: upcomingCourses?.length }
  ];

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Learning Journey</h3>
            <p className="text-white/80">Continuous skill development and certification progress</p>
          </div>
          <div className="flex items-center space-x-4 text-white">
            <div className="text-center">
              <div className="text-2xl font-bold">24</div>
              <div className="text-xs opacity-80">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">180h</div>
              <div className="text-xs opacity-80">Learning</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">12</div>
              <div className="text-xs opacity-80">Certificates</div>
            </div>
          </div>
        </div>
      </div>
      {/* Tabs */}
      <div className="border-b border-border bg-muted/30">
        <div className="flex">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-all duration-200 border-b-2 ${
                activeTab === tab?.id
                  ? 'text-accent border-accent bg-background' :'text-text-secondary border-transparent hover:text-text-primary hover:bg-muted/50'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.name}</span>
              <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full text-xs">
                {tab?.count}
              </span>
            </button>
          ))}
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        {activeTab === 'current' && (
          <div className="space-y-6">
            {currentCourses?.map((course, index) => (
              <motion.div
                key={course?.id}
                className="bg-muted/30 rounded-xl p-6 hover:bg-muted/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-semibold text-text-primary">{course?.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(course?.difficulty)}`}>
                        {course?.difficulty}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-text-secondary mb-3">
                      <span className="flex items-center space-x-1">
                        <Icon name="User" size={14} />
                        <span>{course?.instructor}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Monitor" size={14} />
                        <span>{course?.platform}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Clock" size={14} />
                        <span>{course?.completedHours}h / {course?.totalHours}h</span>
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent">{course?.progress}%</div>
                    <div className="text-xs text-text-secondary">Complete</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-accent to-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${course?.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </div>

                {/* Course Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="PlayCircle" size={16} className="text-accent" />
                      <span className="text-sm font-medium text-text-primary">Next Lesson:</span>
                    </div>
                    <p className="text-sm text-text-secondary ml-6">{course?.nextLesson}</p>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Calendar" size={16} className="text-accent" />
                      <span className="text-sm font-medium text-text-primary">Est. Completion:</span>
                    </div>
                    <p className="text-sm text-text-secondary ml-6">{course?.estimatedCompletion}</p>
                  </div>
                </div>

                {/* Skills */}
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {course?.skills?.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'completed' && (
          <div className="grid md:grid-cols-2 gap-6">
            {completedCourses?.map((course, index) => (
              <motion.div
                key={course?.id}
                className="bg-muted/30 rounded-xl p-6 hover:bg-muted/50 transition-colors"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-text-primary mb-2">{course?.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-text-secondary">
                      <span className="flex items-center space-x-1">
                        <Icon name="User" size={14} />
                        <span>{course?.instructor}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Clock" size={14} />
                        <span>{course?.totalHours}h</span>
                      </span>
                    </div>
                  </div>
                  {course?.certificate && (
                    <div className="flex items-center space-x-1 text-accent">
                      <Icon name="Award" size={16} />
                      <span className="text-xs font-medium">Certified</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className={i < course?.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-text-secondary">
                    Completed: {new Date(course.completedDate)?.toLocaleDateString()}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {course?.skills?.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'upcoming' && (
          <div className="space-y-6">
            {upcomingCourses?.map((course, index) => (
              <motion.div
                key={course?.id}
                className="bg-muted/30 rounded-xl p-6 hover:bg-muted/50 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-semibold text-text-primary">{course?.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(course?.priority)}`}>
                        {course?.priority} Priority
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-text-secondary mb-3">
                      <span className="flex items-center space-x-1">
                        <Icon name="User" size={14} />
                        <span>{course?.instructor}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Monitor" size={14} />
                        <span>{course?.platform}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Clock" size={14} />
                        <span>{course?.totalHours}h</span>
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-text-primary">
                      {new Date(course.startDate)?.toLocaleDateString()}
                    </div>
                    <div className="text-xs text-text-secondary">Start Date</div>
                  </div>
                </div>

                <div className="bg-background rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Target" size={16} className="text-accent" />
                    <span className="text-sm font-medium text-text-primary">Learning Goal:</span>
                  </div>
                  <p className="text-sm text-text-secondary ml-6">{course?.reason}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningProgress;