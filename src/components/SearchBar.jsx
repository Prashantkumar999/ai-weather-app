import { useState } from 'react'
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.trim()) {
      onSearch(city.trim())
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <div className={`search-input-container ${isFocused ? 'focused' : ''}`}>
          <span className="search-icon">🔍</span>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Enter city name..."
            className="search-input"
          />
          <button type="submit" className="search-button">
            <span className="button-text">Search</span>
            <span className="button-icon">🌤️</span>
          </button>
        </div>
      </form>
      
      <div className="popular-cities">
        <span className="popular-label">Popular:</span>
        {['New York', 'London', 'Tokyo', 'Paris', 'Sydney'].map((popularCity) => (
          <button
            key={popularCity}
            onClick={() => onSearch(popularCity)}
            className="popular-city-btn"
          >
            {popularCity}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchBar
