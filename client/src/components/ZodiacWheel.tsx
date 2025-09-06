import { motion } from "framer-motion";
import { zodiacSigns, ZodiacSign } from "../lib/zodiacData";

interface ZodiacWheelProps {
  onSignSelect: (sign: ZodiacSign) => void;
}

const ZodiacWheel: React.FC<ZodiacWheelProps> = ({ onSignSelect }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Outer Ring */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-purple-300/30"
        style={{ 
          background: "conic-gradient(from 0deg, transparent, rgba(139, 92, 246, 0.1), transparent)" 
        }}
      />
      
      {/* Inner Ring */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 rounded-full border border-yellow-300/20"
        style={{ 
          background: "conic-gradient(from 180deg, transparent, rgba(251, 191, 36, 0.1), transparent)" 
        }}
      />

      {/* Zodiac Signs */}
      <div className="relative w-full aspect-square">
        {zodiacSigns.map((sign, index) => {
          const angle = (index * 30) - 90; // 30 degrees apart, starting from top
          const radius = 45; // Percentage of container
          
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          
          return (
            <motion.button
              key={sign.name}
              className="absolute w-20 h-20 md:w-24 md:h-24 transform -translate-x-1/2 -translate-y-1/2 
                         bg-gradient-to-br from-pink-900/80 to-blue-900/80 
                         rounded-full border-2 border-pink-300/30 
                         flex flex-col items-center justify-center
                         hover:border-yellow-300/60 hover:shadow-lg hover:shadow-pink-500/20
                         transition-all duration-300 group hover:scale-110"
              style={{
                left: `${50 + x}%`,
                top: `${50 + y}%`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSignSelect(sign)}
            >
              <div className="text-2xl md:text-3xl mb-1 group-hover:scale-110 transition-transform">
                {sign.symbol}
              </div>
              <div className="text-xs md:text-sm text-purple-200 font-medium text-center">
                {sign.name}
              </div>
              <div className="text-xs text-purple-300/70">
                {sign.dates}
              </div>
            </motion.button>
          );
        })}
        
        {/* Center Decoration */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-purple-500/20 
                        rounded-full border-2 border-yellow-300/40 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-4xl"
          >
            ✨
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ZodiacWheel;
