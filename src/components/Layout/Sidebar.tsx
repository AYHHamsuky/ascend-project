import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  FolderKanban, 
  CalendarRange, 
  BarChart3, 
  Users, 
  Settings,
  Target
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: FolderKanban, label: "Projects", href: "/projects" },
  { icon: CalendarRange, label: "Timeline", href: "/timeline" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: Users, label: "Team", href: "/team" },
  { icon: Target, label: "Goals", href: "/goals" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-border bg-card">
      <div className="flex flex-col h-full">
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Nexus PM</h1>
              <p className="text-xs text-muted-foreground">Advanced Management</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                  "hover:bg-muted group",
                  isActive && "bg-primary text-primary-foreground hover:bg-primary/90"
                )
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon className={cn(
                    "w-5 h-5 transition-colors",
                    isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground"
                  )} />
                  <span className={cn(
                    "font-medium transition-colors",
                    isActive ? "text-primary-foreground" : "text-foreground"
                  )}>
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <div className="p-4 rounded-lg gradient-secondary text-white">
            <h3 className="font-semibold mb-1">Upgrade to Pro</h3>
            <p className="text-sm opacity-90 mb-3">Unlock advanced features</p>
            <button className="w-full py-2 px-4 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
