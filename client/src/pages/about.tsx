import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6" data-testid="section-about">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-teal-900 opacity-80"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-magical text-secondary mb-8" data-testid="text-about-title">
          About First Horoscope
        </h2>
        
        <Card className="bg-card/90 backdrop-blur-lg shadow-2xl border border-border" data-testid="card-about-content">
          <CardContent className="p-8">
            <p className="text-lg text-foreground leading-relaxed mb-6" data-testid="text-about-description">
              First Horoscope is a magical web application that creates personalized fantasy stories for children based on their astrological signs. Each story is unique and designed to inspire wonder, creativity, and self-discovery.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-primary/20 rounded-lg p-6" data-testid="features-section">
                <h3 className="text-xl font-magical text-accent mb-3" data-testid="text-features-title">
                  ✨ Features
                </h3>
                <ul className="text-left space-y-2 text-foreground" data-testid="list-features">
                  <li data-testid="feature-stories">• Personalized horoscope stories</li>
                  <li data-testid="feature-tarot">• Interactive tarot card readings</li>
                  <li data-testid="feature-design">• Beautiful, child-friendly design</li>
                  <li data-testid="feature-astronomy">• Educational astronomy content</li>
                  <li data-testid="feature-complete-deck">• Complete 78-card tarot system</li>
                </ul>
              </div>
              
              <div className="bg-secondary/20 rounded-lg p-6" data-testid="creators-section">
                <h3 className="text-xl font-magical text-accent mb-3" data-testid="text-creators-title">
                  🎨 Created With Love
                </h3>
                <p className="text-foreground text-left" data-testid="text-creators-description">
                  Designed and developed by Souhail & Maria with the goal of making astrology accessible and fun for children while encouraging imagination and learning.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-accent/20 rounded-lg" data-testid="mission-section">
              <h3 className="text-xl font-magical text-accent mb-3" data-testid="text-mission-title">
                🌟 Our Mission
              </h3>
              <p className="text-foreground" data-testid="text-mission-description">
                To spark children's imagination through the magic of storytelling and astrology, helping them discover their unique qualities and potential while having fun with cosmic adventures.
              </p>
            </div>

            <div className="mt-8 text-center" data-testid="technical-details">
              <h3 className="text-xl font-magical text-accent mb-3" data-testid="text-technical-title">
                🔧 Technical Details
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-card/50 p-3 rounded" data-testid="tech-frontend">
                  <strong>Frontend:</strong><br />
                  React, TypeScript, Tailwind CSS
                </div>
                <div className="bg-card/50 p-3 rounded" data-testid="tech-backend">
                  <strong>Backend:</strong><br />
                  Express.js, Node.js
                </div>
                <div className="bg-card/50 p-3 rounded" data-testid="tech-features">
                  <strong>Features:</strong><br />
                  78-card Tarot System, Zodiac Integration
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
