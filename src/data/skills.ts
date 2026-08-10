export interface SkillCategory {
  name: string
  category: 'build' | 'analyze' | 'grow'
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'BUILD',
    category: 'build',
    skills: [
      'Python',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Java',
      'C++',
      'SQL',
      'PostgreSQL',
      'MongoDB',
      'AWS',
      'Git',
      'HTML/CSS',
      'Tailwind CSS',
    ],
  },
  {
    name: 'ANALYZE',
    category: 'analyze',
    skills: [
      'Python',
      'SQL',
      'Data Analysis',
      'Statistics',
      'Tableau',
      'Excel',
      'Business Analytics',
      'User Research',
      'A/B Testing',
      'SQL Queries',
      'Data Visualization',
      'Pandas',
      'Jupyter Notebooks',
    ],
  },
  {
    name: 'GROW',
    category: 'grow',
    skills: [
      'Digital Strategy',
      'Marketing Strategy',
      'Social Media Marketing',
      'Content Strategy',
      'Brand Development',
      'Branding',
      'Email Marketing',
      'Analytics',
      'Consumer Insights',
      'Google Ads',
      'Meta Ads',
      'SEO',
      'Copywriting',
    ],
  },
]

export const allSkills = skillCategories.reduce((acc, cat) => [...acc, ...cat.skills], [] as string[])
