import { AISuggestion, AuditLog } from '@/types/dashboard'
import { Brain, Check, X, HelpCircle } from 'lucide-react'
import { useState } from 'react'

interface AISuggestionsProps {
  suggestions: AISuggestion[]
  onAccept: (suggestionId: string) => void
  onReject: (suggestionId: string) => void
  auditLog: AuditLog[]
}

export default function AISuggestions({ suggestions, onAccept, onReject, auditLog }: AISuggestionsProps) {
  const [showTooltip, setShowTooltip] = useState<string | null>(null)

  const getSuggestionIcon = (type: string) => {
    switch (type) {
      case 'hold': return '⏸️'
      case 'reroute': return '🔄'
      case 'speed-adjust': return '⚡'
      default: return '💡'
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Brain className="h-5 w-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">AI Suggestions</h3>
        </div>
        {suggestions.length > 0 && (
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {suggestions.length} pending
          </span>
        )}
      </div>

      {suggestions.length === 0 ? (
        <div className="text-center py-8">
          <Brain className="h-12 w-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No pending suggestions</p>
        </div>
      ) : (
        <div className="space-y-4">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{getSuggestionIcon(suggestion.type)}</span>
                  <span className="font-medium text-gray-900">{suggestion.action}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onMouseEnter={() => setShowTooltip(suggestion.id)}
                    onMouseLeave={() => setShowTooltip(null)}
                    className="relative p-1 text-gray-400 hover:text-gray-600"
                  >
                    <HelpCircle className="h-4 w-4" />
                    {showTooltip === suggestion.id && (
                      <div className="absolute bottom-6 right-0 bg-gray-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10">
                        {suggestion.reason}
                      </div>
                    )}
                  </button>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Why?</strong> {suggestion.reason}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Impact:</strong> {suggestion.impact}
                </p>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onAccept(suggestion.id)}
                  className="flex items-center space-x-1 px-3 py-1.5 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors"
                >
                  <Check className="h-4 w-4" />
                  <span>Accept</span>
                </button>
                <button
                  onClick={() => onReject(suggestion.id)}
                  className="flex items-center space-x-1 px-3 py-1.5 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors"
                >
                  <X className="h-4 w-4" />
                  <span>Reject</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Recent Actions */}
      {auditLog.length > 0 && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          <h4 className="text-sm font-medium text-gray-900 mb-3">Recent Actions</h4>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {auditLog.slice(-3).map((log) => (
              <div key={log.id} className="text-xs text-gray-600 flex items-center space-x-2">
                <span className="text-gray-400">{log.timestamp.toLocaleTimeString()}</span>
                <span>{log.action}</span>
                {log.trainId && <span className="text-blue-600">#{log.trainId}</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
