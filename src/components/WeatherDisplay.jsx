import './WeatherDisplay.css'

const WeatherDisplay = ({ weather }) => {
  const getWeatherIcon = (condition) => {
    const icons = {
      'Sunny': '☀️',
      'Cloudy': '☁️',
      'Rainy': '🌧️',
      'Snowy': '❄️',
      'Partly Cloudy': '⛅',
      'Thunderstorm': '⛈️',
      'Foggy': '🌫️',
      'Windy': '💨'
    }
    return icons[condition] || '🌤️'
  }

  const getBackgroundClass = (condition) => {
    const backgrounds = {
      'Sunny': 'sunny-bg',
      'Cloudy': 'cloudy-bg',
      'Rainy': 'rainy-bg',
      'Snowy': 'snowy-bg',
      'Partly Cloudy': 'partly-cloudy-bg',
      'Thunderstorm': 'storm-bg',
      'Foggy': 'foggy-bg',
      'Windy': 'windy-bg'
    }
    return backgrounds[condition] || 'default-bg'
  }

  return (
    <div className={`weather-display ${getBackgroundClass(weather.condition)}`}>
      <div className="weather-card">
        <div className="weather-header">
          <h2 className="location">{weather.location}</h2>
          <div className="weather-icon-container">
            <span className="weather-icon">{getWeatherIcon(weather.condition)}</span>
          </div>
        </div>

        <div className="weather-main">
          <div className="temperature-section">
            <span className="temperature">{weather.temperature}°C</span>
            <span className="condition">{weather.condition}</span>
          </div>
          
          <p className="description">{weather.description}</p>
        </div>

        <div className="weather-details">
          <div className="detail-item">
            <span className="detail-icon">💧</span>
            <div className="detail-content">
              <span className="detail-label">Humidity</span>
              <span className="detail-value">{weather.humidity}%</span>
            </div>
          </div>
          
          <div className="detail-item">
            <span className="detail-icon">💨</span>
            <div className="detail-content">
              <span className="detail-label">Wind Speed</span>
              <span className="detail-value">{weather.windSpeed} km/h</span>
            </div>
          </div>
        </div>

        <div className="weather-footer">
          <div className="feels-like">
            <span className="feels-like-label">Feels like</span>
            <span className="feels-like-value">{weather.temperature + 2}°C</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherDisplay
