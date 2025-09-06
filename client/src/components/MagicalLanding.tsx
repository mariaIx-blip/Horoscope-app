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
      {/* Enhanced Magical Background */}
      <div className="absolute inset-0">
        {/* Floating Zodiac Symbols */}
        {zodiacSigns.map((sign, index) => (
          <motion.div
            key={sign.name}
            className="absolute text-4xl md:text-6xl opacity-20 text-yellow-200"
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
              scale: [0.5, 1, 0.7, 1],
              opacity: [0.1, 0.3, 0.1, 0.25]
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: index * 2
            }}
            style={{
              filter: "drop-shadow(0 0 10px rgba(251, 191, 36, 0.3))"
            }}
          >
            {sign.symbol}
          </motion.div>
        ))}

        {/* Magical Sun */}
        <motion.div
          className="absolute top-20 right-20 text-8xl opacity-30"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            filter: "drop-shadow(0 0 20px rgba(251, 191, 36, 0.5))"
          }}
        >
          ☀️
        </motion.div>

        {/* Magical Moon */}
        <motion.div
          className="absolute top-32 left-20 text-7xl opacity-40"
          animate={{
            y: [-20, 20, -20],
            rotate: [0, -15, 15, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            filter: "drop-shadow(0 0 15px rgba(147, 197, 253, 0.5))"
          }}
        >
          🌙
        </motion.div>

        {/* Floating Stars */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-200"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight
              ],
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            style={{
              fontSize: Math.random() * 20 + 10 + "px",
              filter: "drop-shadow(0 0 5px rgba(251, 191, 36, 0.8))"
            }}
          >
            ✨
          </motion.div>
        ))}

        {/* Shooting Stars */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={`shooting-${i}`}
            className="absolute text-2xl text-yellow-300"
            initial={{
              x: -100,
              y: Math.random() * window.innerHeight * 0.5,
              opacity: 0
            }}
            animate={{
              x: window.innerWidth + 100,
              y: Math.random() * window.innerHeight * 0.5 + 200,
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 8 + Math.random() * 5,
              ease: "easeOut"
            }}
            style={{
              filter: "drop-shadow(0 0 15px rgba(251, 191, 36, 0.8))"
            }}
          >
            💫
          </motion.div>
        ))}

        {/* Magical Nebula Effect */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)
            `
          }}
        />
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
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-300 to-blue-300 mb-6">
            🌟 Celestial Horoscope 🌟
          </h1>
          
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
          <p 
            className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 font-semibold"
            style={{
              fontFamily: "'Brush Script MT', cursive, sans-serif",
              textShadow: "0 0 20px rgba(251, 191, 36, 0.3)",
              filter: "drop-shadow(0 0 10px rgba(236, 72, 153, 0.3))"
            }}
          >
            Created by Souhail & Maria
          </p>
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