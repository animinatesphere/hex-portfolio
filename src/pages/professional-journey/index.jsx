import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";
import TimelineItem from "./components/TimelineItem";
import CareerHighlights from "./components/CareerHighlights";
import SkillsEvolution from "./components/SkillsEvolution";
import CompanySpotlight from "./components/CompanySpotlight";
import TestimonialCard from "./components/TestimonialCard";

const ProfessionalJourney = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mock data for professional experience
  const experiences = [
    {
      id: 1,
      company: "TechCorp Solutions",
      companyLogo:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
      industry: "Enterprise Software",
      role: "Senior Frontend Developer",
      duration: "2022 - Present",
      location: "San Francisco, CA",
      description:
        "Leading frontend development for enterprise-scale applications serving 100K+ users. Architecting scalable React solutions and mentoring junior developers while driving technical excellence across multiple product teams.",
      achievements: [
        "Improved application performance by 45% through code optimization and lazy loading implementation",
        "Led migration from legacy jQuery to React 18, reducing bundle size by 30%",
        "Mentored 5 junior developers and established frontend coding standards",
        "Implemented automated testing suite increasing code coverage from 40% to 85%",
        "Designed and built reusable component library used across 8 different products",
      ],
      technologies: [
        "React 18",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "GraphQL",
        "Jest",
        "Cypress",
      ],
      projectHighlights: [
        {
          name: "Customer Dashboard Redesign",
          description:
            "Complete UI/UX overhaul resulting in 60% increase in user engagement",
        },
        {
          name: "Real-time Analytics Platform",
          description:
            "Built interactive data visualization dashboard with D3.js and WebSocket integration",
        },
      ],
    },
    {
      id: 2,
      company: "StartupHub Inc",
      companyLogo:
        "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=100&h=100&fit=crop&crop=center",
      industry: "Fintech Startup",
      role: "Frontend Developer",
      duration: "2020 - 2022",
      location: "Austin, TX",
      description:
        "Full-stack development in a fast-paced startup environment, building customer-facing applications and internal tools. Collaborated directly with founders and product team to deliver MVP features rapidly.",
      achievements: [
        "Built responsive web application from scratch serving 10K+ active users",
        "Reduced page load times by 40% through performance optimization techniques",
        "Implemented secure payment integration with Stripe API",
        "Created automated deployment pipeline reducing release time by 70%",
      ],
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "AWS",
        "Docker",
        "Stripe API",
      ],
      projectHighlights: [
        {
          name: "Mobile-First Trading Platform",
          description:
            "Responsive trading interface with real-time market data and portfolio management",
        },
        {
          name: "Admin Analytics Dashboard",
          description:
            "Internal tool for monitoring user activity and business metrics",
        },
      ],
    },
    {
      id: 3,
      company: "Digital Agency Pro",
      companyLogo:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
      industry: "Digital Marketing",
      role: "Junior Frontend Developer",
      duration: "2019 - 2020",
      location: "Remote",
      description:
        "Developed custom websites and landing pages for diverse clients across various industries. Gained experience in client communication, project management, and delivering pixel-perfect designs.",
      achievements: [
        "Delivered 25+ client websites with 100% on-time completion rate",
        "Achieved 95+ PageSpeed Insights scores on all projects",
        "Increased client conversion rates by average of 25% through UX improvements",
        "Established responsive design workflow reducing development time by 30%",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "jQuery",
        "WordPress",
        "PHP",
        "SASS",
      ],
      projectHighlights: [
        {
          name: "E-commerce Platform",
          description:
            "Custom WooCommerce solution with advanced filtering and payment integration",
        },
        {
          name: "Corporate Website Redesign",
          description:
            "Modern, responsive website for Fortune 500 company with CMS integration",
        },
      ],
    },
  ];

  // Mock data for career highlights
  const careerHighlights = [
    {
      title: "First React Project",
      description:
        "Successfully migrated legacy jQuery application to React, marking the beginning of modern frontend journey",
      year: "2019",
      icon: "Rocket",
      color: "bg-blue-500",
    },
    {
      title: "Team Leadership Role",
      description:
        "Promoted to Senior Developer and started mentoring junior team members",
      year: "2021",
      icon: "Users",
      color: "bg-green-500",
    },
    {
      title: "Product Launch Success",
      description:
        "Led frontend development for product that reached 50K users in first month",
      year: "2022",
      icon: "TrendingUp",
      color: "bg-purple-500",
    },
    {
      title: "Industry Recognition",
      description:
        "Featured in TechCrunch for innovative frontend architecture solutions",
      year: "2023",
      icon: "Award",
      color: "bg-orange-500",
    },
    {
      title: "Open Source Contribution",
      description: "Contributed to major React library with 10K+ GitHub stars",
      year: "2023",
      icon: "GitBranch",
      color: "bg-indigo-500",
    },
  ];

  // Mock data for skills evolution
  const skillsEvolution = [
    {
      year: "2019",
      skills: [
        { name: "HTML/CSS", level: 85, category: "Frontend" },
        { name: "JavaScript", level: 70, category: "Frontend" },
        { name: "jQuery", level: 80, category: "Frontend" },
        { name: "WordPress", level: 75, category: "Tools" },
        { name: "PHP", level: 60, category: "Backend" },
      ],
      summary:
        "Started with strong foundation in web fundamentals and content management systems. Focus on pixel-perfect implementations and cross-browser compatibility.",
    },
    {
      year: "2020",
      skills: [
        { name: "React", level: 75, category: "Frontend" },
        { name: "JavaScript ES6+", level: 85, category: "Frontend" },
        { name: "Node.js", level: 70, category: "Backend" },
        { name: "MongoDB", level: 65, category: "Backend" },
        { name: "Git", level: 80, category: "Tools" },
        { name: "AWS", level: 60, category: "Tools" },
      ],
      summary:
        "Transitioned to modern JavaScript ecosystem with React and Node.js. Gained experience in full-stack development and cloud deployment.",
    },
    {
      year: "2022",
      skills: [
        { name: "React", level: 90, category: "Frontend" },
        { name: "TypeScript", level: 85, category: "Frontend" },
        { name: "Next.js", level: 80, category: "Frontend" },
        { name: "GraphQL", level: 75, category: "Backend" },
        { name: "Docker", level: 70, category: "Tools" },
        { name: "Jest/Testing", level: 85, category: "Tools" },
      ],
      summary:
        "Advanced React expertise with TypeScript adoption. Implemented testing strategies and containerization for scalable applications.",
    },
    {
      year: "2024",
      skills: [
        { name: "React 18", level: 95, category: "Frontend" },
        { name: "TypeScript", level: 90, category: "Frontend" },
        { name: "Next.js 14", level: 90, category: "Frontend" },
        { name: "Tailwind CSS", level: 95, category: "Frontend" },
        { name: "GraphQL", level: 85, category: "Backend" },
        { name: "Microservices", level: 80, category: "Backend" },
      ],
      summary:
        "Mastery of modern React ecosystem with focus on performance optimization and scalable architecture. Leading technical decisions and mentoring teams.",
    },
  ];

  // Mock data for company spotlight
  const companies = [
    {
      id: 1,
      name: "TechCorp Solutions",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
      industry: "Enterprise Software",
      size: "500-1000 employees",
      location: "San Francisco, CA",
      website: "https://techcorp.example.com",
      description:
        "Leading provider of enterprise software solutions serving Fortune 500 companies worldwide. Specializes in scalable web applications and data analytics platforms.",
      stats: [
        { label: "Annual Revenue", value: "$50M+" },
        { label: "Global Clients", value: "200+" },
        { label: "Team Size", value: "800+" },
        { label: "Countries", value: "15+" },
      ],
      contributions: [
        "Architected frontend infrastructure serving 100K+ daily active users",
        "Reduced application load time by 45% through performance optimization",
        "Led team of 5 developers in delivering critical product features",
        "Established coding standards and best practices across frontend teams",
      ],
      technologies: [
        "React 18",
        "TypeScript",
        "Next.js",
        "GraphQL",
        "AWS",
        "Docker",
      ],
    },
    {
      id: 2,
      name: "StartupHub Inc",
      logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=100&h=100&fit=crop&crop=center",
      industry: "Fintech",
      size: "50-100 employees",
      location: "Austin, TX",
      website: "https://startuphub.example.com",
      description:
        "Innovative fintech startup revolutionizing personal finance management through AI-powered insights and automated investment strategies.",
      stats: [
        { label: "Funding Raised", value: "$10M" },
        { label: "Active Users", value: "25K+" },
        { label: "Team Growth", value: "300%" },
        { label: "App Rating", value: "4.8★" },
      ],
      contributions: [
        "Built entire frontend application from MVP to production scale",
        "Implemented secure payment processing with 99.9% uptime",
        "Created responsive design supporting mobile-first user base",
        "Developed real-time trading interface with WebSocket integration",
      ],
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Stripe API",
        "WebSocket",
        "AWS",
      ],
    },
  ];

  // Mock data for testimonials
  const testimonials = [
    {
      id: 1,
      content:
        "Working with this developer was exceptional. Their attention to detail and ability to translate complex requirements into elegant solutions made our project a huge success. The code quality and performance improvements exceeded our expectations.",
      authorName: "Sarah Johnson",
      authorRole: "Product Manager",
      authorImage: "https://randomuser.me/api/portraits/women/32.jpg",
      company: "TechCorp Solutions",
      rating: 5,
      relationship: "Direct Manager",
    },
    {
      id: 2,
      content:
        "One of the most talented frontend developers I've worked with. Their React expertise and problem-solving skills helped us deliver our MVP ahead of schedule. Great communicator and team player who always goes the extra mile.",
      authorName: "Michael Chen",
      authorRole: "CTO",
      authorImage: "https://randomuser.me/api/portraits/men/45.jpg",
      company: "StartupHub Inc",
      rating: 5,
      relationship: "Former Colleague",
    },
    {
      id: 3,
      content:
        "Incredible technical skills combined with excellent project management abilities. They consistently delivered pixel-perfect implementations while meeting tight deadlines. A true professional who I'd recommend without hesitation.",
      authorName: "Emily Rodriguez",
      authorRole: "Design Director",
      authorImage: "https://randomuser.me/api/portraits/women/28.jpg",
      company: "Digital Agency Pro",
      rating: 5,
      relationship: "Client",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Professional Journey - DevPortfolio Pro</title>
        <meta
          name="description"
          content="Explore my professional journey through interactive timeline, career highlights, and skills evolution in frontend development."
        />
      </Helmet>
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
              <Icon name="MapPin" size={16} className="mr-2" />
              Professional Journey
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              My Career
              <span className="gradient-text block">Evolution</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              A chronological journey through my professional growth, technical
              evolution, and the impactful projects that shaped my expertise in
              frontend development.
            </p>
          </motion.div>

          {/* Journey Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { label: "Years Experience", value: "5+", icon: "Calendar" },
              { label: "Companies", value: "3", icon: "Building2" },
              { label: "Projects Delivered", value: "50+", icon: "Briefcase" },
              { label: "Technologies Mastered", value: "15+", icon: "Code2" },
            ]?.map((stat, index) => (
              <div
                key={index}
                className="bg-card rounded-xl shadow-lg border border-border p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name={stat?.icon} size={24} className="text-accent" />
                </div>
                <div className="text-2xl font-bold text-text-primary mb-1">
                  {stat?.value}
                </div>
                <div className="text-sm text-text-secondary">{stat?.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Skills Evolution Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Skills Evolution Timeline
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Watch how my technical expertise has grown and evolved throughout
              my career journey.
            </p>
          </motion.div>

          <SkillsEvolution skillsData={skillsEvolution} />
        </div>
      </section>
      {/* Main Timeline Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Timeline */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                  Professional Timeline
                </h2>
                <p className="text-lg text-text-secondary">
                  A detailed look at my career progression and key achievements
                  at each stage.
                </p>
              </motion.div>

              <div className="relative">
                {experiences?.map((experience, index) => (
                  <TimelineItem
                    key={experience?.id}
                    experience={experience}
                    index={index}
                    isLast={index === experiences?.length - 1}
                  />
                ))}
              </div>
            </div>

            {/* Career Highlights Sidebar */}
            <div className="lg:col-span-1">
              <CareerHighlights highlights={careerHighlights} />
            </div>
          </div>
        </div>
      </section>
      {/* Company Spotlight Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Company Spotlight
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Explore the companies I've worked with and my specific
              contributions to their success.
            </p>
          </motion.div>

          <CompanySpotlight companies={companies} />
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              What Colleagues Say
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Testimonials from managers, colleagues, and clients I've worked
              with throughout my career.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials?.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial?.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Add Your Project to My Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how my experience and expertise can contribute to
              your next big project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                iconName="MessageSquare"
                iconPosition="left"
                iconSize={20}
                className="bg-white text-primary hover:bg-white/90"
              >
                Start Conversation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                iconSize={20}
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">Hex</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">Hex</h3>
                  <p className="text-xs text-text-secondary -mt-1">Code</p>
                </div>
              </div>
              <p className="text-text-secondary mb-4 max-w-md">
                Crafting exceptional digital experiences through innovative
                frontend development and user-centric design.
              </p>
              <div className="flex space-x-4">
                {["Github", "Linkedin", "Twitter", "Mail"]?.map((social) => (
                  <button
                    key={social}
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-200"
                  >
                    <Icon name={social} size={18} />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-text-primary mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {["Portfolio", "Skills", "About", "Contact"]?.map((link) => (
                  <li key={link}>
                    <button className="text-text-secondary hover:text-accent transition-colors duration-200 text-sm">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-semibold text-text-primary mb-4">
                Get in Touch
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-text-secondary">
                  <Icon name="Mail" size={14} className="mr-2" />
                  adeyemipelumi1980@gmail.com
                </li>
                <li className="flex items-center text-sm text-text-secondary">
                  <Icon name="MapPin" size={14} className="mr-2" />
                  ibadan,oyostate Nigeria
                </li>
                <li className="flex items-center text-sm text-text-secondary">
                  <Icon name="Phone" size={14} className="mr-2" />
                  +2349021615849
                  <br />
                  +2347073719304
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-text-secondary">
              © {new Date()?.getFullYear()} HexPortfolio Pro. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-sm text-text-secondary hover:text-accent transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-sm text-text-secondary hover:text-accent transition-colors duration-200">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfessionalJourney;
