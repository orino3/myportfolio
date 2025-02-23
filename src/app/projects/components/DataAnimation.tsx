import * as React from 'react';
import type { Project } from '../data';

export default function DataAnimation({ type }: { type: Project['visualType'] }) {
  const colors = {
    dots: 'rgba(34, 211, 238, 1)', // Cyan
    graph: 'rgba(168, 85, 247, 1)', // Purple
    bars: 'rgba(234, 179, 8, 1)',   // Yellow
    wave: 'rgba(56, 189, 248, 1)',  // Sky
  };

  switch (type) {
    case 'dots':
      return (
        <div className="absolute top-0 right-0 w-48 h-48 opacity-30">
          <div className="grid grid-cols-6 gap-2 p-4">
            {Array.from({ length: 36 }).map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  backgroundColor: colors.dots,
                  animation: `pulse 2s infinite ${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        </div>
      );

    case 'graph':
      return (
        <div className="absolute top-4 right-4 w-40 h-32 opacity-30">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M0,50 Q25,45 50,30 T100,20"
              fill="none"
              stroke={colors.graph}
              strokeWidth="2"
              className="animate-draw"
            />
            <path
              d="M0,70 Q25,65 50,50 T100,40"
              fill="none"
              stroke={`${colors.graph.replace('1)', '0.6)')}`}
              strokeWidth="2"
              className="animate-draw"
              style={{ animationDelay: '0.5s' }}
            />
          </svg>
        </div>
      );

    case 'bars':
      return (
        <div className="absolute top-4 right-4 w-40 h-32 opacity-30">
          <div className="flex items-end justify-around h-full">
            {[0.6, 0.9, 0.5, 0.8, 0.7].map((height, i) => (
              <div
                key={i}
                className="w-3 rounded-t"
                style={{
                  backgroundColor: colors.bars,
                  height: `${height * 100}%`,
                  animation: `barRise 2s infinite ${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>
      );

    case 'wave':
      return (
        <div className="absolute top-4 right-4 w-40 h-32 opacity-30">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M0,50 C20,40 40,60 60,50 S100,40 100,50"
              fill="none"
              stroke={colors.wave}
              strokeWidth="2"
              className="animate-wave"
            />
            <path
              d="M0,50 C20,60 40,40 60,50 S100,60 100,50"
              fill="none"
              stroke={`${colors.wave.replace('1)', '0.6)')}`}
              strokeWidth="2"
              className="animate-wave"
              style={{ animationDelay: '0.5s' }}
            />
          </svg>
        </div>
      );
  }
} 