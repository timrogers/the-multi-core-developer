'use client';

import { useState, useEffect } from 'react';

export default function ArcadeHeader() {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const scoreInterval = setInterval(() => {
      setScore(prev => prev + Math.floor(Math.random() * 100));
    }, 2000);

    const timeInterval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(scoreInterval);
      clearInterval(timeInterval);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <header className="border-b-4 border-neon-blue bg-arcade-dark/90 backdrop-blur-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="text-xs md:text-sm">
              <span className="text-neon-yellow">1UP</span>
              <div className="text-neon-blue text-glow mt-1">
                {score.toString().padStart(6, '0')}
              </div>
            </div>
            <div className="text-xs md:text-sm">
              <span className="text-neon-pink">TIME</span>
              <div className="text-neon-green text-glow mt-1">
                {formatTime(time)}
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <div className="w-4 h-4 bg-neon-green rounded-full animate-pulse" />
            <div className="w-4 h-4 bg-neon-green rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-4 h-4 bg-neon-green rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>
    </header>
  );
}
