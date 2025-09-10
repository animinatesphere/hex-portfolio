import React, { useEffect } from "react";
import Header from "../../components/ui/Header";
import HeroSection from "./components/HeroSection";
import PersonalStory from "./components/PersonalStory";
import TechnicalPhilosophy from "./components/TechnicalPhilosophy";
import DayInLife from "./components/DayInLife";
import PersonalInterests from "./components/PersonalInterests";
import DownloadableResources from "./components/DownloadableResources";

const AboutPhilosophy = () => {
  useEffect(() => {
    // Set page title
    document.title = "About & Philosophy - DevPortfolio Pro";

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <HeroSection />
      {/* Personal Story Section */}
      <div id="personal-story">
        <PersonalStory />
      </div>
      {/* Technical Philosophy */}
      <TechnicalPhilosophy />
      {/* Day in Life */}
      <DayInLife />
      {/* Personal Interests */}
      <PersonalInterests />
      {/* Downloadable Resources */}
      <DownloadableResources />
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">HEX</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">DevPortfolio Pro</h3>
                  <p className="text-sm opacity-80">Frontend Developer</p>
                </div>
              </div>
              <p className="text-white/80 mb-4 max-w-md">
                Crafting digital experiences that bridge the gap between complex
                functionality and intuitive user interaction.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a
                    href="/project-showcase"
                    className="hover:text-accent transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="/skills-laboratory"
                    className="hover:text-accent transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="/professional-journey"
                    className="hover:text-accent transition-colors"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="/collaboration-hub"
                    className="hover:text-accent transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Resume PDF
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Code Samples
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Tech Articles
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Speaking Materials
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>
              &copy; {new Date()?.getFullYear()} DevPortfolio Pro. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPhilosophy;
