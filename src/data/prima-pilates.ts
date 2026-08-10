export interface PrimaPilatesCase {
  idea: string
  brand: {
    positioning: string
    targetAudience: string
    visualIdentity: string
    messaging: string
  }
  digitalStrategy: {
    socialMedia: string
    contentStrategy: string
    channels: string[]
    engagement: string
  }
  business: {
    services: string[]
    pricingModel: string
    customerExperience: string
    operations: string
  }
  data: {
    clientsServed: number
    socialFollowers: number
    monthlyRecurringClients: number
    averageEnrollmentIncrease: string
    keyMetrics: Record<string, string>
  }
  technology: {
    website: string
    schedulingTool: string
    analytics: string
    emailPlatform: string
  }
}

export const primaPilatesCase: PrimaPilatesCase = {
  idea: 'Prima Pilates is a movement concept created specifically for dancers. Recognizing that dancers need cross-training designed by someone who understands their bodies, technique, and performance goals, I created a Pilates program that speaks directly to that community.',

  brand: {
    positioning: 'The intersection of elite movement training and accessible wellness. Premium, dance-informed Pilates for serious movers.',
    targetAudience: 'Professional and pre-professional dancers, dance students, and athletes who understand the importance of targeted cross-training.',
    visualIdentity: 'Elegant, minimalist aesthetic. Sage and cream color palette. Ballet-inspired typography. Authentic movement photography.',
    messaging: 'Train like a dancer. Move with intention. Build strength, flexibility, and resilience.',
  },

  digitalStrategy: {
    socialMedia: 'Built Prima Pilates brand presence from zero to 2.5K followers in 18 months. Focused on educational content that demonstrates expertise.',
    contentStrategy: 'Combination of movement education, behind-the-scenes content, client transformations, and thought leadership about dancer-specific training.',
    channels: ['Instagram', 'TikTok', 'Email Newsletter', 'Website Blog'],
    engagement: 'Average 8-12% engagement rate (vs. 1-3% industry standard). Community of engaged dancers and fitness enthusiasts.',
  },

  business: {
    services: [
      'Group Pilates Classes (in-person and virtual)',
      'Private Instruction',
      'Workshop Series',
      'Corporate Wellness Programs',
      'Online Course (in development)',
    ],
    pricingModel: 'Tiered: Drop-in classes, class packages, unlimited membership, private sessions. Premium positioning justified by specialized expertise.',
    customerExperience: 'Small-batch class sizes (max 8 students). Personalized attention. Community-focused. Regular feedback and program adjustments based on client needs.',
    operations: 'Managed scheduling, payments, and communications through integrated software. Built systems to scale while maintaining quality.',
  },

  data: {
    clientsServed: 50,
    socialFollowers: 2500,
    monthlyRecurringClients: 35,
    averageEnrollmentIncrease: '15% month-over-month growth',
    keyMetrics: {
      'Customer Retention': '92%',
      'Revenue Growth Year 1': 'Profitability achieved',
      'Email Subscriber Growth': '400 subscribers in 12 months',
      'Class Capacity Utilization': '85%',
      'Net Promoter Score': '72',
    },
  },

  technology: {
    website: 'Built with Next.js and Tailwind CSS. Clean, performant, focused on conversions.',
    schedulingTool: 'Integrated Acuity Scheduling for automated bookings and payment processing.',
    analytics: 'Google Analytics and Meta Business Suite to track traffic, engagement, and conversion metrics.',
    emailPlatform: 'Converted + Mailchimp for segmented email campaigns and automated nurture sequences.',
  },
}
