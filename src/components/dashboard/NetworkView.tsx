import { Train } from '@/types/dashboard'
import { Train as TrainIcon } from 'lucide-react'

interface NetworkViewProps {
  trains: Train[]
}

export default function NetworkView({ trains }: NetworkViewProps) {
  const stations = [
    { id: 'A', name: 'Station A', x: 10, y: 20 },
    { id: 'B', name: 'Station B', x: 50, y: 30 },
    { id: 'C', name: 'Station C', x: 80, y: 50 },
    { id: 'D', name: 'Station D', x: 60, y: 80 },
    { id: 'E', name: 'Station E', x: 20, y: 70 }
  ]

  const tracks = [
    { from: 'A', to: 'B' },
    { from: 'B', to: 'C' },
    { from: 'C', to: 'D' },
    { from: 'D', to: 'E' },
    { from: 'E', to: 'A' }
  ]

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Network View</h3>
      
      <div className="relative w-full h-64 bg-gray-50 rounded-lg overflow-hidden">
        {/* Tracks */}
        <svg className="absolute inset-0 w-full h-full">
          {tracks.map((track, index) => {
            const fromStation = stations.find(s => s.id === track.from)!
            const toStation = stations.find(s => s.id === track.to)!
            return (
              <line
                key={index}
                x1={`${fromStation.x}%`}
                y1={`${fromStation.y}%`}
                x2={`${toStation.x}%`}
                y2={`${toStation.y}%`}
                stroke="#6B7280"
                strokeWidth="3"
                strokeDasharray="5,5"
              />
            )
          })}
        </svg>

        {/* Stations */}
        {stations.map((station) => (
          <div
            key={station.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${station.x}%`, top: `${station.y}%` }}
          >
            <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-sm"></div>
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 whitespace-nowrap">
              {station.name}
            </div>
          </div>
        ))}

        {/* Trains */}
        {trains.map((train) => (
          <div
            key={train.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
            style={{ left: `${train.position.x}%`, top: `${train.position.y}%` }}
          >
            <div className={`w-6 h-6 rounded-full border-2 border-white shadow-sm flex items-center justify-center ${
              train.status === 'on-time' ? 'bg-green-500' : 'bg-red-500'
            }`}>
              <TrainIcon className="h-3 w-3 text-white" />
            </div>
            
            {/* Train label */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-700 bg-white px-1 rounded shadow-sm">
              #{train.id}
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              <div>Train: {train.name}</div>
              <div>Section: {train.currentSection}</div>
              <div>ETA: {train.eta}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center justify-center space-x-6 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-600">On-time</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span className="text-gray-600">Delayed</span>
        </div>
      </div>
    </div>
  )
}
