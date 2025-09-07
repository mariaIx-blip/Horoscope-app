import { useEffect } from "react";

export default function StarsBackground() {
  useEffect(() => {
    const starsContainer = document.getElementById('stars-background');
    if (!starsContainer) return;
    
    const numberOfStars = 100;
    
    // Clear existing stars
    starsContainer.innerHTML = '';
    
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 3 + 's';
      star.style.animationDuration = (Math.random() * 3 + 2) + 's';
      starsContainer.appendChild(star);
    }
  }, []);

  return (
    <div 
      id="stars-background" 
      className="stars"
      data-testid="background-stars"
    />
  );
}
