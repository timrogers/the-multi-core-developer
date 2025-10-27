'use client';

import { useState } from 'react';

export default function PowerUpSection() {
  const [selectedPowerUp, setSelectedPowerUp] = useState<number | null>(null);

  const powerUps = [
    {
      name: 'CODE GENERATION',
      icon: '💻',
      color: 'neon-blue',
      effect: '+50% Speed',
      description: 'Agents write boilerplate, tests, and documentation while you architect solutions.',
    },
    {
      name: 'DEBUGGING BOOST',
      icon: '🔍',
      color: 'neon-pink',
      effect: '+75% Accuracy',
      description: 'Parallel debugging across multiple files and systems simultaneously.',
    },
    {
      name: 'REFACTOR MASTER',
      icon: '🔧',
      color: 'neon-green',
      effect: '+100% Quality',
      description: 'Background agents continuously improve code quality while you build new features.',
    },
    {
      name: 'RESEARCH AGENT',
      icon: '📚',
      color: 'neon-yellow',
      effect: '+200% Knowledge',
      description: 'Agents research APIs, best practices, and solutions while you implement.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-arcade-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-neon-pink animate-glow">
          POWER-UPS
        </h2>
        <p className="text-center text-neon-blue text-sm mb-16">
          COLLECT ALL ABILITIES TO MAXIMIZE YOUR CORE COUNT
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {powerUps.map((powerUp, index) => (
            <div
              key={index}
              onClick={() => setSelectedPowerUp(index)}
              className={`border-4 border-${powerUp.color} p-6 bg-arcade-dark/50 cursor-pointer transition-all ${
                selectedPowerUp === index
                  ? `scale-105 box-glow animate-pulse`
                  : 'hover:scale-102'
              }`}
            >
              <div className="text-5xl mb-4 text-center animate-float">
                {powerUp.icon}
              </div>
              <h3 className={`text-${powerUp.color} text-sm mb-3 text-center text-glow`}>
                {powerUp.name}
              </h3>
              <div className={`text-${powerUp.color} text-xs text-center mb-3 font-bold`}>
                {powerUp.effect}
              </div>
              {selectedPowerUp === index && (
                <p className="text-white/70 text-xs leading-relaxed text-center animate-pulse">
                  {powerUp.description}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block border-4 border-arcade-purple p-6 bg-arcade-purple/10">
            <p className="text-neon-yellow text-sm mb-2">COMBO MULTIPLIER</p>
            <p className="text-white/80 text-xs max-w-2xl">
              Use all power-ups together to unlock the ultimate multi-core developer experience.
              <br />
              Your productivity scales exponentially with each additional agent core!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
