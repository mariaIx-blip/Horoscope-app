import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set audio properties
    audio.loop = true;
    audio.volume = 0.3; // Gentle background volume
    
    // Auto-play after user interaction
    const startMusic = () => {
      if (audio && !isPlaying) {
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch((error) => {
          console.log("Auto-play prevented:", error);
        });
      }
    };

    // Start music on first user interaction
    document.addEventListener("click", startMusic, { once: true });
    document.addEventListener("keydown", startMusic, { once: true });

    return () => {
      document.removeEventListener("click", startMusic);
      document.removeEventListener("keydown", startMusic);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.log("Play failed:", error);
      });
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex space-x-2">
      <Button
        onClick={togglePlay}
        variant="outline"
        size="sm"
        className="bg-purple-900/50 border-purple-300/30 text-purple-200 hover:bg-purple-800/50"
      >
        {isPlaying ? "⏸️" : "▶️"}
      </Button>
      
      <Button
        onClick={toggleMute}
        variant="outline"
        size="sm"
        className="bg-purple-900/50 border-purple-300/30 text-purple-200 hover:bg-purple-800/50"
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </Button>

      <audio ref={audioRef} preload="auto">
        <source src="/sounds/background.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default BackgroundMusic;