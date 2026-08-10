# Portfolio Website - Project Overview

## What's Been Built

I've created a **complete, production-ready portfolio website** that brings together your technical skills, creative background, and entrepreneurial work under a cohesive personal brand.

### 🎯 Core Brand Message

**"I BUILD DIGITAL EXPERIENCES WHERE LOGIC MEETS CREATIVITY"**

The website communicates:
- You're a Computer Science student with a Marketing minor
- You have professional experience in software engineering, data analysis, and digital strategy
- Your creative/dance/Pilates background gives you a unique perspective
- Your entrepreneurship (Prima Pilates) demonstrates real-world application of technical + business skills

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/          ← Add your project/personal images here
│   ├── resume.pdf       ← Your resume (add this)
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── page.tsx              ← Main homepage (all sections)
│   │   ├── layout.tsx            ← Root layout & metadata
│   │   └── globals.css           ← Global styles & animations
│   │
│   ├── components/
│   │   ├── Navigation.tsx        ← Fixed header navigation
│   │   ├── Hero.tsx              ← Full-screen hero (add dancer photo)
│   │   ├── About.tsx             ← About section with portrait
│   │   ├── Intersection.tsx      ← BUILD / ANALYZE / GROW
│   │   ├── FeaturedProjects.tsx  ← Project showcase (4-6 projects)
│   │   ├── Experience.tsx        ← Work experience timeline
│   │   ├── BeyondTech.tsx        ← Dance, Pilates, Prima Pilates
│   │   └── Contact.tsx           ← CTA & contact info
│   │
│   └── data/
│       ├── projects.ts           ← Project data & case studies
│       ├── experience.ts         ← Work history data
│       ├── skills.ts             ← Skills categories
│       └── prima-pilates.ts      ← Prima Pilates case study
│
├── Configuration Files
│   ├── tailwind.config.ts        ← Color palette & design tokens
│   ├── tsconfig.json
│   ├── next.config.js
│   ├── postcss.config.js
│   ├── package.json
│   └── .eslintrc.json
│
└── Documentation
    ├── README.md                 ← Full documentation
    ├── SETUP_GUIDE.md           ← Step-by-step setup
    └── PROJECT_OVERVIEW.md      ← This file
