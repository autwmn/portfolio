export interface Experience {
  id: string
  company: string
  role: string
  startDate: string
  endDate: string
  description: string
  impact: string
  skills: string[]
  type: 'tech' | 'marketing' | 'teaching' | 'business'
}

export const experience: Experience[] = [
  {
    id: 'fairfield-data-analytics',
    company: 'Fairfield University',
    role: 'Data Analytics Assistant',
    startDate: '2023-09',
    endDate: 'Present',
    description: 'Support faculty with data analysis projects, conduct user research, and develop insights from behavioral and institutional data.',
    impact: 'Analyzed 6 months of user behavior data, created executive dashboards, and delivered recommendations that increased student engagement by 18%.',
    skills: ['Python', 'SQL', 'Tableau', 'Data Analysis', 'Statistics', 'User Research'],
    type: 'tech',
  },
  {
    id: 'allen-agency-intern',
    company: 'Allen Agency',
    role: 'Digital Marketing Intern',
    startDate: '2023-06',
    endDate: '2023-08',
    description: 'Developed digital marketing strategies for 5+ clients, managed social media, created analytics reports, and assisted with brand positioning.',
    impact: 'Increased average client social media engagement by 35% through content strategy optimization. Built marketing dashboards for 3 major accounts.',
    skills: ['Social Media Marketing', 'Content Strategy', 'Analytics', 'Branding', 'Google Ads', 'Adobe Creative Suite'],
    type: 'marketing',
  },
  {
    id: 'prima-pilates-founder',
    company: 'Prima Pilates',
    role: 'Founder & Instructor',
    startDate: '2022-03',
    endDate: 'Present',
    description: 'Created a Pilates concept specifically for dancers. Managed branding, digital strategy, social media, scheduling, and client experience.',
    impact: 'Built a thriving business serving 50+ regular clients. Grew social media to 2.5K followers. Achieved profitability in year 1.',
    skills: ['Entrepreneurship', 'Marketing', 'Brand Development', 'Social Media', 'Customer Experience', 'Business Operations'],
    type: 'business',
  },
  {
    id: 'ballet-teacher',
    company: 'Connecticut Ballet Academy',
    role: 'Ballet Instructor',
    startDate: '2021-01',
    endDate: 'Present',
    description: 'Teach ballet and movement classes to ages 6-18. Develop curriculum, provide technical feedback, and foster student growth.',
    impact: 'Led 8+ classes per week. Maintained 95% student retention rate. Choreographed original pieces performed in 2 recitals.',
    skills: ['Teaching', 'Communication', 'Leadership', 'Choreography', 'Creative Direction'],
    type: 'teaching',
  },
  {
    id: 'freelance-digital-strategy',
    company: 'Self-Employed',
    role: 'Digital Strategy Consultant',
    startDate: '2022-06',
    endDate: 'Present',
    description: 'Consult for small businesses and creators on digital strategy, content planning, and growth initiatives.',
    impact: 'Advised 3 clients on brand positioning and content strategy. Helped one client increase email list by 250%.',
    skills: ['Digital Strategy', 'Branding', 'Content Planning', 'Business Strategy', 'Analytics'],
    type: 'marketing',
  },
]
