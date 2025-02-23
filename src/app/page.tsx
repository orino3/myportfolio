import * as React from 'react';
import Link from 'next/link';
import AIBackground from './components/AIBackground';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-24">
      <div className="absolute inset-0 overflow-hidden">
        <AIBackground />
      </div>
      <div className="relative z-10 max-w-3xl text-center">
        <h1 className="mb-4 text-6xl font-bold tracking-tight text-white animate-fade-in">
          Hi, I'm <span className="text-[#00FFFF]">Ori Raz</span>
        </h1>
        <p className="mb-8 text-xl text-[#AEB8C2] animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Lead Data & AI Solutions at Accessibe. Driving 200+ hours monthly efficiency through AI automation. 
          Specializing in data infrastructure and advanced analytics.
        </p>
        <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Link 
            href="/projects"
            className="rounded-lg bg-[#00FFFF] px-8 py-4 text-base font-semibold text-[#0B1C3D] hover:bg-white hover:text-[#0052D4] focus:outline-none focus:ring-2 focus:ring-[#00FFFF] transition-all duration-300 shadow-lg hover:shadow-[#00FFFF]/20"
          >
            View My Work
          </Link>
          <Link 
            href="/contact"
            className="rounded-lg px-8 py-4 text-base font-semibold text-[#00FFFF] border-2 border-[#00FFFF] hover:bg-[#00FFFF]/10 focus:outline-none focus:ring-2 focus:ring-[#00FFFF] transition-all duration-300 shadow-lg hover:shadow-[#00FFFF]/20"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </main>
  );
} 