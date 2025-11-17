import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { ProjectCard } from "@/components/Dashboard/ProjectCard";

const Projects = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Projects</h1>
          <p className="text-muted-foreground">Manage all your projects in one place</p>
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
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Projects;
