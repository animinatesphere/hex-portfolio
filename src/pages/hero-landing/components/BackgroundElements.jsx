import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BackgroundElements = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e?.clientX / window.innerWidth) * 100,
        y: (e?.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const geometricShapes = [
    { size: 120, x: 10, y: 20, delay: 0 },
    { size: 80, x: 85, y: 15, delay: 1 },
    { size: 100, x: 15, y: 70, delay: 2 },
    { size: 60, x: 80, y: 80, delay: 1.5 },
    { size: 40, x: 50, y: 10, delay: 0.5 }
  ];

  const floatingParticles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 3
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition?.x}% ${mousePosition?.y}%, rgba(255, 107, 53, 0.3) 0%, transparent 50%)`
        }}
        transition={{ duration: 0.3 }}
      />
      {/* Geometric Shapes */}
      {geometricShapes?.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute border border-white/10 rounded-full"
          style={{
            width: shape?.size,
            height: shape?.size,
            left: `${shape?.x}%`,
            top: `${shape?.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            delay: shape?.delay,
            ease: "easeInOut"
          }}
        />
      ))}
      {/* Floating Particles */}
      {floatingParticles?.map((particle) => (
        <motion.div
          key={particle?.id}
          className="absolute bg-white/20 rounded-full"
          style={{
            width: particle?.size,
            height: particle?.size,
            left: `${particle?.x}%`,
            top: `${particle?.y}%`
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: particle?.delay,
            ease: "easeInOut"
          }}
        />
      ))}
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      {/* Spotlight Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition?.x}% ${mousePosition?.y}%, rgba(255, 255, 255, 0.05), transparent 40%)`
        }}
        transition={{ duration: 0.3 }}
      />
      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary/20 to-transparent rounded-full blur-3xl" />
    </div>
  );
};

export default BackgroundElements;