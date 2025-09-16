import { Zap, Shield, TrendingUp, Eye, Network, Scale } from 'lucide-react'

export default function UniqueSlide() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Why Unique & Robust
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive AI platform combining prediction, optimization, and simulation
          </p>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
                <h3 className="text-xl font-semibold text-blue-900">Integrated Platform</h3>
              </div>
              <p className="text-blue-800">
                Combines <strong>prediction, optimization, and simulation</strong> in one unified platform for comprehensive traffic control.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-8 w-8 text-green-600" />
                <h3 className="text-xl font-semibold text-green-900">Adaptive Resilience</h3>
              </div>
              <p className="text-green-800">
                Adapts to <strong>disruptions</strong> including failures, delays, and maintenance blocks with intelligent rerouting.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Network className="h-8 w-8 text-purple-600" />
                <h3 className="text-xl font-semibold text-purple-900">Scalable Architecture</h3>
              </div>
              <p className="text-purple-800">
                Scales across <strong>sections, divisions, and zones</strong> for comprehensive network-wide optimization.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="h-8 w-8 text-orange-600" />
                <h3 className="text-xl font-semibold text-orange-900">Explainable AI</h3>
              </div>
              <p className="text-orange-800">
                Prioritizes <strong>safety, throughput, and on-time performance</strong> with transparent, explainable AI decisions.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Key Differentiators</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-indigo-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Real-time Optimization</h4>
                <p className="text-sm text-gray-600">Continuous schedule optimization based on live conditions</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Scale className="h-8 w-8 text-indigo-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Multi-objective Balance</h4>
                <p className="text-sm text-gray-600">Balances safety, efficiency, and passenger satisfaction</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Network className="h-8 w-8 text-indigo-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Network-wide View</h4>
                <p className="text-sm text-gray-600">Considers entire network impact, not just local sections</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">Robustness Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-yellow-800">
                <li>• <strong>Fault tolerance:</strong> Continues operation during system failures</li>
                <li>• <strong>Data validation:</strong> Handles incomplete or delayed data streams</li>
                <li>• <strong>Fallback mechanisms:</strong> Graceful degradation to manual control</li>
              </ul>
              <ul className="space-y-2 text-yellow-800">
                <li>• <strong>Continuous learning:</strong> Improves with operational experience</li>
                <li>• <strong>Edge computing:</strong> Local processing for critical decisions</li>
                <li>• <strong>Security:</strong> Role-based access and encrypted communications</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
