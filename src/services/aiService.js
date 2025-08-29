import { GoogleGenerativeAI } from '@google/generative-ai'

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY

const buildPrompt = (weather) => `You are an outdoors concierge AI. Given current weather, suggest:
- 5 relevant outdoor/indoor activities
- 5 precautions
- 3 tips for mood/productivity
Return STRICT JSON ONLY (no markdown, no code fences) with keys: activities (string[]), precautions (string[]), tips (string[]). Be concise. Weather:
location: ${weather.location}
condition: ${weather.condition}
temperature_c: ${weather.temperature}
humidity_percent: ${weather.humidity}
wind_kmh: ${weather.windSpeed}`

export const getAIRecommendations = async (weather) => {
  if (!GEMINI_API_KEY) {
    throw new Error('Missing VITE_GEMINI_API_KEY')
  }

  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY)
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

  const prompt = buildPrompt(weather)
  const result = await model.generateContent({
    contents: [
      { role: 'user', parts: [{ text: prompt }] }
    ],
    generationConfig: {
      responseMimeType: 'application/json'
    }
  })
  const text = result.response.text()

 

  try {
    const json = JSON.parse(text)
    return json
  } catch (err) {
    // Fallback simple parse for code blocks
    const stripped = text.replace(/^```(json)?/i, '').replace(/```$/i, '').trim()
    try {
      return JSON.parse(stripped)
    } catch (e) {
      throw new Error('AI response was not valid JSON')
    }
  }
}
