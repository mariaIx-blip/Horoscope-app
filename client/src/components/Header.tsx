export default function Header() {
  return (
    <header className="relative z-10 p-6 text-center">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="text-4xl text-accent star-sparkle">
          <i className="fas fa-star"></i>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
          Celestial Insights
        </h1>
        <div className="text-4xl text-accent star-sparkle">
          <i className="fas fa-star"></i>
        </div>
      </div>
      <p className="text-lg text-muted-foreground mb-6">Your Personal Horoscope & Spiritual Journey</p>
      <p className="text-sm dynamic-text font-medium">
        Created by Souhail and Maria
      </p>
    </header>
  );
}
