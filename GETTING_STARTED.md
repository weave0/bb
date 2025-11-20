# Getting Started with BBrown Globalization Platform

## Quick Start Guide

### 1. Installation

The project has been scaffolded with all necessary files and structure. To complete setup:

```bash
# Install dependencies
npm install

# If TailwindCSS installation issues persist, manually install:
npm install -D tailwindcss@3.4.1 postcss@8.4.31 autoprefixer@10.4.16 --legacy-peer-deps
```

### 2. Development Server

```bash
# Start the development server
npm run dev
```

Visit `http://localhost:3000` to see the application.

### 3. Project Structure

```
BB/
├── src/
│   ├── app/                # Next.js pages
│   │   ├── dashboard/     # Dashboard page
│   │   ├── organizations/ # Organizations listing
│   │   ├── languages/     # Language coverage
│   │   └── api/           # API routes
│   ├── components/        # Reusable React components
│   │   ├── charts/       # Recharts visualizations
│   │   └── visualizations/ # Custom viz components
│   ├── types/            # TypeScript definitions
│   └── lib/              # Utilities & sample data
└── Configuration files
```

### 4. Key Features Implemented

✅ **Project scaffolding** with Next.js 14+ and TypeScript  
✅ **Data models** with Zod validation schemas  
✅ **Type-safe components** for charts and visualizations  
✅ **Sample data** for development and testing  
✅ **API routes** for organizations and dashboard data  
✅ **Professional UI** with TailwindCSS (pending full install)  
✅ **Multi-language support** configuration  
✅ **Documentation** - README, CONTRIBUTING guide

### 5. Next Steps

1. **Complete TailwindCSS setup** if not already done
2. **Run development server**: `npm run dev`
3. **Set up Supabase** for database (optional)
   - Create account at supabase.com
   - Add credentials to `.env.local`
4. **Customize for BBrown** - add real client data
5. **Deploy** to Vercel or your preferred platform

### 6. Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Create production build
npm run start      # Start production server
npm run lint       # Run ESLint
npm run type-check # TypeScript checking
```

### 7. VS Code Integration

The project includes:

- `.vscode/tasks.json` - Build and dev tasks
- `.vscode/settings.json` - Editor configuration
- `.vscode/extensions.json` - Recommended extensions

Press `Ctrl+Shift+B` in VS Code to run the dev task.

### 8. Troubleshooting

**If TailwindCSS isn't installing:**

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

**If builds fail:**

```bash
# Check for TypeScript errors
npm run type-check

# Clear Next.js cache
rm -rf .next
npm run dev
```

### 9. Support

For issues or questions about this platform, refer to:

- `README.md` - Complete project documentation
- `CONTRIBUTING.md` - Development guidelines
- `.github/copilot-instructions.md` - AI assistant context

---

**Ready to consult!** 🌍

The platform is set up for BBrown's strategic globalization consulting work with tools for organizational mapping, language coverage analysis, and market expansion planning.
