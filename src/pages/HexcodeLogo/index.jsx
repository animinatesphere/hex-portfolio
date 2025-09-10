import Header from "components/ui/Header";
import React, { useState, useEffect, useRef } from "react";

const HexcodeLogo = () => {
  const [copiedHex, setCopiedHex] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const logoRef = useRef(null);

  const hexColors = [
    { code: "#FF6B6B", name: "Coral Red" },
    { code: "#4ECDC4", name: "Turquoise" },
    { code: "#45B7D1", name: "Sky Blue" },
    { code: "#96CEB4", name: "Mint Green" },
    { code: "#FFD93D", name: "Golden Yellow" },
    { code: "#FF8E9B", name: "Pink Coral" },
    { code: "#64FFDA", name: "Cyan" },
    { code: "#BB86FC", name: "Purple" },
  ];

  const backgroundHexes = [
    "#E74C3C",
    "#3498DB",
    "#2ECC71",
    "#F39C12",
    "#9B59B6",
    "#1ABC9C",
    "#34495E",
    "#E67E22",
    "#95A5A6",
    "#F1C40F",
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const createParticle = () => {
      const newParticle = {
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        color:
          backgroundHexes[Math.floor(Math.random() * backgroundHexes.length)],
        size: Math.random() * 4 + 2,
        velocity: {
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2,
        },
        life: 1,
      };
      return newParticle;
    };

    const interval = setInterval(() => {
      setParticles((prev) => {
        const updated = prev
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.velocity.x,
            y: particle.y + particle.velocity.y,
            life: particle.life - 0.01,
          }))
          .filter(
            (particle) =>
              particle.life > 0 &&
              particle.x > -50 &&
              particle.x < window.innerWidth + 50 &&
              particle.y > -50 &&
              particle.y < window.innerHeight + 50
          );

        if (updated.length < 20) {
          updated.push(createParticle());
        }

        return updated;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = async (hex, name) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedHex(hex);
      setTimeout(() => setCopiedHex(""), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const generateGradient = () => {
    const colors = hexColors.slice(0, 5).map((h) => h.code);
    return `linear-gradient(45deg, ${colors.join(", ")})`;
  };

  return (
    <>
      <Header />
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
        {/* Animated Background Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              opacity: particle.life * 0.6,
              transform: `scale(${particle.life})`,
              transition: "all 0.1s ease-out",
            }}
          />
        ))}

        {/* Dynamic Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 120 }).map((_, i) => (
              <div
                key={i}
                className="border border-cyan-400 rounded animate-pulse"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Mouse Follower Effect */}
        <div
          className="fixed w-96 h-96 rounded-full pointer-events-none opacity-20 blur-3xl"
          style={{
            background: generateGradient(),
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease-out",
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
          <div className="text-center">
            {/* Main Logo Container */}
            <div
              ref={logoRef}
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />

              {/* Main Logo Card */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                {/* Hexagonal Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <polygon
                        key={i}
                        points="50,1 93.3,25 93.3,75 50,99 6.7,75 6.7,25"
                        fill="none"
                        stroke="url(#hexGradient)"
                        strokeWidth="0.5"
                        transform={`translate(${(i % 5) * 20}, ${
                          Math.floor(i / 5) * 25
                        }) scale(0.3)`}
                        className="animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                    <defs>
                      <linearGradient
                        id="hexGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#64FFDA" />
                        <stop offset="100%" stopColor="#BB86FC" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Main Hex Symbol */}
                <div className="relative z-10">
                  <div
                    className="text-8xl font-bold mb-6 bg-clip-text text-transparent animate-pulse"
                    style={{
                      background: generateGradient(),
                      WebkitBackgroundClip: "text",
                      backgroundSize: "300% 300%",
                      animation: "gradientShift 3s ease-in-out infinite",
                    }}
                  >
                    #HEX
                  </div>

                  {/* Brand Name */}
                  <h1 className="text-6xl font-bold text-white mb-4 tracking-wider">
                    HEXCODE
                  </h1>

                  {/* Animated Tagline */}
                  <p className="text-xl text-cyan-300 mb-8 tracking-wide">
                    <span
                      className="inline-block animate-bounce"
                      style={{ animationDelay: "0s" }}
                    >
                      C
                    </span>
                    <span
                      className="inline-block animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    >
                      o
                    </span>
                    <span
                      className="inline-block animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    >
                      l
                    </span>
                    <span
                      className="inline-block animate-bounce"
                      style={{ animationDelay: "0.3s" }}
                    >
                      o
                    </span>
                    <span
                      className="inline-block animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    >
                      r
                    </span>
                    <span className="mx-2">•</span>
                    <span
                      className="inline-block animate-bounce"
                      style={{ animationDelay: "0.5s" }}
                    >
                      Y
                    </span>
                    <span
                      className="inline-block animate-bounce"
                      style={{ animationDelay: "0.6s" }}
                    >
                      o
                    </span>
                    <span
                      className="inline-block animate-bounce"
                      style={{ animationDelay: "0.7s" }}
                    >
                      u
                    </span>
                    <span
                      className="inline-block animate-bounce"
                      style={{ animationDelay: "0.8s" }}
                    >
                      r
                    </span>
                    <span className="mx-2">•</span>
                    <span
                      className="inline-block animate-bounce"
                      style={{ animationDelay: "0.9s" }}
                    >
                      W
                    </span>
                    <span
                      className="inline-block animate-bounce"
                      style={{ animationDelay: "1s" }}
                    >
                      o
                    </span>
                    <span
                      className="inline-block animate-bounce"
                      style={{ animationDelay: "1.1s" }}
                    >
                      r
                    </span>
                    <span
                      className="inline-block animate-bounce"
                      style={{ animationDelay: "1.2s" }}
                    >
                      l
                    </span>
                    <span
                      className="inline-block animate-bounce"
                      style={{ animationDelay: "1.3s" }}
                    >
                      d
                    </span>
                  </p>

                  {/* Interactive Hex Color Grid */}
                  <div className="grid grid-cols-4 gap-4 mb-8">
                    {hexColors.map((color, index) => (
                      <div
                        key={color.code}
                        className="group/hex relative cursor-pointer"
                        onClick={() => copyToClipboard(color.code, color.name)}
                      >
                        {/* Color Circle */}
                        <div
                          className="w-16 h-16 rounded-full border-4 border-white/30 group-hover/hex:border-white/80 transform group-hover/hex:scale-125 transition-all duration-300 shadow-lg group-hover/hex:shadow-2xl"
                          style={{
                            backgroundColor: color.code,
                            boxShadow: `0 0 20px ${color.code}40`,
                          }}
                        />

                        {/* Hex Code Label */}
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/hex:opacity-100 transition-opacity duration-300">
                          <div className="bg-black/80 text-white text-xs px-2 py-1 rounded font-mono">
                            {copiedHex === color.code ? "Copied!" : color.code}
                          </div>
                        </div>

                        {/* Color Name Tooltip */}
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/hex:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/90 text-gray-800 text-xs px-2 py-1 rounded font-medium whitespace-nowrap">
                            {color.name}
                          </div>
                        </div>

                        {/* Ripple Effect */}
                        <div
                          className="absolute inset-0 rounded-full animate-ping opacity-0 group-hover/hex:opacity-75"
                          style={{ backgroundColor: color.code }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Color Spectrum Bar */}
                  <div className="w-full h-3 rounded-full mb-6 overflow-hidden">
                    <div
                      className="w-full h-full animate-pulse"
                      style={{
                        background: `linear-gradient(90deg, ${hexColors
                          .map((h) => h.code)
                          .join(", ")})`,
                      }}
                    />
                  </div>

                  {/* Status Message */}
                  {copiedHex && (
                    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full font-medium animate-bounce">
                      {copiedHex} copied to clipboard! ✨
                    </div>
                  )}
                </div>
              </div>

              {/* Floating Hex Codes */}
              {isHovered &&
                backgroundHexes.slice(0, 6).map((hex, index) => (
                  <div
                    key={hex}
                    className="absolute text-sm font-mono text-cyan-400 opacity-60 animate-float pointer-events-none"
                    style={{
                      left: `${20 + index * 15}%`,
                      top: `${10 + (index % 2) * 80}%`,
                      animationDelay: `${index * 0.5}s`,
                      animationDuration: "4s",
                    }}
                  >
                    {hex}
                  </div>
                ))}
            </div>

            {/* Footer Info */}
            <div className="mt-12 text-gray-400 text-sm">
              <p>
                Click any color to copy • Hover for details • Move mouse to
                interact
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes gradientShift {
            0%,
            100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(180deg);
            }
          }

          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}</style>
      </div>
    </>
  );
};

export default HexcodeLogo;
