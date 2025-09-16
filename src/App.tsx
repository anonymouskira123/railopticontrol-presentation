import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Layout from './components/Layout'
import Overview from './pages/Overview'
import ProblemSlide from './pages/slides/ProblemSlide'
import SolutionSlide from './pages/slides/SolutionSlide'
import UniqueSlide from './pages/slides/UniqueSlide'
import FeasibilitySlide from './pages/slides/FeasibilitySlide'
import ImpactSlide from './pages/slides/ImpactSlide'
import RoadmapSlide from './pages/slides/RoadmapSlide'
import DataSourcesSlide from './pages/slides/DataSourcesSlide'
import ArchitectureSlide from './pages/slides/ArchitectureSlide'
import Dashboard from './pages/Dashboard'

function App() {
  const [presenterMode, setPresenterMode] = useState(false)

  return (
    <div className={presenterMode ? 'presenter-mode' : ''}>
      <Routes>
        <Route path="/" element={<Layout presenterMode={presenterMode} setPresenterMode={setPresenterMode} />}>
          <Route index element={<Overview />} />
          <Route path="slides/problem" element={<ProblemSlide />} />
          <Route path="slides/solution" element={<SolutionSlide />} />
          <Route path="slides/unique" element={<UniqueSlide />} />
          <Route path="slides/feasibility" element={<FeasibilitySlide />} />
          <Route path="slides/impact" element={<ImpactSlide />} />
          <Route path="slides/roadmap" element={<RoadmapSlide />} />
          <Route path="slides/datasources" element={<DataSourcesSlide />} />
          <Route path="slides/architecture" element={<ArchitectureSlide />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
