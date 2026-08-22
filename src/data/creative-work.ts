export interface CarouselPost {
  slides: string[]
  postUrl: string
  title: string
}

export interface WebProject {
  screenshot: string
  liveUrl: string
  projectName: string
  projectType: string
  comingSoon?: boolean
  scrollOnHover?: boolean
}

export const carouselPosts: CarouselPost[] = [
  {
    slides: [
      '/images/carousels/post1-slide1.jpg',
      '/images/carousels/post1-slide2.jpg',
      '/images/carousels/post1-slide3.jpg',
    ],
    postUrl: 'https://instagram.com/autumnjoyner',
    title: '3 Signs You\'re Ready to Rebrand',
  },
  {
    slides: [
      '/images/carousels/post2-slide1.jpg',
      '/images/carousels/post2-slide2.jpg',
      '/images/carousels/post2-slide3.jpg',
    ],
    postUrl: 'https://instagram.com/autumnjoyner',
    title: 'Your Brand & Your Season',
  },
  {
    slides: [
      '/images/carousels/post3-slide1.jpg',
      '/images/carousels/post3-slide2.jpg',
      '/images/carousels/post3-slide3.jpg',
    ],
    postUrl: 'https://instagram.com/autumnjoyner',
    title: 'Attracting the Right Audience',
  },
]

export const webProjects: WebProject[] = [
  {
    screenshot: '/images/websites/ppweb.png',
    liveUrl: 'https://perfectpointedance.com',
    projectName: 'Perfect Pointe Dance',
    projectType: 'Dance Studio Website',
    scrollOnHover: true,
  },
  {
    screenshot: '/images/websites/elevateweb.png',
    liveUrl: 'https://elevatedancestudiosc.com',
    projectName: 'Elevate Dance SC',
    projectType: 'Dance Studio Website',
  },
  {
    screenshot: '',
    liveUrl: '#',
    projectName: 'Prima Pilates',
    projectType: 'Pilates Studio Website',
    comingSoon: true,
  },
]
