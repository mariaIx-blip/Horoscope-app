import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagicalLanding from "./components/MagicalLanding";
import HoroscopeDisplay from "./components/HoroscopeDisplay";
import BirthDetailsForm, { BirthDetails } from "./components/BirthDetailsForm";
import BackgroundMusic from "./components/BackgroundMusic";
import { ZodiacSign } from "./lib/zodiacData";
import { AstrologicalProfile, calculateAstrologicalProfile } from "./lib/astroCalculations";
import "./styles/astrology.css";
import "@fontsource/inter";

type AppView = 'landing' | 'birthForm' | 'horoscope';

function App() {
  const [currentView, setCurrentView] = useState<AppView>('landing');
  const [birthDetails, setBirthDetails] = useState<BirthDetails | null>(null);
  const [astroProfile, setAstroProfile] = useState<AstrologicalProfile | null>(null);

  const handleStartMagic = () => {
    setCurrentView('birthForm');
  };

  const handleBirthDetailsSubmit = (details: BirthDetails) => {
    setBirthDetails(details);
    const profile = calculateAstrologicalProfile(details.date, details.time, details.location);
    setAstroProfile(profile);
    setCurrentView('horoscope');
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
    setBirthDetails(null);
    setAstroProfile(null);
  };

  const handleBackToBirthForm = () => {
    setCurrentView('birthForm');
    setAstroProfile(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 relative overflow-hidden">
      <BackgroundMusic />
      <AnimatePresence mode="wait">
        {currentView === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <MagicalLanding onStartMagic={handleStartMagic} />
          </motion.div>
        )}
        
        {currentView === 'birthForm' && (
          <motion.div
            key="birthForm"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen flex items-center justify-center p-4"
          >
            <BirthDetailsForm
              onSubmit={handleBirthDetailsSubmit}
              onBack={handleBackToLanding}
            />
          </motion.div>
        )}
        
        {currentView === 'horoscope' && astroProfile && (
          <motion.div
            key="horoscope"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen flex items-center justify-center p-4"
          >
            <HoroscopeDisplay 
              astroProfile={astroProfile}
              birthDetails={birthDetails!}
              onBack={handleBackToBirthForm}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
