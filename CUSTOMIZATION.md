# Customization Guide

This guide will help you customize your portfolio website to make it your own.

## Quick Start Customization

### 1. Personal Information

#### Update Your Name and Title
Edit `frontend/components/Hero.jsx`:
```jsx
<h1 className="text-5xl md:text-6xl font-bold mb-4">
  Hi, I'm [Your Name]  // ← Replace with your name
</h1>
<p className="text-xl md:text-2xl mb-8">
  Full Stack Developer | Problem Solver | Tech Enthusiast  // ← Update your titles
</p>
```

#### Update Header
Edit `frontend/components/Header.jsx`:
```jsx
<div className="text-2xl font-bold text-primary">
  <a href="/">Your Name</a>  // ← Replace with your name or logo
</div>
```

### 2. About Section

Edit `frontend/components/About.jsx`:
- Update the paragraphs with your own story
- Modify the skills in the grid to match your technologies
- Add your profile image by replacing the placeholder

```jsx
// Replace the placeholder with your image
<div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
  <img src="/your-image.jpg" alt="Your Name" className="rounded-lg" />
</div>
```

### 3. Projects

Edit `frontend/components/Projects.jsx`:

```jsx
const projects = [
  {
    id: 1,
    title: 'Your Project Name',  // ← Your project title
    description: 'Description of what your project does...',  // ← Your description
    technologies: ['React', 'Node.js', 'MongoDB'],  // ← Your tech stack
    link: 'https://your-project.com',  // ← Live demo URL
    github: 'https://github.com/username/project'  // ← GitHub repo URL
  },
  // Add more projects...
]
```

To add project screenshots:
```jsx
<div className="bg-gray-300 h-48 rounded-lg mb-4 flex items-center justify-center">
  <img src="/project-screenshot.png" alt={project.title} className="rounded-lg w-full h-full object-cover" />
</div>
```

### 4. Experience

Edit `frontend/components/Experience.jsx`:

```jsx
const experiences = [
  {
    id: 1,
    title: 'Your Job Title',  // ← Your position
    company: 'Company Name',  // ← Company name
    period: 'Start - End',  // ← Employment period
    description: 'What you did in this role...',  // ← Role description
    achievements: [
      'Achievement 1',  // ← List your achievements
      'Achievement 2',
      'Achievement 3'
    ]
  },
  // Add more experiences...
]
```

### 5. Contact Information

Edit `frontend/components/Contact.jsx`:

```jsx
// Update email
<span>your.email@example.com</span>  // ← Your email

// Update location
<span>Your Location</span>  // ← Your city/country

// Update social media links
<a href="https://github.com/yourusername" className="...">  // ← Your GitHub
<a href="https://linkedin.com/in/yourprofile" className="...">  // ← Your LinkedIn
```

### 6. Footer

Edit `frontend/components/Footer.jsx`:

```jsx
<p className="mb-4">© {currentYear} Your Name. All rights reserved.</p>  // ← Your name
```

## Color Customization

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',    // Blue - Change to your brand color
      secondary: '#8b5cf6',  // Purple - Change to your secondary color
      accent: '#10b981',     // Green - Change to your accent color
    },
  },
}
```

Popular color schemes:
- **Professional Blue**: `primary: '#2563eb'`, `secondary: '#1e40af'`
- **Modern Purple**: `primary: '#7c3aed'`, `secondary: '#6d28d9'`
- **Vibrant Orange**: `primary: '#f97316'`, `secondary: '#ea580c'`
- **Fresh Green**: `primary: '#059669'`, `secondary: '#047857'`

## Adding Images

### Profile Image
1. Add your image to `public/` folder (e.g., `public/profile.jpg`)
2. Update `frontend/components/About.jsx`:
```jsx
<img src="/profile.jpg" alt="Your Name" className="rounded-lg w-full h-64 object-cover" />
```

### Project Screenshots
1. Add images to `public/projects/` folder
2. Update `frontend/components/Projects.jsx`:
```jsx
<img src={`/projects/${project.id}.png`} alt={project.title} className="..." />
```

### Favicon
Replace `public/vite.svg` with your own favicon or logo.

## Integrating Backend Contact Form

### Option 1: Use FormSpree (Easiest)
1. Sign up at [FormSpree.io](https://formspree.io)
2. Get your form endpoint
3. Update `frontend/components/Contact.jsx`:
```jsx
const handleSubmit = async (e) => {
  e.preventDefault()
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  // Handle response...
}
```

### Option 2: Use Your Python Backend
1. Deploy your backend to a service (Heroku, Railway, etc.)
2. Update `.env`:
```
VITE_API_URL=https://your-backend-url.com/api
```
3. Update contact form to use the backend endpoint

## Advanced Customization

### Add New Sections
1. Create a new component in `frontend/components/`
2. Import and add it to `frontend/App.jsx`
3. Update navigation in `frontend/components/Header.jsx`

### Add Animations
Install Framer Motion:
```bash
npm install framer-motion
```

Example usage:
```jsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>
```

### Add Icons
Install React Icons:
```bash
npm install react-icons
```

Usage:
```jsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

<FaGithub className="w-6 h-6" />
```

## Deployment Customization

### Custom Domain with GitHub Pages
1. Buy a domain from a registrar (Namecheap, GoDaddy, etc.)
2. Add a `CNAME` file to the `public/` directory with your domain
3. Configure DNS settings in your registrar
4. Enable HTTPS in GitHub Pages settings

### Environment Variables
For production environment variables:
1. Create `.env.production`
2. Add your production API URLs
3. GitHub Actions will use these during build

## Tips for Making It Stand Out

1. **Add Real Content**: Replace all placeholder text with your real information
2. **Use Quality Images**: Professional photos and project screenshots
3. **Show Personality**: Add a unique about section that tells your story
4. **Keep It Updated**: Regularly add new projects and experiences
5. **Performance**: Optimize images and keep the bundle size small
6. **Analytics**: Add Google Analytics or Plausible for tracking
7. **SEO**: Update meta tags in `index.html` for better search rankings

## Getting Help

- Check component files for inline documentation
- Review the main README.md for setup instructions
- Look at Tailwind CSS docs for styling: https://tailwindcss.com/docs
- React documentation: https://react.dev
