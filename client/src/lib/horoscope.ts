import { zodiacSigns, type ZodiacSign } from "./zodiacData";

export interface MoonPhase {
  name: string;
  emoji: string;
  meaning: string;
  description: string;
  guidance: string[];
}

export interface PersonalizedMessage {
  opening: string;
  body: string;
  affirmation: string;
}

export function getZodiacSign(birthDate: Date): ZodiacSign {
  const month = birthDate.getMonth() + 1; // JavaScript months are 0-indexed
  const day = birthDate.getDate();

  // Determine zodiac sign based on birth date
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return zodiacSigns.find(sign => sign.name === "Aries")!;
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return zodiacSigns.find(sign => sign.name === "Taurus")!;
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    return zodiacSigns.find(sign => sign.name === "Gemini")!;
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    return zodiacSigns.find(sign => sign.name === "Cancer")!;
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return zodiacSigns.find(sign => sign.name === "Leo")!;
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return zodiacSigns.find(sign => sign.name === "Virgo")!;
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return zodiacSigns.find(sign => sign.name === "Libra")!;
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    return zodiacSigns.find(sign => sign.name === "Scorpio")!;
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return zodiacSigns.find(sign => sign.name === "Sagittarius")!;
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return zodiacSigns.find(sign => sign.name === "Capricorn")!;
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return zodiacSigns.find(sign => sign.name === "Aquarius")!;
  } else {
    return zodiacSigns.find(sign => sign.name === "Pisces")!;
  }
}

export function getMoonPhase(): MoonPhase {
  // Generate a realistic moon phase based on current time
  const phases: MoonPhase[] = [
    {
      name: "New Moon",
      emoji: "🌑",
      meaning: "New beginnings, fresh starts, intention setting",
      description: "The New Moon represents a clean slate and the perfect time for setting intentions. This lunar phase encourages you to plant seeds for future growth and embrace new opportunities with an open heart.",
      guidance: [
        "Set clear intentions for the month ahead",
        "Start new projects or relationships",
        "Practice meditation and inner reflection",
        "Release old patterns that no longer serve you"
      ]
    },
    {
      name: "Waxing Crescent",
      emoji: "🌒",
      meaning: "Growth, manifestation, taking action",
      description: "As the moon grows brighter, so does your energy for manifesting your dreams. This is a time of building momentum and taking concrete steps toward your goals.",
      guidance: [
        "Take action on your intentions",
        "Build positive habits and routines",
        "Network and make meaningful connections",
        "Stay focused on your long-term vision"
      ]
    },
    {
      name: "First Quarter Moon",
      emoji: "🌓",
      meaning: "Decision making, overcoming challenges, perseverance",
      description: "The First Quarter Moon brings challenges that test your commitment to your goals. This is a time for making important decisions and pushing through obstacles with determination.",
      guidance: [
        "Make decisive choices about your path forward",
        "Face challenges with courage and determination",
        "Adjust your strategies if needed",
        "Trust in your ability to overcome obstacles"
      ]
    },
    {
      name: "Waxing Gibbous",
      emoji: "🌔",
      meaning: "Refinement, patience, fine-tuning",
      description: "As the moon nears fullness, it's time to refine your approach and make final adjustments. Patience and persistence are key during this phase of preparation.",
      guidance: [
        "Refine and perfect your projects",
        "Practice patience with the process",
        "Make necessary adjustments to your plans",
        "Trust that everything is unfolding as it should"
      ]
    },
    {
      name: "Full Moon",
      emoji: "🌕",
      meaning: "Completion, celebration, release, heightened energy",
      description: "The Full Moon is a time of peak energy and illumination. Celebrate your achievements and release anything that no longer serves your highest good.",
      guidance: [
        "Celebrate your accomplishments and progress",
        "Practice gratitude for all your blessings",
        "Release negative emotions and limiting beliefs",
        "Use this high energy for healing and transformation"
      ]
    },
    {
      name: "Waning Gibbous",
      emoji: "🌖",
      meaning: "Gratitude, sharing wisdom, giving back",
      description: "After the intensity of the Full Moon, this phase encourages sharing your wisdom and giving back to others. It's a time of gratitude and teaching what you've learned.",
      guidance: [
        "Share your knowledge and wisdom with others",
        "Practice gratitude daily",
        "Give back to your community",
        "Reflect on the lessons you've learned"
      ]
    },
    {
      name: "Last Quarter Moon",
      emoji: "🌗",
      meaning: "Release, forgiveness, letting go",
      description: "The Last Quarter Moon is a powerful time for release and forgiveness. Let go of grudges, fears, and anything that weighs down your spirit.",
      guidance: [
        "Practice forgiveness toward yourself and others",
        "Release old grudges and resentments",
        "Let go of fears that limit your potential",
        "Clear emotional and physical clutter from your life"
      ]
    },
    {
      name: "Waning Crescent",
      emoji: "🌘",
      meaning: "Rest, reflection, preparation, inner wisdom",
      description: "This quiet phase before the New Moon is perfect for rest, reflection, and connecting with your inner wisdom. Prepare your energy for the new cycle ahead.",
      guidance: [
        "Take time for rest and self-care",
        "Practice deep reflection and introspection",
        "Connect with your spiritual practices",
        "Prepare mentally and emotionally for new beginnings"
      ]
    }
  ];

  // Return a phase based on the current date (simplified for demo)
  const currentPhaseIndex = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 3.69)) % 8;
  return phases[currentPhaseIndex];
}

export function generatePersonalizedMessage(zodiacSign: string, tarotCard: string): PersonalizedMessage {
  const messages = {
    opening: `Dear beautiful soul, you are entering a period of profound transformation and cosmic alignment. Your ${zodiacSign} energy, combined with the wisdom of ${tarotCard}, creates a powerful foundation for growth and self-discovery.`,
    body: `The universe has conspired to bring you exactly what you need at this moment. Your natural strengths and intuitive wisdom are guiding you toward a brighter future filled with love, abundance, and meaningful connections. Remember that every challenge is an opportunity for growth, and you have the inner strength to overcome any obstacle that comes your way.`,
    affirmation: "You are braver than you believe, stronger than you seem, and more loved than you know."
  };

  return messages;
}
