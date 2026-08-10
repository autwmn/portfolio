# Portfolio Setup & Customization Guide

This guide walks you through setting up and customizing your portfolio website.

## 1. Initial Setup

### Install Dependencies

```bash
cd portfolio
npm install
```

Or with your preferred package manager:
```bash
bun install
# or
pnpm install
# or
yarn install
```

### Start Development Server

```bash
npm run dev
```

Visit http://localhost:3000 to see your portfolio.

## 2. Image Setup

### Hero Section - Dancer Image

The hero section is designed to feature a cropped ballet/dance photograph:

1. **Prepare your image:**
   - Dimensions: ~800x1000px (portrait orientation)
   - Format: JPG or PNG
   - File size: Optimized (under 300KB)
   - Crop: Focus on the subject with some breathing room

2. **Add the image:**
   ```bash
   # Place your image in the public folder
   cp ~/path/to/your/dancer-photo.jpg public/images/hero-dancer.jpg
   ```

3. **Update the Hero component** (`src/components/Hero.tsx`):
   ```typescript
   import Image from 'next/image'
   
   // Replace the placeholder div with:
   <Image
     src="/images/hero-dancer.jpg"
     alt="Autumn performing ballet"
     width={500}
     height={600}
     priority
     className="object-cover w-full h-full"
   />
   ```

### Project Screenshots

1. **Organize project images:**
   ```
   public/images/
   ├── studiosnap.jpg
   ├── wellness-analytics.jpg
   ├── greenspace.jpg
   ├── portfolio.jpg
   └── data-pipeline.jpg
   ```

2. **Update each project card** in `src/components/FeaturedProjects.tsx`:
   ```typescript
   import Image from 'next/image'
   
   // Replace placeholder with:
   <Image
     src={`/images/${project.id}.jpg`}
     alt={project.title}
     width={600}
     height={400}
     className="object-cover w-full h-full"
   />
   ```

### About Section Portrait

Add a lifestyle/portrait photo for the About section:

1. Save to `public/images/portrait.jpg`
2. Update `src/components/About.tsx`:
   ```typescript
   <Image
     src="/images/portrait.jpg"
     alt="Autumn Joyner"
     width={400}
     height={500}
     className="object-cover w-full h-full"
   />
   ```

### Beyond Tech Section Images

Add images for each section:

1. **Dance image:**
   - File: `public/images/dance.jpg`
   - Suggestion: Action shot of ballet performance or teaching

2. **Pilates image:**
   - File: `public/images/pilates.jpg`
   - Suggestion: Clean, minimal Pilates studio or class shot

3. **Prima Pilates image:**
   - File: `public/images/prima-pilates.jpg`
   - Suggestion: Branding/logo, studio, or instructor photo

## 3. Content Customization

### Update Personal Information

#### Navigation & Header
File: `src/components/Navigation.tsx`
- Company logo (currently "AJ")
- Navigation links
- Resume URL

#### Hero Section
File: `src/components/Hero.tsx`
- Main headline
- Tagline/subtitle
- Supporting text
- CTA button text

#### About Section
File: `src/components/About.tsx`
- About paragraph
- Skills preview

#### Contact Section
File: `src/components/Contact.tsx`
- Email address
- Social media links
- CTA text

### Update Projects Data

File: `src/data/projects.ts`

Add or modify projects:
```typescript
{
  id: 'project-slug',
  title: 'Project Name',
  category: 'fullstack' | 'frontend' | 'data' | 'automation',
  shortDescription: 'Brief description',
  fullDescription: 'Longer description',
  problem: 'What problem did this solve?',
  solution: 'How did you solve it?',
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  image: '/images/project-name.jpg',
  featured: true,
  liveUrl: 'https://...',
  githubUrl: 'https://...',
}
```

### Update Experience Data

File: `src/data/experience.ts`

