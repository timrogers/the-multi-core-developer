'use client';

import ArcadeHeader from '@/components/ArcadeHeader';
import ParticleBackground from '@/components/ParticleBackground';
import CoreComparison from '@/components/CoreComparison';
import GameConcepts from '@/components/GameConcepts';
import PowerUpSection from '@/components/PowerUpSection';
import HighScoreBoard from '@/components/HighScoreBoard';
import ArcadeFooter from '@/components/ArcadeFooter';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <ParticleBackground />
      
      <div className="scanlines fixed inset-0 pointer-events-none z-50 opacity-30" />
      
      <div className="relative z-10">
        <ArcadeHeader />
        
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-neon-blue animate-glow">
              THE MULTI-CORE
              <br />
              DEVELOPER
            </h1>
            <p className="text-base md:text-xl text-neon-pink max-w-3xl mx-auto leading-relaxed mb-8">
              Level up from single-threaded to parallel processing
            </p>
            <div className="inline-block border-4 border-neon-green box-glow p-4 animate-pulse-slow">
              <p className="text-neon-green text-sm md:text-base">
                INSERT COIN TO CONTINUE
              </p>
            </div>
          </div>
          
          <CoreComparison />
        </section>
        
        <GameConcepts />
        
        <PowerUpSection />
        
        <HighScoreBoard />
        
        <ArcadeFooter />
      </div>
    </main>
  );
}
