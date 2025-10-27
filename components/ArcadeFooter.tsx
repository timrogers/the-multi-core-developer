'use client';

export default function ArcadeFooter() {
  return (
    <footer className="border-t-4 border-neon-blue bg-arcade-dark py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-neon-yellow animate-glow mb-6">
              GAME OVER?
            </h3>
            <p className="text-neon-blue text-sm md:text-base mb-6">
              Not yet! The multi-core revolution is just beginning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="text-neon-pink text-sm mb-2">MISSION</h4>
              <p className="text-white/60 text-xs">
                Transform developers into multi-core powerhouses
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="text-neon-green text-sm mb-2">TECHNOLOGY</h4>
              <p className="text-white/60 text-xs">
                AI-powered background coding agents
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h4 className="text-neon-blue text-sm mb-2">RESULT</h4>
              <p className="text-white/60 text-xs">
                Exponential productivity gains
              </p>
            </div>
          </div>

          <div className="text-center border-t-2 border-neon-blue/30 pt-8">
            <div className="inline-block border-4 border-neon-pink p-4 mb-6 animate-pulse-slow">
              <p className="text-neon-pink text-sm">
                PRESS START TO BEGIN YOUR MULTI-CORE JOURNEY
              </p>
            </div>
            
            <p className="text-white/40 text-xs">
              © 2024 THE MULTI-CORE DEVELOPER | BUILT WITH NEXT.JS
            </p>
            <p className="text-neon-blue text-xs mt-2">
              CREDITS: 999 | CONTINUE: ∞
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
