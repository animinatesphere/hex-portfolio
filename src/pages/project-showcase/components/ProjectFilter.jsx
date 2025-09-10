import React from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";
import Button from "../../../components/ui/Button";

const ProjectFilter = ({
  activeFilter,
  onFilterChange,
  activeTechFilter,
  onTechFilterChange,
  activeTypeFilter,
  onTypeFilterChange,
  projectCounts,
}) => {
  const filterOptions = [
    {
      key: "all",
      label: "All Projects",
      icon: "Grid3X3",
      count: projectCounts?.all,
    },
    {
      key: "featured",
      label: "Featured",
      icon: "Star",
      count: projectCounts?.featured,
    },
    {
      key: "recent",
      label: "Recent",
      icon: "Clock",
      count: projectCounts?.recent,
    },
  ];

  const techFilters = [
    { key: "all", label: "All Tech", icon: "Code2" },
    { key: "react", label: "React", icon: "Atom" },
    { key: "html", label: "html", icon: "Triangle" },
    { key: "javascript", label: "Vanilla JS", icon: "Zap" },
    { key: "typescript", label: "TypeScript", icon: "FileCode" },
    { key: "nextjs", label: "Next.js", icon: "FileCode" },
  ];

  const typeFilters = [
    { key: "all", label: "All Types", icon: "Layers" },
    { key: "freelance", label: "Freelance", icon: "User" },
    { key: "agency", label: "Agency", icon: "Building" },
    { key: "personal", label: "Personal", icon: "Heart" },
  ];

  return (
    <div className="bg-card rounded-xl p-6 shadow-sm border border-border mb-8">
      {/* Main Filters */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-text-primary mb-3 flex items-center">
          <Icon name="Filter" size={16} className="mr-2" />
          Filter Projects
        </h3>
        <div className="flex flex-wrap gap-2">
          {filterOptions?.map((option) => (
            <motion.button
              key={option?.key}
              onClick={() => onFilterChange(option?.key)}
              className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-fast ${
                activeFilter === option?.key
                  ? "bg-accent text-accent-foreground shadow-sm"
                  : "bg-muted text-text-primary hover:bg-accent/10 hover:text-accent"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Icon name={option?.icon} size={16} className="mr-2" />
              {option?.label}
              <span className="ml-2 px-2 py-0.5 bg-background/50 rounded-full text-xs">
                {option?.count}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
      {/* Technology Filters */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-text-primary mb-3 flex items-center">
          <Icon name="Code2" size={14} className="mr-2" />
          Technology Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {techFilters?.map((tech) => (
            <button
              key={tech?.key}
              onClick={() => onTechFilterChange(tech?.key)}
              className={`flex items-center px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-fast ${
                activeTechFilter === tech?.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-text-secondary hover:bg-primary/10 hover:text-primary"
              }`}
            >
              <Icon name={tech?.icon} size={12} className="mr-1.5" />
              {tech?.label}
            </button>
          ))}
        </div>
      </div>
      {/* Project Type Filters */}
      <div>
        <h4 className="text-sm font-medium text-text-primary mb-3 flex items-center">
          <Icon name="Briefcase" size={14} className="mr-2" />
          Project Type
        </h4>
        <div className="flex flex-wrap gap-2">
          {typeFilters?.map((type) => (
            <button
              key={type?.key}
              onClick={() => onTypeFilterChange(type?.key)}
              className={`flex items-center px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-fast ${
                activeTypeFilter === type?.key
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-muted text-text-secondary hover:bg-secondary/10 hover:text-secondary"
              }`}
            >
              <Icon name={type?.icon} size={12} className="mr-1.5" />
              {type?.label}
            </button>
          ))}
        </div>
      </div>
      {/* Clear All Filters */}
      {(activeFilter !== "all" ||
        activeTechFilter !== "all" ||
        activeTypeFilter !== "all") && (
        <div className="mt-4 pt-4 border-t border-border">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              onFilterChange("all");
              onTechFilterChange("all");
              onTypeFilterChange("all");
            }}
            iconName="X"
            iconPosition="left"
            iconSize={14}
          >
            Clear All Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProjectFilter;
