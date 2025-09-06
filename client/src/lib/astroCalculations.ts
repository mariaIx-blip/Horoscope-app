import { ZodiacSign, zodiacSigns } from "./zodiacData";

export interface AstrologicalProfile {
  sunSign: ZodiacSign;
  moonSign: ZodiacSign;
  risingSign: ZodiacSign;
  moonPhase: MoonPhase;
  currentMoonSign: ZodiacSign;
}

export interface MoonPhase {
  name: string;
  phase: number; // 0-1, where 0 is new moon, 0.5 is full moon
  emoji: string;
  energy: string;
  description: string;
}

// Simple ephemeris data for moon sign calculation (simplified for demo)
// In a real app, you'd use a proper astronomy library like Swiss Ephemeris
const moonSignData: Record<string, number> = {
  "2024-01-01": 0,  // Aries = 0, Taurus = 1, etc.
  "2024-01-15": 2,
  "2024-02-01": 4,
  "2024-02-15": 6,
  "2024-03-01": 8,
  "2024-03-15": 10,
  "2024-04-01": 0,
  "2024-04-15": 2,
  "2024-05-01": 4,
  "2024-05-15": 6,
  "2024-06-01": 8,
  "2024-06-15": 10,
  "2024-07-01": 0,
  "2024-07-15": 2,
  "2024-08-01": 4,
  "2024-08-15": 6,
  "2024-09-01": 8,
  "2024-09-15": 10,
  "2024-10-01": 0,
  "2024-10-15": 2,
  "2024-11-01": 4,
  "2024-11-15": 6,
  "2024-12-01": 8,
  "2024-12-15": 10,
};

export function getSunSign(birthDate: string): ZodiacSign {
  const date = new Date(birthDate);
  const month = date.getMonth() + 1; // 1-12
  const day = date.getDate();
  
  // Determine zodiac sign based on birth date
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return zodiacSigns.find(s => s.name === "Aries")!;
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return zodiacSigns.find(s => s.name === "Taurus")!;
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return zodiacSigns.find(s => s.name === "Gemini")!;
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return zodiacSigns.find(s => s.name === "Cancer")!;
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return zodiacSigns.find(s => s.name === "Leo")!;
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return zodiacSigns.find(s => s.name === "Virgo")!;
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return zodiacSigns.find(s => s.name === "Libra")!;
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return zodiacSigns.find(s => s.name === "Scorpio")!;
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return zodiacSigns.find(s => s.name === "Sagittarius")!;
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return zodiacSigns.find(s => s.name === "Capricorn")!;
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return zodiacSigns.find(s => s.name === "Aquarius")!;
  return zodiacSigns.find(s => s.name === "Pisces")!;
}

export function getMoonSign(birthDate: string): ZodiacSign {
  // Simplified moon sign calculation
  // In reality, this requires complex astronomical calculations
  const hash = birthDate.split('-').reduce((acc, part) => acc + parseInt(part), 0);
  const signIndex = hash % 12;
  return zodiacSigns[signIndex];
}

export function getRisingSign(birthDate: string, birthTime: string): ZodiacSign {
  // Simplified rising sign calculation
  // Rising sign changes every 2 hours approximately
  const [hours, minutes] = birthTime.split(':').map(Number);
  const totalMinutes = hours * 60 + minutes;
  
  // Each sign gets about 120 minutes (2 hours)
  const signIndex = Math.floor(totalMinutes / 120) % 12;
  return zodiacSigns[signIndex];
}

