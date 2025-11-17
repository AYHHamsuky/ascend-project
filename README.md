# Nexus PM - Advanced Project Management System

A modern, robust project management platform that combines powerful functionality with an exceptional user experience. Built with cutting-edge technologies to deliver real-time collaboration, advanced analytics, and intuitive project tracking.

## Project info

**URL**: https://lovable.dev/projects/fb543a53-ee36-4d05-9cd4-fc7044db6294

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/fb543a53-ee36-4d05-9cd4-fc7044db6294) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## Features

- **Multi-View Dashboard**: Comprehensive overview with real-time metrics and project status
- **Advanced Project Cards**: Visual progress tracking with team assignments and risk indicators
- **Resource Allocation**: Interactive charts showing team capacity and workload distribution
- **Activity Feed**: Real-time updates on project activities and team collaboration
- **Smart Navigation**: Quick access to Projects, Timeline, Analytics, Team, and Goals
- **Modern Design System**: Beautiful gradient-based UI with smooth animations and transitions
- **Responsive Layout**: Fully responsive design that works on all devices

## Tech Stack

This project is built with:

- **Vite** - Lightning-fast build tool
- **TypeScript** - Type-safe development
- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Customizable component library
- **Recharts** - Data visualization
- **Lucide React** - Beautiful icon set
- **React Router** - Client-side routing

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/fb543a53-ee36-4d05-9cd4-fc7044db6294) and click on Share -> Publish.

## Project Structure

```
src/
├── components/
│   ├── Layout/          # Dashboard layout components
│   │   ├── DashboardLayout.tsx
│   │   ├── Sidebar.tsx
│   │   └── Header.tsx
│   ├── Dashboard/       # Dashboard-specific components
│   │   ├── StatsCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ActivityFeed.tsx
│   │   └── ResourceChart.tsx
│   └── ui/             # Reusable UI components (shadcn)
├── pages/              # Route pages
│   ├── Index.tsx       # Main dashboard
│   ├── Projects.tsx
│   ├── Timeline.tsx
│   ├── Analytics.tsx
│   ├── Team.tsx
│   ├── Goals.tsx
│   └── Settings.tsx
└── lib/               # Utilities and helpers
```

## Design System

The project uses a comprehensive design system defined in `src/index.css` and `tailwind.config.ts`:

- **Colors**: Ocean-blue primary, cyan secondary, coral accent
- **Gradients**: Multi-tone sophisticated backgrounds
- **Animations**: Smooth fade-in, slide-up, and scale transitions
- **Components**: Enhanced shadcn components with custom variants

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Next Steps

- Add Lovable Cloud for authentication and database functionality
- Implement drag-and-drop Kanban boards
- Build interactive Gantt timeline views
- Add real-time collaboration features
- Create advanced analytics dashboards
