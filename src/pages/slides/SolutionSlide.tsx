import { Brain, Clock, Eye, Shield } from 'lucide-react'

export default function SolutionSlide() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Proposed Solution
          </h1>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <p className="text-xl text-gray-800">
              An <strong>AI-powered decision-support system</strong> that ingests real-time train data, signals, GPS, timetables, and weather, then predicts conflicts, optimizes schedules, and recommends best actions to controllers—<strong>in minutes, not hours</strong>.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Key Principle:
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The <strong>controller remains in charge</strong>; AI provides <strong>transparent, explainable suggestions</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Data Inputs</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Real-time train positions (GPS)</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Signal status and track occupancy</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>Timetables and schedules</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span>Weather conditions</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Incident and maintenance logs</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">AI Capabilities</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Brain className="h-5 w-5 text-blue-600" />
                  <span>Predict conflicts before they occur</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span>Optimize schedules in real-time</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Eye className="h-5 w-5 text-purple-600" />
                  <span>Provide explainable recommendations</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Shield className="h-5 w-5 text-orange-600" />
                  <span>Maintain safety as top priority</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">System Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">Minutes</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Proactive</div>
                <div className="text-sm text-gray-600">Decision Making</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">Transparent</div>
                <div className="text-sm text-gray-600">AI Explanations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
