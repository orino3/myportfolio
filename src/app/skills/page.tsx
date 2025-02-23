import * as React from 'react';
import AIBackground from '../components/AIBackground';

interface Skill {
  name: string;
  level: number;
  description: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Data Science & AI',
    skills: [
      { name: 'Python', level: 95, description: 'Advanced data analysis, ML models, and AI solutions' },
      { name: 'LangChain', level: 90, description: 'Generative AI and LLM implementations' },
      { name: 'OpenAI API', level: 90, description: 'AI model integration and customization' },
      { name: 'Machine Learning', level: 85, description: 'Predictive modeling and classification systems' },
    ],
  },
  {
    title: 'Data Infrastructure',
    skills: [
      { name: 'SQL', level: 95, description: 'Complex queries and database optimization' },
      { name: 'BigQuery', level: 90, description: 'Large-scale data processing and analytics' },
      { name: 'ETL Pipelines', level: 85, description: 'Data pipeline architecture and implementation' },
      { name: 'Data Visualization', level: 90, description: 'Tableau and advanced analytics dashboards' },
    ],
  },
  {
    title: 'Business Analytics',
    skills: [
      { name: 'A/B Testing', level: 95, description: 'Statistical analysis and experiment design' },
      { name: 'Excel', level: 90, description: 'Advanced business modeling and analysis' },
      { name: 'KPI Monitoring', level: 90, description: 'Performance metrics and business intelligence' },
      { name: 'Statistical Analysis', level: 85, description: 'Anomaly detection and predictive analytics' },
    ],
  },
];

function SkillBar({ name, level, description }: Skill) {
  return (
    <div className="mb-6 animate-fade-in">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-slate-200">{name}</span>
        <span className="text-base font-medium text-slate-200/70">{level}%</span>
      </div>
      <p className="text-sm text-slate-300/60 mb-2">{description}</p>
      <div className="skill-bar">
        <div 
          className="skill-progress bg-gradient-to-r from-sky-400 to-cyan-400"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

function SkillCategory({ title, skills }: SkillCategory) {
  return (
    <div className="glass-card rounded-3xl p-8 hover:scale-[1.02] transition-transform">
      <h2 className="text-2xl font-bold text-gradient-primary mb-8">{title}</h2>
      <div className="stagger-animation">
        {skills.map((skill) => (
          <SkillBar key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background Effects */}
        <AIBackground />

        {/* Header */}
        <div className="page-header">
          <h1 className="page-title">Skills & Expertise</h1>
          <p className="page-description">
            Specialized in data science, AI solutions, and business analytics with a
            proven track record of implementing innovative solutions at scale.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-24 stagger-animation">
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} {...category} />
          ))}
        </div>
      </div>
    </main>
  );
} 