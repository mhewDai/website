# Personal Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Python. Designed to showcase your projects, experience, and skills.

## 🚀 Features

- **Modern Tech Stack**: React 18, Tailwind CSS, and Vite for fast development
- **Responsive Design**: Mobile-first approach, works on all devices
- **Smooth Animations**: Engaging user experience with smooth scrolling
- **Python Backend**: Optional Flask backend for contact forms and APIs
- **GitHub Pages Ready**: Automated deployment workflow included

## 📂 Project Structure

```
website/
├── frontend/              # React frontend application
│   ├── components/        # React components
│   │   ├── Header.jsx     # Navigation header
│   │   ├── Hero.jsx       # Hero/landing section
│   │   ├── About.jsx      # About me section
│   │   ├── Projects.jsx   # Projects showcase
│   │   ├── Experience.jsx # Work experience
│   │   ├── Contact.jsx    # Contact form
│   │   └── Footer.jsx     # Footer
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── backend/              # Python Flask backend (optional)
│   ├── app.py           # Flask application
│   ├── requirements.txt # Python dependencies
│   └── README.md        # Backend documentation
├── public/              # Static assets
├── .github/workflows/   # GitHub Actions
│   └── deploy.yml       # Deployment workflow
├── index.html          # HTML entry point
├── package.json        # Node dependencies
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS config
└── postcss.config.js   # PostCSS config
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing

### Backend (Optional)
- **Python 3.x** - Programming language
- **Flask** - Lightweight web framework
- **Flask-CORS** - Cross-origin resource sharing

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- Python 3.8+ (for backend)
- Git

### Frontend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/mhewDai/website.git
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

### Backend Setup (Optional)

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

5. **Run the backend server**
   ```bash
   python app.py
   ```
   The API will be available at `http://localhost:5000`

## 🎨 Customization

### 1. Update Personal Information

Edit the following files to add your information:

- `frontend/components/Hero.jsx` - Your name and title
- `frontend/components/About.jsx` - About you and skills
- `frontend/components/Projects.jsx` - Your projects
- `frontend/components/Experience.jsx` - Work experience
- `frontend/components/Contact.jsx` - Contact information

### 2. Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',    // Your primary color
      secondary: '#8b5cf6',  // Your secondary color
      accent: '#10b981',     // Your accent color
    },
  },
}
```

### 3. Add Your Logo/Images

- Replace placeholder images in the `public/` directory
- Update image references in components

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Enable GitHub Pages**
   - Go to your repository Settings > Pages
   - Source: GitHub Actions

2. **Push to main branch**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Automatic deployment**
   - The GitHub Actions workflow will automatically build and deploy
   - Your site will be live at `https://mhewDai.github.io/website`

### Alternative Deployment Options

- **Netlify**: Connect your GitHub repo for automatic deployments
- **Vercel**: Import your GitHub repository
- **Custom Server**: Build and serve the `dist/` folder

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Update Base URL for GitHub Pages

If deploying to a subdirectory, update `vite.config.js`:

```javascript
export default defineConfig({
  base: '/website/', // your repository name
  // ... other config
})
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 💡 Tips

- Keep your projects section updated with your latest work
- Add real screenshots/images to make it more engaging
- Consider integrating analytics (Google Analytics, Plausible)
- For contact forms, consider using FormSpree or EmailJS if you don't need a backend
- Optimize images for web to improve loading speed

## 🆘 Support

If you have questions or run into issues:
- Check the documentation in each component
- Review the backend README for API details
- Open an issue in the repository

---

Built with ❤️ using React and Tailwind CSS
