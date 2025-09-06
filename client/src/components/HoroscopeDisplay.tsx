import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Star, Moon, Sun, Sunrise } from "lucide-react";
import { ZodiacSign } from "../lib/zodiacData";
import { generatePersonalizedHoroscope } from "../lib/horoscopeGenerator";
import { AstrologicalProfile } from "../lib/astroCalculations";
import { BirthDetails } from "./BirthDetailsForm";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface HoroscopeDisplayProps {
  astroProfile: AstrologicalProfile;
  birthDetails: BirthDetails;
  onBack: () => void;
}

const HoroscopeDisplay: React.FC<HoroscopeDisplayProps> = ({ astroProfile, birthDetails, onBack }) => {
  const horoscope = generatePersonalizedHoroscope(astroProfile);
  
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
          ← Back to Celestial Horoscope
        </Button>
        
        <div className="flex items-center space-x-2 text-purple-200">
          <Calendar className="w-5 h-5" />
          <span className="text-sm">{today}</span>
        </div>
      </motion.div>

      {/* Astrological Profile Header */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Sun Sign */}
          <div className="bg-gradient-to-br from-yellow-800/20 to-orange-800/20 rounded-lg p-4 border border-yellow-300/20">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Sun className="w-5 h-5 text-yellow-400" />
              <h3 className="text-lg font-semibold text-yellow-200">Sun Sign</h3>
            </div>
            <div className="text-3xl mb-1">{astroProfile.sunSign.symbol}</div>
            <div className="text-yellow-200 font-medium">{astroProfile.sunSign.name}</div>
            <div className="text-yellow-300/70 text-sm">Your Core Self</div>
          </div>
          
          {/* Moon Sign */}
          <div className="bg-gradient-to-br from-blue-800/20 to-purple-800/20 rounded-lg p-4 border border-blue-300/20">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Moon className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-blue-200">Moon Sign</h3>
            </div>
            <div className="text-3xl mb-1">{astroProfile.moonSign.symbol}</div>
            <div className="text-blue-200 font-medium">{astroProfile.moonSign.name}</div>
            <div className="text-blue-300/70 text-sm">Your Emotions</div>
          </div>
          
          {/* Rising Sign */}
          <div className="bg-gradient-to-br from-pink-800/20 to-purple-800/20 rounded-lg p-4 border border-pink-300/20">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Sunrise className="w-5 h-5 text-pink-400" />
              <h3 className="text-lg font-semibold text-pink-200">Rising Sign</h3>
            </div>
            <div className="text-3xl mb-1">{astroProfile.risingSign.symbol}</div>
            <div className="text-pink-200 font-medium">{astroProfile.risingSign.name}</div>
            <div className="text-pink-300/70 text-sm">How Others See You</div>
          </div>
        </div>
        
        {/* Your Personal Tarot Card */}
        {horoscope.tarotCard && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-gradient-to-br from-purple-800/20 to-pink-800/20 rounded-lg p-6 border border-purple-300/20"
          >
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold text-purple-200 mb-3">🔮 Your Personal Tarot Card 🔮</h3>
              
              {/* Tarot Card Image */}
              <div className="mb-4 flex justify-center">
                <div className="relative w-32 h-48 bg-gradient-to-b from-purple-900 to-indigo-900 rounded-lg border-2 border-yellow-400 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-800/50 to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-3">
                    <div className="text-yellow-300 text-lg font-bold mb-2">{horoscope.tarotCard.name}</div>
                    <div className="text-purple-200 text-xs space-y-1">
                      {horoscope.tarotCard.keywords.slice(0, 3).map((keyword, index) => (
                        <div key={index} className="px-2 py-1 bg-purple-900/60 rounded text-xs">{keyword}</div>
                      ))}
                    </div>
                  </div>
                  {/* Card border decoration */}
                  <div className="absolute inset-1 border border-yellow-400/30 rounded"></div>
                </div>
              </div>
              
              {/* Card Name and Keywords */}
              <div className="text-2xl font-bold text-yellow-300 mb-2">{horoscope.tarotCard.name}</div>
              <div className="flex justify-center flex-wrap gap-2 mb-3">
                {horoscope.tarotCard.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-800/40 rounded-full text-sm text-purple-200 border border-purple-400/30"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Card Description */}
            <div className="space-y-3 text-purple-100">
              <div className="p-3 bg-purple-800/20 rounded-lg">
                <p className="text-sm leading-relaxed text-center">{horoscope.tarotCard.meaningUpright}</p>
              </div>
            </div>
          </motion.div>
        )}
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
              {horoscope.content.map((paragraph: string, index: number) => (
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
                {horoscope.influences.map((influence: string, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-pink-800/40 rounded-full text-sm text-pink-200 border border-pink-400/30 font-medium"
                  >
                    ✨ {influence}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Detailed Tarot Guidance */}
            {horoscope.tarotCard && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-300/20">
                  <h4 className="font-semibold text-purple-200 mb-3 text-center">🌟 Emotional Guidance</h4>
                  <p className="text-sm leading-relaxed text-purple-100">{horoscope.tarotCard.emotionalGuidance}</p>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-pink-900/30 to-purple-900/30 rounded-lg border border-pink-300/20">
                  <h4 className="font-semibold text-pink-200 mb-3 text-center">💪 Mental Encouragement</h4>
                  <p className="text-sm leading-relaxed text-pink-100">{horoscope.tarotCard.mentalEncouragement}</p>
                </div>
              </motion.div>
            )}
            
            {/* Creator Credit */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="mt-6 text-center"
            >
              <motion.p 
                className="text-pink-300 text-sm font-medium"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Created by Souhail & Maria
              </motion.p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default HoroscopeDisplay;
