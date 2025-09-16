import { Outlet, Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Monitor, Train } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LayoutProps {
  presenterMode: boolean
  setPresenterMode: (mode: boolean) => void
}

export default function Layout({ presenterMode, setPresenterMode }: LayoutProps) {
  const [slidesDropdownOpen, setSlidesDropdownOpen] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSlidesDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const slides = [
    { path: '/slides/problem', title: 'Problem' },
    { path: '/slides/solution', title: 'Proposed Solution' },
    { path: '/slides/unique', title: 'Why Unique & Robust' },
    { path: '/slides/feasibility', title: 'Feasibility / Challenges / Solutions' },
    { path: '/slides/impact', title: 'Impact & Benefits' },
    { path: '/slides/roadmap', title: 'Roadmap & Future Scope' },
    { path: '/slides/datasources', title: 'Data Inputs & Integration' },
    { path: '/slides/architecture', title: 'High-Level Architecture' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {!presenterMode && (
        <nav className="bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <Link to="/" className="flex items-center space-x-2">
                  <Train className="h-8 w-8 text-blue-600" />
                  <span className="text-xl font-bold text-gray-900">RailOptiControl</span>
                </Link>
                
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setSlidesDropdownOpen(!slidesDropdownOpen)}
                    className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                    aria-expanded={slidesDropdownOpen}
                    aria-haspopup="true"
                  >
                    <span>Slides</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  
                  {slidesDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50" role="menu" aria-label="Slides navigation">
                      <div className="py-1">
                        {slides.map((slide) => (
                          <Link
                            key={slide.path}
                            to={slide.path}
                            className={cn(
                              "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                              location.pathname === slide.path && "bg-blue-50 text-blue-700"
                            )}
                            onClick={() => setSlidesDropdownOpen(false)}
                          >
                            {slide.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <Link
                  to="/dashboard"
                  className={cn(
                    "text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium",
                    location.pathname === '/dashboard' && "bg-blue-50 text-blue-700"
                  )}
                >
                  Dashboard
                </Link>
              </div>
              
              <button
                onClick={() => setPresenterMode(!presenterMode)}
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                aria-label={`Toggle presenter mode. Currently ${presenterMode ? 'on' : 'off'}`}
              >
                <Monitor className="h-4 w-4" />
                <span>Presenter Mode</span>
              </button>
            </div>
          </div>
        </nav>
      )}
      
      <main className="flex-1">
        <Outlet />
      </main>
      
      {!presenterMode && (
        <footer className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <p className="text-center text-sm text-gray-600">
              SIH 2025 — RailOptiControl
            </p>
          </div>
        </footer>
      )}
    </div>
  )
}
