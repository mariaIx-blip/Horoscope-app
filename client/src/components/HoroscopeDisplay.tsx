import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Star } from "lucide-react";
import { ZodiacSign } from "../lib/zodiacData";
import { generateHoroscope } from "../lib/horoscopeGenerator";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface HoroscopeDisplayProps {
  sign: ZodiacSign;
  onBack: () => void;
}

const HoroscopeDisplay: React.FC<HoroscopeDisplayProps> = ({ sign, onBack }) => {
  const horoscope = generateHoroscope(sign);
  
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between mb-8"
      >
        <Button
          onClick={onBack}
          variant="outline"
          size="lg"
          className="bg-pink-900/50 border-pink-300/30 text-pink-200 hover:bg-pink-800/50"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          ← Back to Star Friends
        </Button>
        
        <div className="flex items-center space-x-2 text-purple-200">
          <Calendar className="w-5 h-5" />
          <span className="text-sm">{today}</span>
        </div>
      </motion.div>

      {/* Sign Header */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center space-x-4 mb-4">
          <div className="text-6xl">{sign.symbol}</div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-purple-300">
              {sign.name}
            </h1>
            <p className="text-xl text-purple-300">{sign.dates}</p>
          </div>
        </div>
      </motion.div>

      {/* Horoscope Content */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Card className="bg-gradient-to-br from-pink-900/30 to-blue-900/30 border-pink-300/20 backdrop-blur-sm">
          <CardContent className="p-8">
            {/* Title */}
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Star className="w-8 h-8 text-yellow-400 animate-pulse" />
              <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-300 text-center">
                Your Magical Daily Message!
              </h2>
              <Star className="w-8 h-8 text-yellow-400 animate-pulse" />
            </div>

            {/* Horoscope Paragraphs */}
            <div className="space-y-6 text-pink-100 leading-relaxed">
              {horoscope.content.map((paragraph, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + (index * 0.2), duration: 0.5 }}
                  className="text-lg p-4 bg-gradient-to-r from-purple-800/20 to-pink-800/20 rounded-lg border border-pink-300/10"
                >
                  {paragraph}
                </motion.div>
              ))}
            </div>

            {/* Daily Mantra */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="mt-8 p-6 bg-gradient-to-r from-pink-800/30 to-blue-800/30 rounded-lg border border-pink-300/20"
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold text-yellow-300 mb-3">✨ Your Special Words for Today ✨</h3>
                <p className="text-xl italic text-pink-100 font-medium">
                  "{horoscope.mantra}"
                </p>
              </div>
            </motion.div>

            {/* Planetary Influences */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="mt-6"
            >
              <h4 className="text-center text-yellow-300 mb-3 font-semibold">🌟 Your Star Powers Today 🌟</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {horoscope.influences.map((influence, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-pink-800/40 rounded-full text-sm text-pink-200 border border-pink-400/30 font-medium"
                  >
                    ✨ {influence}
                  </span>
                ))}
              </div>
            </motion.div>
            
            {/* Creator Credit */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="mt-6 text-center"
            >
              <p className="text-pink-300 text-sm">
                ✨ Made with love by Souhail & Maria ✨
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default HoroscopeDisplay;
