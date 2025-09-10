import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SkillEcosystemMap = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [animationPhase, setAnimationPhase] = useState(0);

  const skillNodes = [
    {
      id: 'react',
      name: 'React',
      category: 'frontend',
      level: 95,
      x: 30,
      y: 25,
      icon: 'Code2',
      connections: ['javascript', 'typescript', 'nextjs', 'tailwind']
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      category: 'language',
      level: 92,
      x: 15,
      y: 45,
      icon: 'FileCode',
      connections: ['react', 'nodejs', 'vue']
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      category: 'language',
      level: 88,
      x: 45,
      y: 45,
      icon: 'FileType',
      connections: ['react', 'nodejs', 'angular']
    },
    {
      id: 'nextjs',
      name: 'Next.js',
      category: 'framework',
      level: 85,
      x: 60,
      y: 25,
      icon: 'Layers',
      connections: ['react', 'vercel']
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      category: 'backend',
      level: 80,
      x: 25,
      y: 65,
      icon: 'Server',
      connections: ['javascript', 'typescript', 'mongodb']
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      category: 'styling',
      level: 90,
      x: 70,
      y: 50,
      icon: 'Palette',
      connections: ['react', 'nextjs']
    },
    {
      id: 'figma',
      name: 'Figma',
      category: 'design',
      level: 75,
      x: 80,
      y: 30,
      icon: 'Figma',
      connections: ['tailwind']
    },
    {
      id: 'git',
      name: 'Git',
      category: 'tool',
      level: 87,
      x: 10,
      y: 75,
      icon: 'GitBranch',
      connections: ['github']
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      category: 'database',
      level: 78,
      x: 40,
      y: 80,
      icon: 'Database',
      connections: ['nodejs']
    }
  ];

  const categoryColors = {
    frontend: 'from-blue-500 to-cyan-500',
    language: 'from-yellow-500 to-orange-500',
    framework: 'from-green-500 to-emerald-500',
    backend: 'from-purple-500 to-violet-500',
    styling: 'from-pink-500 to-rose-500',
    design: 'from-indigo-500 to-blue-500',
    tool: 'from-gray-500 to-slate-500',
    database: 'from-red-500 to-orange-500'
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getConnectionPath = (from, to) => {
    const fromNode = skillNodes?.find(n => n?.id === from);
    const toNode = skillNodes?.find(n => n?.id === to);
    if (!fromNode || !toNode) return '';
    
    return `M ${fromNode?.x} ${fromNode?.y} Q ${(fromNode?.x + toNode?.x) / 2} ${(fromNode?.y + toNode?.y) / 2 - 10} ${toNode?.x} ${toNode?.y}`;
  };

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-background via-muted/30 to-background rounded-2xl border border-border overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full">
        {skillNodes?.map(node => 
          node?.connections?.map(connectionId => {
            const isActive = activeSkill === node?.id || activeSkill === connectionId;
            return (
              <motion.path
                key={`${node?.id}-${connectionId}`}
                d={getConnectionPath(node?.id, connectionId)}
                fill="none"
                stroke={isActive ? "var(--color-accent)" : "var(--color-border)"}
                strokeWidth={isActive ? 2 : 1}
                opacity={isActive ? 0.8 : 0.3}
                initial={{ pathLength: 0 }}
                animate={{ 
                  pathLength: 1,
                  opacity: isActive ? 0.8 : 0.3
                }}
                transition={{ 
                  duration: 2,
                  delay: Math.random() * 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            );
          })
        )}
      </svg>
      {/* Skill Nodes */}
      {skillNodes?.map((skill, index) => (
        <motion.div
          key={skill?.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
          style={{ left: `${skill?.x}%`, top: `${skill?.y}%` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          onMouseEnter={() => setActiveSkill(skill?.id)}
          onMouseLeave={() => setActiveSkill(null)}
        >
          {/* Node Circle */}
          <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${categoryColors?.[skill?.category]} shadow-lg flex items-center justify-center`}>
            <Icon name={skill?.icon} size={24} className="text-white" />
            
            {/* Pulse Animation */}
            <motion.div
              className={`absolute inset-0 rounded-full bg-gradient-to-br ${categoryColors?.[skill?.category]} opacity-30`}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2
              }}
            />
          </div>

          {/* Skill Info Tooltip */}
          <motion.div
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            initial={{ y: 10, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
          >
            <div className="bg-background/95 backdrop-blur-sm border border-border rounded-lg px-3 py-2 shadow-lg min-w-max">
              <p className="font-semibold text-sm text-text-primary">{skill?.name}</p>
              <div className="flex items-center mt-1">
                <div className="w-12 h-1.5 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${categoryColors?.[skill?.category]} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill?.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
                <span className="text-xs text-text-secondary ml-2">{skill?.level}%</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm rounded-lg p-3 border border-border">
        <h4 className="text-sm font-semibold text-text-primary mb-2">Skill Categories</h4>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {Object.entries(categoryColors)?.slice(0, 4)?.map(([category, gradient]) => (
            <div key={category} className="flex items-center">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${gradient} mr-2`} />
              <span className="text-text-secondary capitalize">{category}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Animation Indicator */}
      <div className="absolute top-4 right-4 flex space-x-1">
        {[0, 1, 2]?.map(phase => (
          <motion.div
            key={phase}
            className="w-2 h-2 rounded-full bg-accent"
            animate={{
              opacity: animationPhase === phase ? 1 : 0.3,
              scale: animationPhase === phase ? 1.2 : 1
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillEcosystemMap;