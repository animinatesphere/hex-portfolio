import React, { useState } from "react";
import Header from "../../components/ui/Header";
import Icon from "../../components/AppIcon";
import ContactForm from "./components/ContactForm";
import AvailabilityCalendar from "./components/AvailabilityCalendar";
import ContactMethods from "./components/ContactMethods";
import TestimonialsSection from "./components/TestimonialsSection";
import WorkingTogetherSection from "./components/WorkingTogetherSection";
import PricingSection from "./components/PricingSection";
import ResourcesSection from "./components/ResourcesSection";

const CollaborationHub = () => {
  const [activeTab, setActiveTab] = useState("contact");

  const tabOptions = [
    {
      id: "contact",
      label: "Start Project",
      icon: "MessageSquare",
      description: "Project inquiry form",
    },
    {
      id: "calendar",
      label: "Book Call",
      icon: "Calendar",
      description: "Schedule consultation",
    },
    {
      id: "methods",
      label: "Contact Info",
      icon: "Phone",
      description: "Direct contact methods",
    },
    {
      id: "testimonials",
      label: "Success Stories",
      icon: "Star",
      description: "Client testimonials",
    },
    {
      id: "process",
      label: "How I Work",
      icon: "GitBranch",
      description: "Development process",
    },
    {
      id: "pricing",
      label: "Investment",
      icon: "DollarSign",
      description: "Pricing & packages",
    },
    {
      id: "resources",
      label: "Resources",
      icon: "Download",
      description: "Downloads & links",
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "contact":
        return <ContactForm />;
      case "calendar":
        return <AvailabilityCalendar />;
      case "methods":
        return <ContactMethods />;
      case "testimonials":
        return <TestimonialsSection />;
      case "process":
        return <WorkingTogetherSection />;
      case "pricing":
        return <PricingSection />;
      case "resources":
        return <ResourcesSection />;
      default:
        return <ContactForm />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary via-primary to-accent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6">
              <Icon name="Sparkles" size={16} className="mr-2" />
              <span className="text-sm font-medium">Ready to collaborate</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Let's Build Something
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Amazing Together
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
              Your vision, my expertise. From initial concept to final
              deployment, I'm here to transform your ideas into exceptional
              digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center text-white">
                <Icon name="Clock" size={20} className="mr-2" />
                <span className="text-white">
                  Usually responds within 4 hours
                </span>
              </div>
              <div className="flex items-center text-white">
                <Icon name="CheckCircle" size={20} className="mr-2" />
                <span className="text-white">Free consultation included</span>
              </div>
              <div className="flex items-center text-white">
                <Icon name="Shield" size={20} className="mr-2" />
                <span className="text-white">
                  30-day satisfaction guarantee
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Navigation Tabs */}
      <section className="bg-white border-b border-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center space-x-1 overflow-x-auto py-4">
            {tabOptions?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab?.id
                    ? "bg-accent text-white shadow-md"
                    : "text-text-primary hover:bg-muted hover:text-accent"
                }`}
              >
                <Icon name={tab?.icon} size={16} className="mr-2" />
                <div className="text-left">
                  <div>{tab?.label}</div>
                  <div
                    className={`text-xs ${
                      activeTab === tab?.id
                        ? "text-white/80"
                        : "text-text-secondary"
                    }`}
                  >
                    {tab?.description}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Main Content */}
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-fade-in">{renderTabContent()}</div>
        </div>
      </main>
      {/* Quick Action Footer */}
      <section className="bg-muted py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-text-secondary mb-8">
            Every great project begins with a conversation. Let's discuss your
            vision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => setActiveTab("contact")}
              className="bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200 flex items-center"
            >
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Start Your Project
            </button>

            <button
              onClick={() => setActiveTab("calendar")}
              className="border border-border text-text-primary px-8 py-3 rounded-lg font-medium hover:bg-muted transition-colors duration-200 flex items-center"
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Book Free Consultation
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex items-center justify-center space-x-8 text-sm text-text-secondary">
              <div className="flex items-center">
                <Icon name="Mail" size={16} className="mr-2" />
                <span>hello@devportfolio.pro</span>
              </div>
              <div className="flex items-center">
                <Icon name="Phone" size={16} className="mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Icon name="MapPin" size={16} className="mr-2" />
                <span>Eastern Time (ET)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">DP</span>
              </div>
              <div>
                <div className="font-semibold">DevPortfolio Pro</div>
                <div className="text-sm opacity-75">
                  Frontend Development Excellence
                </div>
              </div>
            </div>

            <div className="text-sm opacity-75">
              © {new Date()?.getFullYear()} DevPortfolio Pro. All rights
              reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CollaborationHub;
