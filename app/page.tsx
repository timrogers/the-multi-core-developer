'use client';

import { useState, useEffect } from 'react';

interface Task {
  id: number;
  name: string;
  core: number;
  progress: number;
  color: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: 'Building UI', core: 1, progress: 0, color: 'from-purple-500 to-pink-500' },
    { id: 2, name: 'Writing Tests', core: 2, progress: 0, color: 'from-cyan-500 to-blue-500' },
    { id: 3, name: 'API Development', core: 3, progress: 0, color: 'from-yellow-500 to-orange-500' },
    { id: 4, name: 'Documentation', core: 4, progress: 0, color: 'from-green-500 to-emerald-500' },
  ]);

  const [score, setScore] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;

    const interval = setInterval(() => {
      setTasks(prevTasks => {
        const newTasks = prevTasks.map(task => {
          if (task.progress < 100) {
            const newProgress = Math.min(100, task.progress + Math.random() * 15);
            if (newProgress === 100 && task.progress < 100) {
              setScore(prev => prev + 100);
            }
            return { ...task, progress: newProgress };
          }
          return task;
        });

        // Reset completed tasks to create continuous animation
        const allComplete = newTasks.every(t => t.progress >= 100);
        if (allComplete) {
          return newTasks.map(t => ({ ...t, progress: 0 }));
        }

        return newTasks;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [started]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden relative">
      {/* Arcade scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent h-1 animate-scanline"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border-4 border-purple-500/30 rotate-45 animate-float"></div>
      <div className="absolute bottom-32 right-20 w-16 h-16 border-4 border-cyan-500/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 border-4 border-pink-500/30 animate-float" style={{ animationDelay: '2s' }}></div>

      <main className="relative z-10 container mx-auto px-6 py-12 max-w-7xl">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-glow">
              ⚡ MULTI-CORE ⚡
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            THE MULTI-CORE DEVELOPER
          </h1>
          <p className="text-xl md:text-2xl text-purple-300 mb-2 font-light">
            Level Up Your Development Velocity
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-yellow-500/20 border-2 border-yellow-400 rounded-lg animate-blink">
            <span className="text-2xl">🎮</span>
            <span className="text-yellow-300 font-bold">SCORE: {score.toLocaleString()}</span>
          </div>
        </header>

        {/* Concept Explanation */}
        <section className="mb-16 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border-2 border-purple-500/30 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🚀</span>
            What is a Multi-Core Developer?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-lg text-slate-300">
            <div className="space-y-4">
              <p className="leading-relaxed">
                Just like modern CPUs with multiple cores processing tasks simultaneously, 
                <span className="text-purple-400 font-semibold"> multi-core developers</span> use 
                <span className="text-cyan-400 font-semibold"> background coding agents</span> to parallelize their work.
              </p>
              <div className="flex items-center gap-3 text-purple-300">
                <span className="text-3xl">⚙️</span>
                <span className="font-semibold">Single-Core:</span> One task at a time
              </div>
            </div>
            <div className="space-y-4">
              <p className="leading-relaxed">
                While you focus on architecture and critical features, autonomous agents handle 
                <span className="text-pink-400 font-semibold"> boilerplate code</span>, 
                <span className="text-yellow-400 font-semibold"> documentation</span>, 
                <span className="text-green-400 font-semibold"> tests</span>, and more—all in parallel.
              </p>
              <div className="flex items-center gap-3 text-cyan-300">
                <span className="text-3xl">🔥</span>
                <span className="font-semibold">Multi-Core:</span> Multiple tasks simultaneously
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <span className="text-4xl">🎯</span>
              Watch Multi-Core Development in Action
            </h2>
            {!started && (
              <button
                onClick={() => setStarted(true)}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xl rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 border-2 border-purple-400"
              >
                🕹️ START SIMULATION
              </button>
            )}
            {started && (
              <button
                onClick={() => {
                  setStarted(false);
                  setTasks(tasks.map(t => ({ ...t, progress: 0 })));
                  setScore(0);
                }}
                className="px-8 py-4 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 text-white font-bold text-xl rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200 border-2 border-slate-400"
              >
                🔄 RESET
              </button>
            )}
          </div>

          {/* Task Cores Visualization */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tasks.map((task, idx) => (
              <div
                key={task.id}
                className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-6 border-2 border-slate-600 hover:border-purple-500 transition-all duration-300 shadow-xl"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${started ? 'bg-green-400 animate-pulse' : 'bg-slate-600'}`}></div>
                    <span className="text-slate-400 font-semibold text-sm">CORE {task.core}</span>
                  </div>
                  <span className="text-2xl">🤖</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{task.name}</h3>
                
                {/* Progress bar */}
                <div className="relative w-full h-8 bg-slate-700 rounded-lg overflow-hidden border border-slate-600">
                  <div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${task.color} transition-all duration-300 ease-out flex items-center justify-center`}
                    style={{ width: `${task.progress}%` }}
                  >
                    {task.progress > 10 && (
                      <span className="text-white font-bold text-sm">{Math.round(task.progress)}%</span>
                    )}
                  </div>
                </div>

                {task.progress >= 100 && (
                  <div className="mt-3 text-green-400 font-bold flex items-center gap-2">
                    <span>✓</span> COMPLETED
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <span className="text-4xl">💎</span>
            Power-Ups & Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '⚡', title: '10x Productivity', desc: 'Complete multiple tasks in parallel', color: 'border-yellow-500/50 hover:border-yellow-400' },
              { icon: '🎯', title: 'Stay Focused', desc: 'Concentrate on high-value work', color: 'border-purple-500/50 hover:border-purple-400' },
              { icon: '🚀', title: 'Ship Faster', desc: 'Accelerate development cycles', color: 'border-cyan-500/50 hover:border-cyan-400' },
              { icon: '🛡️', title: 'Higher Quality', desc: 'Agents never skip tests', color: 'border-green-500/50 hover:border-green-400' },
              { icon: '🧠', title: 'Learn More', desc: 'Explore new patterns in parallel', color: 'border-pink-500/50 hover:border-pink-400' },
              { icon: '🎨', title: 'More Creative', desc: 'Let agents handle the boilerplate', color: 'border-orange-500/50 hover:border-orange-400' },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border-2 ${benefit.color} transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105`}
              >
                <div className="text-5xl mb-3">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="text-center bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-12 border-2 border-purple-500/30">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Ready to Go Multi-Core?
          </h2>
          <p className="text-xl text-purple-200 mb-8">
            Transform how you code with AI-powered background agents
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-xl shadow-lg border-2 border-purple-400">
              🎮 INSERT COIN TO CONTINUE
            </div>
          </div>
        </section>

        {/* Credits */}
        <footer className="mt-12 text-center text-slate-500 text-sm">
          <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
          <p className="mt-2">🕹️ Arcade aesthetics for the modern developer 🕹️</p>
        </footer>
      </main>
    </div>
  );
}
