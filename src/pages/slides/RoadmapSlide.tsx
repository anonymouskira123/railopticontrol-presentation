import { MapPin, Calendar, Target, Rocket, Globe, Brain, Shield } from 'lucide-react'

export default function RoadmapSlide() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Roadmap & Future Scope
          </h1>
          <p className="text-xl text-gray-600">
            Phased implementation approach with long-term vision
          </p>
        </div>

        {/* Implementation Phases */}
        <div className="space-y-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                <h2 className="text-xl font-semibold text-blue-900">Phase 1</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Data Integration</div>
                    <div className="text-sm text-gray-600">Signals, GPS, timetables</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Target className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Basic Prediction Dashboard</div>
                    <div className="text-sm text-gray-600">Initial conflict detection</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-blue-200">
                <div className="text-sm text-blue-700">
                  <strong>Timeline:</strong> 6-12 months
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                <h2 className="text-xl font-semibold text-green-900">Phase 2</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Brain className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Real-time Conflict Detection</div>
                    <div className="text-sm text-gray-600">Advanced prediction algorithms</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Target className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Schedule Optimization</div>
                    <div className="text-sm text-gray-600">AI-powered recommendations</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Controller UI</div>
                    <div className="text-sm text-gray-600">User-friendly interface</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-green-200">
                <div className="text-sm text-green-700">
                  <strong>Timeline:</strong> 12-18 months
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                <h2 className="text-xl font-semibold text-purple-900">Phase 3</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Brain className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Simulation ("What-if")</div>
                    <div className="text-sm text-gray-600">Scenario planning capabilities</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Target className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Explainability Layer</div>
                    <div className="text-sm text-gray-600">Transparent AI decisions</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Production KPIs</div>
                    <div className="text-sm text-gray-600">Real-world performance metrics</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-purple-200">
                <div className="text-sm text-purple-700">
                  <strong>Timeline:</strong> 18-24 months
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Scope */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-8">
          <div className="flex items-center space-x-3 mb-8">
            <Rocket className="h-8 w-8 text-indigo-600" />
            <h2 className="text-2xl font-semibold text-indigo-900">Future Scope</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-4 text-center">
              <Globe className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Multi-section Coordination</h3>
              <p className="text-sm text-gray-600">Cross-regional optimization</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 text-center">
              <Rocket className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Nationwide Scaling</h3>
              <p className="text-sm text-gray-600">Country-wide deployment</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 text-center">
              <Brain className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Continuous Learning</h3>
              <p className="text-sm text-gray-600">Self-improving algorithms</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 text-center">
              <Shield className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Offline Edge Resilience</h3>
              <p className="text-sm text-gray-600">Local processing capabilities</p>
            </div>
          </div>
        </div>

        {/* Technology Evolution */}
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Technology Evolution</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600 mb-2">AI/ML</div>
              <div className="text-sm text-gray-600">Advanced prediction models</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">IoT Integration</div>
              <div className="text-sm text-gray-600">Sensor network expansion</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600 mb-2">5G Connectivity</div>
              <div className="text-sm text-gray-600">Ultra-low latency communication</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
