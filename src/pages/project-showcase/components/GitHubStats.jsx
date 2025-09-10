import React from "react";
import { motion } from "framer-motion";
import Icon from "../../../components/AppIcon";

const GitHubStats = () => {
  const githubStats = {
    totalRepos: 47,
    totalStars: 234,
    totalForks: 89,
    totalCommits: 1247,
    contributionStreak: 127,
    languageStats: [
      { name: "JavaScript", percentage: 45, color: "#f7df1e" },
      { name: "TypeScript", percentage: 28, color: "#3178c6" },
      { name: "CSS", percentage: 15, color: "#1572b6" },
      { name: "HTML", percentage: 8, color: "#e34f26" },
      { name: "Other", percentage: 4, color: "#6b7280" },
    ],
    recentActivity: [
      {
        type: "commit",
        repo: "portfolio-website",
        message: "Add project showcase animations",
        time: "2 hours ago",
      },
      {
        type: "star",
        repo: "react-dashboard-template",
        message: "Received a star",
        time: "5 hours ago",
      },
      {
        type: "fork",
        repo: "vue-component-library",
        message: "Repository was forked",
        time: "1 day ago",
      },
      {
        type: "commit",
        repo: "ecommerce-frontend",
        message: "Optimize performance and add lazy loading",
        time: "2 days ago",
      },
    ],
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case "commit":
        return "GitCommit";
      case "star":
        return "Star";
      case "fork":
        return "GitFork";
      default:
        return "Activity";
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case "commit":
        return "text-primary";
      case "star":
        return "text-warning";
      case "fork":
        return "text-accent";
      default:
        return "text-text-secondary";
    }
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-text-primary flex items-center">
          <Icon name="Github" size={24} className="mr-3" />
          GitHub Activity
        </h2>
        <a
          href="https://github.com/animinatesphere"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent/80 transition-colors duration-fast flex items-center text-sm"
        >
          View Profile
          <Icon name="ExternalLink" size={14} className="ml-1" />
        </a>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Stats Overview */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            Repository Statistics
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <motion.div
              className="bg-muted rounded-lg p-4 text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Icon
                name="Folder"
                size={24}
                className="mx-auto mb-2 text-primary"
              />
              <div className="text-2xl font-bold text-text-primary">
                {githubStats?.totalRepos}
              </div>
              <div className="text-sm text-text-secondary">Repositories</div>
            </motion.div>

            <motion.div
              className="bg-muted rounded-lg p-4 text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Icon
                name="Star"
                size={24}
                className="mx-auto mb-2 text-warning"
              />
              <div className="text-2xl font-bold text-text-primary">
                {githubStats?.totalStars}
              </div>
              <div className="text-sm text-text-secondary">Stars</div>
            </motion.div>

            <motion.div
              className="bg-muted rounded-lg p-4 text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Icon
                name="GitFork"
                size={24}
                className="mx-auto mb-2 text-accent"
              />
              <div className="text-2xl font-bold text-text-primary">
                {githubStats?.totalForks}
              </div>
              <div className="text-sm text-text-secondary">Forks</div>
            </motion.div>

            <motion.div
              className="bg-muted rounded-lg p-4 text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Icon
                name="GitCommit"
                size={24}
                className="mx-auto mb-2 text-success"
              />
              <div className="text-2xl font-bold text-text-primary">
                {githubStats?.totalCommits}
              </div>
              <div className="text-sm text-text-secondary">Commits</div>
            </motion.div>
          </div>

          {/* Contribution Streak */}
          <div className="bg-success/10 border border-success/20 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Icon name="Flame" size={20} className="mr-2 text-success" />
                <span className="text-sm font-medium text-text-primary">
                  Current Streak
                </span>
              </div>
              <div className="text-xl font-bold text-success">
                {githubStats?.contributionStreak} days
              </div>
            </div>
          </div>

          {/* Language Stats */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-3">
              Language Distribution
            </h4>
            <div className="space-y-2">
              {githubStats?.languageStats?.map((lang, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-3"
                    style={{ backgroundColor: lang?.color }}
                  />
                  <div className="flex-1 flex items-center justify-between">
                    <span className="text-sm text-text-primary">
                      {lang?.name}
                    </span>
                    <span className="text-sm text-text-secondary">
                      {lang?.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            Recent Activity
          </h3>
          <div className="space-y-3">
            {githubStats?.recentActivity?.map((activity, index) => (
              <motion.div
                key={index}
                className="flex items-start p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors duration-fast"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Icon
                  name={getActivityIcon(activity?.type)}
                  size={16}
                  className={`mr-3 mt-0.5 ${getActivityColor(activity?.type)}`}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-text-primary truncate">
                      {activity?.repo}
                    </span>
                    <span className="text-xs text-text-secondary whitespace-nowrap ml-2">
                      {activity?.time}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary">
                    {activity?.message}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contribution Graph Placeholder */}
          <div className="mt-6 p-4 bg-muted rounded-lg">
            <h4 className="text-sm font-semibold text-text-primary mb-3">
              Contribution Graph
            </h4>
            <div className="grid grid-cols-12 gap-1">
              {Array.from({ length: 84 }, (_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-sm ${
                    Math.random() > 0.7
                      ? "bg-success"
                      : Math.random() > 0.5
                      ? "bg-success/60"
                      : Math.random() > 0.3
                      ? "bg-success/30"
                      : "bg-border"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center justify-between mt-2 text-xs text-text-secondary">
              <span>Less</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-border rounded-sm" />
                <div className="w-2 h-2 bg-success/30 rounded-sm" />
                <div className="w-2 h-2 bg-success/60 rounded-sm" />
                <div className="w-2 h-2 bg-success rounded-sm" />
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
