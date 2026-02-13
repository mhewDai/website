# Quick Start Guide

Get your portfolio website up and running in 5 minutes!

## 🚀 Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` to see your site!

### 3. Customize Your Content

**Replace placeholders with your information:**

1. **Your Name** - Edit these files:
   - `frontend/components/Hero.jsx` (lines 8-11)
   - `frontend/components/Header.jsx` (line 20)
   - `frontend/components/Footer.jsx` (line 10)

2. **About Me** - Edit:
   - `frontend/components/About.jsx` (lines 8-25)

3. **Projects** - Edit:
   - `frontend/components/Projects.jsx` (lines 4-25)

4. **Experience** - Edit:
   - `frontend/components/Experience.jsx` (lines 4-35)

5. **Contact** - Edit:
   - `frontend/components/Contact.jsx` (lines 35-50)

### 4. Test Your Changes
```bash
npm run build
npm run preview
```

### 5. Deploy to GitHub Pages

**One-time setup:**
1. Go to your repo settings on GitHub
2. Pages → Source → Select "GitHub Actions"

**Deploy:**
```bash
git add .
git commit -m "Customize portfolio"
git push origin main
```

Your site will be live at `https://mhewDai.github.io/website/` in a few minutes!

## 📝 What's Next?

- **Customize Colors**: See `CUSTOMIZATION.md` → Color Customization
- **Add Images**: See `CUSTOMIZATION.md` → Adding Images  
- **Deploy Elsewhere**: See `DEPLOYMENT.md` for Netlify, Vercel, etc.
- **Add Backend**: See `backend/README.md` for API setup

## 🎨 Customization Checklist

- [ ] Update your name in Hero and Header
- [ ] Write your About Me section
- [ ] Add your real projects (3-6 recommended)
- [ ] Add your work experience
- [ ] Update contact information
- [ ] Add your profile picture
- [ ] Add project screenshots
- [ ] Change color scheme (optional)
- [ ] Update social media links
- [ ] Test on mobile and desktop
- [ ] Deploy to GitHub Pages

## 📚 Documentation

- **README.md** - Full setup guide and features
- **CUSTOMIZATION.md** - Detailed customization guide
- **DEPLOYMENT.md** - Deployment options and guides
- **backend/README.md** - Backend API documentation

## 🆘 Need Help?

Common issues:
- **Build fails**: Run `npm install` again
- **Port in use**: Stop other dev servers or use different port
- **GitHub Pages 404**: Check `vite.config.js` base path
- **Styling broken**: Check if Tailwind is configured properly

## 💡 Pro Tips

1. **Keep it simple**: Start with placeholder text, then gradually add real content
2. **Mobile first**: Always check how it looks on mobile
3. **Quality over quantity**: 3-4 great projects better than 10 mediocre ones
4. **Update regularly**: Keep your portfolio current with latest work
5. **Get feedback**: Share with friends before going live

## 🎯 Next Steps

After customizing:
1. Add Google Analytics (optional)
2. Set up custom domain (optional)
3. Add a blog section (optional)
4. Integrate contact form backend (optional)
5. Add animation libraries (optional)

---

**Your portfolio is ready to customize! Start with the Hero section and work your way down. Good luck! 🚀**
