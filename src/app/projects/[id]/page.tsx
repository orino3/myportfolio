import * as React from 'react';
import { notFound } from 'next/navigation';
import { projects } from '../data';

interface PageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-12 pb-24">
      {/* Project Header */}
      <div className="glass-card rounded-3xl p-12 relative overflow-hidden">
        <div className="relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card bg-slate-700/30 mb-6">
            <span className="text-slate-200/90 text-sm font-medium">{project.company}</span>
          </div>
          <h1 className="text-6xl font-bold text-gradient mb-6">{project.title}</h1>
          <p className="text-xl text-slate-300/90 max-w-3xl">
            {project.description}
          </p>
        </div>
      </div>

      {/* Project Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Key Achievements */}
          <div className="glass-card rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-gradient-primary mb-6">Key Achievements</h2>
            <div className="space-y-4">
              {project.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-emerald-400 mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-slate-300/90">{achievement}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="glass-card rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-gradient-primary mb-6">Technical Implementation</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300/90">
                This project was implemented using a modern tech stack including {project.technologies.join(', ')}.
                The solution was designed with scalability and maintainability in mind, following best practices
                and industry standards.
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Quick Info */}
          <div className="glass-card rounded-3xl p-8">
            <h2 className="text-xl font-bold text-gradient-primary mb-6">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full glass-card bg-slate-700/30 text-slate-200/90 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="glass-card rounded-3xl p-8 text-center">
            <h2 className="text-xl font-bold text-gradient-primary mb-4">Interested in similar solutions?</h2>
            <p className="text-slate-300/90 mb-6">
              Let's discuss how we can implement similar solutions for your business.
            </p>
            <a
              href="/contact"
              className="block w-full px-6 py-3 rounded-full glass-card bg-sky-500/10 text-sky-300 hover:bg-sky-500/20 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 