import { Train, ConflictAlert, AISuggestion, KPI } from '@/types/dashboard'

export const initialTrains: Train[] = [
  {
    id: '1205',
    name: 'Express 1205',
    status: 'on-time',
    currentSection: 'A-B',
    nextStation: 'Station B',
    eta: '14:25',
    position: { x: 20, y: 30 }
  },
  {
    id: '4321',
    name: 'Freight 4321',
    status: 'on-time',
    currentSection: 'B-C',
    nextStation: 'Station C',
    eta: '14:30',
    position: { x: 60, y: 50 }
  },
  {
    id: '7890',
    name: 'Local 7890',
    status: 'on-time',
    currentSection: 'C-D',
    nextStation: 'Station D',
    eta: '14:35',
    position: { x: 80, y: 20 }
  },
  {
    id: '2468',
    name: 'Express 2468',
    status: 'on-time',
    currentSection: 'D-E',
    nextStation: 'Station E',
    eta: '14:40',
    position: { x: 40, y: 70 }
  }
]

export const initialConflicts: ConflictAlert[] = []

export const initialSuggestions: AISuggestion[] = []

export const initialKPIs: KPI[] = [
  {
    name: 'Average Delay',
    current: 9,
    baseline: 20,
    unit: 'mins',
    trend: 'down'
  },
  {
    name: 'Section Throughput',
    current: 18,
    baseline: 12,
    unit: 'trains/hr',
    trend: 'up'
  },
  {
    name: 'On-Time Performance',
    current: 90,
    baseline: 65,
    unit: '%',
    trend: 'up'
  }
]

export const generateDisruption = () => {
  const disruptedTrain = initialTrains[Math.floor(Math.random() * initialTrains.length)]
  
  const newConflicts: ConflictAlert[] = [
    {
      id: 'conflict-1',
      trainId: disruptedTrain.id,
      location: 'Loop C',
      eta: '7 min',
      severity: 'High',
      timestamp: new Date(),
      evidence: 'Headway: 3 min, Speed: 80 km/h, Block occupancy: 95%'
    },
    {
      id: 'conflict-2',
      trainId: '4321',
      location: 'Junction B',
      eta: '12 min',
      severity: 'Medium',
      timestamp: new Date(),
      evidence: 'Predicted overlap with Express 1205 at Station B'
    }
  ]

  const newSuggestions: AISuggestion[] = [
    {
      id: 'suggestion-1',
      type: 'hold',
      trainId: disruptedTrain.id,
      action: `Hold Train ${disruptedTrain.id} at Station A for 3 mins`,
      reason: 'Predicted conflict in 7 min at Loop C',
      impact: 'Avoids overlap with Freight 4321'
    },
    {
      id: 'suggestion-2',
      type: 'reroute',
      trainId: '4321',
      action: 'Reroute 4321 to Line B',
      reason: 'Alternative route available with 5 min delay',
      impact: 'Prevents conflict, maintains schedule'
    }
  ]

  return {
    disruptedTrain,
    conflicts: newConflicts,
    suggestions: newSuggestions
  }
}
