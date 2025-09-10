import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import HeroIntro from './components/HeroIntro';
import ProfileSection from './components/ProfileSection';
import TechStack from './components/TechStack';
import AchievementMetrics from './components/AchievementMetrics';
import ScrollIndicator from './components/ScrollIndicator';
import BackgroundElements from './components/BackgroundElements';

const HeroLanding = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.8
  };

  return (
    <motion.div
      className="min-h-screen bg-primary relative overflow-hidden"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Header */}
      <Header />
      {/* Background Elements */}
      <BackgroundElements />
      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)]">
            {/* Hero Introduction */}
            <HeroIntro onNavigate={handleNavigation} />

            {/* Profile Section */}
            <ProfileSection />
          </div>
        </div>

        {/* Tech Stack Visualization */}
        <TechStack />

        {/* Achievement Metrics */}
        <AchievementMetrics />

        {/* Scroll Indicator */}
        <ScrollIndicator onNavigate={handleNavigation} />
      </main>
      {/* Next Section Anchor */}
      <div id="next-section" className="absolute bottom-0 w-full h-px" />
    </motion.div>
  );
};

export default HeroLanding;