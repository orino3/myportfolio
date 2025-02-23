import * as React from 'react';
import Link from 'next/link';
import AIBackground from '../../components/AIBackground';

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AIBackground />
        
        {/* Back Button */}
        <Link 
          href="/projects"
          className="inline-flex items-center text-slate-300 hover:text-white mb-8 group"
        >
          <svg 
            className="w-5 h-5 mr-2 transform transition-transform group-hover:-translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        {children}
      </div>
    </main>
  );
} 