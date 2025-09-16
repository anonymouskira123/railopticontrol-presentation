import { ConflictAlert } from '@/types/dashboard'
import { AlertTriangle, Clock, MapPin } from 'lucide-react'

interface ConflictAlertsProps {
  conflicts: ConflictAlert[]
}

export default function ConflictAlerts({ conflicts }: ConflictAlertsProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'bg-red-100 border-red-200 text-red-800'
      case 'Medium': return 'bg-yellow-100 border-yellow-200 text-yellow-800'
      case 'Low': return 'bg-green-100 border-green-200 text-green-800'
      default: return 'bg-gray-100 border-gray-200 text-gray-800'
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'High': return '🔴'
      case 'Medium': return '🟡'
      case 'Low': return '🟢'
      default: return '⚪'
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Conflict Alerts</h3>
        {conflicts.length > 0 && (
          <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {conflicts.length} active
          </span>
        )}
      </div>

      {conflicts.length === 0 ? (
        <div className="text-center py-8">
          <AlertTriangle className="h-12 w-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No active conflicts</p>
        </div>
      ) : (
        <div className="space-y-3">
          {conflicts.map((conflict) => (
            <div
              key={conflict.id}
              className={`border rounded-lg p-4 ${getSeverityColor(conflict.severity)}`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{getSeverityIcon(conflict.severity)}</span>
                  <span className="font-medium">Train #{conflict.trainId}</span>
                </div>
                <span className="text-xs opacity-75">
                  {conflict.timestamp.toLocaleTimeString()}
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>{conflict.location}</span>
                </div>
                
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>ETA: {conflict.eta}</span>
                </div>
                
                <div className="mt-3 p-2 bg-white bg-opacity-50 rounded text-xs">
                  <strong>Evidence:</strong> {conflict.evidence}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
