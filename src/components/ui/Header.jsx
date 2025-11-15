import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import Icon from "../AppIcon";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { name: "Portfolio", path: "/project-showcase", icon: "FolderOpen" },
    { name: "Skills", path: "/skills-laboratory", icon: "Code2" },
    { name: "Journey", path: "/professional-journey", icon: "MapPin" },
    { name: "About", path: "/about-philosophy", icon: "User" },
    { name: "Collaborate", path: "/collaboration-hub", icon: "MessageSquare" },
    { name: "Colour", path: "/Hexcode-Logo", icon: "MessageSquare" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path) => {
    if (path === "/hero-landing" || path === "/") {
      navigate("/");
    } else {
      navigate(path);
    }
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path) => {
    if (path === "/hero-landing" || path === "/") {
      return (
        location?.pathname === "/" || location?.pathname === "/hero-landing"
      );
    }
    return location?.pathname === path;
  };

  return (
    <header
      className={`bg-[white] fixed top-0 left-0 right-0 z-50 transition-all duration-normal ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavigation("/")}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-fast">
                <span className="text-white font-bold text-lg">HEX</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-primary to-accent rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-fast blur-sm"></div>
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-fast">
                Hex Code
              </h1>
              <p className="text-xs text-text-secondary -mt-1">Portfolio</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <button
                key={item?.path}
                onClick={() => handleNavigation(item?.path)}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-fast hover:bg-muted ${
                  isActivePath(item?.path)
                    ? "text-accent bg-accent/10"
                    : "text-text-primary hover:text-accent"
                }`}
              >
                <Icon name={item?.icon} size={16} className="mr-2" />
                {item?.name}
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleNavigation("/collaboration-hub")}
              iconName="Calendar"
              iconPosition="left"
              iconSize={16}
            >
              Schedule Call
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={() => handleNavigation("/project-showcase")}
              iconName="ArrowRight"
              iconPosition="right"
              iconSize={16}
            >
              View Work
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-fast"
            aria-label="Toggle mobile menu"
          >
            <Icon
              name={isMobileMenuOpen ? "X" : "Menu"}
              size={24}
              className="text-text-primary"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-normal overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-4 bg-background/95 backdrop-blur-md border-t border-border">
            <nav className="space-y-2">
              {navigationItems?.map((item) => (
                <button
                  key={item?.path}
                  onClick={() => handleNavigation(item?.path)}
                  className={`flex items-center w-full px-4 py-3 rounded-lg text-left transition-all duration-fast hover:bg-muted ${
                    isActivePath(item?.path)
                      ? "text-accent bg-accent/10"
                      : "text-text-primary hover:text-accent"
                  }`}
                >
                  <Icon name={item?.icon} size={20} className="mr-3" />
                  <span className="font-medium">{item?.name}</span>
                </button>
              ))}
            </nav>

            {/* Mobile CTAs */}
            <div className="mt-6 space-y-3">
              <Button
                variant="outline"
                fullWidth
                onClick={() => handleNavigation("/collaboration-hub")}
                iconName="Calendar"
                iconPosition="left"
                iconSize={16}
              >
                Schedule Call
              </Button>
              <Button
                variant="default"
                fullWidth
                onClick={() => handleNavigation("/project-showcase")}
                iconName="ArrowRight"
                iconPosition="right"
                iconSize={16}
              >
                View Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
