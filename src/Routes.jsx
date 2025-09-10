import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ProjectShowcase from "./pages/project-showcase";
import SkillsLaboratory from "./pages/skills-laboratory";
import HeroLanding from "./pages/hero-landing";
import CollaborationHub from "./pages/collaboration-hub";
import AboutPhilosophy from "./pages/about-philosophy";
import ProfessionalJourney from "./pages/professional-journey";
import HexcodeLogo from "pages/HexcodeLogo";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Define your route here */}
          <Route path="/" element={<AboutPhilosophy />} />
          <Route path="/project-showcase" element={<ProjectShowcase />} />
          <Route path="/skills-laboratory" element={<SkillsLaboratory />} />
          <Route path="/hero-landing" element={<HeroLanding />} />
          <Route path="/collaboration-hub" element={<CollaborationHub />} />
          <Route path="/about-philosophy" element={<AboutPhilosophy />} />
          <Route
            path="/professional-journey"
            element={<ProfessionalJourney />}
          />
          <Route path="/Hexcode-Logo" element={<HexcodeLogo />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
