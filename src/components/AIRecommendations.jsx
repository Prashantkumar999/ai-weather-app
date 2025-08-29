import { useState } from 'react'
import './AIRecommendations.css'

const AIRecommendations = ({ recommendations }) => {
  const [activeTab, setActiveTab] = useState('activities')

  if (!recommendations) return null

  const tabs = [
    { id: 'activities', label: 'Activities', icon: '🎯' },
    { id: 'precautions', label: 'Precautions', icon: '⚠️' },
    { id: 'tips', label: 'Tips', icon: '💡' }
  ]

  const getRecommendationsList = () => {
    switch (activeTab) {
      case 'activities':
        return recommendations.activities
      case 'precautions':
        return recommendations.precautions
      case 'tips':
        return recommendations.tips
      default:
        return []
    }
  }

  return (
    <div className="ai-recommendations">
      <div className="ai-header">
        <div className="ai-title">
          <span className="ai-icon">🤖</span>
          <h3>AI Recommendations</h3>
        </div>
        <p className="ai-subtitle">Personalized suggestions based on current weather</p>
      </div>

      <div className="tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="recommendations-content">
        <div className="recommendations-list">
          {getRecommendationsList().map((recommendation, index) => (
            <div
              key={index}
              className="recommendation-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="recommendation-bullet">
                <span className="bullet-icon">
                  {activeTab === 'activities' && '🎯'}
                  {activeTab === 'precautions' && '⚠️'}
                  {activeTab === 'tips' && '💡'}
                </span>
              </div>
              <p className="recommendation-text">{recommendation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AIRecommendations
