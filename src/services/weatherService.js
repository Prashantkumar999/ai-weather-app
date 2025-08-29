import axios from 'axios'

const WEATHER_API_BASE = import.meta.env.VITE_WEATHER_API_BASE || 'https://api.openweathermap.org/data/2.5'
const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY

const normalizeWeather = (data) => {
  // Normalizes OpenWeather current weather to our app shape
  const location = `${data.name}, ${data.sys?.country || ''}`.trim()
  const temperature = Math.round(data.main?.temp)
  const condition = data.weather?.[0]?.main || 'Unknown'
  const description = data.weather?.[0]?.description || ''
  const humidity = data.main?.humidity
  const windSpeed = Math.round((data.wind?.speed || 0) * 3.6) // m/s -> km/h

  return {
    location,
    temperature,
    condition,
    humidity,
    windSpeed,
    description: description.charAt(0).toUpperCase() + description.slice(1)
  }
}

export const fetchWeatherByCity = async (city) => {
  if (!WEATHER_API_KEY) {
    throw new Error('Missing VITE_WEATHER_API_KEY')
  }

  const url = `${WEATHER_API_BASE}/weather`
  const params = {
    q: city,
    appid: WEATHER_API_KEY,
    units: 'metric'
  }

  const { data } = await axios.get(url, { params })
  return normalizeWeather(data)
}
