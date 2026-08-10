export interface Project {
  id: string
  title: string
  category: 'fullstack' | 'frontend' | 'data' | 'automation'
  shortDescription: string
  fullDescription: string
  problem: string
  solution: string
  technologies: string[]
  image: string
  featured: boolean
  liveUrl?: string
  githubUrl?: string
  caseStudy?: CaseStudy
}

export interface CaseStudy {
  problem: string
  idea: string
  build: string
  challenges: string[]
  solution: string
  impact: string
  learned: string
  images?: string[]
  codeSnippets?: CodeSnippet[]
}

export interface CodeSnippet {
  title: string
  language: string
  code: string
}

export const projects: Project[] = [
  {
    id: 'studiosnap',
    title: 'StudioSnap',
    category: 'fullstack',
    shortDescription: 'A collaborative learning platform for students to organize notes, tasks, and study groups.',
    fullDescription: 'StudioSnap is a full-stack web application built to solve the problem of fragmented study materials and disconnected collaboration.',
    problem: 'Students struggle to organize notes, coordinate study sessions, and keep track of assignments across multiple platforms.',
    solution: 'Built a unified platform where students can organize notes, create study groups, track tasks, and collaborate in real-time.',
    technologies: ['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS'],
    image: '/images/studiosnap.jpg',
    featured: true,
    liveUrl: 'https://studiosnap.com',
    githubUrl: 'https://github.com/autumnjoyner/studiosnap',
    caseStudy: {
      problem: 'Students at Fairfield University were using 4-5 different apps to manage notes, tasks, and collaboration. This fragmentation led to lost information, missed deadlines, and inefficient study sessions.',
      idea: 'Create a single, intuitive platform that centralizes the student study experience. Focus on what students actually need: note organization, group coordination, and task tracking.',
      build: 'Built with React (frontend), Node.js (backend), and MongoDB/PostgreSQL (databases). Deployed on AWS with CI/CD pipeline.',
      challenges: [
        'Real-time synchronization across multiple users',
        'Scaling database queries for large datasets',
        'Designing intuitive UX for complex feature set',
      ],
      solution: 'Implemented WebSocket connections for real-time updates, optimized database indexing, and conducted extensive user testing to refine the interface.',
      impact: 'Used by 500+ students at Fairfield. Reduced time spent managing study materials by 40% (based on user surveys).',
      learned: 'Learned the importance of user research before building. The features users thought they wanted weren\'t always what they actually needed.',
    },
  },
  {
    id: 'wellness-brand-campaign',
    title: 'Wellness Brand Campaign',
    category: 'data',
    shortDescription: 'Analyzed user behavior and sales data to identify growth opportunities for a digital wellness brand.',
    fullDescription: 'Data analysis project that used behavioral analytics and conversion data to build a comprehensive digital strategy.',
    problem: 'A wellness brand wanted to understand customer journeys and identify bottlenecks in their sales funnel.',
    solution: 'Analyzed 6 months of user behavioral data, created cohort analyses, and built dashboards to track key metrics.',
    technologies: ['Python', 'SQL', 'Tableau', 'Pandas', 'Statistics'],
    image: '/images/wellness-analytics.jpg',
    featured: true,
    caseStudy: {
      problem: 'The wellness brand had marketing data but no clear understanding of how customers moved through their funnel. They were spending marketing budget inefficiently.',
      idea: 'Use data to answer: Where do customers drop off? Which channels bring the most valuable customers? What\'s the lifetime value of different cohorts?',
      build: 'Extracted data from Google Analytics, Shopify, and email platforms using SQL. Built visualizations in Tableau. Conducted statistical analyses in Python.',
      challenges: [
        'Data quality issues across multiple platforms',
        'Defining "valuable" customers (revenue vs. engagement)',
        'Presenting complex findings to non-technical stakeholders',
      ],
      solution: 'Cleaned and standardized data across sources, used multiple KPIs, and created executive dashboards with clear recommendations.',
      impact: 'Recommended focusing on email retention (higher ROI than paid acquisition). Resulted in 24% growth in customer lifetime value over 3 months.',
      learned: 'Data insights are only valuable if they lead to action. Learned to tie every finding back to a specific business recommendation.',
    },
  },
  {
    id: 'greenspace-marketplace',
    title: 'GreenSpace Marketplace',
    category: 'fullstack',
    shortDescription: 'A marketplace connecting plant lovers with local sellers and plant-sitting services.',
    fullDescription: 'Full-stack marketplace application built with Next.js that connects plant enthusiasts with local plant sellers and plant-care services.',
    problem: 'Plant lovers struggle to find local sellers, rare plants, and trusted plant care services in their area.',
    solution: 'Built a marketplace where users can browse plants, connect with sellers, and book plant-sitting services.',
    technologies: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'Stripe', 'Vercel'],
    image: '/images/greenspace.jpg',
    featured: true,
    liveUrl: 'https://greenspace.vercel.app',
    githubUrl: 'https://github.com/autumnjoyner/greenspace',
  },
  {
    id: 'portfolio-website',
    title: 'This Portfolio',
    category: 'frontend',
    shortDescription: 'A sophisticated editorial portfolio website showcasing technical work and creative background.',
    fullDescription: 'Personal portfolio built with Next.js and Tailwind CSS, designed to bridge technical and creative identities.',
    problem: 'As a CS student with a creative background, I needed a portfolio that showcases both my technical skills and unique perspective.',
    solution: 'Built an editorial-style portfolio with subtle animations, sophisticated typography, and integrated storytelling.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    image: '/images/portfolio.jpg',
    featured: true,
    githubUrl: 'https://github.com/autumnjoyner/portfolio',
  },
  {
    id: 'data-pipeline',
    title: 'Data Pipeline Automation',
    category: 'automation',
    shortDescription: 'Built an automated ETL pipeline that processes 1M+ daily events with sub-minute latency.',
    fullDescription: 'Engineered a robust data pipeline that ingests, transforms, and loads data from multiple sources into a centralized analytics database.',
    problem: 'Manual data processing was creating bottlenecks and the team couldn\'t keep up with the volume of data.',
    solution: 'Automated the ETL process with Python, scheduled jobs, and error monitoring.',
    technologies: ['Python', 'PostgreSQL', 'Apache Airflow', 'AWS S3', 'Lambda'],
    image: '/images/data-pipeline.jpg',
    featured: false,
  },
]
