# Personal Portfolio

React frontend for my personal portfolio website. Fully bilingual (Arabic/English) with RTL support, dark/light theme switching, and a graceful fallback to mock data when the API is unavailable.

## Tech Stack

- React 19 + Vite 8
- Tailwind CSS v4
- Lucide React (icons)
- Custom context-based i18n (Arabic/English + RTL/LTR)

## Features

- Bilingual UI with seamless Arabic/English switching and automatic RTL layout
- Dark and light theme
- Sections: Hero, Skills, Experience, Awards, Certifications, Projects, Contact
- Project cards with live demo and video demo links
- Resume download button
- Scroll reveal animations
- Graceful API fallback to mock data if the backend is unreachable

## Running Locally

**Prerequisites:** Node.js 18+

1. Clone the repo
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file:
   ```
   VITE_API_BASE=http://localhost:5117
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```

## Deployment

Deployed on [Vercel](https://vercel.com). Set `VITE_API_BASE` to your backend URL in the Vercel environment variables before building.

## Related

- **Backend API:** [Portfolio API](https://github.com/hopeful-programmer/Portfolio-API)
- **Live Site:** [your-portfolio-url]
