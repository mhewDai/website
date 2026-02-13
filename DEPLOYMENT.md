# Deployment Guide

This guide covers different ways to deploy your portfolio website.

## GitHub Pages (Recommended for Static Sites)

### Prerequisites
- GitHub account
- Repository pushed to GitHub
- Code in the main branch

### Steps

1. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Source", select "GitHub Actions"

2. **Configure the Build**
   
   The `.github/workflows/deploy.yml` file is already configured. It will:
   - Trigger on push to `main` branch
   - Build your React app with Vite
   - Deploy to GitHub Pages

3. **Update Base URL (if using subdirectory)**
   
   If your repo is not `username.github.io`, update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/website/',  // Replace with your repo name
     // ... rest of config
   })
   ```

4. **Deploy**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

5. **Access Your Site**
   - Your site will be available at: `https://username.github.io/repository-name/`
   - Or `https://username.github.io/` if the repo is named `username.github.io`

### Custom Domain

1. **Add CNAME file**
   Create `public/CNAME` with your domain:
   ```
   yourdomain.com
   ```

2. **Configure DNS**
   Add these records at your domain registrar:
   ```
   Type  Name  Value
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153
   ```
   
   For subdomain (www):
   ```
   CNAME www username.github.io
   ```

3. **Enable HTTPS**
   - In GitHub Pages settings, check "Enforce HTTPS"

## Netlify

### Deploy Steps

1. **Sign Up**
   - Go to [netlify.com](https://www.netlify.com)
   - Sign up with GitHub

2. **New Site from Git**
   - Click "Add new site" > "Import an existing project"
   - Choose your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`

3. **Deploy**
   - Click "Deploy site"
   - Your site will be live in minutes

### Custom Domain on Netlify
1. Go to Site settings > Domain management
2. Add custom domain
3. Follow DNS configuration instructions

### Environment Variables
1. Go to Site settings > Environment variables
2. Add your variables (e.g., `VITE_API_URL`)

## Vercel

### Deploy Steps

1. **Install Vercel CLI** (optional)
   ```bash
   npm install -g vercel
   ```

2. **Deploy via Web**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect GitHub and select repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

3. **Deploy via CLI**
   ```bash
   vercel
   ```

### Custom Domain on Vercel
1. Go to Project Settings > Domains
2. Add your domain
3. Follow DNS instructions

## Traditional Web Hosting

For shared hosting (Bluehost, HostGator, etc.):

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Upload Files**
   - Upload contents of `dist/` folder to your hosting
   - Usually to `public_html/` or `www/` directory
   - Use FTP client (FileZilla) or hosting control panel

3. **Configure**
   - Ensure `.htaccess` supports SPA routing:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

## Backend Deployment

### Option 1: Heroku (Python Backend)

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   ```

2. **Prepare Backend**
   Create `Procfile` in `backend/`:
   ```
   web: python app.py
   ```
   
   Update `backend/requirements.txt`:
   ```
   Flask==3.0.0
   Flask-CORS==4.0.0
   python-dotenv==1.0.0
   gunicorn==21.2.0
   ```

3. **Deploy**
   ```bash
   cd backend
   heroku login
   heroku create your-app-name
   git init
   git add .
   git commit -m "Initial backend"
   heroku git:remote -a your-app-name
   git push heroku main
   ```

4. **Set Environment Variables**
   ```bash
   heroku config:set KEY=VALUE
   ```

### Option 2: Railway (Python Backend)

1. Go to [railway.app](https://railway.app)
2. Connect GitHub repository
3. Select `backend` directory
4. Railway auto-detects Python and deploys
5. Get your deployment URL

### Option 3: Render (Python Backend)

1. Go to [render.com](https://render.com)
2. New > Web Service
3. Connect repository
4. Configure:
   - Root Directory: `backend`
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `python app.py`
5. Deploy

### Option 4: AWS Lambda + API Gateway (Serverless)

For serverless deployment, convert Flask to Lambda handler.

### Option 5: DigitalOcean App Platform

1. Go to [DigitalOcean](https://www.digitalocean.com)
2. Create > Apps > GitHub repository
3. Select your repository
4. Configure build settings
5. Deploy

## Connecting Frontend to Backend

After deploying backend, update frontend:

1. **Update Environment Variable**
   Create `.env.production`:
   ```
   VITE_API_URL=https://your-backend-url.herokuapp.com/api
   ```

2. **Update Contact Component**
   ```jsx
   const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
   
   const handleSubmit = async (e) => {
     e.preventDefault()
     const response = await fetch(`${API_URL}/contact`, {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(formData)
     })
     // Handle response
   }
   ```

3. **Rebuild and Redeploy Frontend**

## Serverless Contact Form (No Backend Needed)

### FormSpree
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form
3. Update Contact component with form endpoint

### Netlify Forms
1. Add `netlify` attribute to form:
   ```jsx
   <form name="contact" method="POST" data-netlify="true">
   ```
2. Netlify automatically handles submissions

### EmailJS
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Install EmailJS:
   ```bash
   npm install @emailjs/browser
   ```
3. Configure in Contact component

## CI/CD Best Practices

1. **Use Environment Variables**
   - Never commit secrets
   - Use `.env.example` as template

2. **Automated Testing**
   - Add tests before deployment
   - Use GitHub Actions for CI

3. **Preview Deployments**
   - Netlify and Vercel provide preview URLs for PRs

4. **Monitor Performance**
   - Use Lighthouse in Chrome DevTools
   - Monitor Core Web Vitals

## Troubleshooting

### GitHub Pages 404 Errors
- Ensure `base` in `vite.config.js` matches your repo name
- Check if files are in `dist/` folder

### Build Failures
- Check Node.js version (should be 18+)
- Clear cache: `rm -rf node_modules package-lock.json && npm install`

### Backend CORS Issues
- Ensure Flask-CORS is configured correctly
- Check allowed origins in backend

### Custom Domain Not Working
- Wait for DNS propagation (up to 48 hours)
- Verify DNS records
- Check HTTPS certificate status

## Performance Optimization

1. **Image Optimization**
   ```bash
   npm install vite-plugin-imagemin -D
   ```

2. **Code Splitting**
   - Vite does this automatically
   - Use dynamic imports for large components

3. **CDN**
   - GitHub Pages uses CDN automatically
   - Netlify and Vercel also provide CDN

4. **Compression**
   - Enable gzip/brotli compression
   - Most platforms do this automatically

## Security

1. **HTTPS**
   - Always use HTTPS
   - Enabled by default on most platforms

2. **Environment Variables**
   - Never expose sensitive data
   - Use platform-specific secret management

3. **Content Security Policy**
   - Add CSP headers in production

## Cost Comparison

| Platform | Frontend | Backend | Custom Domain | SSL |
|----------|----------|---------|---------------|-----|
| GitHub Pages | Free | N/A | Free | Free |
| Netlify | Free (100GB/mo) | Serverless Functions | Free | Free |
| Vercel | Free | Serverless Functions | Free | Free |
| Heroku | N/A | Free tier removed | $7/mo | Free |
| Railway | N/A | $5/mo | Free | Free |
| Render | Free tier | Free tier | Free | Free |

## Recommended Setup

**For Portfolio Only (No Backend):**
- Frontend: GitHub Pages or Netlify
- Contact Form: FormSpree or Netlify Forms

**With Backend:**
- Frontend: Netlify or Vercel
- Backend: Railway or Render
- Database (if needed): Railway or Supabase

**Professional Setup:**
- Frontend: Vercel with custom domain
- Backend: AWS or DigitalOcean
- Database: AWS RDS or DigitalOcean Managed Database
- CDN: Cloudflare
