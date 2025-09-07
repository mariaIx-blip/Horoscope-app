import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { getRandomTarotCard, getTarotCardByName, allTarotCards } from "../client/src/lib/tarotCards";
import { getZodiacSign, zodiacSigns } from "../client/src/lib/zodiacData";

const generateHoroscopeSchema = z.object({
  childName: z.string().min(2),
  birthDate: z.string(),
  birthTime: z.string().optional(),
  birthLocation: z.string().min(2),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all zodiac signs
  app.get("/api/zodiac", (req, res) => {
    res.json({ signs: zodiacSigns });
  });

  // Get zodiac sign by birth date
  app.get("/api/zodiac/:birthDate", (req, res) => {
    try {
      const { birthDate } = req.params;
      const zodiacSign = getZodiacSign(birthDate);
      res.json({ zodiacSign });
    } catch (error) {
      res.status(400).json({ error: "Invalid birth date format" });
    }
  });

  // Get all tarot cards
  app.get("/api/tarot", (req, res) => {
    res.json({ cards: allTarotCards });
  });

  // Get random tarot card
  app.get("/api/tarot/random", (req, res) => {
    const card = getRandomTarotCard();
    res.json({ card });
  });

  // Get specific tarot card by name
  app.get("/api/tarot/:name", (req, res) => {
    const { name } = req.params;
    const card = getTarotCardByName(decodeURIComponent(name));
    
    if (!card) {
      return res.status(404).json({ error: "Tarot card not found" });
    }
    
    res.json({ card });
  });

  // Generate horoscope story
  app.post("/api/horoscope/generate", (req, res) => {
    try {
      const validation = generateHoroscopeSchema.safeParse(req.body);
      
      if (!validation.success) {
        return res.status(400).json({ 
          error: "Validation failed", 
          details: validation.error.errors 
        });
      }

      const { childName, birthDate, birthTime, birthLocation } = validation.data;
      
      // Get zodiac sign and random tarot card
      const zodiacSign = getZodiacSign(birthDate);
      const tarotCard = getRandomTarotCard();
      
      // Generate story chapters
      const story = {
        chapter1: `Once upon a time, in a land where stars whisper secrets and planets dance in the cosmic ballet, there was born a very special child named ${childName}. On the day of their birth, the universe itself smiled, knowing that someone truly magical had entered the world...`,
        
        chapter2: `On the day ${childName} was born, the ${zodiacSign.name} constellation shimmered brighter than ever before. The ${zodiacSign.symbol} symbol appeared in the clouds, marking this child as one blessed with the gifts of ${zodiacSign.element}. ${zodiacSign.childPersonality}`,
        
        chapter3: `As ${childName} grew, wonderful magical abilities began to bloom. Being ruled by ${zodiacSign.ruling_planet}, this special child discovered they had ${zodiacSign.magicalPowers}. Their favorite colors of ${zodiacSign.favoriteColors.join(', ')} would appear wherever they went, bringing joy and wonder to all who saw them.`
      };

      // Create personalized tarot message
      const personalizedTarotCard = {
        ...tarotCard,
        childMessage: `Dear ${childName}, ${tarotCard.childMessage}`
      };

      const horoscope = {
        childName,
        birthDate,
        birthTime,
        birthLocation,
        zodiacSign,
        story,
        tarotCard: personalizedTarotCard,
        generatedAt: new Date().toISOString()
      };

      res.json({ horoscope });
      
    } catch (error) {
      console.error('Error generating horoscope:', error);
      res.status(500).json({ error: "Failed to generate horoscope" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
