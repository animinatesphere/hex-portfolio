import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const GitHubStats = () => {
  const [activeView, setActiveView] = useState('overview');
  const [animationKey, setAnimationKey] = useState(0);

  // Mock GitHub data - in real app, this would come from GitHub API
  const githubStats = {
    overview: {
      totalRepos: 47,
      totalCommits: 1247,
      totalStars: 89,
      totalForks: 23,
      contributionStreak: 127,
      languagesUsed: 12,
      publicRepos: 35,
      privateRepos: 12
    },
    languages: [
      { name: 'JavaScript', percentage: 45.2, color: '#f1e05a', lines: 125420 },
      { name: 'TypeScript', percentage: 28.7, color: '#2b7489', lines: 79650 },
      { name: 'CSS', percentage: 12.1, color: '#563d7c', lines: 33580 },
      { name: 'HTML', percentage: 8.3, color: '#e34c26', lines: 23010 },
      { name: 'Python', percentage: 3.2, color: '#3572A5', lines: 8890 },
      { name: 'Rust', percentage: 2.5, color: '#dea584', lines: 6940 }
    ],
    contributions: [
      { date: '2024-08-26', count: 8 },
      { date: '2024-08-25', count: 12 },
      { date: '2024-08-24', count: 5 },
      { date: '2024-08-23', count: 15 },
      { date: '2024-08-22', count: 3 },
      { date: '2024-08-21', count: 9 },
      { date: '2024-08-20', count: 7 },
      { date: '2024-08-19', count: 11 },
      { date: '2024-08-18', count: 6 },
      { date: '2024-08-17', count: 14 },
      { date: '2024-08-16', count: 4 },
      { date: '2024-08-15', count: 10 },
      { date: '2024-08-14', count: 13 },
      { date: '2024-08-13', count: 2 },
      { date: '2024-08-12', count: 8 }
    ],
    topRepos: [
      {
        name: 'react-dashboard-pro',
        description: 'Modern React dashboard with TypeScript and Tailwind CSS',
        language: 'TypeScript',
        stars: 24,
        forks: 8,
        commits: 156,
        lastUpdate: '2024-08-25'
      },
      {
        name: 'portfolio-website',
        description: 'Personal portfolio built with Next.js and Framer Motion',
        language: 'JavaScript',
        stars: 18,
        forks: 5,
        commits: 89,
        lastUpdate: '2024-08-24'
      },
      {
        name: 'ui-component-library',
        description: 'Reusable React components with Storybook documentation',
        language: 'TypeScript',
        stars: 31,
        forks: 7,
        commits: 203,
        lastUpdate: '2024-08-23'
      },
      {
        name: 'api-integration-toolkit',
        description: 'TypeScript utilities for REST and GraphQL API integration',
        language: 'TypeScript',
        stars: 16,
        forks: 3,
        commits: 67,
        lastUpdate: '2024-08-22'
      }
    ]
  };

  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [activeView]);

  const getContributionColor = (count) => {
    if (count === 0) return 'bg-gray-100';
    if (count <= 3) return 'bg-green-200';
    if (count <= 6) return 'bg-green-300';
    if (count <= 9) return 'bg-green-400';
    if (count <= 12) return 'bg-green-500';
    return 'bg-green-600';
  };

  const views = [
    { id: 'overview', name: 'Overview', icon: 'BarChart3' },
    { id: 'languages', name: 'Languages', icon: 'Code2' },
    { id: 'activity', name: 'Activity', icon: 'Activity' },
    { id: 'repositories', name: 'Repositories', icon: 'Folder' }
  ];

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <Icon name="Github" size={24} className="text-gray-900" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">GitHub Analytics</h3>
              <p className="text-gray-300">Real-time coding activity and repository insights</p>
            </div>
          </div>
          <div className="text-right text-white">
            <div className="text-sm opacity-80">Last updated</div>
            <div className="font-medium">2 minutes ago</div>
          </div>
        </div>
      </div>
      {/* Navigation Tabs */}
      <div className="border-b border-border bg-muted/30">
        <div className="flex overflow-x-auto">
          {views?.map((view) => (
            <button
              key={view?.id}
              onClick={() => setActiveView(view?.id)}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-all duration-200 border-b-2 whitespace-nowrap ${
                activeView === view?.id
                  ? 'text-accent border-accent bg-background' :'text-text-secondary border-transparent hover:text-text-primary hover:bg-muted/50'
              }`}
            >
              <Icon name={view?.icon} size={16} />
              <span>{view?.name}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        {activeView === 'overview' && (
          <motion.div
            key={`overview-${animationKey}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: 'Total Repositories', value: githubStats?.overview?.totalRepos, icon: 'Folder', color: 'text-blue-600' },
              { label: 'Total Commits', value: githubStats?.overview?.totalCommits?.toLocaleString(), icon: 'GitCommit', color: 'text-green-600' },
              { label: 'Stars Earned', value: githubStats?.overview?.totalStars, icon: 'Star', color: 'text-yellow-600' },
              { label: 'Contribution Streak', value: `${githubStats?.overview?.contributionStreak} days`, icon: 'Flame', color: 'text-orange-600' }
            ]?.map((stat, index) => (
              <motion.div
                key={stat?.label}
                className="bg-muted/30 rounded-xl p-6 text-center hover:bg-muted/50 transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white shadow-sm mb-4 ${stat?.color}`}>
                  <Icon name={stat?.icon} size={24} />
                </div>
                <div className="text-2xl font-bold text-text-primary mb-1">{stat?.value}</div>
                <div className="text-sm text-text-secondary">{stat?.label}</div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeView === 'languages' && (
          <motion.div
            key={`languages-${animationKey}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Language Chart */}
            <div className="bg-muted/30 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-text-primary mb-6">Language Distribution</h4>
              <div className="space-y-4">
                {githubStats?.languages?.map((lang, index) => (
                  <motion.div
                    key={lang?.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: lang?.color }}
                        />
                        <span className="font-medium text-text-primary">{lang?.name}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-semibold text-text-primary">{lang?.percentage}%</span>
                        <div className="text-xs text-text-secondary">{lang?.lines?.toLocaleString()} lines</div>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: lang?.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${lang?.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeView === 'activity' && (
          <motion.div
            key={`activity-${animationKey}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Contribution Graph */}
            <div className="bg-muted/30 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-semibold text-text-primary">Recent Contributions</h4>
                <div className="flex items-center space-x-2 text-sm text-text-secondary">
                  <span>Less</span>
                  <div className="flex space-x-1">
                    {['bg-gray-100', 'bg-green-200', 'bg-green-300', 'bg-green-400', 'bg-green-500']?.map((color, i) => (
                      <div key={i} className={`w-3 h-3 rounded-sm ${color}`} />
                    ))}
                  </div>
                  <span>More</span>
                </div>
              </div>
              
              <div className="grid grid-cols-15 gap-1">
                {githubStats?.contributions?.map((day, index) => (
                  <motion.div
                    key={day?.date}
                    className={`w-3 h-3 rounded-sm ${getContributionColor(day?.count)} cursor-pointer`}
                    title={`${day?.count} contributions on ${day?.date}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.02, duration: 0.2 }}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>
            </div>

            {/* Activity Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: 'This Week', value: '47 commits', change: '+12%', trend: 'up' },
                { label: 'This Month', value: '189 commits', change: '+8%', trend: 'up' },
                { label: 'Average Daily', value: '6.2 commits', change: '-3%', trend: 'down' }
              ]?.map((stat, index) => (
                <motion.div
                  key={stat?.label}
                  className="bg-muted/30 rounded-xl p-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-text-secondary">{stat?.label}</span>
                    <div className={`flex items-center space-x-1 text-xs ${
                      stat?.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <Icon name={stat?.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} size={12} />
                      <span>{stat?.change}</span>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-text-primary">{stat?.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeView === 'repositories' && (
          <motion.div
            key={`repositories-${animationKey}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {githubStats?.topRepos?.map((repo, index) => (
              <motion.div
                key={repo?.name}
                className="bg-muted/30 rounded-xl p-6 hover:bg-muted/50 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Folder" size={16} className="text-accent" />
                      <h4 className="text-lg font-semibold text-text-primary">{repo?.name}</h4>
                    </div>
                    <p className="text-text-secondary mb-3">{repo?.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-text-secondary">
                      <span className="flex items-center space-x-1">
                        <div className="w-3 h-3 bg-blue-500 rounded-full" />
                        <span>{repo?.language}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Star" size={14} />
                        <span>{repo?.stars}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="GitFork" size={14} />
                        <span>{repo?.forks}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="GitCommit" size={14} />
                        <span>{repo?.commits}</span>
                      </span>
                    </div>
                  </div>
                  <div className="text-right text-sm text-text-secondary">
                    <div>Updated</div>
                    <div>{new Date(repo.lastUpdate)?.toLocaleDateString()}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default GitHubStats;