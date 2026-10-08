export interface SocialPost {
  shortcode: string
  kind: 'carousel' | 'reel'
  postUrl: string
  client: string
  title: string
}

export interface WebProject {
  screenshot: string
  liveUrl: string
  projectName: string
  projectType: string
  scrollOnHover?: boolean
}

export const socialPosts: SocialPost[] = [
  {
    shortcode: 'DcaPkQHCj4s',
    kind: 'reel',
    postUrl: 'https://www.instagram.com/reel/DcaPkQHCj4s/',
    client: 'Perfect Pointe Dance',
    title: 'Nutcracker Cast Loading',
  },
  {
    shortcode: 'DcRzzUgi7R9',
    kind: 'reel',
    postUrl: 'https://www.instagram.com/reel/DcRzzUgi7R9/',
    client: 'Perfect Pointe Dance',
    title: 'Infused With Dance',
  },
  {
    shortcode: 'DcOp9eckRg8',
    kind: 'carousel',
    postUrl: 'https://www.instagram.com/p/DcOp9eckRg8/',
    client: 'Elevate Dance Studio',
    title: 'Staff Bio',
  },
  {
    shortcode: 'Db8hPmGnLKI',
    kind: 'carousel',
    postUrl: 'https://www.instagram.com/p/Db8hPmGnLKI/',
    client: 'Perfect Pointe Dance',
    title: 'Nutcracker Auditions',
  },
  {
    shortcode: 'Dasp11xHJ67',
    kind: 'carousel',
    postUrl: 'https://www.instagram.com/p/Dasp11xHJ67/',
    client: 'Perfect Pointe Dance',
    title: 'Introducing Mr. Brandon',
  },
]

export const webProjects: WebProject[] = [
  {
    screenshot: '/images/websites/ppweb.png',
    // TODO: replace with the live Perfect Pointe Dance URL
    liveUrl: 'https://www.example.com/REPLACE-perfect-pointe-url',
    projectName: 'Perfect Pointe Dance',
    projectType: 'Dance Studio Website',
    scrollOnHover: true,
  },
  {
    screenshot: '/images/websites/elevateweb.png',
    // TODO: replace with the live Elevate Dance SC URL
    liveUrl: 'https://www.example.com/REPLACE-elevate-url',
    projectName: 'Elevate Dance SC',
    projectType: 'Dance Studio Website',
  },
]
