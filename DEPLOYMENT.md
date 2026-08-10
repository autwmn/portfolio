# Deployment Guide

This guide covers deploying your portfolio to production.

## Quick Start - Vercel (Recommended)

Vercel is the official platform for Next.js and requires minimal setup.

### 1. Create Vercel Account
- Visit https://vercel.com
- Sign up with GitHub (recommended)

### 2. Connect Your Repository
```bash
# Install Vercel CLI (optional, can use web dashboard)
npm install -g vercel

# Deploy from your project directory
vercel
```

### 3. Follow Prompts
- Link to GitHub repository (if not already linked)
- Select project directory
- Configure build settings (usually auto-detected)

### 4. Custom Domain
In Vercel Dashboard:
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records (instructions provided)

---

## Other Deployment Platforms

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login and authorize
netlify login

# Deploy
netlify deploy --prod
```

Or use the web dashboard to connect your GitHub repo.

### AWS Amplify

```bash
# Install AWS CLI
npm install -g @aws-amplify/cli

# Initialize and deploy
amplify init
amplify publish
```

### GitHub Pages (Static Export)

Add to `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
}
```

Then:
```bash
npm run build
# Deploy the `out` folder to GitHub Pages
```

---

## Pre-Deployment Checklist

### Content
- [ ] All images added to `/public/images/`
- [ ] Resume PDF at `/public/resume.pdf`
- [ ] All text content updated
- [ ] Social media links working
- [ ] Email address correct

### Code Quality
- [ ] No TypeScript errors: `npm run build`
- [ ] No ESLint warnings: `npm run lint`
- [ ] No console errors in dev tools
- [ ] Tested on mobile, tablet, desktop

### Performance
- [ ] Images are optimized
- [ ] Build time is reasonable: `npm run build`
- [ ] Lighthouse score 90+ (use DevTools)
- [ ] No broken links or images

### SEO
- [ ] Meta tags updated in `layout.tsx`
- [ ] Favicon added (`public/favicon.ico`)
- [ ] Open Graph images set (optional)
- [ ] robots.txt configured (optional)

### Security
- [ ] No secrets in code or environment
- [ ] No API keys in client-side code
- [ ] HTTPS enforced (automatic with Vercel)

---

## Environment Variables

For sensitive data, create `.env.local`:

```env
# API keys, secrets, etc.
NEXT_PUBLIC_SITE_URL=https://autumnjoyner.com
```

Variables starting with `NEXT_PUBLIC_` are exposed to the browser.

---

## Analytics (Optional)

Add analytics to track visitors:

### Google Analytics

1. Create account at https://analytics.google.com
2. Add to `src/app/layout.tsx`:

```typescript
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=GA_ID`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_ID', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

Replace `GA_ID` with your Google Analytics ID.

### Vercel Analytics

If deployed on Vercel, add analytics automatically:
1. Go to project settings
2. Click "Analytics"
3. Enable Web Analytics

---

## Domain Setup

### Purchase Domain
- Vercel Domains
- Namecheap
- GoDaddy
- Bluehost
- etc.

### Point to Deployment

**For Vercel:**
1. Add domain in project settings
2. Update DNS records:
   ```
   A     @           76.76.19.21
   CNAME www         cname.vercel-dns.com
   ```

**For other platforms:** Follow their specific DNS instructions.

---

## Monitoring & Maintenance

### Check Performance
```bash
npm run build
npm run start
```

### Monitor Errors
Set up error tracking (optional):
- Sentry
- LogRocket
- Bugsnag

### Update Dependencies
```bash
npm update

# Or specific package
npm install [package-name]@latest
```

### Regular Backups
- Keep GitHub repository up to date
- Test local build regularly
- Document custom changes

---

## Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json .next
npm install
npm run build
```

### Images Not Loading After Deploy
- Verify image paths in `public/images/`
- Check Next.js Image component usage
- Ensure images are valid format

### Slow Performance
- Optimize images (use WebP)
- Check for large dependencies
- Use Lighthouse to identify issues
- Enable caching headers

### 404 on Custom Routes
- For static pages, ensure they're in `/app` or `/public`
- For dynamic routes, check page structure
- Clear cache and rebuild

---

## After Deployment

1. **Test everything:**
   - Click all links
   - Test responsive design
   - Try contact form
   - Download resume PDF

2. **Share your portfolio:**
   - Add to LinkedIn
   - Include in email signature
   - Share with recruiters
   - Post on social media

3. **Monitor traffic:**
   - Check analytics
   - Track which projects get views
   - Note common traffic sources

4. **Gather feedback:**
   - Share with friends/mentors
   - Ask for specific feedback
   - Iterate based on responses

---

## Continuous Deployment

With Vercel + GitHub:
- Push changes to GitHub
- Vercel automatically builds & deploys
- Preview deployments for pull requests
- Automatic rollback on errors

No manual deployment needed!

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub: https://github.com/autumnjoyner
- Email: autumnjoyner06@gmail.com

---

**Your portfolio is ready to share with the world! 🚀**
