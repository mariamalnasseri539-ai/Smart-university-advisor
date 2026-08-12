# 🎓 Smart University Advisor (مستشارك الجامعي الذكي)

A modern, interactive, AI-powered web platform designed specifically for high-school students to discover their ideal university majors based on their academic interests, natural talents, past school experiences, and future career market outlook.

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-8-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8)
![AI Powered](https://img.shields.io/badge/AI-Gemini%202.5%20Flash-emerald)

---

## ✨ Features

- **🎓 High-School Student Centric Questionnaire**:
  - 12 intuitive, realistic multiple-choice questions focusing on past school memories, favorite subjects, teacher compliments, leisure habits, and natural instincts.
  - Multi-step wizard layout with an animated progress bar, step indicators, and category badges.
  - Mixed & shuffled option orders to ensure un-biased, authentic responses.

- **🤖 Gemini AI Integration & Smart Offline Fallback**:
  - Engineered with a specialized Senior Academic Guidance Counselor system prompt powered by **Google Gemini AI**.
  - Includes a built-in **Smart Offline Fallback Engine** that analyzes responses locally with high accuracy when no API key is provided or when offline.

- **🎨 Premium RTL UI/UX Design**:
  - Beautiful Arabic typography using Google Fonts (**Cairo** & **Tajawal**).
  - Modern Glassmorphism aesthetic, sleek dark mode theme, vibrant gradients, micro-animations, and celebratory confetti effects (`canvas-confetti`).
  - 100% responsive across Mobile, Tablet, and Desktop screens.

- **📊 Comprehensive Career & Major Recommendation Dashboard**:
  - **Primary Recommended Major**: Displays compatibility score percentage, overview, and specific reasons matching the student's quiz answers.
  - **Alternate Majors**: Recommends two runner-up university majors for flexibility.
  - **Core Academic Subjects & Key Skills**: Outlines essential subjects and skills to develop.
  - **Career & Job Market Outlook**: Details expected demand, salary ranges, top job roles, and future trends with AI transformation.
  - **Action Plan / Learning Roadmap**: Provides actionable step-by-step guidance for high school & college preparation.
  - **Export & Share**: Print to PDF, share recommendation link, or bookmark majors into local storage.

- **⚡ Quick 1-Click Demo Profiles**:
  - Instantly test the analysis engine with pre-configured student profiles (Engineering/Tech, Medical/Health, Business/Finance, and Design/Media).

---

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 + Vite
- **Styling**: Tailwind CSS v4
- **Iconography**: Lucide Icons (`lucide-react`)
- **Animations & Effects**: Canvas Confetti + Custom CSS Animations
- **AI Integration**: Google Gemini REST API (`gemini-2.5-flash`) + Local Smart Rule-Based Engine

---

## 📁 Project Structure

```text
smart-university-advisor/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── components/
    │   ├── Header.jsx
    │   ├── Footer.jsx
    │   ├── HeroSection.jsx
    │   ├── ApiKeyModal.jsx
    │   ├── Questionnaire.jsx
    │   ├── ProgressBar.jsx
    │   ├── LoadingState.jsx
    │   ├── ResultView.jsx
    │   └── BookmarksDrawer.jsx
    ├── data/
    │   ├── questions.js
    │   └── demoProfiles.js
    └── services/
        └── geminiService.js
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- `npm` or `yarn`

### Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd C:\Users\Owner\.gemini\antigravity\scratch\smart-university-advisor
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/`.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🗝️ API Key Configuration (Optional)

The application works 100% out of the box using its intelligent local rule-based fallback engine.

To connect your own live **Google Gemini API Key**:
1. Get a free API Key from [Google AI Studio](https://aistudio.google.com/app/apikey).
2. Save your key in `localStorage` under `gemini_api_key` or use the built-in API integration helper in `src/services/geminiService.js`.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
