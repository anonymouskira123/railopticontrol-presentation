# RailOptiControl - AI-Powered Train Traffic Control

A presentation-ready web application for SIH 2025 showcasing an AI-powered train traffic control system. This lightweight React app combines informative slides with an interactive mock dashboard to demonstrate the proposed solution.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The app will be available at `http://localhost:5173`

## 📋 Features

### Presentation Slides
- **Problem Statement**: Current challenges in train traffic control
- **Proposed Solution**: AI-powered decision support system
- **Why Unique & Robust**: Key differentiators and capabilities
- **Feasibility Analysis**: Challenges, solutions, and implementation strategy
- **Impact & Benefits**: Operational, social, and economic improvements
- **Roadmap**: Phased implementation approach
- **Data Sources**: Inputs and integration approach
- **Architecture**: High-level system design

### Interactive Dashboard
- **Network View**: Real-time train positions on schematic map
- **Conflict Alerts**: AI-detected potential conflicts with severity levels
- **AI Suggestions**: Actionable recommendations with explanations
- **KPI Snapshot**: Performance metrics with sparkline charts
- **Controls**: Simulate disruptions, apply suggestions, reset state

### Presenter Features
- **Presenter Mode**: Enlarged text and hidden navigation for presentations
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Accessibility**: Keyboard navigation and proper ARIA labels

## 🎯 Demo Flow

### For Presentations:
1. Start with the **Overview** page for introduction
2. Navigate through slides using the **Slides** dropdown
3. Toggle **Presenter Mode** for clean presentation view
4. Use browser print (Ctrl+P) in Presenter Mode for PDF export

### For Dashboard Demo:
1. Go to **Dashboard** page
2. Click **"Simulate Disruption"** to create conflicts
3. Review **AI Suggestions** and click **"Accept"** or **"Reject"**
4. Watch **KPIs improve** as suggestions are applied
5. Use **"Apply All Suggestions"** for quick resolution
6. **"Reset"** to return to initial state

## 🏗️ Technical Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **TailwindCSS** for styling
- **React Router** for navigation
- **Recharts** for data visualization
- **Lucide React** for icons

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout.tsx                 # Main layout with navbar/footer
│   └── dashboard/                 # Dashboard components
│       ├── NetworkView.tsx        # Train network visualization
│       ├── ConflictAlerts.tsx     # Conflict alerts display
│       ├── AISuggestions.tsx      # AI suggestions with actions
│       ├── KPISnapshot.tsx        # Performance metrics
│       └── DashboardControls.tsx  # Control panel
├── pages/
│   ├── Overview.tsx               # Landing page
│   ├── Dashboard.tsx              # Main dashboard
│   └── slides/                    # All presentation slides
├── types/
│   └── dashboard.ts               # TypeScript interfaces
├── data/
│   └── mockData.ts                # Mock data and generators
└── lib/
    └── utils.ts                   # Utility functions
```

## 🎨 Design System

- **Colors**: Blue primary, semantic colors for status (green/red/yellow)
- **Typography**: Clean, readable fonts with proper hierarchy
- **Components**: Card-based layout with rounded corners and shadows
- **Icons**: Consistent Lucide React icon set
- **Responsive**: Mobile-first design with breakpoints

## 🔧 Customization

### Adding New Slides:
1. Create component in `src/pages/slides/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/Layout.tsx`
4. Add tile in `src/pages/Overview.tsx`

### Modifying Dashboard:
1. Update mock data in `src/data/mockData.ts`
2. Modify components in `src/components/dashboard/`
3. Adjust types in `src/types/dashboard.ts`

### Styling Changes:
1. Update Tailwind classes in components
2. Modify `src/index.css` for global styles
3. Adjust `tailwind.config.js` for theme changes

## 📊 Key Metrics Demonstrated

- **Average Delay**: 20 → 9 minutes (55% reduction)
- **Section Throughput**: 12 → 18 trains/hour (50% increase)
- **On-Time Performance**: 65% → 90% (38% improvement)

## 🚀 Deployment

The app is a static React application that can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions with Vite build
- **AWS S3**: Upload `dist` folder to S3 bucket

## 📝 Notes

- All data is mock/simulated for demonstration purposes
- No backend or real railway integrations
- Optimized for presentation and demo scenarios
- Print-friendly in Presenter Mode for PDF generation

## 🤝 Contributing

This is a presentation project for SIH 2025. For modifications or improvements, please follow the existing code structure and maintain the demo-focused approach.

---

**SIH 2025 — RailOptiControl**  
*Maximizing Section Throughput Using AI-Powered Precise Train Traffic Control*
