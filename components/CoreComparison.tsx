'use client';

import { useState } from 'react';

export default function CoreComparison() {
  const [activeTab, setActiveTab] = useState<'single' | 'multi'>('single');

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => setActiveTab('single')}
          className={`px-6 py-3 border-4 text-sm md:text-base transition-all ${
            activeTab === 'single'
              ? 'border-neon-pink bg-neon-pink/20 text-neon-pink box-glow-pink'
              : 'border-neon-blue text-neon-blue hover:bg-neon-blue/10'
          }`}
        >
          SINGLE CORE
        </button>
        <button
          onClick={() => setActiveTab('multi')}
          className={`px-6 py-3 border-4 text-sm md:text-base transition-all ${
            activeTab === 'multi'
              ? 'border-neon-green bg-neon-green/20 text-neon-green'
              : 'border-neon-blue text-neon-blue hover:bg-neon-blue/10'
          }`}
        >
          MULTI CORE
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {activeTab === 'single' ? (
          <>
            <div className="border-4 border-neon-pink p-6 bg-arcade-dark/50">
              <h3 className="text-neon-pink text-xl mb-4 text-glow">SINGLE-THREADED DEV</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span>One task at a time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span>Context switching overhead</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span>Blocked by waiting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">✗</span>
                  <span>Limited throughput</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-red-900/20 border-2 border-red-500">
                <div className="text-red-400 text-xs mb-2">PERFORMANCE:</div>
                <div className="text-red-500 text-2xl font-bold">1x</div>
              </div>
            </div>

            <div className="border-4 border-gray-600 p-6 bg-gray-900/30 opacity-50">
              <h3 className="text-gray-500 text-xl mb-4">MULTI-CORE DEV</h3>
              <p className="text-gray-600 text-sm">SELECT MULTI CORE TO UNLOCK</p>
            </div>
          </>
        ) : (
          <>
            <div className="border-4 border-gray-600 p-6 bg-gray-900/30 opacity-50">
              <h3 className="text-gray-500 text-xl mb-4">SINGLE-THREADED DEV</h3>
              <p className="text-gray-600 text-sm">OLD PARADIGM</p>
            </div>

            <div className="border-4 border-neon-green p-6 bg-arcade-dark/50 animate-pulse-slow">
              <h3 className="text-neon-green text-xl mb-4 text-glow-strong">MULTI-CORE DEV</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-neon-green">✓</span>
                  <span>Parallel task execution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-green">✓</span>
                  <span>Background agents handle routine work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-green">✓</span>
                  <span>Focus on high-value tasks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-green">✓</span>
                  <span>Exponential productivity gains</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-neon-green/10 border-2 border-neon-green box-glow">
                <div className="text-neon-green text-xs mb-2">PERFORMANCE:</div>
                <div className="text-neon-green text-2xl font-bold animate-glow">10x+</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
