# WeatherAI (Vite + React)

A beautiful, animated weather app with AI-powered recommendations using Gemini.

## Features
- Elegant glassmorphism UI with rich animations (raw CSS)
- Search weather by city (OpenWeather compatible)
- AI suggestions: activities, precautions, tips (Gemini)
- Responsive layout

## Getting Started

### 1) Install dependencies
```bash
npm install
```

### 2) Configure environment variables
Create a `.env` file in the project root based on `.env.example`:
```env
VITE_WEATHER_API_KEY=YOUR_OPENWEATHER_KEY
VITE_WEATHER_API_BASE=https://api.openweathermap.org/data/2.5
VITE_GEMINI_API_KEY=YOUR_GEMINI_KEY
```

- Get OpenWeather API key: `https://openweathermap.org/api`
- Get Gemini API key: `https://aistudio.google.com/`

### 3) Run the dev server
```bash
npm run dev
```

Open the shown URL in your browser.

## Notes
- If `VITE_GEMINI_API_KEY` is missing, the app gracefully falls back to friendly default suggestions.
- Weather units are metric by default.

## Scripts
- `npm run dev` - start dev server
- `npm run build` - build for production
- `npm run preview` - preview production build