export function getCurrentMoonPhase(): MoonPhase {
  const now = new Date();
  const knownNewMoon = new Date('2024-01-11'); // Known new moon date
  const lunarCycle = 29.53059; // days
  
  const daysSinceNewMoon = (now.getTime() - knownNewMoon.getTime()) / (1000 * 60 * 60 * 24);
  const phase = (daysSinceNewMoon % lunarCycle) / lunarCycle;
  
  if (phase < 0.0625 || phase > 0.9375) {
    return {
      name: "New Moon",
      phase,
      emoji: "🌑",
      energy: "New Beginnings",
      description: "Perfect time to start new adventures and make wishes!"
    };
  } else if (phase < 0.1875) {
    return {
      name: "Waxing Crescent",
      phase,
      emoji: "🌒",
      energy: "Growing Dreams",
      description: "Your ideas are growing stronger every day!"
    };
  } else if (phase < 0.3125) {
    return {
      name: "First Quarter",
      phase,
      emoji: "🌓",
      energy: "Taking Action",
      description: "Time to work hard and push through challenges!"
    };
  } else if (phase < 0.4375) {
    return {
      name: "Waxing Gibbous",
      phase,
      emoji: "🌔",
      energy: "Almost There",
      description: "Keep going! You're so close to reaching your goals!"
    };
  } else if (phase < 0.5625) {
    return {
      name: "Full Moon",
      phase,
      emoji: "🌕",
      energy: "Big Feelings",
      description: "Emotions are extra strong today - feel all your feelings!"
    };
  } else if (phase < 0.6875) {
    return {
      name: "Waning Gibbous",
      phase,
      emoji: "🌖",
      energy: "Sharing Wisdom",
      description: "Time to share what you've learned with friends!"
    };
  } else if (phase < 0.8125) {
    return {
      name: "Last Quarter",
      phase,
      emoji: "🌗",
      energy: "Letting Go",
      description: "Release old worries and make room for new happiness!"
    };
  } else {
    return {
      name: "Waning Crescent",
      phase,
      emoji: "🌘",
      energy: "Rest and Reflect",
      description: "Take time to rest and think about all the good things in your life!"
    };
  }
}

export function getCurrentMoonSign(): ZodiacSign {
  // Simplified current moon sign calculation
  const now = new Date();
  const dayOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  const signIndex = Math.floor(dayOfYear / 30.44) % 12; // Approximate 30.44 days per sign
  return zodiacSigns[signIndex];
}

export function calculateAstrologicalProfile(
  birthDate: string,
  birthTime: string,
  location: string
): AstrologicalProfile {
  return {
    sunSign: getSunSign(birthDate),
    moonSign: getMoonSign(birthDate),
    risingSign: getRisingSign(birthDate, birthTime),
    moonPhase: getCurrentMoonPhase(),
    currentMoonSign: getCurrentMoonSign()
  };
}

// Moon phase themes for horoscope generation
export const moonPhaseThemes = {
  "New Moon": {
    energy: "Fresh starts and new beginnings are calling your name! Like planting a seed in magical soil, today is perfect for starting something amazing.",
    action: "Set a new goal or make a wish - the universe is listening extra carefully right now!"
  },
  "Waxing Crescent": {
    energy: "Your dreams are growing stronger, like a tiny plant reaching toward the sun. Small steps today lead to big adventures tomorrow!",
    action: "Take one small action toward your biggest dream - every journey starts with a single step!"
  },
  "First Quarter": {
    energy: "You have extra power to tackle challenges today! Like a superhero facing a big test, you have everything you need to succeed.",
    action: "Don't give up on something difficult - push through and you'll feel so proud of yourself!"
  },
  "Waxing Gibbous": {
    energy: "You're so close to achieving something amazing! Like climbing almost to the top of a mountain, keep going just a little bit more.",
    action: "Finish something you've been working on - victory is just around the corner!"
  },
  "Full Moon": {
    energy: "Your feelings are extra bright and strong today, like the moon lighting up the whole night sky. It's okay to feel everything deeply!",
    action: "Express your feelings to someone you trust - your emotions are valuable and worth sharing!"
  },
  "Waning Gibbous": {
    energy: "You have special wisdom to share with others, like a wise owl who's learned many secrets. Your knowledge can help your friends!",
    action: "Teach someone something new or share a lesson you've learned - you're wiser than you know!"
  },
  "Last Quarter": {
    energy: "It's time to let go of worries and fears, like releasing balloons into the sky. Make room for new happiness to enter your life!",
    action: "Forgive someone (including yourself) or stop worrying about something that's bothering you!"
  },
  "Waning Crescent": {
    energy: "Your soul needs rest and quiet time, like a tired butterfly resting on a flower. Take time to think about all the good things in your life.",
    action: "Spend some quiet time alone, reading, drawing, or just thinking about what makes you happy!"
  }
};