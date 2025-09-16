import { useState, useEffect } from 'react'
import { Train, ConflictAlert, AISuggestion, KPI, AuditLog } from '@/types/dashboard'
import { initialTrains, initialConflicts, initialSuggestions, initialKPIs, generateDisruption } from '@/data/mockData'
import NetworkView from '@/components/dashboard/NetworkView'
import ConflictAlerts from '@/components/dashboard/ConflictAlerts'
import AISuggestions from '@/components/dashboard/AISuggestions'
import KPISnapshot from '@/components/dashboard/KPISnapshot'
import DashboardControls from '@/components/dashboard/DashboardControls'

export default function Dashboard() {
  const [trains, setTrains] = useState<Train[]>(initialTrains)
  const [conflicts, setConflicts] = useState<ConflictAlert[]>(initialConflicts)
  const [suggestions, setSuggestions] = useState<AISuggestion[]>(initialSuggestions)
  const [kpis, setKpis] = useState<KPI[]>(initialKPIs)
  const [auditLog, setAuditLog] = useState<AuditLog[]>([])
  const [speed, setSpeed] = useState(5)

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTrains(prevTrains => 
        prevTrains.map(train => ({
          ...train,
          position: {
            x: Math.max(10, Math.min(90, train.position.x + (Math.random() - 0.5) * 2)),
            y: Math.max(10, Math.min(90, train.position.y + (Math.random() - 0.5) * 2))
          }
        }))
      )
    }, 1000 / speed)

    return () => clearInterval(interval)
  }, [speed])

  const handleSimulateDisruption = () => {
    const disruption = generateDisruption()
    
    // Update train status
    setTrains(prevTrains =>
      prevTrains.map(train =>
        train.id === disruption.disruptedTrain.id
          ? { ...train, status: 'delayed' as const }
          : train
      )
    )
    
    // Add conflicts and suggestions
    setConflicts(disruption.conflicts)
    setSuggestions(disruption.suggestions)
    
    // Update KPIs slightly
    setKpis(prevKpis =>
      prevKpis.map(kpi => ({
        ...kpi,
        current: kpi.current + (Math.random() - 0.5) * 2
      }))
    )
    
    // Add to audit log
    const newLog: AuditLog = {
      id: `log-${Date.now()}`,
      timestamp: new Date(),
      action: 'Disruption simulated',
      trainId: disruption.disruptedTrain.id,
      details: 'System generated test disruption'
    }
    setAuditLog(prev => [...prev, newLog])
  }

  const handleAcceptSuggestion = (suggestionId: string) => {
    const suggestion = suggestions.find(s => s.id === suggestionId)
    if (!suggestion) return

    // Remove the suggestion
    setSuggestions(prev => prev.filter(s => s.id !== suggestionId))
    
    // Remove related conflicts
    setConflicts(prev => prev.filter(c => c.trainId !== suggestion.trainId))
    
    // Update train status if it was delayed
    setTrains(prevTrains =>
      prevTrains.map(train =>
        train.id === suggestion.trainId
          ? { ...train, status: 'on-time' as const }
          : train
      )
    )
    
    // Improve KPIs slightly
    setKpis(prevKpis =>
      prevKpis.map(kpi => ({
        ...kpi,
        current: Math.min(kpi.current + 1, kpi.current * 1.1)
      }))
    )
    
    // Add to audit log
    const newLog: AuditLog = {
      id: `log-${Date.now()}`,
      timestamp: new Date(),
      action: 'Suggestion accepted',
      trainId: suggestion.trainId,
      details: suggestion.action
    }
    setAuditLog(prev => [...prev, newLog])
  }

  const handleRejectSuggestion = (suggestionId: string) => {
    const suggestion = suggestions.find(s => s.id === suggestionId)
    if (!suggestion) return

    // Remove the suggestion
    setSuggestions(prev => prev.filter(s => s.id !== suggestionId))
    
    // Add to audit log
    const newLog: AuditLog = {
      id: `log-${Date.now()}`,
      timestamp: new Date(),
      action: 'Suggestion rejected',
      trainId: suggestion.trainId,
      details: suggestion.action
    }
    setAuditLog(prev => [...prev, newLog])
  }

  const handleApplyAllSuggestions = () => {
    suggestions.forEach(suggestion => {
      handleAcceptSuggestion(suggestion.id)
    })
  }

  const handleReset = () => {
    setTrains(initialTrains)
    setConflicts(initialConflicts)
    setSuggestions(initialSuggestions)
    setKpis(initialKPIs)
    setAuditLog([])
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">RailOptiControl Dashboard</h1>
          <p className="text-gray-600">AI-Powered Train Traffic Control System</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* Network View */}
            <NetworkView trains={trains} />
            
            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ConflictAlerts conflicts={conflicts} />
              <AISuggestions
                suggestions={suggestions}
                onAccept={handleAcceptSuggestion}
                onReject={handleRejectSuggestion}
                auditLog={auditLog}
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <KPISnapshot kpis={kpis} />
            <DashboardControls
              onSimulateDisruption={handleSimulateDisruption}
              onApplyAllSuggestions={handleApplyAllSuggestions}
              onReset={handleReset}
              speed={speed}
              onSpeedChange={setSpeed}
              hasSuggestions={suggestions.length > 0}
            />
          </div>
        </div>

        {/* Status Bar */}
        <div className="mt-8 bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">System Online</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Active Trains:</span>
                <span className="text-sm font-medium">{trains.length}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Active Conflicts:</span>
                <span className="text-sm font-medium">{conflicts.length}</span>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
