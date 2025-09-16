import { Play, RotateCcw, Zap, Gauge } from 'lucide-react'

interface DashboardControlsProps {
  onSimulateDisruption: () => void
  onApplyAllSuggestions: () => void
  onReset: () => void
  speed: number
  onSpeedChange: (speed: number) => void
  hasSuggestions: boolean
}

export default function DashboardControls({
  onSimulateDisruption,
  onApplyAllSuggestions,
  onReset,
  speed,
  onSpeedChange,
  hasSuggestions
}: DashboardControlsProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Controls</h3>
      
      <div className="space-y-4">
        <button
          onClick={onSimulateDisruption}
          className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          <Zap className="h-4 w-4" />
          <span>Simulate Disruption</span>
        </button>
        
        <button
          onClick={onApplyAllSuggestions}
          disabled={!hasSuggestions}
          className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
            hasSuggestions
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <Play className="h-4 w-4" />
          <span>Apply All Suggestions</span>
        </button>
        
        <button
          onClick={onReset}
          className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          <RotateCcw className="h-4 w-4" />
          <span>Reset</span>
        </button>
        
        <div className="pt-4 border-t border-gray-200">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Gauge className="h-4 w-4 inline mr-1" />
            Simulation Speed
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={speed}
            onChange={(e) => onSpeedChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Slow</span>
            <span>Fast</span>
          </div>
        </div>
      </div>
    </div>
  )
}
