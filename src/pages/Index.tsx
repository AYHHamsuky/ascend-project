import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { StatsCard } from "@/components/Dashboard/StatsCard";
import { ProjectCard } from "@/components/Dashboard/ProjectCard";
import { ActivityFeed } from "@/components/Dashboard/ActivityFeed";
import { ResourceChart } from "@/components/Dashboard/ResourceChart";
import { FolderKanban, CheckCircle2, AlertTriangle, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, John</h1>
          <p className="text-muted-foreground">Here's what's happening with your projects today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            title="Active Projects"
            value="24"
            change="+12.5%"
            trend="up"
            icon={FolderKanban}
            gradient="gradient-primary"
          />
          <StatsCard
            title="Tasks Completed"
            value="156"
            change="+8.2%"
            trend="up"
            icon={CheckCircle2}
            gradient="gradient-secondary"
          />
          <StatsCard
            title="At Risk"
            value="3"
            change="-2"
            trend="down"
            icon={AlertTriangle}
            gradient="gradient-accent"
          />
          <StatsCard
            title="Team Velocity"
            value="94%"
            change="+5.3%"
            trend="up"
            icon={TrendingUp}
            gradient="gradient-secondary"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ResourceChart />
          <ActivityFeed />
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-foreground">Active Projects</h2>
            <button className="text-sm text-primary hover:underline font-medium">
              View all projects →
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ProjectCard
              title="Website Redesign"
              status="on-track"
              progress={75}
              dueDate="Dec 15, 2024"
              team={["JD", "SM", "AK"]}
              tasksCompleted={18}
              totalTasks={24}
            />
            <ProjectCard
              title="Mobile App Launch"
              status="at-risk"
              progress={45}
              dueDate="Dec 20, 2024"
              team={["TW", "LP", "RK", "MN"]}
              tasksCompleted={12}
              totalTasks={28}
            />
            <ProjectCard
              title="API Integration"
              status="on-track"
              progress={90}
              dueDate="Dec 10, 2024"
              team={["JD", "AK"]}
              tasksCompleted={27}
              totalTasks={30}
            />
            <ProjectCard
              title="Marketing Campaign"
              status="delayed"
              progress={30}
              dueDate="Dec 8, 2024"
              team={["SM", "LP", "TW"]}
              tasksCompleted={9}
              totalTasks={32}
            />
            <ProjectCard
              title="Infrastructure Update"
              status="on-track"
              progress={65}
              dueDate="Dec 18, 2024"
              team={["RK", "MN"]}
              tasksCompleted={13}
              totalTasks={20}
            />
            <ProjectCard
              title="Security Audit"
              status="on-track"
              progress={85}
              dueDate="Dec 12, 2024"
              team={["JD", "AK", "RK"]}
              tasksCompleted={17}
              totalTasks={20}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
