'use client';

export default function GameConcepts() {
  const concepts = [
    {
      title: 'LEVEL 1: UNDERSTANDING',
      icon: '🎮',
      color: 'neon-blue',
      description: 'Traditional developers work like single-core processors - one task at a time, sequential execution, limited throughput.',
      stats: 'DIFFICULTY: EASY',
    },
    {
      title: 'LEVEL 2: THE PARADIGM SHIFT',
      icon: '⚡',
      color: 'neon-pink',
      description: 'Background coding agents act as additional cores, handling parallel workstreams while you focus on architecture and high-value decisions.',
      stats: 'DIFFICULTY: MEDIUM',
    },
    {
      title: 'LEVEL 3: MASTERY',
      icon: '🏆',
      color: 'neon-green',
      description: 'True multi-core developers orchestrate multiple agents simultaneously, achieving exponential productivity through parallel processing.',
      stats: 'DIFFICULTY: HARD',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-arcade-dark to-arcade-purple/20 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-neon-yellow animate-glow">
          GAME MECHANICS
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {concepts.map((concept, index) => (
            <div
              key={index}
              className={`border-4 border-${concept.color} p-6 bg-arcade-dark/80 hover:scale-105 transition-transform cursor-pointer group`}
            >
              <div className="text-6xl mb-4 animate-float">{concept.icon}</div>
              <h3 className={`text-${concept.color} text-lg mb-4 text-glow`}>
                {concept.title}
              </h3>
              <p className="text-white/80 text-xs leading-relaxed mb-4">
                {concept.description}
              </p>
              <div className={`text-${concept.color} text-xs border-t-2 border-${concept.color} pt-3 mt-3`}>
                {concept.stats}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
