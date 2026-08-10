# Autumn Joyner Portfolio

A sophisticated, editorial portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. Designed to showcase technical skills, creative background, and entrepreneurial experience at the intersection of technology, data, creativity, and business.

## Features

✨ **Editorial Design** — Sophisticated typography, asymmetrical layouts, and generous whitespace
🎨 **Custom Color System** — Muted sage, cream, and charcoal palette
⚡ **Performance** — Optimized with Next.js, lazy loading, and image optimization
🎭 **Smooth Animations** — Subtle Framer Motion animations and scroll reveals
📱 **Responsive** — Carefully designed for desktop, tablet, and mobile
♿ **Accessible** — Semantic HTML, ARIA labels, and keyboard navigation
🔍 **SEO Optimized** — Meta tags, structured data, and semantic markup

## Project Structure

```
portfolio/
├── public/
│   ├── images/              # Project & portfolio images
│   ├── favicon.ico         # Site favicon
│   └── resume.pdf          # Resume PDF
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   ├── globals.css     # Global styles
│   │   └── projects/       # Project detail pages (future)
│   ├── components/
│   │   ├── Navigation.tsx  # Fixed navigation header
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Intersection.tsx # Skills/expertise section
│   │   ├── FeaturedProjects.tsx # Projects showcase
│   │   ├── Experience.tsx   # Work experience
│   │   ├── BeyondTech.tsx   # Dance, Pilates, Prima Pilates
│   │   └── Contact.tsx     # Contact & CTA
│   └── data/
│       ├── projects.ts     # Project data & case studies
│       ├── experience.ts   # Work experience data
│       ├── skills.ts       # Skills categories
│       └── prima-pilates.ts # Prima Pilates case study
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration
└── package.json           # Dependencies & scripts
```

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone or navigate to the project:**
   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Set up images:**
   - Add project screenshot images to `/public/images/`
   - Replace placeholder divs in components with actual Next.js Image components
   - Add your cropped dance/ballet photo to the hero section

4. **Add your resume:**
   - Place your resume PDF at `/public/resume.pdf`

### Development

Start the development server:

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
# or
bun run build
bun start
```

## Customization Guide

### Update Personal Info

Edit these files to customize content:

- **Hero Section** — `src/components/Hero.tsx`
- **About Content** — `src/components/About.tsx`
- **Contact Info** — `src/components/Contact.tsx`
- **Navigation Links** — `src/components/Navigation.tsx`

### Update Data

All content data is organized in `src/data/`:

- **Projects** — Add/edit projects in `projects.ts`
- **Experience** — Update work history in `experience.ts`
- **Skills** — Modify skills categories in `skills.ts`
- **Prima Pilates** — Update business data in `prima-pilates.ts`

### Customize Colors

Edit the color palette in `tailwind.config.ts`:

```typescript
colors: {
  sage: { /* muted green tones */ },
  cream: { /* warm ivory/beige */ },
  // Add your custom colors here
}
```

### Add Images

1. Place images in `/public/images/`
2. Import and use Next.js Image component for optimization:

```typescript
import Image from 'next/image'

<Image
  src="/images/project-name.jpg"
  alt="Project description"
  width={800}
  height={600}
  priority
/>
```

### Modify Animations

Framer Motion settings are in each component. Adjust:
- `initial` — Starting state
- `animate` — End state
- `transition` — Duration and easing

Example:
```typescript
motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
```

## Key Components

### Navigation
- Fixed header with pill-style buttons
- Smooth scroll navigation
- Mobile-responsive menu
- Resume download button

### Hero Section
- Large editorial typography
- Asymmetrical grid layout
- Dancer image showcase with decorative elements
- Dual CTA buttons

### Sections
- **About** — Personal introduction with lifestyle image
- **Intersection** — BUILD / ANALYZE / GROW framework with skills
- **Featured Projects** — 4-6 main projects with alternating layouts
- **Experience** — Work history with impact highlights
- **Beyond Tech** — Dance, Pilates, Prima Pilates business case
- **Contact** — Large CTA with social links

## Performance Optimization

- Next.js image optimization enabled
- CSS purging in production
- Component-level code splitting
- Lazy loading via Framer Motion
- Optimized animations for performance

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

The site can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- GitHub Pages (with static export)
- Any Node.js hosting

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Future Enhancements

- [ ] Project detail pages with full case studies
- [ ] Blog or writing section
- [ ] Contact form with backend
- [ ] Dark mode toggle
- [ ] Video content integration
- [ ] Interactive data visualizations
- [ ] Prima Pilates detailed business case study page
- [ ] Social media feed integration

## License

© 2024 Autumn Joyner. All rights reserved.

## Support

For questions or feedback about this portfolio, reach out at autumnjoyner06@gmail.com

---

**Built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion**
