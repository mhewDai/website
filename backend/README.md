# Personal Portfolio Website - Backend

This directory contains the Python backend for the portfolio website. It can be used for:
- Contact form processing
- Data APIs
- Server-side functionality

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the development server:
```bash
python app.py
```

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/projects` - Get projects data (optional)
- `GET /api/experience` - Get experience data (optional)

## Note

For GitHub Pages deployment (static hosting), the backend is optional. You can:
1. Use this backend on a separate hosting service (Heroku, Railway, etc.)
2. Use serverless functions (Netlify Functions, Vercel Functions)
3. Use third-party services for contact forms (Formspree, EmailJS)
