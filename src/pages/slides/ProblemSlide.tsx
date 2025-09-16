import { AlertTriangle, Clock, Users, TrendingDown } from 'lucide-react'

export default function ProblemSlide() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Problem Statement
          </h1>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <p className="text-xl text-gray-800">
              <strong>SIH 2025:</strong> "Maximizing Section Throughput Using AI-Powered Precise Train Traffic Control."
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              In Simple Words:
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, train traffic is still handled <strong>manually by controllers</strong>. With growing congestion, delays, and disruptions, decisions are <strong>reactive and inconsistent</strong>. This leads to inefficiency, longer waiting, and underutilized track capacity, affecting both passengers and freight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-red-800 mb-2">Reactive Decisions</h3>
              <p className="text-red-700">Manual control leads to inconsistent responses to disruptions</p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 text-center">
              <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-orange-800 mb-2">Growing Delays</h3>
              <p className="text-orange-700">Increasing congestion causes longer waiting times</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
              <TrendingDown className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Underutilized Capacity</h3>
              <p className="text-yellow-700">Track capacity not optimized for maximum throughput</p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Impact on Stakeholders</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-blue-600" />
                <span className="text-blue-800"><strong>Passengers:</strong> Longer wait times, unreliable journeys</span>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingDown className="h-6 w-6 text-blue-600" />
                <span className="text-blue-800"><strong>Freight:</strong> Slower delivery, increased costs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
