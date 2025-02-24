import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AIBackground from '../components/AIBackground';

// Mapping skills to relevant project IDs
const skillToProjects = {
  'Data Science & AI': ['ai-business-classification', 'lead-grading-algorithm'],
  'Machine Learning': ['lead-grading-algorithm', 'real-time-analytics'],
  'Analytics Strategy': ['personalized-email-campaigns', 'real-time-analytics'],
  'Business Intelligence': ['real-time-analytics', 'lead-grading-algorithm'],
  'Business Consulting': ['personalized-email-campaigns', 'ai-business-classification']
};

export default function About() {
  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background Effects */}
        <AIBackground />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8 stagger-animation">
            {/* Profile Section */}
            <div className="glass-card overflow-hidden rounded-3xl relative animate-float h-[600px]">
              <Image
                src="/myportfolio/images/profile.png"
                alt="Profile Photo"
                fill
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                style={{ 
                  objectFit: 'cover', 
                  objectPosition: 'center center',
                  width: '100%',
                  height: '100%'
                }}
                className="hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 stagger-animation">
              <div className="glass-card p-6 rounded-3xl hover:scale-105 transition-transform">
                <div className="text-7xl font-bold text-sky-400">
                  5+
                </div>
                <div className="text-slate-300/80 mt-2 text-sm">
                  Years in Data & AI
                </div>
              </div>
              <div className="glass-card p-6 rounded-3xl hover:scale-105 transition-transform">
                <div className="text-7xl font-bold text-sky-400">
                  200+
                </div>
                <div className="text-slate-300/80 mt-2 text-sm">
                  Hours Saved Monthly
                </div>
              </div>
              <div className="glass-card p-6 rounded-3xl hover:scale-105 transition-transform">
                <div className="text-7xl font-bold text-sky-400">
                  30%
                </div>
                <div className="text-slate-300/80 mt-2 text-sm">
                  Reporting Time Reduction
                </div>
              </div>
              <div className="glass-card p-6 rounded-3xl hover:scale-105 transition-transform">
                <div className="text-7xl font-bold text-sky-400">
                  3
                </div>
                <div className="text-slate-300/80 mt-2 text-sm">
                  Industry Leaders Served
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 stagger-animation">
            {/* Title Section */}
            <div>
              <h1 className="text-7xl font-bold text-sky-400 mb-4">About Me</h1>
              <p className="text-2xl text-purple-400">
                Lead Data & AI Solutions Professional
              </p>
            </div>

            {/* Bio Section */}
            <div className="glass-card rounded-3xl p-8 space-y-6">
              <p className="text-lg text-slate-300/90 leading-relaxed animate-fade-in">
                Hi there! I'm a Lead Data & AI Solutions professional with extensive experience
                in developing innovative AI-driven solutions and data infrastructure. I specialize in
                combining advanced analytics with business strategy to drive organizational growth and
                efficiency.
              </p>
              
              <p className="text-lg text-slate-300/90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Currently leading AI adoption and data solutions at Accessibe, I've developed
                groundbreaking systems that combine web scraping, generative AI, and advanced
                analytics to transform business operations.
              </p>

              <p className="text-lg text-slate-300/90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
                I hold a B.A. in Mathematics & Economics from Fordham University, and I'm fluent
                in both English and Hebrew. My expertise lies in creating end-to-end data solutions
                that bridge technical innovation with practical business applications.
              </p>

              {/* Skills */}
              <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-700/30 stagger-animation">
                {Object.entries(skillToProjects).map(([skill, projectIds], index) => (
                  <Link
                    key={skill}
                    href={`/projects?highlight=${projectIds.join(',')}`}
                    className={`glass-card rounded-2xl p-4 text-center hover:scale-105 transition-transform ${
                      skill === 'Business Consulting' ? 'col-span-2' : ''
                    }`}
                  >
                    <span className="text-sky-400 hover:text-sky-300 transition-colors">
                      {skill}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 