Add or modify work experience:
```typescript
{
  id: 'unique-id',
  company: 'Company Name',
  role: 'Your Role',
  startDate: 'YYYY-MM',
  endDate: 'Present' | 'YYYY-MM',
  description: 'What you did',
  impact: 'What results you achieved',
  skills: ['Skill1', 'Skill2'],
  type: 'tech' | 'marketing' | 'teaching' | 'business',
}
```

### Update Skills

File: `src/data/skills.ts`

Modify the three main categories (BUILD, ANALYZE, GROW):
```typescript
{
  name: 'BUILD',
  category: 'build',
  skills: ['Python', 'React', 'Node.js', /* ... */]
}
```

### Update Prima Pilates Case Study

File: `src/data/prima-pilates.ts`

Update with real business data:
- Number of clients
- Social media followers
- Revenue/growth metrics
- Business details
- Technology stack

## 4. Customization Options

### Color Palette

Edit `tailwind.config.ts` to change the sage/cream palette:

```typescript
colors: {
  sage: {
    50: '#f8f9f7',
    // ... modify these hex values
    900: '#3d463d',
  },
  cream: {
    50: '#fffef9',
    // ... modify these hex values
    900: '#bfa060',
  },
}
```

### Typography

Current fonts:
- Headings: Georgia/Garamond (serif)
- Body: System sans-serif (Inter, Segoe UI, etc.)
- Handwriting: Brush Script MT (optional)

Change in `tailwind.config.ts`:
```typescript
fontFamily: {
  serif: ['Your Serif Font', 'Georgia', 'serif'],
  sans: ['Your Sans Font', 'Inter', 'sans-serif'],
}
```

### Animation Behavior

All animations use Framer Motion. Adjust in individual components:
- `initial` — Starting state
- `animate` — Animated state
- `transition` — Timing, duration, easing
- `whileInView` — Trigger on scroll

Example:
```typescript
motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
  viewport={{ once: true, margin: '-100px' }}
```

## 5. Resume Setup

1. **Create your resume** as a PDF
2. **Save to:** `public/resume.pdf`
3. **Update resume download link** in components if needed

The resume is linked in:
- Navigation header
- Contact section
- Throughout the site with `↗` download indicators

## 6. SEO & Meta Tags

Edit `src/app/layout.tsx` to update:

```typescript
export const metadata: Metadata = {
  title: 'Your Name | CS + Marketing',
  description: 'Your tagline and brief description',
}
```

## 7. Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Configure domain** in Vercel dashboard

### Environment Variables

Create `.env.local` for any sensitive data:
```
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

## 8. Performance Tips

✅ **Optimize images:**
- Use WebP format where possible
- Compress JPGs (60-70% quality)
- Use appropriate dimensions

✅ **Minimize animations:**
- Keep animations under 600ms
- Use `prefers-reduced-motion` for accessibility

✅ **Code splitting:**
- Import components dynamically if needed
- Lazy load heavy content

✅ **Monitor performance:**
```bash
npm run build
npm run start
# Then measure with Lighthouse
```

## 9. Future Enhancements

Consider adding:

- [ ] Blog or writing section
- [ ] Contact form with backend
- [ ] Project detail pages with full case studies
- [ ] Interactive code snippets
- [ ] Video content
- [ ] Data visualization gallery
- [ ] Testimonials section
- [ ] Newsletter signup
- [ ] Dark mode toggle

## 10. Troubleshooting

### Images not loading
- Check file paths in `public/images/`
- Ensure image format is supported (JPG, PNG, WebP)
- Clear Next.js cache: `rm -rf .next`

### Styles not applying
- Restart dev server
- Clear browser cache
- Verify Tailwind classes in `globals.css`

### Build errors
- Delete `node_modules` and `package-lock.json`
- Reinstall: `npm install`
- Check TypeScript errors: `npm run build`

### Performance issues
- Optimize images
- Reduce animation complexity
- Use `priority` prop on above-fold images
- Check Network tab in DevTools

## Support

For issues or questions:
- Email: autumnjoyner06@gmail.com
- Check the README.md for additional documentation
- Review component JSDoc comments for usage

---

**Happy building! 🚀**
