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
    screenshot: '/images/websites/mkwilson.jpg',
    liveUrl: '#',
    projectName: 'MK WILSON',
    projectType: 'Hairstylist Website',
  },
  {
    screenshot: '/images/websites/alwayscreative.jpg',
    liveUrl: '#',
    projectName: 'ALWAYS CREATIVE',
    projectType: 'Makeup Artist Website',
  },
  {
    screenshot: '/images/websites/greenspace.jpg',
    liveUrl: '#',
    projectName: 'GREENSPACE',
    projectType: 'Plant Shop Website',
  },
]
