export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
  company: string;
  visualType: 'graph' | 'dots' | 'bars' | 'wave';
}

export const projects: Project[] = [
  {
    id: 'ai-business-classification',
    title: 'AI Business Classification System',
    description: 'Developed an innovative system combining web scraping and generative AI to automate complex business categorization processes. This solution significantly reduced manual work while improving accuracy and consistency in business classification.',
    technologies: ['Python', 'LangChain', 'OpenAI API', 'Web Scraping'],
    achievements: [
      'Saved 200+ monthly work hours',
      'Automated complex categorization',
      'Improved accuracy of business classification',
      'Reduced classification errors by 45%',
      'Implemented real-time processing capabilities'
    ],
    company: 'Accessibe',
    visualType: 'dots'
  },
  {
    id: 'personalized-email-campaigns',
    title: 'AI-Driven Marketing Automation',
    description: 'Designed and implemented automated personalized email campaigns using LangChain and OpenAI API integrated with HubSpot. This system revolutionized our marketing approach by delivering highly personalized content at scale.',
    technologies: ['LangChain', 'OpenAI API', 'HubSpot', 'Python'],
    achievements: [
      'Increased engagement rates',
      'Improved marketing efficiency',
      'Automated personalization at scale',
      'Boosted email open rates by 35%',
      'Reduced campaign setup time by 60%'
    ],
    company: 'Accessibe',
    visualType: 'graph'
  },
  {
    id: 'lead-grading-algorithm',
    title: 'Lead Grading & LTV Prediction',
    description: 'Created advanced algorithms for lead grading and customer Lifetime Value prediction based on ARR growth patterns. This system helps sales teams prioritize leads and optimize resource allocation.',
    technologies: ['Python', 'Machine Learning', 'SQL', 'Statistical Analysis'],
    achievements: [
      'Optimized budget allocation',
      'Improved sales conversions',
      'Enhanced revenue forecasting',
      'Increased sales efficiency by 40%',
      'Reduced customer acquisition costs by 25%'
    ],
    company: 'Accessibe',
    visualType: 'bars'
  },
  {
    id: 'real-time-analytics',
    title: 'Real-Time Analytics System',
    description: 'Engineered a comprehensive real-time statistical anomaly detection system with integrated root cause analysis. This platform provides instant insights into system performance and business metrics.',
    technologies: ['Python', 'BigQuery', 'Tableau', 'ETL'],
    achievements: [
      'Reduced reporting time by 30%',
      'Eliminated manual errors',
      'Enabled rapid issue identification',
      'Improved system reliability by 50%',
      'Automated 95% of routine analytics tasks'
    ],
    company: 'Accessibe',
    visualType: 'wave'
  }
]; 