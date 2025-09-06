import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getRandomTarotCard } from "@/lib/tarotCards";
import { getZodiacSign, getMoonPhase, generatePersonalizedMessage } from "@/lib/horoscope";
import type { UserData } from "@/pages/home";

interface HoroscopeResultsProps {
  userData: UserData;
  onBack: () => void;
}

export default function HoroscopeResults({ userData, onBack }: HoroscopeResultsProps) {
  const horoscopeData = useMemo(() => {
    const birthDate = new Date(userData.birthDate);
    const zodiacSign = getZodiacSign(birthDate);
    const moonPhase = getMoonPhase();
    const tarotCard = getRandomTarotCard();
    const personalizedMessage = generatePersonalizedMessage(zodiacSign.name, tarotCard.name);
    
    return {
      zodiacSign,
      moonPhase,
      tarotCard,
      personalizedMessage,
    };
  }, [userData]);

  return (
    <div className="results-container">
      <Card className="bg-card/80 backdrop-blur-sm card-glow">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-serif font-bold text-accent">
              Your Celestial Reading
            </h2>
            <Button
              onClick={onBack}
              variant="outline"
              className="border-border text-foreground hover:bg-muted"
              data-testid="button-back"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Back
            </Button>
          </div>

          {/* Personal Info */}
          <div className="mb-8 text-center">
            <h3 className="text-xl font-serif text-primary mb-2">
              Welcome, {userData.name}
            </h3>
            <p className="text-muted-foreground">
              Born on {new Date(userData.birthDate).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
              {userData.birthTime && ` at ${userData.birthTime}`}
              {userData.birthLocation && ` in ${userData.birthLocation}`}
            </p>
          </div>

          {/* Zodiac Information */}
          <div className="mb-8">
            <h3 className="text-2xl font-serif font-semibold mb-4 text-accent flex items-center">
              <i className="fas fa-sun mr-3"></i>
              Your Zodiac Profile
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-muted/30 hover-lift" data-testid="card-sun-sign">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-lg mb-2 text-primary">
                    Sun Sign: {horoscopeData.zodiacSign.name} {horoscopeData.zodiacSign.symbol}
                  </h4>
                  <p className="text-muted-foreground mb-3">
                    {horoscopeData.zodiacSign.dates}
                  </p>
                  <p className="text-foreground mb-3">
                    As a {horoscopeData.zodiacSign.name}, you embody the qualities of {horoscopeData.zodiacSign.element.toLowerCase()} energy. 
                    Your {horoscopeData.zodiacSign.quality.toLowerCase()} nature, guided by {horoscopeData.zodiacSign.ruling_planet}, 
                    brings unique strengths to your personality and life path.
                  </p>
                  <div className="text-sm text-foreground">
                    <p><strong>Element:</strong> {horoscopeData.zodiacSign.element}</p>
                    <p><strong>Quality:</strong> {horoscopeData.zodiacSign.quality}</p>
                    <p><strong>Ruling Planet:</strong> {horoscopeData.zodiacSign.ruling_planet}</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-muted/30 hover-lift" data-testid="card-moon-sign">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-lg mb-2 text-primary">Moon Sign: Intuitive Guide</h4>
                  <p className="text-muted-foreground mb-3">
                    Your emotional landscape and inner wisdom
                  </p>
                  <p className="text-foreground mb-3">
                    Your lunar influence enhances your natural {horoscopeData.zodiacSign.name} traits with deep intuition 
                    and emotional intelligence. This creates a beautiful balance between your outer expression and inner world.
                  </p>
                  <div className="text-sm text-foreground">
                    <p><strong>Emotional Style:</strong> Intuitive, protective</p>
                    <p><strong>Needs:</strong> Security, meaningful connections</p>
                    <p><strong>Gifts:</strong> Empathy, wisdom, healing presence</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Current Moon Phase */}
          <div className="mb-8">
            <h3 className="text-2xl font-serif font-semibold mb-4 text-accent flex items-center">
              <i className="fas fa-moon mr-3"></i>
              Current Lunar Energy
            </h3>
            <Card className="bg-muted/30" data-testid="card-moon-phase">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl text-accent">{horoscopeData.moonPhase.emoji}</div>
                  <div>
                    <h4 className="font-semibold text-lg text-primary">{horoscopeData.moonPhase.name}</h4>
                    <p className="text-muted-foreground">{horoscopeData.moonPhase.meaning}</p>
                  </div>
                </div>
                <p className="text-foreground mb-4">
                  {horoscopeData.moonPhase.description}
                </p>
                <Card className="bg-primary/20">
                  <CardContent className="p-4">
                    <h5 className="font-semibold text-accent mb-2">Energy Guidance:</h5>
                    <ul className="text-sm text-foreground space-y-1">
                      {horoscopeData.moonPhase.guidance.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>

          {/* Tarot Card Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-serif font-semibold mb-4 text-accent flex items-center">
              <i className="fas fa-magic mr-3"></i>
              Your Daily Tarot Guidance
            </h3>
            <Card className="bg-muted/30" data-testid="card-tarot">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div className="tarot-card mx-auto">
                    <img
                      src={horoscopeData.tarotCard.imageUrl}
                      alt={`${horoscopeData.tarotCard.name} Tarot Card`}
                      className="rounded-lg shadow-lg w-48 h-72 object-cover mx-auto"
                      data-testid="img-tarot-card"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <h4 className="font-serif text-2xl font-semibold text-primary mb-3">
                      {horoscopeData.tarotCard.name} ✨
                    </h4>
                    <p className="text-foreground mb-4 italic">
                      "{horoscopeData.tarotCard.meaningUpright}"
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {horoscopeData.tarotCard.emotionalGuidance}
                    </p>
                    <Card className="bg-accent/20">
                      <CardContent className="p-4">
                        <h5 className="font-semibold text-accent mb-2">Mental Encouragement:</h5>
                        <p className="text-foreground font-medium">
                          {horoscopeData.tarotCard.mentalEncouragement}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Emotional & Energy Guidance */}
          <div className="mb-8">
            <h3 className="text-2xl font-serif font-semibold mb-4 text-accent flex items-center">
              <i className="fas fa-heart mr-3"></i>
              Emotional & Energy Wellness
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-muted/30 hover-lift" data-testid="card-energy">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-lg mb-3 text-primary">
                    <i className="fas fa-leaf mr-2"></i>
                    Energy Recommendations
                  </h4>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">🌟</span>
                      <span>Morning meditation for 10 minutes to center your {horoscopeData.zodiacSign.element.toLowerCase()} energy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">🌊</span>
                      <span>Stay hydrated and eat foods that nourish your elemental nature</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">🔥</span>
                      <span>Channel your {horoscopeData.zodiacSign.name} nature into creative projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">🌙</span>
                      <span>Evening reflection to process emotions and experiences</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-muted/30 hover-lift" data-testid="card-emotional-balance">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-lg mb-3 text-primary">
                    <i className="fas fa-brain mr-2"></i>
                    Emotional Balance
                  </h4>
                  <p className="text-foreground mb-3">
                    Your {horoscopeData.zodiacSign.name} energy craves authentic expression and meaningful connections. 
                    Honor your feelings without being overwhelmed by them.
                  </p>
                  <div className="space-y-2 text-sm">
                    <Card className="bg-primary/20">
                      <CardContent className="p-2">
                        <strong className="text-accent">Feeling Overwhelmed?</strong>
                        <p className="text-foreground">Take time in nature to reconnect with your {horoscopeData.zodiacSign.element.toLowerCase()} element.</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-secondary/20">
                      <CardContent className="p-2">
                        <strong className="text-accent">Need Clarity?</strong>
                        <p className="text-foreground">Journal your thoughts to connect with your inner wisdom and {horoscopeData.zodiacSign.name} intuition.</p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Weekly Forecast */}
          <div className="mb-8">
            <h3 className="text-2xl font-serif font-semibold mb-4 text-accent flex items-center">
              <i className="fas fa-calendar-alt mr-3"></i>
              Your Week Ahead
            </h3>
            <div className="grid gap-4">
              <Card className="bg-muted/30 hover-lift" data-testid="card-week-early">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-primary">Monday - Wednesday</h4>
                    <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                  </div>
                  <p className="text-foreground">
                    Powerful energy for new beginnings and important conversations. Your natural {horoscopeData.zodiacSign.name} intensity 
                    will be an asset in negotiations and deep discussions. Trust your instincts in relationships.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-muted/30 hover-lift" data-testid="card-week-mid">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-primary">Thursday - Friday</h4>
                    <div className="text-2xl">⭐⭐⭐⭐</div>
                  </div>
                  <p className="text-foreground">
                    Focus on personal matters and self-care. Your {horoscopeData.zodiacSign.element.toLowerCase()} energy will be especially 
                    active. This is an excellent time for healing conversations and strengthening bonds.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-muted/30 hover-lift" data-testid="card-week-end">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-primary">Weekend</h4>
                    <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                  </div>
                  <p className="text-foreground">
                    Perfect time for spiritual practices and self-care. The cosmic energy supports deep transformation 
                    and releasing old patterns. Embrace the positive changes coming your way.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Lucky Elements */}
          <div className="mb-8">
            <h3 className="text-2xl font-serif font-semibold mb-4 text-accent flex items-center">
              <i className="fas fa-gem mr-3"></i>
              Your Lucky Elements
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-primary/20 to-accent/20 text-center hover-lift" data-testid="card-lucky-stone">
                <CardContent className="p-4">
                  <div className="text-3xl mb-2">💎</div>
                  <h4 className="font-semibold text-primary mb-2">Lucky Stone</h4>
                  <p className="text-foreground">Amethyst</p>
                  <p className="text-xs text-muted-foreground mt-1">Enhances intuition and spiritual awareness</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-secondary/20 to-primary/20 text-center hover-lift" data-testid="card-lucky-flower">
                <CardContent className="p-4">
                  <div className="text-3xl mb-2">🌸</div>
                  <h4 className="font-semibold text-primary mb-2">Lucky Flower</h4>
                  <p className="text-foreground">White Rose</p>
                  <p className="text-xs text-muted-foreground mt-1">Brings peace and emotional healing</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-accent/20 to-secondary/20 text-center hover-lift" data-testid="card-lucky-numbers">
                <CardContent className="p-4">
                  <div className="text-3xl mb-2">🔢</div>
                  <h4 className="font-semibold text-primary mb-2">Lucky Numbers</h4>
                  <p className="text-foreground">2, 7, 13</p>
                  <p className="text-xs text-muted-foreground mt-1">Numbers of intuition and transformation</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Personalized Message */}
          <Card className="bg-gradient-to-r from-primary/20 to-accent/20" data-testid="card-personal-message">
            <CardContent className="p-6">
              <h3 className="text-2xl font-serif font-semibold mb-4 text-accent text-center">
                <i className="fas fa-star mr-2"></i>
                A Message Just for You
                <i className="fas fa-star ml-2"></i>
              </h3>
              <div className="text-center">
                <p className="text-lg text-foreground mb-4 leading-relaxed">
                  {horoscopeData.personalizedMessage.opening}
                </p>
                <p className="text-foreground mb-4">
                  {horoscopeData.personalizedMessage.body}
                </p>
                <Card className="bg-accent/30 inline-block">
                  <CardContent className="p-4">
                    <p className="font-semibold text-foreground">
                      "{horoscopeData.personalizedMessage.affirmation}" ✨
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
