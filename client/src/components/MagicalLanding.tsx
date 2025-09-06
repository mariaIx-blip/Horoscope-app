import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { zodiacSigns } from "../lib/zodiacData";

interface MagicalLandingProps {
  onStartMagic: () => void;
}

const MagicalLanding: React.FC<MagicalLandingProps> = ({ onStartMagic }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Realistic Space Background */}
      <div className="absolute inset-0">
        {/* Deep Space Gradient Base */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at top, rgba(15, 23, 42, 0.9) 0%, rgba(2, 6, 23, 1) 40%),
              radial-gradient(ellipse at bottom left, rgba(67, 56, 202, 0.2) 0%, transparent 50%),
              radial-gradient(ellipse at bottom right, rgba(219, 39, 119, 0.2) 0%, transparent 50%),
              radial-gradient(ellipse at top right, rgba(147, 51, 234, 0.15) 0%, transparent 60%),
              linear-gradient(180deg, rgba(0, 0, 20, 1) 0%, rgba(10, 0, 30, 1) 50%, rgba(20, 0, 40, 1) 100%)
            `
          }}
        />

        {/* Twinkling Stars */}
        {Array.from({ length: 150 }).map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              opacity: [0, 1, 0.3, 1, 0],
              scale: [0.5, 1.5, 0.8, 1.2, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut"
            }}
            style={{
              boxShadow: `0 0 ${2 + Math.random() * 4}px rgba(255, 255, 255, 0.8)`
            }}
          />
        ))}

        {/* Larger Bright Stars */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`bright-star-${i}`}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              opacity: [0.4, 1, 0.6, 1, 0.4],
              scale: [1, 1.3, 0.9, 1.2, 1]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut"
            }}
          >
            <div 
              className="w-2 h-2 bg-gradient-to-r from-blue-200 to-white rounded-full"
              style={{
                boxShadow: "0 0 10px rgba(147, 197, 253, 0.8), 0 0 20px rgba(255, 255, 255, 0.4)"
              }}
            />
          </motion.div>
        ))}

        {/* Realistic Sun */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32"
          animate={{
            rotate: [0, 360],
            scale: [0.9, 1.1, 0.9]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div 
            className="w-full h-full rounded-full"
            style={{
              background: "radial-gradient(circle at 30% 30%, #fbbf24, #f59e0b, #d97706)",
              boxShadow: `
                0 0 40px rgba(251, 191, 36, 0.6),
                0 0 80px rgba(245, 158, 11, 0.4),
                0 0 120px rgba(217, 119, 6, 0.2),
                inset -10px -10px 20px rgba(217, 119, 6, 0.3)
              `
            }}
          />
          {/* Sun rays */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 bg-gradient-to-t from-transparent via-yellow-300 to-transparent"
              style={{
                height: "60px",
                left: "50%",
                top: "-30px",
                transformOrigin: "bottom center",
                transform: `translateX(-50%) rotate(${i * 45}deg)`
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scaleY: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Realistic Moon */}
        <motion.div
          className="absolute top-32 left-20 w-24 h-24"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div 
            className="w-full h-full rounded-full relative"
            style={{
              background: `
                radial-gradient(circle at 35% 35%, #e2e8f0, #cbd5e1, #94a3b8),
                radial-gradient(circle at 60% 20%, rgba(148, 163, 184, 0.3) 0%, transparent 40%),
                radial-gradient(circle at 80% 60%, rgba(100, 116, 139, 0.4) 0%, transparent 30%)
              `,
              boxShadow: `
                0 0 30px rgba(203, 213, 225, 0.4),
                0 0 60px rgba(148, 163, 184, 0.2),
                inset -8px -8px 15px rgba(100, 116, 139, 0.3)
              `
            }}
          />
          {/* Moon craters */}
          <div className="absolute top-2 left-3 w-2 h-2 rounded-full bg-slate-400 opacity-40" />
          <div className="absolute bottom-3 right-2 w-1.5 h-1.5 rounded-full bg-slate-500 opacity-30" />
          <div className="absolute top-8 right-4 w-1 h-1 rounded-full bg-slate-400 opacity-50" />
        </motion.div>

        {/* Floating Zodiac Symbols with Enhanced Visibility */}
        {zodiacSigns.map((sign, index) => (
          <motion.div
            key={sign.name}
            className="absolute text-4xl md:text-5xl text-yellow-200"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: 0,
              scale: 0.5
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight
              ],
              rotate: [0, 360, 720],
              scale: [0.6, 1, 0.8, 1],
              opacity: [0.2, 0.5, 0.3, 0.4]
            }}
            transition={{
              duration: 25 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: index * 2.5
            }}
            style={{
              filter: "drop-shadow(0 0 8px rgba(251, 191, 36, 0.6)) drop-shadow(0 0 15px rgba(59, 130, 246, 0.3))",
              textShadow: "0 0 10px rgba(251, 191, 36, 0.8)"
            }}
          >
            {sign.symbol}
          </motion.div>
        ))}

        {/* Colorful Nebula Clouds */}
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={`nebula-${i}`}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${200 + Math.random() * 300}px`,
              height: `${150 + Math.random() * 200}px`,
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80}%`,
              background: i % 2 === 0 
                ? "radial-gradient(ellipse, rgba(139, 92, 246, 0.3) 0%, rgba(67, 56, 202, 0.2) 40%, transparent 70%)"
                : "radial-gradient(ellipse, rgba(236, 72, 153, 0.3) 0%, rgba(219, 39, 119, 0.2) 40%, transparent 70%)",
              filter: "blur(1px)"
            }}
            animate={{
              scale: [1, 1.2, 0.9, 1],
              opacity: [0.1, 0.3, 0.15, 0.25],
              x: [0, 20, -10, 0],
              y: [0, -15, 10, 0]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 3
            }}
          />
        ))}

        {/* Shooting Stars with Trails */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={`shooting-${i}`}
            className="absolute"
            initial={{
              x: -100,
              y: Math.random() * window.innerHeight * 0.6,
              opacity: 0
            }}
            animate={{
              x: window.innerWidth + 100,
              y: Math.random() * window.innerHeight * 0.6 + 100,
              opacity: [0, 1, 0.8, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 12 + Math.random() * 8,
              ease: "easeOut"
            }}
          >
            <div className="relative">
              <div 
                className="w-2 h-2 bg-white rounded-full"
                style={{
                  boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)"
                }}
              />
              <div 
                className="absolute top-0 left-0 w-20 h-0.5 bg-gradient-to-l from-white to-transparent"
                style={{
                  filter: "blur(0.5px)"
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-12"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-300 to-blue-300 mb-6"
            style={{
              fontFamily: "'Cinzel', 'Playfair Display', serif",
              textShadow: "0 0 30px rgba(251, 191, 36, 0.5), 0 0 60px rgba(236, 72, 153, 0.3)",
              filter: "drop-shadow(0 0 15px rgba(59, 130, 246, 0.4))"
            }}
            animate={{
              textShadow: [
                "0 0 30px rgba(251, 191, 36, 0.5), 0 0 60px rgba(236, 72, 153, 0.3)",
                "0 0 40px rgba(251, 191, 36, 0.8), 0 0 80px rgba(236, 72, 153, 0.5)",
                "0 0 30px rgba(251, 191, 36, 0.5), 0 0 60px rgba(236, 72, 153, 0.3)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Celestial Horoscope
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-2xl md:text-3xl text-pink-200 font-light mb-8"
          >
            Discover the magic written in the stars just for you!
          </motion.p>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="w-48 h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Start Magic Button */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mb-8"
        >
          <Button
            onClick={onStartMagic}
            className="group relative px-12 py-6 text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white rounded-full border-4 border-yellow-300/50 hover:border-yellow-300 transition-all duration-300 transform hover:scale-110"
            style={{
              boxShadow: "0 0 30px rgba(139, 92, 246, 0.5), inset 0 0 30px rgba(255, 255, 255, 0.1)"
            }}
          >
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-3xl animate-pulse">⭐</span>
              <span>Start the Magic</span>
              <span className="text-3xl animate-pulse">⭐</span>
            </motion.div>
            
            {/* Button Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-pink-400/20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </Button>
        </motion.div>

        {/* Creator Credit */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="text-center"
        >
          <motion.p 
            className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 font-medium"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              fontFamily: "'Dancing Script', cursive, sans-serif",
              backgroundSize: "200% 200%",
              textShadow: "0 0 15px rgba(251, 191, 36, 0.4)",
              filter: "drop-shadow(0 0 8px rgba(236, 72, 153, 0.4))"
            }}
          >
            Created by Souhail & Maria
          </motion.p>
        </motion.div>

        {/* Floating Magic Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-60"
              initial={{
                x: Math.random() * 800,
                y: window.innerHeight,
                scale: 0
              }}
              animate={{
                y: -100,
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 8,
                ease: "easeOut"
              }}
              style={{
                filter: "drop-shadow(0 0 5px rgba(251, 191, 36, 0.8))"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MagicalLanding;