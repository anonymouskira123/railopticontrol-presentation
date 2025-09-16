import { KPI } from '@/types/dashboard'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { LineChart, Line, ResponsiveContainer } from 'recharts'

interface KPISnapshotProps {
  kpis: KPI[]
}

export default function KPISnapshot({ kpis }: KPISnapshotProps) {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-green-600" />
      case 'down': return <TrendingDown className="h-4 w-4 text-red-600" />
      default: return <Minus className="h-4 w-4 text-gray-600" />
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-600'
      case 'down': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  // Mock sparkline data
  const generateSparklineData = (current: number, baseline: number) => {
    const data = []
    for (let i = 0; i < 10; i++) {
      data.push({
        value: baseline + (current - baseline) * (i / 9) + Math.random() * 2 - 1
      })
    }
    return data
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">KPI Snapshot</h3>
      
      <div className="grid grid-cols-1 gap-4">
        {kpis.map((kpi) => {
          const sparklineData = generateSparklineData(kpi.current, kpi.baseline)
          const improvement = ((kpi.current - kpi.baseline) / kpi.baseline * 100).toFixed(1)
          
          return (
            <div key={kpi.name} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{kpi.name}</h4>
                <div className="flex items-center space-x-1">
                  {getTrendIcon(kpi.trend)}
                  <span className={`text-sm font-medium ${getTrendColor(kpi.trend)}`}>
                    {improvement}%
                  </span>
                </div>
              </div>
              
              <div className="flex items-baseline space-x-2 mb-3">
                <span className="text-2xl font-bold text-gray-900">{kpi.current}</span>
                <span className="text-sm text-gray-500">{kpi.unit}</span>
                <span className="text-sm text-gray-400">
                  (was {kpi.baseline})
                </span>
              </div>
              
              <div className="h-8">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={sparklineData}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke={kpi.trend === 'up' ? '#10B981' : kpi.trend === 'down' ? '#EF4444' : '#6B7280'}
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
