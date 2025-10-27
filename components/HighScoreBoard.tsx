'use client';

import { useEffect, useState } from 'react';

interface Score {
  name: string;
  cores: number;
  productivity: string;
}

export default function HighScoreBoard() {
  const [scores, setScores] = useState<Score[]>([]);
  const [animationIndex, setAnimationIndex] = useState(0);

  useEffect(() => {
    const initialScores: Score[] = [
      { name: 'MASTER_DEV', cores: 8, productivity: '1000%' },
      { name: 'CODE_NINJA', cores: 6, productivity: '750%' },
      { name: 'AGENT_PRO', cores: 5, productivity: '600%' },
      { name: 'ASYNC_KING', cores: 4, productivity: '450%' },
      { name: 'PARALLEL_ACE', cores: 3, productivity: '300%' },
      { name: 'NEWBIE', cores: 1, productivity: '100%' },
    ];
    
    setScores(initialScores);

    const interval = setInterval(() => {
      setAnimationIndex((prev) => (prev + 1) % initialScores.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-arcade-purple/20 to-arcade-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-neon-green animate-glow">
          HIGH SCORES
        </h2>

        <div className="max-w-3xl mx-auto border-4 border-neon-blue box-glow bg-arcade-dark/90 p-8">
          <div className="space-y-4">
            {scores.map((score, index) => (
              <div
                key={index}
                className={`flex justify-between items-center p-4 border-2 transition-all ${
                  animationIndex === index
                    ? 'border-neon-yellow bg-neon-yellow/10 scale-105'
                    : 'border-neon-blue/30'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-neon-pink text-2xl font-bold w-8">
                    {index + 1}
                  </span>
                  <span className="text-neon-blue text-sm md:text-base">
                    {score.name}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-neon-green text-xs">CORES</div>
                    <div className="text-neon-green text-lg font-bold">
                      {score.cores}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-neon-yellow text-xs">OUTPUT</div>
                    <div className="text-neon-yellow text-lg font-bold">
                      {score.productivity}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-neon-pink text-xs mb-4">
              YOUR RANKING: CALCULATING...
            </p>
            <div className="flex justify-center gap-2">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 border-2 ${
                    i < 3
                      ? 'border-neon-green bg-neon-green/30'
                      : 'border-gray-600'
                  }`}
                />
              ))}
            </div>
            <p className="text-white/60 text-xs mt-4">
              UNLOCK MORE CORES TO CLIMB THE LEADERBOARD
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
