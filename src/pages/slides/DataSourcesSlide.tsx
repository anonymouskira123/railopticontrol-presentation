import { Database, Wifi, CheckCircle, Shield, Cloud, Server } from 'lucide-react'

export default function DataSourcesSlide() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Data Inputs & Integration
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive data ecosystem for intelligent traffic control
          </p>
        </div>

        {/* Data Sources */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-12">
          <div className="flex items-center space-x-3 mb-8">
            <Database className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl font-semibold text-blue-900">Data Sources</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <h3 className="font-semibold text-gray-900">Signals</h3>
              </div>
              <p className="text-sm text-gray-600">Track occupancy, signal states, block status</p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <h3 className="font-semibold text-gray-900">GPS/Train Positions</h3>
              </div>
              <p className="text-sm text-gray-600">Real-time location, speed, direction</p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <h3 className="font-semibold text-gray-900">Timetables</h3>
              </div>
              <p className="text-sm text-gray-600">Scheduled arrivals, departures, routes</p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <h3 className="font-semibold text-gray-900">Weather</h3>
              </div>
              <p className="text-sm text-gray-600">Conditions, visibility, track conditions</p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <h3 className="font-semibold text-gray-900">Incident Logs</h3>
              </div>
              <p className="text-sm text-gray-600">Accidents, breakdowns, emergencies</p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <h3 className="font-semibold text-gray-900">Maintenance Logs</h3>
              </div>
              <p className="text-sm text-gray-600">Track work, equipment status, schedules</p>
            </div>
          </div>
        </div>

        {/* Data Processing Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Ingestion */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Wifi className="h-8 w-8 text-green-600" />
              <h2 className="text-xl font-semibold text-green-900">Ingestion</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Stream Processing</h3>
                <p className="text-sm text-gray-600">Real-time data ingestion (mock in app)</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Standardized Formats</h3>
                <p className="text-sm text-gray-600">JSON, XML, Protocol Buffers</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">API Endpoints</h3>
                <p className="text-sm text-gray-600">RESTful, GraphQL, WebSocket</p>
              </div>
            </div>
          </div>

          {/* Quality */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-6">
              <CheckCircle className="h-8 w-8 text-yellow-600" />
              <h2 className="text-xl font-semibold text-yellow-900">Quality</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Deduplication</h3>
                <p className="text-sm text-gray-600">Remove duplicate records</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Late-arrival Handling</h3>
                <p className="text-sm text-gray-600">Manage delayed data streams</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Time Sync</h3>
                <p className="text-sm text-gray-600">Synchronize timestamps across sources</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Validation</h3>
                <p className="text-sm text-gray-600">Data integrity checks</p>
              </div>
            </div>
          </div>

          {/* Interoperability */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-8 w-8 text-purple-600" />
              <h2 className="text-xl font-semibold text-purple-900">Interoperability</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">CTC/TMS APIs</h3>
                <p className="text-sm text-gray-600">Existing control systems</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Reporting Tools</h3>
                <p className="text-sm text-gray-600">Business intelligence integration</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Legacy Systems</h3>
                <p className="text-sm text-gray-600">Backward compatibility</p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Flow Architecture */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Data Flow Architecture</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Database className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Data Sources</h3>
              <p className="text-sm text-gray-600">Multiple input streams</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Cloud className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Stream Processing</h3>
              <p className="text-sm text-gray-600">Real-time ingestion</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Server className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AI Processing</h3>
              <p className="text-sm text-gray-600">Analysis & prediction</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Output APIs</h3>
              <p className="text-sm text-gray-600">Recommendations & alerts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
