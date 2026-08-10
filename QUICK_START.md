# Quick Start Guide

Get your portfolio running in 5 minutes.

## 1. Install & Run (2 minutes)

```bash
cd portfolio
npm install
npm run dev
```

Visit http://localhost:3000 ✨

## 2. Add Your Dancer Photo (1 minute)

The hero section is ready for your cropped ballet image:

1. Save your image to: `public/images/hero-dancer.jpg`
2. Open `src/components/Hero.tsx`
3. Replace the placeholder comment with:
   ```typescript
   import Image from 'next/image'
   
   // In the JSX, replace the placeholder div:
   <Image
     src="/images/hero-dancer.jpg"
     alt="Autumn performing ballet"
     width={500}
     height={600}
     priority
     className="object-cover w-full h-full"
   />
   ```

Done! Refresh your browser.

## 3. Update Your Content (2 minutes)

Edit these files:

**Hero/Contact Info:**
- `src/components/Contact.tsx` — Update email, social links

**Projects:**
- `src/data/projects.ts` — Add your real projects

**Experience:**
- `src/data/experience.ts` — Update your work history

**About:**
- `src/components/About.tsx` — Update your story

**Resume:**
- Save to `public/resume.pdf`

## 4. Add More Images

Save to `public/images/`:
- `portrait.jpg` — About section
- `studiosnap.jpg`, `wellness-analytics.jpg`, etc. — Projects
- Any other section images

## What You Have

✅ **Full portfolio website** with:
- Editorial hero section (ready for dancer photo)
- About section
- BUILD/ANALYZE/GROW framework
- 4-6 featured projects
- Work experience
- Dance, Pilates, Prima Pilates sections
- Contact & CTA

✅ **Production-ready code:**
- Next.js 14+ with TypeScript
- Tailwind CSS with custom color system
- Framer Motion animations
- Fully responsive design
- SEO optimized

✅ **Complete documentation:**
- `README.md` — Features & structure
- `SETUP_GUIDE.md` — Detailed customization
- `PROJECT_OVERVIEW.md` — What's included
- `DEPLOYMENT.md` — How to deploy

## Next Steps

1. **Customize content** (follow SETUP_GUIDE.md)
2. **Add images** (especially your dancer photo!)
3. **Test locally** (npm run dev)
4. **Deploy** (see DEPLOYMENT.md)

## Deployment (Free)

```bash
# Option 1: Vercel (easiest, free)
npm install -g vercel
vercel

# Option 2: Netlify (also free)
npm install -g netlify-cli
netlify deploy --prod
```

## File You Need to Know About

**Hero Dancer Image:**
- Add to: `public/images/hero-dancer.jpg`
- Update: `src/components/Hero.tsx`
- This is your key visual!

**Content Data:**
- Projects: `src/data/projects.ts`
- Experience: `src/data/experience.ts`
- Skills: `src/data/skills.ts`
- Prima Pilates: `src/data/prima-pilates.ts`

## Helpful Commands

```bash
npm run dev      # Development server (localhost:3000)
npm run build    # Build for production
npm run lint     # Check for errors
npm run start    # Start production server
```

## Common Customizations

**Change colors:**
- Edit `tailwind.config.ts` (sage/cream hex values)

**Change fonts:**
- Edit `tailwind.config.ts` (fontFamily)

**Change text:**
- Edit component files in `src/components/`

**Change data:**
- Edit data files in `src/data/`

## Questions?

Detailed answers in:
- `SETUP_GUIDE.md` — Step-by-step help
- `README.md` — Complete reference
- Component comments in `src/components/`

---

**You're all set! 🎉 Run `npm run dev` and start customizing!**
