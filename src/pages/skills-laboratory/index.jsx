import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../../components/ui/Header";
import Icon from "../../components/AppIcon";
import SkillEcosystemMap from "./components/SkillEcosystemMap";
import SkillCategoryCard from "./components/SkillCategoryCard";
import TechnologyRadar from "./components/TechnologyRadar";
import CodePlayground from "./components/CodePlayground";
import LearningProgress from "./components/LearningProgress";
import GitHubStats from "./components/GitHubStats";

const SkillsLaboratory = () => {
  useEffect(() => {
    document.title = "Skills Laboratory - DevPortfolio Pro";
  }, []);

  const skillCategories = [
    {
      category: "Frontend Development",
      icon: "Monitor",
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        {
          name: "React",
          level: 95,
          icon: "Code2",
          experience: "4+ years",
          projects: 25,
          learningSince: "2020",
          certifications: ["Meta React Specialist", "React Testing Library"],
        },
        {
          name: "TypeScript",
          level: 60,
          icon: "FileType",
          experience: "1+ years",
          projects: 18,
          learningSince: "2021",
          certifications: ["TypeScript Deep Dive"],
        },
        {
          name: "Next.js",
          level: 85,
          icon: "Layers",
          experience: "2+ years",
          projects: 12,
          learningSince: "2022",
          certifications: ["Next.js Production Ready"],
        },
        {
          name: "Tailwind CSS",
          level: 92,
          icon: "Palette",
          experience: "3+ years",
          projects: 22,
          learningSince: "2021",
          certifications: ["Tailwind UI Mastery"],
        },
      ],
    },
    // {
    //   category: 'Backend Development',
    //   icon: 'Server',
    //   gradient: 'from-green-500 to-emerald-500',
    //   skills: [
    //     {
    //       name: 'Node.js',
    //       level: 82,
    //       icon: 'Server',
    //       experience: '3+ years',
    //       projects: 15,
    //       learningSince: '2021',
    //       certifications: ['Node.js Application Developer']
    //     },
    //     {
    //       name: 'Express.js',
    //       level: 80,
    //       icon: 'Zap',
    //       experience: '3+ years',
    //       projects: 14,
    //       learningSince: '2021',
    //       certifications: []
    //     },
    //     {
    //       name: 'MongoDB',
    //       level: 75,
    //       icon: 'Database',
    //       experience: '2+ years',
    //       projects: 10,
    //       learningSince: '2022',
    //       certifications: ['MongoDB Developer']
    //     },
    //     {
    //       name: 'PostgreSQL',
    //       level: 70,
    //       icon: 'Database',
    //       experience: '2+ years',
    //       projects: 8,
    //       learningSince: '2022',
    //       certifications: []
    //     }
    //   ]
    // },
    {
      category: "Development Tools",
      icon: "Wrench",
      gradient: "from-purple-500 to-violet-500",
      skills: [
        {
          name: "Git & GitHub",
          level: 90,
          icon: "GitBranch",
          experience: "4+ years",
          projects: 47,
          learningSince: "2020",
          certifications: ["GitHub Actions Certified"],
        },
        {
          name: "VS Code",
          level: 95,
          icon: "Code",
          experience: "4+ years",
          projects: "Daily use",
          learningSince: "2020",
          certifications: [],
        },
        // {
        //   name: "Docker",
        //   level: 72,
        //   icon: "Package",
        //   experience: "2+ years",
        //   projects: 12,
        //   learningSince: "2022",
        //   certifications: ["Docker Fundamentals"],
        // },
        // {
        //   name: "Webpack/Vite",
        //   level: 78,
        //   icon: "Settings",
        //   experience: "3+ years",
        //   projects: 20,
        //   learningSince: "2021",
        //   certifications: [],
        // },
      ],
    },
    {
      category: "Design & UX",
      icon: "Paintbrush",
      gradient: "from-pink-500 to-rose-500",
      skills: [
        {
          name: "Figma",
          level: 85,
          icon: "Figma",
          experience: "3+ years",
          projects: 30,
          learningSince: "2021",
          certifications: ["Figma UI/UX Design"],
        },
        // {
        //   name: "Adobe XD",
        //   level: 75,
        //   icon: "Layers",
        //   experience: "2+ years",
        //   projects: 15,
        //   learningSince: "2022",
        //   certifications: [],
        // },
        {
          name: "Responsive Design",
          level: 92,
          icon: "Smartphone",
          experience: "4+ years",
          projects: 35,
          learningSince: "2020",
          certifications: ["Responsive Web Design"],
        },
        {
          name: "User Research",
          level: 68,
          icon: "Users",
          experience: "1+ years",
          projects: 8,
          learningSince: "2023",
          certifications: [],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Zap" size={16} />
              <span>Interactive Skills Showcase</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
              Skills <span className="gradient-text">Laboratory</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Explore my technical expertise through interactive visualizations,
              live code examples, and real-time learning progress. This isn't
              just a skills list—it's a living demonstration of continuous
              growth and technical mastery.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {[
              {
                label: "Technologies",
                value: "25+",
                icon: "Code2",
                color: "text-blue-600",
              },
              {
                label: "Years Experience",
                value: "4+",
                icon: "Calendar",
                color: "text-green-600",
              },
              {
                label: "Projects Built",
                value: "50+",
                icon: "Folder",
                color: "text-purple-600",
              },
              {
                label: "Certifications",
                value: "12",
                icon: "Award",
                color: "text-orange-600",
              },
            ]?.map((stat, index) => (
              <motion.div
                key={stat?.label}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                whileHover={{ y: -2 }}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted mb-4 ${stat?.color}`}
                >
                  <Icon name={stat?.icon} size={24} />
                </div>
                <div className="text-2xl font-bold text-text-primary mb-1">
                  {stat?.value}
                </div>
                <div className="text-sm text-text-secondary">{stat?.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Skills Ecosystem Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Technology Ecosystem
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Interactive map showing the relationships between technologies in
              my skill set
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SkillEcosystemMap />
          </motion.div>
        </div>
      </section>
      {/* Skill Categories */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Skill Proficiency Matrix
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Detailed breakdown of technical skills with proficiency levels and
              learning timelines
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories?.map((category, index) => (
              <SkillCategoryCard
                key={category?.category}
                category={category?.category}
                skills={category?.skills}
                icon={category?.icon}
                gradient={category?.gradient}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Technology Radar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Technology Radar
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Current technology adoption status and exploration roadmap
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <TechnologyRadar />
          </motion.div>
        </div>
      </section>
      {/* Code Playground */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Live Code Examples
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Interactive code playground showcasing practical implementations
              and best practices
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <CodePlayground />
          </motion.div>
        </div>
      </section>
      {/* Learning Progress */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Continuous Learning Journey
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Real-time progress tracking of courses, certifications, and skill
              development
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <LearningProgress />
          </motion.div>
        </div>
      </section>
      {/* GitHub Analytics */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              GitHub Activity Analytics
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Real-time coding activity, language usage, and repository insights
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GitHubStats />
          </motion.div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how my technical expertise can help bring your
              project to life. From concept to deployment, I'm here to deliver
              exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                href="/collaboration-hub"
                className="inline-flex items-center space-x-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon name="MessageSquare" size={20} />
                <span>Start a Conversation</span>
              </motion.a>
              <motion.a
                href="/project-showcase"
                className="inline-flex items-center space-x-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon name="Eye" size={20} />
                <span>View My Work</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SkillsLaboratory;
