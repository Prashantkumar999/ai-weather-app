import './LoadingSpinner.css'

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="loading-card">
        <div className="loading-icon">
          <div className="weather-animation">
            <span className="sun">☀️</span>
            <span className="cloud">☁️</span>
            <span className="rain">🌧️</span>
          </div>
        </div>
        <h3 className="loading-title">Fetching Weather Data</h3>
        <p className="loading-subtitle">Getting the latest weather information...</p>
        <div className="loading-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner
