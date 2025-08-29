import { useState, useEffect } from 'react'
import './App.css'
import WeatherDisplay from './components/WeatherDisplay'
import SearchBar from './components/SearchBar'
import AIRecommendations from './components/AIRecommendations'
import LoadingSpinner from './components/LoadingSpinner'
import { fetchWeatherByCity } from './services/weatherService'
import { getAIRecommendations } from './services/aiService'

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [aiRecommendations, setAiRecommendations] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchWeatherData = async (city) => {
    setLoading(true)
    setError(null)
    setAiRecommendations(null)

    try {
      const weather = await fetchWeatherByCity(city)
      setWeatherData(weather)

      const recs = await getAIRecommendations(weather)
      setAiRecommendations(recs)
    } catch (err) {
      console.error(err)
      setError(err?.message || 'Failed to fetch weather or AI data')
      setWeatherData(null)
      setAiRecommendations(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">
            {/* <span className="title-icon"></span> */}
            WeatherAI
          </h1>
          <p className="app-subtitle">Your intelligent weather companion</p>
        </header>

        <SearchBar onSearch={fetchWeatherData} />

        {loading && <LoadingSpinner />}

        {error && (
          <div className="error-message">
            <span className="error-icon">⚠️</span>
            {error}
          </div>
        )}

        {weatherData && !loading && (
          <div className="weather-content">
            <WeatherDisplay weather={weatherData} />
            <AIRecommendations recommendations={aiRecommendations} />
          </div>
        )}

        {!weatherData && !loading && (
          <div className="welcome-section">
            <div className="welcome-card">
              <h2>Welcome to WeatherAI</h2>
              <p>Search for a city to get weather information and AI-powered recommendations</p>
              <div className="welcome-icons">
                <span>🌤️</span>
                <span>🤖</span>
                <span>🎯</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
