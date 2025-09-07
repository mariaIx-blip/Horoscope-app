import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { ZodiacSign } from "@/lib/zodiacData";
import type { TarotCard } from "@/lib/tarotCards";

interface HoroscopeData {
  childName: string;
  birthDate: string;
  birthTime?: string;
  birthLocation: string;
  zodiacSign: ZodiacSign;
  tarotCard: TarotCard;
  generatedAt: string;
}

export default function Storybook() {
  const [data, setData] = useState<HoroscopeData | null>(null);
  const [showChapter2, setShowChapter2] = useState(false);
  const [showChapter3, setShowChapter3] = useState(false);

  useEffect(() => {
    const storedData = sessionStorage.getItem('horoscopeData');
    if (storedData) {
      setData(JSON.parse(storedData));
      
      // Animate chapter reveals
      setTimeout(() => setShowChapter2(true), 2000);
      setTimeout(() => setShowChapter3(true), 4000);
    }
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center" data-testid="loading-storybook">
        <p className="text-xl text-foreground">Loading your magical story...</p>
      </div>
    );
  }

  const generateStory = () => {
    const { childName, zodiacSign } = data;
    
    return {
      chapter1: `Once upon a time, in a land where stars whisper secrets and planets dance in the cosmic ballet, there was born a very special child named ${childName}. On the day of their birth, the universe itself smiled, knowing that someone truly magical had entered the world...`,
      
      chapter2: `On the day ${childName} was born, the ${zodiacSign.name} constellation shimmered brighter than ever before. The ${zodiacSign.symbol} symbol appeared in the clouds, marking this child as one blessed with the gifts of ${zodiacSign.element}. ${zodiacSign.childPersonality}`,
      
      chapter3: `As ${childName} grew, wonderful magical abilities began to bloom. Being ruled by ${zodiacSign.ruling_planet}, this special child discovered they had ${zodiacSign.magicalPowers}. Their favorite colors of ${zodiacSign.favoriteColors.join(', ')} would appear wherever they went, bringing joy and wonder to all who saw them.`
    };
  };

  const story = generateStory();

  return (
    <section className="min-h-screen py-12 px-6 relative" data-testid="section-storybook">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 opacity-80"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-5xl font-magical text-center text-secondary mb-12" data-testid="text-story-title">
          Your Magical Story
        </h2>
        
        {/* Chapter 1: Introduction */}
        <div className="magical-border mb-8" data-testid="chapter-1">
          <Card className="bg-card rounded-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-magical text-accent mb-4" data-testid="text-chapter-1-title">
                Chapter 1: The Star Child
              </h3>
              <img 
                src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=400&fit=crop" 
                alt="Child looking at starry night sky" 
                className="rounded-lg mb-4 w-full h-48 object-cover"
                data-testid="img-chapter-1"
              />
              <div className="prose prose-invert max-w-none">
                <p className="text-foreground leading-relaxed typewriter-text" data-testid="text-chapter-1-content">
                  {story.chapter1}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chapter 2: Zodiac Discovery */}
        {showChapter2 && (
          <div className="magical-border mb-8 animate-fadeIn" data-testid="chapter-2">
            <Card className="bg-card rounded-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-magical text-accent mb-4" data-testid="text-chapter-2-title">
                  Chapter 2: The Zodiac Guardian
                </h3>
                <img 
                  src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&h=400&fit=crop" 
                  alt="Magical constellation zodiac symbols" 
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                  data-testid="img-chapter-2"
                />
                <div className="prose prose-invert max-w-none">
                  <p className="text-foreground leading-relaxed" data-testid="text-chapter-2-content">
                    {story.chapter2}
                  </p>
                </div>
                
                {/* Zodiac Sign Details */}
                <div className="mt-6 p-4 bg-primary/20 rounded-lg" data-testid="zodiac-details">
                  <h4 className="text-lg font-semibold text-secondary mb-2" data-testid="text-zodiac-traits-title">
                    Your Special Traits:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {data.zodiacSign.traits.map((trait, index) => (
                      <span 
                        key={index} 
                        className="bg-accent/30 px-3 py-1 rounded-full text-sm text-foreground"
                        data-testid={`trait-${trait.toLowerCase()}`}
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Chapter 3: Magical Powers */}
        {showChapter3 && (
          <div className="magical-border mb-8 animate-fadeIn" data-testid="chapter-3">
            <Card className="bg-card rounded-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-magical text-accent mb-4" data-testid="text-chapter-3-title">
                  Chapter 3: The Gift of Magic
                </h3>
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop" 
                  alt="Magical fantasy scene with floating elements" 
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                  data-testid="img-chapter-3"
                />
                <div className="prose prose-invert max-w-none">
                  <p className="text-foreground leading-relaxed" data-testid="text-chapter-3-content">
                    {story.chapter3}
                  </p>
                </div>
                
                {/* Lucky Numbers and Colors */}
                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary/20 rounded-lg" data-testid="lucky-colors">
                    <h4 className="text-lg font-semibold text-secondary mb-2" data-testid="text-lucky-colors-title">
                      Your Magical Colors:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {data.zodiacSign.favoriteColors.map((color, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-card rounded-full text-sm text-foreground border"
                          data-testid={`color-${color.toLowerCase().replace(' ', '-')}`}
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-4 bg-accent/20 rounded-lg" data-testid="lucky-numbers">
                    <h4 className="text-lg font-semibold text-secondary mb-2" data-testid="text-lucky-numbers-title">
                      Your Lucky Numbers:
                    </h4>
                    <div className="flex gap-2">
                      {data.zodiacSign.luckyNumbers.map((number, index) => (
                        <span 
                          key={index}
                          className="w-8 h-8 bg-accent/50 rounded-full flex items-center justify-center text-sm font-bold text-foreground"
                          data-testid={`number-${number}`}
                        >
                          {number}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Navigation to Tarot */}
        {showChapter3 && (
          <div className="text-center mt-12" data-testid="nav-to-tarot">
            <Link href="/tarot">
              <Button 
                className="bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-primary text-accent-foreground px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                data-testid="button-tarot-gift"
              >
                🔮 Receive Your Magical Gift 🔮
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
