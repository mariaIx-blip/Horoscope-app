import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { TarotCard } from "@/lib/tarotCards";

interface HoroscopeData {
  childName: string;
  birthDate: string;
  birthTime?: string;
  birthLocation: string;
  zodiacSign: any;
  tarotCard: TarotCard;
  generatedAt: string;
}

export default function TarotPage() {
  const [data, setData] = useState<HoroscopeData | null>(null);
  const [cardFlipped, setCardFlipped] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const storedData = sessionStorage.getItem('horoscopeData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const flipCard = () => {
    if (!cardFlipped) {
      setCardFlipped(true);
      setTimeout(() => {
        setShowDescription(true);
      }, 400);
    }
  };

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center" data-testid="loading-tarot">
        <p className="text-xl text-foreground">Loading your magical gift...</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6" data-testid="section-tarot">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 opacity-80"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-magical text-secondary mb-8" data-testid="text-tarot-title">
          Your Magical Gift
        </h2>
        <p className="text-xl text-muted mb-12" data-testid="text-tarot-subtitle">
          A special tarot card has chosen you! Click to reveal your cosmic message.
        </p>
        
        {/* Tarot Card Flip Animation */}
        <div 
          className={`card-flip w-64 h-96 mx-auto mb-8 cursor-pointer ${cardFlipped ? 'flipped' : ''}`}
          onClick={flipCard}
          data-testid="card-tarot-flip"
        >
          <div className="card-flip-inner">
            {/* Card Back */}
            <div className="card-front bg-gradient-to-br from-indigo-800 to-purple-800 border-4 border-secondary flex items-center justify-center" data-testid="card-back">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop" 
                alt="Mystical tarot card back design" 
                className="w-full h-full object-cover rounded-lg"
                data-testid="img-card-back"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-lg flex items-center justify-center">
                <div className="text-6xl">🔮</div>
              </div>
            </div>
            
            {/* Card Front */}
            <div className="card-back bg-card border-4 border-secondary flex flex-col items-center justify-center p-4" data-testid="card-front">
              <h3 className="text-2xl font-magical text-secondary mb-4" data-testid="text-card-name">
                {data.tarotCard.name}
              </h3>
              <img 
                src={data.tarotCard.imageUrl} 
                alt={data.tarotCard.name} 
                className="w-32 h-48 object-cover rounded mb-4"
                data-testid="img-card-front"
              />
              <p className="text-sm text-center text-foreground" data-testid="text-card-keywords">
                {data.tarotCard.keywords.join(', ')}
              </p>
            </div>
          </div>
        </div>

        {/* Tarot Description */}
        {showDescription && (
          <Card className="bg-card/90 backdrop-blur-lg max-w-2xl mx-auto shadow-2xl border border-border animate-fadeIn" data-testid="card-description">
            <CardContent className="p-8">
              <h3 className="text-3xl font-magical text-accent mb-6" data-testid="text-description-title">
                {data.tarotCard.name}
              </h3>
              
              <div className="space-y-6 text-left">
                <div>
                  <h4 className="text-lg font-semibold text-secondary mb-2" data-testid="text-upright-title">
                    Upright Meaning:
                  </h4>
                  <p className="text-foreground leading-relaxed" data-testid="text-upright-meaning">
                    {data.tarotCard.meaningUpright}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-secondary mb-2" data-testid="text-emotional-title">
                    Emotional Guidance:
                  </h4>
                  <p className="text-foreground leading-relaxed" data-testid="text-emotional-guidance">
                    {data.tarotCard.emotionalGuidance}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-secondary mb-2" data-testid="text-encouragement-title">
                    Mental Encouragement:
                  </h4>
                  <p className="text-foreground leading-relaxed" data-testid="text-mental-encouragement">
                    {data.tarotCard.mentalEncouragement}
                  </p>
                </div>
                
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-secondary mb-2" data-testid="text-child-message-title">
                    Magical Message for You:
                  </h4>
                  <p className="text-foreground leading-relaxed font-handwritten text-lg" data-testid="text-child-message">
                    Dear {data.childName}, {data.tarotCard.childMessage}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Return Home Button */}
        {showDescription && (
          <div className="mt-8" data-testid="nav-return-home">
            <Link href="/">
              <Button 
                className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-secondary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                data-testid="button-return-home"
              >
                🏠 Back to Beginning 🏠
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
