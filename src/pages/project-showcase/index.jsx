import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import ProjectCard from './components/ProjectCard';
import ProjectFilter from './components/ProjectFilter';
import ProjectModal from './components/ProjectModal';
import DemoModal from './components/DemoModal';
import GitHubStats from './components/GitHubStats';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ProjectShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeTechFilter, setActiveTechFilter] = useState('all');
  const [activeTypeFilter, setActiveTypeFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoProject, setDemoProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for managing online store operations with real-time analytics, inventory management, and customer insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Redux Toolkit", "Node.js"],
      type: "freelance",
      year: "2024",
      featured: true,
      demoUrl: "https://ecommerce-dashboard-demo.vercel.app",
      githubUrl: "https://github.com/devportfolio/ecommerce-dashboard",
      figmaUrl: "https://figma.com/design/ecommerce-dashboard",
      timeline: "3 months",
      industry: "E-commerce",
      teamSize: "Solo",
      metrics: {
        stars: 45,
        forks: 12,
        views: "2.3k",
        commits: 127
      },
      performance: {
        score: 94,
        loadTime: "1.2s",
        users: "5.2k"
      },
      problemStatement: `The client needed a comprehensive dashboard to manage their growing e-commerce business. They were struggling with scattered data across multiple platforms, making it difficult to track inventory, analyze sales trends, and understand customer behavior. The existing solution was slow, outdated, and lacked real-time capabilities.`,
      technicalApproach: `I built a modern React-based dashboard using TypeScript for type safety and Redux Toolkit for efficient state management. The architecture focuses on modularity with reusable components and custom hooks. Real-time updates are handled through WebSocket connections, while data visualization is powered by Chart.js with custom styling to match the brand.`,
      codeSnippet: `// Custom hook for real-time dashboard data
const useDashboardData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const ws = new WebSocket('wss://api.example.com/dashboard');
    
    ws.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setData(newData);
      setLoading(false);
    };
    
    return () => ws.close();
  }, []);
  
  return { data, loading };
};`,
      results: [
        { value: "40%", metric: "Load Time Reduction" },
        { value: "85%", metric: "User Satisfaction" },
        { value: "60%", metric: "Task Completion Rate" }
      ],
      testimonial: {
        text: "The dashboard completely transformed how we manage our business. The real-time insights and intuitive interface have made our daily operations so much more efficient. Our team productivity increased by 40% since implementation.",
        author: "Sarah Johnson",
        role: "CEO, TechMart Solutions"
      }
    },
    {
      id: 2,
      title: "SaaS Landing Page",
      description: "A high-converting landing page for a B2B SaaS platform featuring animated sections, interactive demos, and optimized conversion funnels.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      techStack: ["Vue.js", "Nuxt.js", "SCSS", "Framer Motion", "Strapi CMS"],
      type: "agency",
      year: "2024",
      featured: true,
      demoUrl: "https://saas-landing-demo.netlify.app",
      githubUrl: "https://github.com/devportfolio/saas-landing",
      figmaUrl: "https://figma.com/design/saas-landing",
      timeline: "6 weeks",
      industry: "SaaS",
      teamSize: "3 developers",
      metrics: {
        stars: 32,
        forks: 8,
        views: "1.8k",
        commits: 89
      },
      performance: {
        score: 98,
        loadTime: "0.9s",
        users: "12.5k"
      },
      problemStatement: `The SaaS company was experiencing low conversion rates on their existing landing page. The page lacked visual appeal, had poor mobile experience, and failed to effectively communicate the product's value proposition. They needed a complete redesign that would increase sign-ups and trial conversions.`,
      technicalApproach: `Using Vue.js and Nuxt.js for optimal SEO performance, I created a component-based architecture with smooth animations powered by Framer Motion. The page features lazy loading, progressive image enhancement, and A/B testing capabilities. Strapi CMS integration allows for easy content updates without developer intervention.`,
      codeSnippet: `// Intersection Observer for scroll animations
const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => observer.disconnect();
  }, [threshold]);
  
  return [elementRef, isVisible];
};`,
      results: [
        { value: "156%", metric: "Conversion Rate Increase" },
        { value: "73%", metric: "Mobile Performance" },
        { value: "2.3x", metric: "Page Engagement" }
      ],
      testimonial: {
        text: "Our conversion rate more than doubled after launching the new landing page. The design is stunning and the performance is incredible. We've seen a significant increase in qualified leads and trial sign-ups.",
        author: "Michael Chen",
        role: "Head of Marketing, CloudSync Pro"
      }
    },
    {
      id: 3,
      title: "Creative Agency Portfolio",
      description: "An award-winning portfolio website for a creative agency featuring immersive animations, case study presentations, and interactive project galleries.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
      techStack: ["React", "Three.js", "GSAP", "Styled Components", "Contentful"],
      type: "agency",
      year: "2023",
      featured: false,
      demoUrl: "https://creative-agency-demo.vercel.app",
      githubUrl: "https://github.com/devportfolio/creative-agency",
      figmaUrl: "https://figma.com/design/creative-agency",
      timeline: "4 months",
      industry: "Creative Agency",
      teamSize: "4 developers",
      metrics: {
        stars: 67,
        forks: 23,
        views: "4.1k",
        commits: 203
      },
      performance: {
        score: 91,
        loadTime: "1.8s",
        users: "8.7k"
      },
      problemStatement: `The creative agency needed a portfolio that would showcase their work in an innovative way while maintaining excellent performance. Their previous site was static and didn't reflect their creative capabilities. They wanted something that would wow potential clients and set them apart from competitors.`,
      technicalApproach: `I leveraged Three.js for 3D elements and GSAP for complex animations, creating an immersive experience. The site uses React with Styled Components for maintainable styling. Performance optimization includes code splitting, lazy loading, and efficient asset management. Contentful CMS enables easy project updates.`,
      codeSnippet: `// Three.js scene setup for interactive background
const Scene = () => {
  const mountRef = useRef(null);
  
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    // Create floating geometric shapes
    const geometry = new THREE.IcosahedronGeometry(1, 0);
    const material = new THREE.MeshPhongMaterial({ color: 0xff6b35 });
    const mesh = new THREE.Mesh(geometry, material);
    
    scene.add(mesh);
    mountRef.current.appendChild(renderer.domElement);
    
    const animate = () => {
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    
    animate();
  }, []);
  
  return <div ref={mountRef} />;
};`,
      results: [
        { value: "300%", metric: "Client Inquiries" },
        { value: "4.8/5", metric: "User Experience Rating" },
        { value: "45%", metric: "Time on Site Increase" }
      ],
      testimonial: {
        text: "This portfolio completely transformed our business. The interactive elements and stunning visuals perfectly represent our creative capabilities. We've received more high-quality leads in the past 6 months than in the previous 2 years combined.",
        author: "Emma Rodriguez",
        role: "Creative Director, Pixel Perfect Studio"
      }
    },
    {
      id: 4,
      title: "Real Estate Platform",
      description: "A comprehensive real estate platform with property listings, virtual tours, mortgage calculators, and agent management system.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      techStack: ["React", "Next.js", "PostgreSQL", "Mapbox", "Stripe", "AWS"],
      type: "freelance",
      year: "2023",
      featured: false,
      demoUrl: "https://realestate-platform-demo.vercel.app",
      githubUrl: "https://github.com/devportfolio/realestate-platform",
      figmaUrl: "https://figma.com/design/realestate-platform",
      timeline: "5 months",
      industry: "Real Estate",
      teamSize: "Solo",
      metrics: {
        stars: 28,
        forks: 7,
        views: "1.5k",
        commits: 156
      },
      performance: {
        score: 89,
        loadTime: "1.5s",
        users: "3.2k"
      },
      problemStatement: `A real estate agency needed a modern platform to showcase properties, manage leads, and provide tools for both agents and clients. Their existing website was outdated, lacked mobile optimization, and didn't integrate with their CRM system. They needed a comprehensive solution that would streamline their operations.`,
      technicalApproach: `Built with Next.js for SEO optimization and server-side rendering. Integrated Mapbox for interactive property maps, Stripe for payment processing, and AWS for scalable file storage. The platform features a custom CMS for property management, automated lead scoring, and real-time chat functionality.`,
      codeSnippet: `// Property search with geolocation filtering
const usePropertySearch = (filters) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const searchProperties = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/properties/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...filters,
          location: {
            lat: filters.lat,
            lng: filters.lng,
            radius: filters.radius || 10
          }
        })
      });
      
      const data = await response.json();
      setProperties(data.properties);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setLoading(false);
    }
  }, [filters]);
  
  return { properties, loading, searchProperties };
};`,
      results: [
        { value: "180%", metric: "Lead Generation" },
        { value: "92%", metric: "Mobile Usage" },
        { value: "35%", metric: "Conversion Rate" }
      ],
      testimonial: {
        text: "The platform has revolutionized how we do business. Our agents love the intuitive interface and clients appreciate the virtual tours and detailed property information. Our lead conversion rate has nearly doubled.",
        author: "David Thompson",
        role: "Broker, Premier Properties Group"
      }
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      description: "A comprehensive fitness tracking application with workout planning, progress monitoring, social features, and nutrition tracking.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      techStack: ["React Native", "TypeScript", "Firebase", "Redux", "Chart.js"],
      type: "personal",
      year: "2023",
      featured: false,
      demoUrl: "https://fitness-app-demo.netlify.app",
      githubUrl: "https://github.com/devportfolio/fitness-tracker",
      figmaUrl: "https://figma.com/design/fitness-tracker",
      timeline: "4 months",
      industry: "Health & Fitness",
      teamSize: "Solo",
      metrics: {
        stars: 89,
        forks: 34,
        views: "6.2k",
        commits: 234
      },
      performance: {
        score: 96,
        loadTime: "1.1s",
        users: "15.3k"
      },
      problemStatement: `As a fitness enthusiast, I noticed existing fitness apps were either too complex or lacked comprehensive tracking features. Users needed a simple yet powerful tool to track workouts, monitor progress, and stay motivated through social features and gamification.`,
      technicalApproach: `Developed using React Native for cross-platform compatibility with TypeScript for type safety. Firebase handles authentication, real-time data sync, and cloud storage. Redux manages complex state including workout data, user preferences, and social interactions. Custom charts visualize progress over time.`,
      codeSnippet: `// Workout progress tracking hook
const useWorkoutProgress = (userId) => {
  const [progress, setProgress] = useState(null);
  const [streak, setStreak] = useState(0);
  
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('workouts')
      .where('userId', '==', userId)
      .orderBy('date', 'desc')
      .limit(30)
      .onSnapshot((snapshot) => {
        const workouts = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        // Calculate progress metrics
        const totalWorkouts = workouts.length;
        const currentStreak = calculateStreak(workouts);
        const weeklyAverage = calculateWeeklyAverage(workouts);
        
        setProgress({ totalWorkouts, weeklyAverage });
        setStreak(currentStreak);
      });
    
    return unsubscribe;
  }, [userId]);
  
  return { progress, streak };
};`,
      results: [
        { value: "15k+", metric: "Active Users" },
        { value: "4.7/5", metric: "App Store Rating" },
        { value: "78%", metric: "User Retention" }
      ]
    },
    {
      id: 6,
      title: "Restaurant Management System",
      description: "A complete restaurant management solution with POS integration, inventory tracking, staff scheduling, and customer analytics.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      techStack: ["Vue.js", "Laravel", "MySQL", "Socket.io", "Stripe", "PWA"],
      type: "freelance",
      year: "2022",
      featured: false,
      demoUrl: "https://restaurant-system-demo.herokuapp.com",
      githubUrl: "https://github.com/devportfolio/restaurant-management",
      figmaUrl: "https://figma.com/design/restaurant-management",
      timeline: "6 months",
      industry: "Food & Beverage",
      teamSize: "2 developers",
      metrics: {
        stars: 41,
        forks: 15,
        views: "2.1k",
        commits: 178
      },
      performance: {
        score: 87,
        loadTime: "1.7s",
        users: "2.8k"
      },
      problemStatement: `A restaurant chain needed an integrated system to manage multiple locations, track inventory across sites, schedule staff efficiently, and analyze customer data. Their existing systems were disconnected, leading to inefficiencies and data inconsistencies.`,
      technicalApproach: `Built with Vue.js frontend and Laravel backend for robust API development. MySQL database with optimized queries for real-time reporting. Socket.io enables real-time order updates and kitchen communication. PWA capabilities allow offline functionality for critical operations.`,
      codeSnippet: `// Real-time order management
const OrderManager = {
  init() {
    this.socket = io('/orders');
    this.setupEventListeners();
  },
  
  setupEventListeners() {
    this.socket.on('new-order', (order) => {
      this.addOrderToQueue(order);
      this.notifyKitchen(order);
      this.updateInventory(order.items);
    });
    
    this.socket.on('order-completed', (orderId) => {
      this.removeFromQueue(orderId);
      this.updateCustomerStatus(orderId, 'ready');
    });
  },
  
  createOrder(orderData) {
    return fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    }).then(response => response.json());
  }
};`,
      results: [
        { value: "45%", metric: "Order Processing Speed" },
        { value: "30%", metric: "Inventory Waste Reduction" },
        { value: "25%", metric: "Staff Efficiency Gain" }
      ],
      testimonial: {
        text: "This system has streamlined our entire operation. We can now manage all our locations from a single dashboard, and our staff loves how intuitive it is. Our food waste has decreased significantly thanks to better inventory tracking.",
        author: "Maria Gonzalez",
        role: "Operations Manager, Bella Vista Restaurants"
      }
    }
  ];

  // Filter projects based on active filters
  const filteredProjects = useMemo(() => {
    return projects?.filter(project => {
      const matchesMainFilter = activeFilter === 'all' || 
        (activeFilter === 'featured' && project?.featured) ||
        (activeFilter === 'recent' && parseInt(project?.year) >= 2024);
      
      const matchesTechFilter = activeTechFilter === 'all' || 
        project?.techStack?.some(tech => 
          tech?.toLowerCase()?.includes(activeTechFilter?.toLowerCase())
        );
      
      const matchesTypeFilter = activeTypeFilter === 'all' || 
        project?.type === activeTypeFilter;
      
      return matchesMainFilter && matchesTechFilter && matchesTypeFilter;
    });
  }, [projects, activeFilter, activeTechFilter, activeTypeFilter]);

  // Calculate project counts for filters
  const projectCounts = useMemo(() => ({
    all: projects?.length,
    featured: projects?.filter(p => p?.featured)?.length,
    recent: projects?.filter(p => parseInt(p?.year) >= 2024)?.length
  }), [projects]);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleViewDemo = (project) => {
    setDemoProject(project);
    setIsDemoModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
    setDemoProject(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Project <span className="gradient-text">Showcase</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Explore my portfolio of web applications, from e-commerce platforms to creative agency sites. 
              Each project represents a unique challenge solved with modern technologies and best practices.
            </p>
          </motion.div>

          {/* Stats Overview */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">
                {projects?.length}+
              </div>
              <div className="text-sm text-text-secondary">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {projects?.reduce((sum, p) => sum + p?.metrics?.stars, 0)}+
              </div>
              <div className="text-sm text-text-secondary">GitHub Stars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">
                {projects?.filter(p => p?.featured)?.length}
              </div>
              <div className="text-sm text-text-secondary">Featured Works</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning mb-2">
                98%
              </div>
              <div className="text-sm text-text-secondary">Client Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Main Content */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Project Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ProjectFilter
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              activeTechFilter={activeTechFilter}
              onTechFilterChange={setActiveTechFilter}
              activeTypeFilter={activeTypeFilter}
              onTypeFilterChange={setActiveTypeFilter}
              projectCounts={projectCounts}
            />
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {filteredProjects?.map((project, index) => (
              <motion.div
                key={project?.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <ProjectCard
                  project={project}
                  onViewDetails={handleViewDetails}
                  onViewDemo={handleViewDemo}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredProjects?.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Icon name="Search" size={48} className="mx-auto mb-4 text-text-secondary" />
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                No projects found
              </h3>
              <p className="text-text-secondary mb-6">
                Try adjusting your filters to see more projects.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setActiveFilter('all');
                  setActiveTechFilter('all');
                  setActiveTypeFilter('all');
                }}
              >
                Clear All Filters
              </Button>
            </motion.div>
          )}

          {/* GitHub Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <GitHubStats />
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life. I specialize in creating 
              high-performance web applications that deliver exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                onClick={() => window.location.href = '/collaboration-hub'}
                iconName="MessageSquare"
                iconPosition="left"
                iconSize={20}
              >
                Start a Conversation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = '/professional-journey'}
                iconName="User"
                iconPosition="left"
                iconSize={20}
              >
                Learn About Me
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onViewDemo={handleViewDemo}
      />
      <DemoModal
        project={demoProject}
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemoModal}
      />
    </div>
  );
};

export default ProjectShowcase;