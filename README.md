# BBrown Strategic Globalization Consulting Platform

A comprehensive visual web application for strategic globalization consulting, organizational mapping, and language consulting services.

## 🌍 Overview

This platform provides BBrown.com consultants with professional tools to:

- Map and visualize client organizational structures
- Analyze language coverage and capabilities
- Plan market expansion strategies
- Track consultation sessions and recommendations
- Generate data-driven insights for globalization decisions

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd BB

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Visualizations**: Recharts, D3.js
- **Internationalization**: i18next, next-i18next
- **State Management**: Zustand
- **Data Validation**: Zod
- **Database**: Supabase/PostgreSQL (planned)
- **Icons**: Lucide React

## 📁 Project Structure

```
BB/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── dashboard/         # Main dashboard
│   │   ├── organizations/     # Organization management
│   │   ├── languages/         # Language coverage
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   ├── components/            # React components
│   │   ├── charts/           # Chart components (Recharts)
│   │   └── visualizations/   # Custom visualizations
│   ├── types/                # TypeScript type definitions
│   │   ├── models.ts         # Data models with Zod schemas
│   │   └── index.ts          # UI and utility types
│   └── lib/                  # Utilities and helpers
│       ├── constants.ts      # App constants
│       └── utils.ts          # Helper functions
├── public/                   # Static assets
├── .github/                  # GitHub configuration
│   └── copilot-instructions.md
└── Configuration files
```

## 🎯 Key Features

### 1. Organizational Mapping

- Interactive visualization of organizational hierarchies
- Department and team structure analysis
- Employee distribution across locations
- Language capabilities per department

### 2. Language Coverage Analysis

- Comprehensive language proficiency tracking
- Heatmap visualizations of language skills
- Gap analysis for market requirements
- Support for 12+ major world languages
- RTL language support

### 3. Market Expansion Planning

- Market opportunity scoring
- Multi-factor analysis (language readiness, market size, etc.)
- Timeline and milestone tracking
- Strategic recommendations

### 4. Consultation Management

- Session scheduling and tracking
- Client notes and documentation
- Recommendation tracking with priority levels
- Historical consultation records

## 📊 Data Models

The platform uses strongly-typed data models with Zod validation:

- **Organization**: Company information, headquarters, industry
- **Department**: Organizational units with language capabilities
- **Employee**: Individual profiles with language skills
- **Language**: Language metadata and global speaker counts
- **LanguageCoverage**: Organization-specific language proficiency data
- **Market**: Target market information and metrics
- **MarketExpansionPlan**: Expansion strategies and timelines
- **ConsultationSession**: Consulting session records

## 🎨 Design System

### Colors

- **Primary**: Blue shades for main actions and branding
- **Consulting**: Professional dark/medium/light grays
- **Status**: Green (success), Yellow (warning), Red (critical), Purple (info)

### Components

- Responsive grid layouts
- Professional card-based UI
- Interactive charts and visualizations
- Accessible forms and inputs

## 🌐 Internationalization

The platform supports multiple languages:

- English, Spanish, French, German
- Chinese, Japanese, Korean
- Arabic, Portuguese, Russian, Hindi, Italian

RTL (Right-to-Left) support is built-in for Arabic and other RTL languages.

## 📈 Visualization Components

### Charts

- **LanguageCoverageChart**: Bar charts for language distribution
- **MarketDistributionChart**: Pie charts for market analysis

### Custom Visualizations

- **OrganizationMap**: Interactive org chart tree
- **LanguageHeatmap**: Department × Language proficiency matrix
- **MarketOpportunityMatrix**: Ranked market opportunities with factor breakdowns

## 🔧 Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type checking
npm run type-check
```

### Environment Variables

Create a `.env.local` file:

```env
# Supabase (when ready to integrate)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# Optional: Analytics, monitoring, etc.
```

## 🚧 Roadmap

### Phase 1: Core Features (Current)

- [x] Project setup and scaffolding
- [x] Data models and TypeScript types
- [x] Basic UI pages and navigation
- [x] Visualization components
- [ ] Database integration (Supabase)
- [ ] API routes for data operations

### Phase 2: Advanced Features

- [ ] User authentication
- [ ] Real-time collaboration
- [ ] PDF report generation
- [ ] Advanced analytics dashboard
- [ ] Integration with external data sources

### Phase 3: Enhanced Consulting Tools

- [ ] AI-powered recommendations
- [ ] Automated gap analysis
- [ ] Market research integration
- [ ] Custom reporting templates
- [ ] Client portal

## 🤝 Contributing

This is a proprietary project for BBrown.com. Internal contributions should follow:

1. Create feature branches from `main`
2. Follow TypeScript strict mode guidelines
3. Write descriptive commit messages
4. Test changes locally before pushing
5. Keep components modular and reusable

## 📝 Code Style

- Use TypeScript strict mode
- Follow Next.js best practices
- Component-driven architecture
- Prefer functional components with hooks
- Use TailwindCSS utility classes
- Maintain accessibility standards (WCAG 2.1 AA)

## 🔒 Security & Privacy

- Client data is treated as confidential
- No sensitive data in version control
- Environment variables for secrets
- Regular dependency updates
- Security audits before major releases

## 📞 Support

For questions or issues:

- Internal: Contact BBrown development team
- Documentation: See `/docs` folder (when added)

## 📄 License

Proprietary - BBrown.com
All rights reserved.

---

Built with ❤️ for strategic globalization consulting excellence.
