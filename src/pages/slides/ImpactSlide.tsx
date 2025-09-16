import { TrendingUp, Clock, Users, DollarSign, BarChart3, Heart, Truck } from 'lucide-react'

export default function ImpactSlide() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Impact & Benefits
          </h1>
          <p className="text-xl text-gray-600">
            Measurable improvements across operational, social, and economic dimensions
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Impact (Measurable)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-red-600 mb-2">20 → 9</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Average Delay</div>
                <div className="text-sm text-gray-600">minutes</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <BarChart3 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-green-600 mb-2">12 → 18</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Section Throughput</div>
                <div className="text-sm text-gray-600">trains/hour</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-purple-600 mb-2">65% → 90%</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">On-Time Performance</div>
                <div className="text-sm text-gray-600">percentage</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Operational Benefits */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-6">
              <BarChart3 className="h-8 w-8 text-blue-600" />
              <h2 className="text-2xl font-semibold text-blue-900">Operational</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">Platform Occupancy</span>
                  <span className="text-sm text-gray-600">18 → 10 mins</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '56%'}}></div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">Freight Turnaround</span>
                  <span className="text-sm text-gray-600">14 → 9 hrs</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '64%'}}></div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">Smoother Operations</span>
                  <span className="text-sm text-gray-600">Reduced conflicts</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Benefits */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Users className="h-8 w-8 text-green-600" />
              <h2 className="text-2xl font-semibold text-green-900">Social</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                <Heart className="h-6 w-6 text-green-600" />
                <div>
                  <div className="font-medium text-gray-900">Reliable Journeys</div>
                  <div className="text-sm text-gray-600">Consistent on-time performance</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                <Clock className="h-6 w-6 text-green-600" />
                <div>
                  <div className="font-medium text-gray-900">Less Waiting</div>
                  <div className="text-sm text-gray-600">Reduced passenger delays</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
                <div>
                  <div className="font-medium text-gray-900">Improved Comfort</div>
                  <div className="text-sm text-gray-600">Better travel experience</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                <Heart className="h-6 w-6 text-green-600" />
                <div>
                  <div className="font-medium text-gray-900">Enhanced Safety</div>
                  <div className="text-sm text-gray-600">Proactive conflict prevention</div>
                </div>
              </div>
            </div>
          </div>

          {/* Economic Benefits */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-6">
              <DollarSign className="h-8 w-8 text-purple-600" />
              <h2 className="text-2xl font-semibold text-purple-900">Economic</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                <Truck className="h-6 w-6 text-purple-600" />
                <div>
                  <div className="font-medium text-gray-900">Faster Freight Flow</div>
                  <div className="text-sm text-gray-600">Reduced transit times</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                <BarChart3 className="h-6 w-6 text-purple-600" />
                <div>
                  <div className="font-medium text-gray-900">Better Capacity Utilization</div>
                  <div className="text-sm text-gray-600">Optimized track usage</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                <DollarSign className="h-6 w-6 text-purple-600" />
                <div>
                  <div className="font-medium text-gray-900">Cost Savings</div>
                  <div className="text-sm text-gray-600">For Railways operations</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                <TrendingUp className="h-6 w-6 text-purple-600" />
                <div>
                  <div className="font-medium text-gray-900">Revenue Growth</div>
                  <div className="text-sm text-gray-600">Increased throughput capacity</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Summary */}
        <div className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Return on Investment</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-600 mb-2">55%</div>
              <div className="text-sm text-gray-600">Delay Reduction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600 mb-2">50%</div>
              <div className="text-sm text-gray-600">Throughput Increase</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-600 mb-2">38%</div>
              <div className="text-sm text-gray-600">Performance Improvement</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600 mb-2">25%</div>
              <div className="text-sm text-gray-600">Cost Savings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
