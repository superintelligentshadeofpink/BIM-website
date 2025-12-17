# ✅ Deployment Checklist for Vercel

## Pre-Deployment Checks

### Local Testing
- [ ] Run `npm install` successfully
- [ ] Run `npm run dev` and verify site loads at localhost:3000
- [ ] Check all sections render correctly:
  - [ ] Hero section with phone mockup
  - [ ] Manifest369 feature cards
  - [ ] Info block with app screenshots
  - [ ] Gallery with 5 phone images
  - [ ] Download/Pricing section
  - [ ] Footer
- [ ] Verify all images load properly
- [ ] Test responsive behavior (if implemented)
- [ ] Check browser console for errors

### Code Quality
- [ ] No TypeScript errors: `npm run build`
- [ ] All imports are correct
- [ ] No console errors or warnings
- [ ] Git repository initialized (if using GitHub method)

## Deployment Steps

### Option A: Vercel CLI
- [ ] Install Vercel CLI: `npm i -g vercel`
- [ ] Navigate to project: `cd bold-magenta`
- [ ] Run: `vercel`
- [ ] Follow prompts to complete deployment
- [ ] Note your deployment URL

### Option B: GitHub + Vercel Dashboard
- [ ] Create GitHub repository
- [ ] Push code to GitHub:
  ```bash
  git init
  git add .
  git commit -m "Initial commit"
  git branch -M main
  git remote add origin YOUR_REPO_URL
  git push -u origin main
  ```
- [ ] Go to vercel.com and sign in
- [ ] Click "Add New Project"
- [ ] Import your GitHub repository
- [ ] Verify build settings (Vercel auto-detects Next.js)
- [ ] Click "Deploy"
- [ ] Wait for deployment to complete

## Post-Deployment Checks

### Verify Deployment
- [ ] Visit your live URL
- [ ] Check all sections load correctly
- [ ] Test all images display properly
- [ ] Verify no 404 errors
- [ ] Check page load speed
- [ ] Test on different browsers:
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge
- [ ] Test on mobile devices (if responsive)

### Vercel Dashboard Setup
- [ ] Set up custom domain (optional)
- [ ] Enable Vercel Analytics (optional)
- [ ] Configure environment variables (if needed)
- [ ] Set up automatic deployments from main branch
- [ ] Configure deployment notifications

## Long-Term Maintenance

### Image Management
- [ ] Download all Figma images before 7-day expiry
- [ ] Upload images to `/public/images/` folder
- [ ] Update image URLs in code
- [ ] Redeploy with local images

### Content Updates
- [ ] Document any content changes needed
- [ ] Plan for regular updates
- [ ] Set up version control workflow

### Performance Monitoring
- [ ] Set up Vercel Analytics
- [ ] Monitor page load times
- [ ] Check Core Web Vitals
- [ ] Optimize if needed

## Common Issues & Solutions

### Issue: Build fails
**Solution:** 
- Check terminal for specific error messages
- Verify all dependencies are in package.json
- Run `npm install` again
- Delete `.next` folder and rebuild

### Issue: Images don't load
**Solution:**
- Verify Next.js config allows Figma CDN domain
- Check image URLs are correct
- Test image URLs directly in browser

### Issue: Styling looks different
**Solution:**
- Ensure Tailwind CSS is configured correctly
- Check Google Fonts are loading
- Clear browser cache

### Issue: TypeScript errors
**Solution:**
- Run `npm run build` to see all errors
- Fix type errors one by one
- Check tsconfig.json is correct

## Success Metrics

After deployment, you should have:
- ✅ A live URL (e.g., bold-magenta.vercel.app)
- ✅ Automatic HTTPS
- ✅ Global CDN distribution
- ✅ Fast page load times (<3 seconds)
- ✅ No console errors
- ✅ All images loading correctly
- ✅ Responsive design (if implemented)

## Next Steps After Deployment

1. **Share Your Site:** Send the URL to stakeholders
2. **Add Custom Domain:** Configure in Vercel dashboard
3. **Set Up Analytics:** Enable Vercel Analytics or Google Analytics
4. **Plan Updates:** Schedule regular content updates
5. **Monitor Performance:** Check analytics regularly
6. **Backup Images:** Download and save all assets locally

## Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind Docs:** https://tailwindcss.com/docs
- **This Project:** See README.md and QUICKSTART.md

---

**Pro Tip:** Save this checklist and use it for every deployment to ensure nothing is missed!

**Estimated Time to Deploy:** 5-15 minutes (first time)

**Good luck with your deployment! 🚀**
