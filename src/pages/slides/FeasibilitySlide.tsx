import { CheckCircle, AlertTriangle, Lightbulb, Cloud, Database, Shield } from 'lucide-react'

export default function FeasibilitySlide() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Feasibility / Challenges / Solutions
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive analysis of implementation viability
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Feasibility Column */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <h2 className="text-2xl font-semibold text-green-900">Feasibility</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Lightbulb className="h-6 w-6 text-green-600" />
                  <h3 className="font-semibold text-gray-900">Proven Technology</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Uses proven <strong>AI/optimization methods</strong> already applied in transport & logistics industries.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Cloud className="h-6 w-6 text-green-600" />
                  <h3 className="font-semibold text-gray-900">Scalable Infrastructure</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Works on <strong>cloud servers</strong> with scalable architecture for growing demands.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Database className="h-6 w-6 text-green-600" />
                  <h3 className="font-semibold text-gray-900">Data Compatibility</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Compatible with existing railway data (signals, GPS, timetables) without major infrastructure changes.
                </p>
              </div>
            </div>
          </div>

          {/* Challenges Column */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="h-8 w-8 text-red-600" />
              <h2 className="text-2xl font-semibold text-red-900">Challenges</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Database className="h-6 w-6 text-red-600" />
                  <h3 className="font-semibold text-gray-900">Data Volume</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Handling <strong>large real-time data streams</strong> from multiple sources simultaneously.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Shield className="h-6 w-6 text-red-600" />
                  <h3 className="font-semibold text-gray-900">System Integration</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Integrating with <strong>legacy systems</strong> and existing railway infrastructure.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  <h3 className="font-semibold text-gray-900">Trust & Adoption</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Building <strong>trust in AI recommendations</strong> among railway controllers and operators.
                </p>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Lightbulb className="h-8 w-8 text-blue-600" />
              <h2 className="text-2xl font-semibold text-blue-900">Solutions</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Cloud className="h-6 w-6 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Hybrid Architecture</h3>
                </div>
                <p className="text-sm text-gray-700">
                  <strong>Hybrid setup</strong> (cloud + edge) for speed & reliability with local processing capabilities.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Database className="h-6 w-6 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Smooth Integration</h3>
                </div>
                <p className="text-sm text-gray-700">
                  <strong>APIs</strong> for smooth integration with existing systems and minimal disruption.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Transparent AI</h3>
                </div>
                <p className="text-sm text-gray-700">
                  <strong>Transparent dashboard</strong> + explainable AI to build controller confidence and trust.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Summary */}
        <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Implementation Strategy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">Phase 1</div>
              <div className="text-sm text-gray-600">Pilot deployment with limited scope</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">Phase 2</div>
              <div className="text-sm text-gray-600">Full integration with existing systems</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">Phase 3</div>
              <div className="text-sm text-gray-600">Network-wide deployment and optimization</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
