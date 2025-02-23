import * as React from 'react';

function generateRandomPosition() {
  return {
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 15,
  };
}

function generateDataStreams(count: number) {
  return Array.from({ length: count }, () => ({
    top: Math.random() * 100,
    width: Math.random() * 30 + 20,
    delay: Math.random() * 5,
  }));
}

function generateNeuralPoints(count: number) {
  return Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
  }));
}

export default function AIBackground() {
  const particles = React.useMemo(() => 
    Array.from({ length: 20 }, generateRandomPosition),
    []
  );

  const dataStreams = React.useMemo(() => 
    generateDataStreams(15),
    []
  );

  const neuralPoints = React.useMemo(() => 
    generateNeuralPoints(30),
    []
  );

  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C3D] via-[#1D273B] to-[#0B1C3D]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,82,212,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(0,255,255,0.15),transparent_60%)]" />
      
      <div className="absolute inset-0">
        <div className="neural-grid" />
        
        <div className="floating-particles">
          {particles.map((particle, index) => (
            <div
              key={index}
              className="particle"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                '--duration': `${particle.duration}s`,
              } as React.CSSProperties}
            />
          ))}
        </div>

        <div className="relative w-full h-full">
          {dataStreams.map((stream, index) => (
            <div
              key={index}
              className="data-stream"
              style={{
                top: `${stream.top}%`,
                width: `${stream.width}%`,
                animationDelay: `${stream.delay}s`,
              }}
            />
          ))}
        </div>

        <div className="relative w-full h-full">
          {neuralPoints.map((point, index) => (
            <div
              key={index}
              className="neural-connection"
              style={{
                left: `${point.x}%`,
                top: `${point.y}%`,
                animationDelay: `${point.delay}s`,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
} 