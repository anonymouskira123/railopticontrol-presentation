import { Link } from 'react-router-dom'
import { Train, Brain, BarChart3, Zap, Target, TrendingUp, Database, Network } from 'lucide-react'

export default function Overview() {
  const navigationTiles = [
    {
      title: 'Problem',
      description: 'Current challenges in train traffic control',
      icon: Target,
      path: '/slides/problem',
      color: 'bg-red-50 border-red-200 text-red-700 hover:bg-red-100'
    },
    {
      title: 'Proposed Solution',
      description: 'AI-powered decision support system',
      icon: Brain,
      path: '/slides/solution',
      color: 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100'
    },
    {
      title: 'Why Unique & Robust',
      description: 'Key differentiators and capabilities',
      icon: Zap,
      path: '/slides/unique',
      color: 'bg-yellow-50 border-yellow-200 text-yellow-700 hover:bg-yellow-100'
    },
    {
      title: 'Feasibility',
      description: 'Challenges and solutions',
      icon: TrendingUp,
      path: '/slides/feasibility',
      color: 'bg-green-50 border-green-200 text-green-700 hover:bg-green-100'
    },
    {
      title: 'Impact & Benefits',
      description: 'Operational, social, and economic benefits',
      icon: BarChart3,
      path: '/slides/impact',
      color: 'bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100'
    },
    {
      title: 'Roadmap',
      description: 'Implementation phases and future scope',
      icon: Network,
      path: '/slides/roadmap',
      color: 'bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100'
    },
    {
      title: 'Data Sources',
      description: 'Inputs and integration approach',
      icon: Database,
      path: '/slides/datasources',
      color: 'bg-cyan-50 border-cyan-200 text-cyan-700 hover:bg-cyan-100'
    },
    {
      title: 'Architecture',
      description: 'High-level system design',
      icon: Network,
      path: '/slides/architecture',
      color: 'bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100'
    },
    {
      title: 'Live Dashboard',
      description: 'Interactive mock dashboard',
      icon: BarChart3,
      path: '/dashboard',
      color: 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-white p-4 rounded-full shadow-lg">
              <Train className="h-16 w-16 text-blue-600" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            RailOptiControl
          </h1>
          <p className="text-2xl text-gray-600 mb-4">
            AI-Powered Train Traffic Control
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Maximizing Section Throughput Using AI-Powered Precise Train Traffic Control
          </p>
          <div className="mt-8">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full">
              SIH 2025
            </span>
          </div>
        </div>

        {/* Navigation Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {navigationTiles.map((tile) => {
            const IconComponent = tile.icon
            return (
              <Link
                key={tile.path}
                to={tile.path}
                className={`block p-6 rounded-lg border-2 transition-all duration-200 ${tile.color}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">
                      {tile.title}
                    </h3>
                    <p className="text-sm opacity-80">
                      {tile.description}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">20 → 9</div>
            <div className="text-gray-600">Average Delay (minutes)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">12 → 18</div>
            <div className="text-gray-600">Section Throughput (trains/hour)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">65% → 90%</div>
            <div className="text-gray-600">On-Time Performance</div>
          </div>
        </div>
      </div>
    </div>
  )
}
