import { useState } from "react";
import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { ProjectCard } from "@/components/Dashboard/ProjectCard";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Project {
  id: string;
  title: string;
  status: "on-track" | "at-risk" | "delayed";
  progress: number;
  dueDate: string;
  team: string[];
  tasksCompleted: number;
  totalTasks: number;
}

const Projects = () => {
  const { toast } = useToast();
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      title: "Website Redesign",
      status: "on-track",
      progress: 75,
      dueDate: "Dec 15, 2024",
      team: ["JD", "SM", "AK"],
      tasksCompleted: 18,
      totalTasks: 24,
    },
    {
      id: "2",
      title: "Mobile App Launch",
      status: "at-risk",
      progress: 45,
      dueDate: "Dec 20, 2024",
      team: ["TW", "LP", "RK", "MN"],
      tasksCompleted: 12,
      totalTasks: 28,
    },
    {
      id: "3",
      title: "API Integration",
      status: "on-track",
      progress: 90,
      dueDate: "Dec 10, 2024",
      team: ["JD", "AK"],
      tasksCompleted: 27,
      totalTasks: 30,
    },
  ]);

  const [open, setOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    status: "on-track" as "on-track" | "at-risk" | "delayed",
    dueDate: "",
    totalTasks: "",
    teamMembers: "",
  });

  const handleAddProject = () => {
    if (!newProject.title || !newProject.dueDate || !newProject.totalTasks) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const team = newProject.teamMembers
      .split(",")
      .map((m) => m.trim().toUpperCase())
      .filter((m) => m.length > 0);

    const project: Project = {
      id: Date.now().toString(),
      title: newProject.title,
      status: newProject.status,
      progress: 0,
      dueDate: new Date(newProject.dueDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      team: team.length > 0 ? team : ["UN"],
      tasksCompleted: 0,
      totalTasks: parseInt(newProject.totalTasks),
    };

    setProjects([...projects, project]);
    setOpen(false);
    setNewProject({
      title: "",
      status: "on-track",
      dueDate: "",
      totalTasks: "",
      teamMembers: "",
    });

    toast({
      title: "Project created",
      description: `${project.title} has been added successfully`,
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Projects</h1>
            <p className="text-muted-foreground">Manage all your projects in one place</p>
          </div>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                New Project
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Create New Project</DialogTitle>
                <DialogDescription>
                  Add a new project to your workspace. Fill in the details below.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Project Name *</Label>
                  <Input
                    id="title"
                    placeholder="Enter project name"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="status">Status</Label>
                  <Select
                    value={newProject.status}
                    onValueChange={(value: "on-track" | "at-risk" | "delayed") =>
                      setNewProject({ ...newProject, status: value })
                    }
                  >
                    <SelectTrigger id="status">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="on-track">On Track</SelectItem>
                      <SelectItem value="at-risk">At Risk</SelectItem>
                      <SelectItem value="delayed">Delayed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="dueDate">Due Date *</Label>
                  <Input
                    id="dueDate"
                    type="date"
                    value={newProject.dueDate}
                    onChange={(e) => setNewProject({ ...newProject, dueDate: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="totalTasks">Total Tasks *</Label>
                  <Input
                    id="totalTasks"
                    type="number"
                    placeholder="Enter number of tasks"
                    value={newProject.totalTasks}
                    onChange={(e) => setNewProject({ ...newProject, totalTasks: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="team">Team Members</Label>
                  <Input
                    id="team"
                    placeholder="Enter initials separated by commas (e.g., JD, SM)"
                    value={newProject.teamMembers}
                    onChange={(e) => setNewProject({ ...newProject, teamMembers: e.target.value })}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddProject}>Create Project</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              status={project.status}
              progress={project.progress}
              dueDate={project.dueDate}
              team={project.team}
              tasksCompleted={project.tasksCompleted}
              totalTasks={project.totalTasks}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Projects;
