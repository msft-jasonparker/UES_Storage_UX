# UES Storage UX - React Dashboard

A modern React TypeScript dashboard application for Unified Endpoint Storage (UES) management, styled after Microsoft Intune's interface design.

## 🌐 Live Demo

**Deployed on GitHub Pages:** `https://YOUR_USERNAME.github.io/UES_Storage_UX/`

## Prerequisites

**Node.js is required for local development.** Please install Node.js before proceeding:

1. Visit [https://nodejs.org](https://nodejs.org)
2. Download and install the LTS version
3. Restart your terminal after installation

## Quick Start

### **Local Development:**
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### **Deploy to GitHub Pages:**
```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit"

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/UES_Storage_UX.git
git push -u origin main

# Enable GitHub Pages in repository settings
# Your app will be automatically deployed!
```

**📖 See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.**

## Features

- **📊 Dashboard**: Real-time storage metrics and system health monitoring
- **💻 Device Management**: Comprehensive device listing with search and filtering
- **📈 Reports & Analytics**: Storage trends and compliance tracking with interactive charts
- **⚙️ Settings**: System configuration and policy management
- **🎨 Modern UI**: Microsoft Fluent-inspired design with responsive layouts

## Technology Stack

- **React 18.3+** with TypeScript for type-safe development
- **Vite** for fast development and optimized builds
- **Recharts** for interactive data visualizations
- **Lucide React** for consistent iconography
- **CSS Custom Properties** for flexible theming

## Project Structure

```
src/
├── components/           # React components
│   ├── Dashboard.tsx     # Main dashboard with metrics and charts
│   ├── DeviceManagement.tsx # Device listing and management
│   ├── Reports.tsx       # Analytics and reporting
│   ├── Settings.tsx      # Configuration interface
│   ├── Sidebar.tsx       # Navigation sidebar
│   └── TopNavigation.tsx # Header navigation
├── App.tsx              # Main application component
├── App.css              # Global styles and CSS variables
├── index.css            # Base styles
└── main.tsx             # Application entry point
```

## Available Scripts

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## Design System

The application uses Microsoft Fluent-inspired design with:

- **Color Palette**: Primary blue (#0078d4) with neutral grays
- **Typography**: Segoe UI font family
- **Components**: Cards, tables, forms with consistent styling
- **Responsive**: Mobile-first design with breakpoints at 768px, 1024px, 1200px

## Development

### Adding New Components

1. Create component file in `src/components/`
2. Include corresponding CSS file for styles
3. Export from component and import in `App.tsx`
4. Update navigation in `Sidebar.tsx` if needed

### Styling Guidelines

- Use CSS Custom Properties for consistent theming
- Follow existing naming conventions
- Maintain responsive design principles
- Use semantic HTML elements

## Browser Support

- Chrome 88+
- Firefox 84+
- Safari 14+
- Edge 88+

## License

This project is for demonstration purposes. Please ensure you have appropriate licenses for any commercial use.

---

**Note**: This is a demonstration application with mock data. In a production environment, you would need to integrate with actual storage management APIs and implement proper authentication and authorization.