import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TechnologyRadar = () => {
  const [activeQuadrant, setActiveQuadrant] = useState(null);
  const [radarSweep, setRadarSweep] = useState(0);

  const technologies = [
    // Adopt (Inner ring)
    { name: 'React 18', quadrant: 'frameworks', ring: 'adopt', angle: 45, distance: 25, trend: 'stable' },
    { name: 'TypeScript', quadrant: 'languages', ring: 'adopt', angle: 135, distance: 30, trend: 'up' },
    { name: 'Tailwind CSS', quadrant: 'tools', ring: 'adopt', angle: 225, distance: 28, trend: 'stable' },
    { name: 'Next.js', quadrant: 'frameworks', ring: 'adopt', angle: 315, distance: 32, trend: 'up' },
    
    // Trial (Middle ring)
    { name: 'Astro', quadrant: 'frameworks', ring: 'trial', angle: 60, distance: 55, trend: 'up' },
    { name: 'Bun', quadrant: 'tools', ring: 'trial', angle: 150, distance: 58, trend: 'up' },
    { name: 'Tauri', quadrant: 'frameworks', ring: 'trial', angle: 240, distance: 52, trend: 'new' },
    { name: 'Rust', quadrant: 'languages', ring: 'trial', angle: 330, distance: 60, trend: 'up' },
    
    // Assess (Outer ring)
    { name: 'WebAssembly', quadrant: 'languages', ring: 'assess', angle: 30, distance: 85, trend: 'up' },
    { name: 'Deno', quadrant: 'tools', ring: 'assess', angle: 120, distance: 88, trend: 'stable' },
    { name: 'Solid.js', quadrant: 'frameworks', ring: 'assess', angle: 210, distance: 82, trend: 'up' },
    { name: 'Qwik', quadrant: 'frameworks', ring: 'assess', angle: 300, distance: 90, trend: 'new' },
    
    // Hold (Various positions)
    { name: 'jQuery', quadrant: 'frameworks', ring: 'hold', angle: 75, distance: 95, trend: 'down' },
    { name: 'Angular.js', quadrant: 'frameworks', ring: 'hold', angle: 165, distance: 92, trend: 'down' }
  ];

  const quadrants = {
    frameworks: { name: 'Frameworks & Libraries', color: 'from-blue-500 to-cyan-500', position: 'top-right' },
    languages: { name: 'Languages & Platforms', color: 'from-green-500 to-emerald-500', position: 'top-left' },
    tools: { name: 'Tools & Infrastructure', color: 'from-purple-500 to-violet-500', position: 'bottom-left' },
    techniques: { name: 'Techniques & Practices', color: 'from-orange-500 to-red-500', position: 'bottom-right' }
  };

  const rings = {
    adopt: { name: 'Adopt', radius: 35, color: 'text-green-600' },
    trial: { name: 'Trial', radius: 65, color: 'text-blue-600' },
    assess: { name: 'Assess', radius: 95, color: 'text-yellow-600' },
    hold: { name: 'Hold', radius: 100, color: 'text-red-600' }
  };

  const trendIcons = {
    up: 'TrendingUp',
    down: 'TrendingDown',
    stable: 'Minus',
    new: 'Sparkles'
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRadarSweep(prev => (prev + 2) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const polarToCartesian = (angle, distance) => {
    const radian = (angle - 90) * (Math.PI / 180);
    return {
      x: 150 + distance * Math.cos(radian),
      y: 150 + distance * Math.sin(radian)
    };
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-text-primary mb-2">Technology Radar</h3>
        <p className="text-text-secondary">Current technology adoption and exploration status</p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Radar Chart */}
        <div className="relative">
          <svg width="300" height="300" className="overflow-visible">
            {/* Background circles */}
            {Object.entries(rings)?.map(([key, ring]) => (
              <circle
                key={key}
                cx="150"
                cy="150"
                r={ring?.radius}
                fill="none"
                stroke="var(--color-border)"
                strokeWidth="1"
                opacity="0.3"
              />
            ))}

            {/* Quadrant lines */}
            <line x1="150" y1="50" x2="150" y2="250" stroke="var(--color-border)" strokeWidth="1" opacity="0.3" />
            <line x1="50" y1="150" x2="250" y2="150" stroke="var(--color-border)" strokeWidth="1" opacity="0.3" />

            {/* Radar sweep */}
            <motion.line
              x1="150"
              y1="150"
              x2={150 + 100 * Math.cos((radarSweep - 90) * Math.PI / 180)}
              y2={150 + 100 * Math.sin((radarSweep - 90) * Math.PI / 180)}
              stroke="var(--color-accent)"
              strokeWidth="2"
              opacity="0.6"
              animate={{
                x2: 150 + 100 * Math.cos((radarSweep - 90) * Math.PI / 180),
                y2: 150 + 100 * Math.sin((radarSweep - 90) * Math.PI / 180)
              }}
            />

            {/* Technology points */}
            {technologies?.map((tech, index) => {
              const position = polarToCartesian(tech?.angle, tech?.distance);
              const quadrantColor = quadrants?.[tech?.quadrant]?.color || 'from-gray-500 to-gray-600';
              
              return (
                <g key={tech?.name}>
                  <motion.circle
                    cx={position?.x}
                    cy={position?.y}
                    r="6"
                    className={`fill-current bg-gradient-to-r ${quadrantColor}`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.5 }}
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={() => setActiveQuadrant(tech)}
                    onMouseLeave={() => setActiveQuadrant(null)}
                  />
                  {/* Technology label */}
                  <text
                    x={position?.x}
                    y={position?.y - 12}
                    textAnchor="middle"
                    className="text-xs font-medium fill-current text-text-primary"
                    style={{ pointerEvents: 'none' }}
                  >
                    {tech?.name}
                  </text>
                </g>
              );
            })}

            {/* Quadrant labels */}
            <text x="200" y="70" textAnchor="middle" className="text-sm font-semibold fill-current text-text-secondary">
              Frameworks
            </text>
            <text x="100" y="70" textAnchor="middle" className="text-sm font-semibold fill-current text-text-secondary">
              Languages
            </text>
            <text x="100" y="240" textAnchor="middle" className="text-sm font-semibold fill-current text-text-secondary">
              Tools
            </text>
            <text x="200" y="240" textAnchor="middle" className="text-sm font-semibold fill-current text-text-secondary">
              Techniques
            </text>
          </svg>

          {/* Active technology tooltip */}
          {activeQuadrant && (
            <motion.div
              className="absolute top-0 left-full ml-4 bg-background border border-border rounded-lg p-4 shadow-lg z-10 min-w-48"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-text-primary">{activeQuadrant?.name}</h4>
                <Icon 
                  name={trendIcons?.[activeQuadrant?.trend]} 
                  size={16} 
                  className={`${
                    activeQuadrant?.trend === 'up' ? 'text-green-500' :
                    activeQuadrant?.trend === 'down' ? 'text-red-500' :
                    activeQuadrant?.trend === 'new'? 'text-purple-500' : 'text-gray-500'
                  }`}
                />
              </div>
              <div className="space-y-1 text-sm text-text-secondary">
                <p><span className="font-medium">Ring:</span> {rings?.[activeQuadrant?.ring]?.name}</p>
                <p><span className="font-medium">Quadrant:</span> {quadrants?.[activeQuadrant?.quadrant]?.name}</p>
                <p><span className="font-medium">Status:</span> 
                  <span className={`ml-1 ${
                    activeQuadrant?.trend === 'up' ? 'text-green-600' :
                    activeQuadrant?.trend === 'down' ? 'text-red-600' :
                    activeQuadrant?.trend === 'new'? 'text-purple-600' : 'text-gray-600'
                  }`}>
                    {activeQuadrant?.trend === 'new' ? 'New' : 
                     activeQuadrant?.trend === 'up' ? 'Growing' :
                     activeQuadrant?.trend === 'down' ? 'Declining' : 'Stable'}
                  </span>
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Legend */}
        <div className="space-y-6">
          {/* Rings Legend */}
          <div>
            <h4 className="font-semibold text-text-primary mb-3">Adoption Rings</h4>
            <div className="space-y-2">
              {Object.entries(rings)?.map(([key, ring]) => (
                <div key={key} className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full border-2 ${ring?.color?.replace('text-', 'border-')}`} />
                  <span className="text-sm text-text-secondary">{ring?.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trends Legend */}
          <div>
            <h4 className="font-semibold text-text-primary mb-3">Trend Indicators</h4>
            <div className="space-y-2">
              {Object.entries(trendIcons)?.map(([trend, icon]) => (
                <div key={trend} className="flex items-center space-x-3">
                  <Icon 
                    name={icon} 
                    size={16} 
                    className={`${
                      trend === 'up' ? 'text-green-500' :
                      trend === 'down' ? 'text-red-500' :
                      trend === 'new'? 'text-purple-500' : 'text-gray-500'
                    }`}
                  />
                  <span className="text-sm text-text-secondary capitalize">{trend}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-semibold text-text-primary mb-3">Current Focus</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-text-secondary">Adopting:</span>
                <span className="font-medium text-green-600">
                  {technologies?.filter(t => t?.ring === 'adopt')?.length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Trialing:</span>
                <span className="font-medium text-blue-600">
                  {technologies?.filter(t => t?.ring === 'trial')?.length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Assessing:</span>
                <span className="font-medium text-yellow-600">
                  {technologies?.filter(t => t?.ring === 'assess')?.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyRadar;