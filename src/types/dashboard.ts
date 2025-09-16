export interface Train {
  id: string
  name: string
  status: 'on-time' | 'delayed'
  currentSection: string
  nextStation: string
  eta: string
  position: { x: number; y: number }
}

export interface ConflictAlert {
  id: string
  trainId: string
  location: string
  eta: string
  severity: 'Low' | 'Medium' | 'High'
  timestamp: Date
  evidence: string
}

export interface AISuggestion {
  id: string
  type: 'hold' | 'reroute' | 'speed-adjust'
  trainId: string
  action: string
  reason: string
  impact: string
}

export interface KPI {
  name: string
  current: number
  baseline: number
  unit: string
  trend: 'up' | 'down' | 'stable'
}

export interface AuditLog {
  id: string
  timestamp: Date
  action: string
  trainId?: string
  details: string
}
