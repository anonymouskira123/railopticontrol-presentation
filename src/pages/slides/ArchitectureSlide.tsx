import { Layers, Cpu, Brain, Monitor, Shield, Database, Wifi, Server, Cloud } from 'lucide-react'

export default function ArchitectureSlide() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            High-Level Architecture
          </h1>
          <p className="text-xl text-gray-600">
            Scalable, secure, and intelligent system design
          </p>
        </div>

        {/* Architecture Layers */}
        <div className="space-y-8 mb-12">
          {/* Edge/Station Layer */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Layers className="h-8 w-8 text-blue-600" />
              <h2 className="text-2xl font-semibold text-blue-900">Edge/Station Layer</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Wifi className="h-6 w-6 text-blue-600" />
                    <h3 className="font-semibold text-gray-900">Local Adapters</h3>
                  </div>
                  <p className="text-sm text-gray-600">Direct integration with signals, GPS, and local sensors</p>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Database className="h-6 w-6 text-blue-600" />
                    <h3 className="font-semibold text-gray-900">Data Buffering</h3>
                  </div>
                  <p className="text-sm text-gray-600">Local storage for intermittent connectivity</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Cpu className="h-6 w-6 text-blue-600" />
                    <h3 className="font-semibold text-gray-900">Edge Processing</h3>
                  </div>
                  <p className="text-sm text-gray-600">Critical decisions made locally for speed</p>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Shield className="h-6 w-6 text-blue-600" />
                    <h3 className="font-semibold text-gray-900">Offline Resilience</h3>
                  </div>
                  <p className="text-sm text-gray-600">Continues operation during network outages</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cloud Layer */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Cloud className="h-8 w-8 text-green-600" />
              <h2 className="text-2xl font-semibold text-green-900">Cloud Layer</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Server className="h-6 w-6 text-green-600" />
                  <h3 className="font-semibold text-gray-900">Stream Processing</h3>
                </div>
                <p className="text-sm text-gray-600">Real-time data processing and aggregation</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Brain className="h-6 w-6 text-green-600" />
                  <h3 className="font-semibold text-gray-900">Model Serving</h3>
                </div>
                <p className="text-sm text-gray-600">AI model deployment and inference</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Cpu className="h-6 w-6 text-green-600" />
                  <h3 className="font-semibold text-gray-900">Optimizer</h3>
                </div>
                <p className="text-sm text-gray-600">Schedule optimization algorithms</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Database className="h-6 w-6 text-green-600" />
                  <h3 className="font-semibold text-gray-900">Metrics Store</h3>
                </div>
                <p className="text-sm text-gray-600">Performance data and analytics</p>
              </div>
            </div>
          </div>

          {/* AI/Optimization Layer */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Brain className="h-8 w-8 text-purple-600" />
              <h2 className="text-2xl font-semibold text-purple-900">AI/Optimization</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Brain className="h-6 w-6 text-purple-600" />
                  <h3 className="font-semibold text-gray-900">Conflict Prediction</h3>
                </div>
                <p className="text-sm text-gray-600">ML models to predict potential conflicts</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Cpu className="h-6 w-6 text-purple-600" />
                  <h3 className="font-semibold text-gray-900">MILP/Heuristics</h3>
                </div>
                <p className="text-sm text-gray-600">Optimization algorithms (mock in app)</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Shield className="h-6 w-6 text-purple-600" />
                  <h3 className="font-semibold text-gray-900">Policy Selection</h3>
                </div>
                <p className="text-sm text-gray-600">Rule-based decision making</p>
              </div>
            </div>
          </div>

          {/* Control UI Layer */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Monitor className="h-8 w-8 text-orange-600" />
              <h2 className="text-2xl font-semibold text-orange-900">Control UI</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Dashboard</h3>
                <p className="text-sm text-gray-600">Real-time system overview</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Conflict Alerts</h3>
                <p className="text-sm text-gray-600">Immediate notifications</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Suggestions</h3>
                <p className="text-sm text-gray-600">AI recommendations</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Explainability</h3>
                <p className="text-sm text-gray-600">Transparent AI decisions</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Audit Log</h3>
                <p className="text-sm text-gray-600">Action tracking</p>
              </div>
            </div>
          </div>
        </div>

        {/* Security Layer */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="h-8 w-8 text-red-600" />
            <h2 className="text-2xl font-semibold text-red-900">Security</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Role-based Access</h3>
                <p className="text-sm text-gray-600">Granular permissions for different user types</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Encryption in Transit</h3>
                <p className="text-sm text-gray-600">TLS/SSL for all communications</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Encryption at Rest</h3>
                <p className="text-sm text-gray-600">AES-256 for stored data</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Audit & Monitoring</h3>
                <p className="text-sm text-gray-600">Comprehensive logging and alerting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