```

---

## 🎨 Design System

### Color Palette
- **Sage**: Muted greens (#3d463d to #eff1ed)
- **Cream**: Warm ivory/beige (#bfa060 to #fef9f0)
- **Charcoal/Black**: Deep text and accents
- **White**: Clean backgrounds

The palette is carefully designed to feel:
- ✨ Editorial and sophisticated
- 🎭 Feminine without childish
- 💼 Professional without corporate
- ✨ Technical without stereotypical

### Typography
- **Headings**: Georgia/Garamond serif (elegant, editorial)
- **Body**: System sans-serif (clean, readable)
- **Accent**: Handwritten font for annotations

### Components
- **Large, oversized serif headlines** for impact
- **Asymmetrical layouts** with generous whitespace
- **Subtle animations** with Framer Motion
- **Pill-style buttons** and minimal UI elements
- **Layered compositions** instead of film strips

---

## 📄 Website Sections

### 1. **Navigation**
- Fixed header with pill-style buttons
- Links to: ABOUT, PROJECTS, EXPERIENCE, BEYOND TECH, CONTACT
- Resume download button
- Mobile hamburger menu

### 2. **Hero** ⭐ KEY SECTION
- Large editorial headline: "I BUILD DIGITAL EXPERIENCES"
- Subheading: "where logic meets creativity"
- Credentials: "Computer Science + Marketing"
- Key areas: "Software Engineering • Data • Digital Strategy"
- **Cropped dancer image** (your ballet photo) as focal point
- Decorative elements: laptop window, mobile interface, handwritten note
- CTAs: "VIEW MY WORK" and "ABOUT ME"
- Scroll indicator with animation

### 3. **About**
- Large typography: "HEY THERE, I'M AUTUMN"
- Portrait/lifestyle photo
- Brief bio explaining CS background + creative perspective
- Skills preview

### 4. **Intersection (BUILD / ANALYZE / GROW)**
- Three editorial cards showcasing expertise areas:
  - **BUILD**: Software engineering, full-stack, technical skills
  - **ANALYZE**: Data analysis, statistics, insights
  - **GROW**: Marketing strategy, digital strategy, business growth
- Each card lists relevant technologies and tools
- Styled as premium skill showcase

### 5. **Featured Projects**
- 4-6 main projects with alternating left/right layouts
- Each project shows:
  - Project title & category
  - Short description
  - Problem statement
  - Technologies used
  - Screenshot/mockup
  - Links: "VIEW CASE STUDY", "GITHUB", "LIVE"
- Hover effects and smooth animations

**Featured Projects Include:**
- StudioSnap (collaborative learning platform)
- Wellness Brand Campaign (data analytics)
- GreenSpace Marketplace (plant marketplace)
- This Portfolio (editorial design + build)
- Data Pipeline Automation
- (easily expandable)

### 6. **Experience**
- Work history in editorial card layout (2-column grid)
- Each card includes:
  - Company & role
  - Dates
  - Description of work
  - Impact/results achieved
  - Skills involved
  - Type badge (Tech, Marketing, Teaching, Business)

**Experiences Included:**
- Fairfield University (Data Analytics)
- Allen Agency (Digital Marketing)
- Prima Pilates (Founder & Instructor)
- Connecticut Ballet Academy (Ballet Instructor)
- Freelance Digital Strategy

### 7. **Beyond Tech** ⭐ KEY SECTION
This is where your unique perspective shines:

**Dance**
- Professional Dancer + Ballet Teacher
- Highlights: discipline, creativity, communication, performance

**Pilates**
- Movement Instructor
- Highlights: communication, problem-solving, leadership

**Prima Pilates** (Gets most attention)
- Founder, Instructor, Digital Strategist
- Full business case study including:
  - The idea & positioning
  - Brand identity
  - Digital strategy & social media
  - Business model & services
  - Data & metrics (50+ clients, 2.5K followers, profitability)
  - Technology stack

**Connection Statement**
- "Different Disciplines. Same Way of Thinking."
- Shows how all areas interconnect:
  - Software → systems thinking
  - Data → pattern recognition
  - Marketing → understanding people
  - Dance → discipline & creativity
  - Entrepreneurship → putting it all together

### 8. **Contact**
- Large editorial CTA: "LET'S MAKE SOMETHING GOOD"
- Email address
- Social links (LinkedIn, GitHub, Instagram)
- Resume download
- Footer with copyright

---

## 🚀 Key Features

### ✨ Design Features
- ✅ Editorial, asymmetrical layouts
- ✅ Oversized serif typography
- ✅ Generous whitespace
- ✅ Custom sage/cream color system
- ✅ Layered compositions (no film strips)
- ✅ Subtle animations & scroll reveals
- ✅ Professional without corporate feel

### 🔧 Technical Features
- ✅ Built with Next.js 14+ (latest)
- ✅ React 18 with TypeScript
- ✅ Tailwind CSS for styling
- ✅ Framer Motion for animations
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ SEO optimized with metadata
- ✅ Image optimization
- ✅ Accessible (ARIA labels, semantic HTML)
- ✅ Fast performance
- ✅ Component-based & maintainable

### 📊 Content Features
- ✅ Structured project data with case studies
- ✅ Work experience with impact metrics
- ✅ Skills organized by category
- ✅ Prima Pilates business case study
- ✅ Contact information & CTAs

---

## 📋 Setup Checklist

### Before First Run:
- [ ] Install Node.js 18+
- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Visit http://localhost:3000

### Images to Add:
- [ ] `/public/images/hero-dancer.jpg` — Your cropped ballet photo (key!)
- [ ] `/public/images/portrait.jpg` — About section portrait
- [ ] `/public/images/studiosnap.jpg` — Project screenshot
- [ ] `/public/images/wellness-analytics.jpg` — Project screenshot
- [ ] `/public/images/greenspace.jpg` — Project screenshot
- [ ] `/public/images/portfolio.jpg` — Project screenshot
- [ ] `/public/images/dance.jpg` — Dance section image
- [ ] `/public/images/pilates.jpg` — Pilates section image
- [ ] `/public/images/prima-pilates.jpg` — Prima Pilates image

### Content to Update:
- [ ] Update hero section text (currently has placeholders)
- [ ] Add actual project information to `src/data/projects.ts`
- [ ] Update work experience in `src/data/experience.ts`
- [ ] Update contact email in `src/components/Contact.tsx`
- [ ] Update social media links
- [ ] Add your resume to `/public/resume.pdf`
- [ ] Update Prima Pilates metrics with real data

---

## 🎯 What Makes This Portfolio Unique

1. **Bridges Technical & Creative**
   - Not a typical CS portfolio
   - Celebrates your multi-faceted background
   - Shows technical skills + creative perspective = different approach

2. **Prima Pilates as Case Study**
   - Demonstrates entrepreneurship
   - Shows real-world application of technology + marketing + business
   - Proves you can actually build and grow something
   - Metrics-driven storytelling

3. **Editorial Design**
   - Feels more like a creative agency or fashion brand than a dev portfolio
   - Memorable and distinctive
   - Sophisticated without being pretentious

4. **Intentional Storytelling**
   - Each section builds the narrative
   - "Beyond Tech" is as important as the technical work
   - "Intersection" section ties everything together
   - Contact section reinforces the core brand message

---

## 💡 Usage Examples

### For Recruiters:
- **Software Engineers** → See projects, case studies, technical skills
- **Data Teams** → See analytics projects, methodology, business sense
- **Marketing/Product** → See strategy thinking, data understanding, business acumen
- **General** → Unique perspective combining all domains

### What They'll Remember:
- "She can build" (technical projects)
- "She understands data + business" (analytics + Prima Pilates)
- "She has a creative eye" (design, entrepreneurship)
- "She's different from typical tech candidates" (unique background)

---

## 📚 Documentation

**See also:**
- `README.md` — Complete feature list & technical details
- `SETUP_GUIDE.md` — Step-by-step customization guide
- Component JSDoc comments for code-level documentation

---

## 🔮 Future Enhancements

Easy to add later:
- [ ] Project detail pages with full case studies
- [ ] Blog or writing section
- [ ] Contact form with backend
- [ ] Prima Pilates dedicated page
- [ ] Interactive data visualizations
- [ ] Video content
- [ ] Testimonials
- [ ] Dark mode toggle

---

## 🎉 You're Ready!

The portfolio is fully functional and ready to customize. Follow `SETUP_GUIDE.md` to:
1. Install dependencies
2. Add your images
3. Update your content
4. Deploy to Vercel or your hosting

**Questions?** Check the docs or reach out. Happy building! 🚀

---

**Built with Next.js • React • TypeScript • Tailwind CSS • Framer Motion**
