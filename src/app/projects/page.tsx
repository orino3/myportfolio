import * as React from 'react';
import Link from 'next/link';
import AIBackground from '../components/AIBackground';
import DataAnimation from './components/DataAnimation';
import { projects } from './data';
import type { Project } from './data';

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link 
      href={`/projects/${project.id}`}
      className="block group"
    >
      <div className="glass-card rounded-3xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
        {/* Project Header */}
        <div className="relative h-48 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 overflow-hidden">
          <DataAnimation type={project.visualType} />
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-card bg-slate-700/30 mb-3">
              <span className="text-slate-200/90 text-sm font-medium">{project.company}</span>
            </div>
            <h3 className="text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Description */}
          <p className="text-slate-300/90 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
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

          {/* Achievements */}
          <div className="space-y-2 border-t border-slate-700/30 pt-6">
            {project.achievements.slice(0, 3).map((achievement, index) => (
              <div key={index} className="flex items-center text-slate-300/90 group-hover:text-white transition-colors">
                <svg className="w-5 h-5 mr-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background Effects */}
        <AIBackground />

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400">
            Featured Projects
          </h1>
          <p className="text-xl text-slate-300/90 max-w-3xl mx-auto">
            A showcase of my work in data science, AI solutions, and analytics,
            demonstrating impact through innovation and efficiency.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-24">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
} 