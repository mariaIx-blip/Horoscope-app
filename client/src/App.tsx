import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ZodiacWheel from "./components/ZodiacWheel";
import HoroscopeDisplay from "./components/HoroscopeDisplay";
import CelestialBackground from "./components/CelestialBackground";
import { ZodiacSign } from "./lib/zodiacData";
import "./styles/astrology.css";
import "@fontsource/inter";

function App() {
  const [selectedSign, setSelectedSign] = useState<ZodiacSign | null>(null);
  const [showHoroscope, setShowHoroscope] = useState(false);

  const handleSignSelect = (sign: ZodiacSign) => {
    setSelectedSign(sign);
    setShowHoroscope(true);
  };

  const handleBack = () => {
    setShowHoroscope(false);
    setSelectedSign(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 relative overflow-hidden">
      {/* Celestial Background */}
      <CelestialBackground />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <AnimatePresence mode="wait">
          {!showHoroscope ? (
            <motion.div
              key="wheel"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-4xl"
            >
              {/* Header */}
              <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-center mb-12"
              >
                <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-300 to-blue-300 mb-4">
                  ✨ Star Friends ✨
                </h1>
                <p className="text-xl md:text-2xl text-purple-200 font-light">
                  Discover your magical star powers and daily adventures!
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-purple-500 mx-auto mt-6 rounded-full"></div>
              </motion.div>
              
              {/* Zodiac Wheel */}
              <ZodiacWheel onSignSelect={handleSignSelect} />
              
              {/* Instructions */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-center mt-8 space-y-4"
              >
                <p className="text-purple-200 text-lg">
                  Click on your star sign to discover your magical daily message!
                </p>
                <p className="text-purple-300 text-sm">
                  ✨ Created with love by Souhail & Maria ✨
                </p>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="horoscope"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-4xl"
            >
              <HoroscopeDisplay 
                sign={selectedSign!} 
                onBack={handleBack}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
