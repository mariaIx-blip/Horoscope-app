import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Landing() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6" data-testid="section-landing">
      {/* Magical cosmic background with stars and nebula effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 opacity-80"></div>
      
      {/* Floating magical elements */}
      <div className="absolute top-20 left-20 text-6xl animate-float" data-testid="decoration-sparkle">✨</div>
      <div className="absolute top-40 right-32 text-4xl animate-float" style={{animationDelay: "-2s"}} data-testid="decoration-moon">🌙</div>
      <div className="absolute bottom-32 left-16 text-5xl animate-float" style={{animationDelay: "-4s"}} data-testid="decoration-star">⭐</div>
      
      <div className="relative z-10 text-center max-w-4xl">
        {/* Main Title */}
        <h1 
          className="text-6xl md:text-8xl font-magical text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-primary mb-8 animate-glow"
          data-testid="text-main-title"
        >
          First Horoscope
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted mb-12 font-light" data-testid="text-subtitle">
          Discover magical stories written in the stars just for you!
        </p>
        
        {/* Start Button */}
        <Link href="/input">
          <Button 
            className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-secondary text-primary-foreground px-12 py-6 rounded-full text-xl font-semibold shadow-2xl animate-glow hover:scale-110 transition-all duration-300 mb-8"
            data-testid="button-start-journey"
          >
            ✨ Start Your Magical Journey ✨
          </Button>
        </Link>
        
        {/* Attribution */}
        <p className="text-sm text-muted-foreground mt-8 font-handwritten text-lg" data-testid="text-attribution">
          Created by Souhail & Maria
        </p>
      </div>
    </section>
  );
}
