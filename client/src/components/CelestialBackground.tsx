import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CelestialBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Generate stars
    const stars: Array<{ x: number; y: number; size: number; opacity: number; speed: number }> = [];
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.5 + 0.1,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        // Twinkling effect
        star.opacity += (Math.random() - 0.5) * 0.02;
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));

        // Slow movement
        star.x += star.speed * (Math.random() - 0.5);
        star.y += star.speed * (Math.random() - 0.5);

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Animated Stars Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-indigo-900/20" style={{ zIndex: 2 }} />
      
      {/* Floating Celestial Elements */}
      <div className="absolute inset-0" style={{ zIndex: 3 }}>
        {/* Floating Moons */}
        <motion.div
          className="absolute top-20 left-20 text-6xl opacity-20"
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 360],
          }}
          transition={{
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
        >
          🌙
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-32 text-4xl opacity-30"
          animate={{
            y: [20, -20, 20],
            x: [-10, 10, -10],
          }}
          transition={{
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          ✨
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 left-40 text-5xl opacity-25"
          animate={{
            rotate: [0, -360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          ⭐
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-20 text-3xl opacity-40"
          animate={{
            y: [-15, 15, -15],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          🌟
        </motion.div>
      </div>
      
      {/* Subtle Light Rays */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          background: "conic-gradient(from 0deg at 20% 80%, transparent 0deg, rgba(255, 255, 255, 0.1) 60deg, transparent 120deg, rgba(255, 255, 255, 0.05) 180deg, transparent 240deg, rgba(255, 255, 255, 0.1) 300deg, transparent 360deg)",
          zIndex: 2 
        }} 
      />
    </>
  );
};

export default CelestialBackground;
