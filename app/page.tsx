'use client';

import { useState, useEffect } from 'react';

// Generate stars outside component to satisfy purity rules
const generateStars = () => 
  Array.from({ length: 50 }, () => ({
    width: Math.random() * 3,
    height: Math.random() * 3,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: Math.random() * 3 + 2
  }));

const stars = generateStars();

export default function Home() {
  const [score, setScore] = useState(0);
  const [showInsertCoin, setShowInsertCoin] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setScore(prev => prev + 100);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0014] via-[#1a0a2e] to-[#0a0014] overflow-hidden">
      {/* Starfield background effect */}
      <div className="fixed inset-0 opacity-30">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: star.width + 'px',
              height: star.height + 'px',
              top: star.top + '%',
              left: star.left + '%',
              animation: `twinkle ${star.duration}s infinite`
            }}
          />
        ))}
      </div>

      <main className="relative z-10 container mx-auto px-4 py-8">
        {/* Header with score */}
        <header className="flex justify-between items-center mb-12 animate-slide-in">
          <div className="text-[#00ffff] neon-text">
            <div className="text-sm font-bold tracking-wider">SCORE</div>
            <div className="text-3xl font-bold tabular-nums">{score.toString().padStart(8, '0')}</div>
          </div>
          <div className="text-[#ff00ff] neon-text">
            <div className="text-sm font-bold tracking-wider">PLAYER</div>
            <div className="text-3xl font-bold">01</div>
          </div>
          <div className="text-[#ffff00] neon-text">
            <div className="text-sm font-bold tracking-wider">LEVEL</div>
            <div className="text-3xl font-bold">∞</div>
          </div>
        </header>

        {/* Main title section */}
        <section className="text-center mb-16 crt-screen">
          <div className="inline-block">
            {showInsertCoin && (
              <div className="text-[#ffff00] text-xl mb-4 animate-blink font-bold">
                INSERT COIN
              </div>
            )}
            <h1 className="text-6xl md:text-8xl font-bold mb-6 neon-text text-[#00ff99] tracking-wider">
              THE MULTI-CORE
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 neon-text text-[#ff00ff] tracking-wider">
              DEVELOPER
            </h2>
            <div className="text-xl md:text-2xl text-[#00ffff] neon-text mb-8">
              ⚡ PARALLELIZE YOUR IMPACT ⚡
            </div>
          </div>
        </section>

        {/* Core concept visualization */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Single Core Developer */}
            <div className="arcade-border rounded-lg p-6 bg-[#1a0a2e]/50 backdrop-blur animate-slide-in">
              <h3 className="text-2xl font-bold text-[#ff00ff] neon-text mb-4 text-center">
                🎮 SINGLE-CORE MODE
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded border-2 border-[#ff00ff] flex items-center justify-center text-2xl">
                    👨‍💻
                  </div>
                  <div className="flex-1 h-8 bg-gradient-to-r from-[#ff00ff]/50 to-transparent rounded animate-pulse-glow" 
                       style={{ borderColor: '#ff00ff' }}></div>
                </div>
                <div className="text-[#00ffff] text-center font-mono">
                  Sequential Execution
                  <div className="text-sm opacity-75">One task at a time</div>
                </div>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="px-3 py-2 bg-[#ff00ff]/20 rounded border border-[#ff00ff]/50">
                    ⏳ Task 1 → Wait...
                  </div>
                  <div className="px-3 py-2 bg-[#ff00ff]/10 rounded border border-[#ff00ff]/30 opacity-50">
                    ⏳ Task 2 → Queued
                  </div>
                  <div className="px-3 py-2 bg-[#ff00ff]/10 rounded border border-[#ff00ff]/30 opacity-30">
                    ⏳ Task 3 → Queued
                  </div>
                </div>
              </div>
            </div>

            {/* Multi-Core Developer */}
            <div className="arcade-border rounded-lg p-6 bg-[#1a0a2e]/50 backdrop-blur animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-[#00ff99] neon-text mb-4 text-center">
                ⚡ MULTI-CORE MODE
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded border-2 border-[#00ff99] flex items-center justify-center text-2xl">
                      👨‍💻
                    </div>
                    <div className="flex-1 h-8 bg-gradient-to-r from-[#00ff99]/50 to-transparent rounded animate-pulse-glow" 
                         style={{ borderColor: '#00ff99' }}></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded border-2 border-[#00ffff] flex items-center justify-center text-2xl">
                      🤖
                    </div>
                    <div className="flex-1 h-8 bg-gradient-to-r from-[#00ffff]/50 to-transparent rounded animate-pulse-glow" 
                         style={{ borderColor: '#00ffff', animationDelay: '0.5s' }}></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded border-2 border-[#ffff00] flex items-center justify-center text-2xl">
                      🤖
                    </div>
                    <div className="flex-1 h-8 bg-gradient-to-r from-[#ffff00]/50 to-transparent rounded animate-pulse-glow" 
                         style={{ borderColor: '#ffff00', animationDelay: '1s' }}></div>
                  </div>
                </div>
                <div className="text-[#00ff99] text-center font-mono">
                  Parallel Execution
                  <div className="text-sm opacity-75">All tasks running simultaneously!</div>
                </div>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="px-3 py-2 bg-[#00ff99]/20 rounded border border-[#00ff99]/50 animate-pulse">
                    ✅ Task 1 → Active
                  </div>
                  <div className="px-3 py-2 bg-[#00ffff]/20 rounded border border-[#00ffff]/50 animate-pulse" style={{ animationDelay: '0.3s' }}>
                    ✅ Task 2 → Active
                  </div>
                  <div className="px-3 py-2 bg-[#ffff00]/20 rounded border border-[#ffff00]/50 animate-pulse" style={{ animationDelay: '0.6s' }}>
                    ✅ Task 3 → Active
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Power-ups section */}
        <section className="max-w-4xl mx-auto mb-16">
          <h3 className="text-4xl font-bold text-center text-[#ffff00] neon-text mb-8">
            🎁 POWER-UPS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🚀', title: 'PARALLEL TASKS', desc: 'Run multiple features simultaneously', color: '#00ffff' },
              { icon: '⚡', title: 'ASYNC AGENTS', desc: 'AI agents work 24/7 in background', color: '#ff00ff' },
              { icon: '💪', title: 'AMPLIFIED IMPACT', desc: 'Scale productivity exponentially', color: '#00ff99' }
            ].map((powerup, i) => (
              <div 
                key={i}
                className="arcade-border rounded-lg p-6 bg-[#1a0a2e]/50 backdrop-blur text-center hover:scale-105 transition-transform animate-float"
                style={{ 
                  animationDelay: `${i * 0.3}s`,
                  borderColor: powerup.color
                }}
              >
                <div className="text-5xl mb-3">{powerup.icon}</div>
                <div className="text-xl font-bold neon-text mb-2" style={{ color: powerup.color }}>
                  {powerup.title}
                </div>
                <div className="text-sm text-[#00ffff]/80">{powerup.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="max-w-4xl mx-auto mb-16">
          <h3 className="text-4xl font-bold text-center text-[#00ffff] neon-text mb-8">
            🎯 HOW IT WORKS
          </h3>
          <div className="space-y-4">
            {[
              { step: '1', text: 'Developer assigns tasks to AI coding agents', color: '#00ffff' },
              { step: '2', text: 'Agents work in parallel on different features', color: '#ff00ff' },
              { step: '3', text: 'Developer reviews and merges completed work', color: '#ffff00' },
              { step: '4', text: 'Repeat and scale across multiple workstreams', color: '#00ff99' }
            ].map((item, i) => (
              <div 
                key={i}
                className="flex items-center gap-4 arcade-border rounded-lg p-4 bg-[#1a0a2e]/50 backdrop-blur animate-slide-in"
                style={{ 
                  animationDelay: `${i * 0.1}s`,
                  borderColor: item.color
                }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold neon-text border-2"
                  style={{ color: item.color, borderColor: item.color }}
                >
                  {item.step}
                </div>
                <div className="text-lg" style={{ color: item.color }}>{item.text}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to action */}
        <section className="text-center">
          <div className="inline-block arcade-border rounded-lg p-8 bg-[#1a0a2e]/50 backdrop-blur">
            <h3 className="text-3xl font-bold text-[#00ff99] neon-text mb-4">
              READY TO LEVEL UP?
            </h3>
            <p className="text-xl text-[#00ffff] mb-6">
              Transform from single-core to multi-core developer
            </p>
            <button 
              onClick={() => setShowInsertCoin(!showInsertCoin)}
              className="px-8 py-4 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] text-white font-bold text-xl rounded-lg hover:scale-110 transition-transform animate-pulse-glow"
            >
              START GAME ▶
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center text-[#00ffff]/60 text-sm">
          <div className="mb-2">CREDITS: ∞</div>
          <div>Made with 💜 for developers who want to multiply their impact</div>
        </footer>
      </main>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
