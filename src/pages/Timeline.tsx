import { useState } from "react";
import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Filter, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface TimelineProject {
  id: string;
  title: string;
  status: "on-track" | "at-risk" | "delayed";
  progress: number;
  startDate: Date;
  endDate: Date;
  team: string[];
  milestones: { name: string; date: Date; completed: boolean }[];
}

const Timeline = () => {
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"month" | "quarter" | "year">("month");

  const projects: TimelineProject[] = [
    {
      id: "1",
      title: "Website Redesign",
      status: "on-track",
      progress: 75,
      startDate: new Date("2024-11-01"),
      endDate: new Date("2024-12-15"),
      team: ["JD", "SM", "AK"],
      milestones: [
        { name: "Design Complete", date: new Date("2024-11-15"), completed: true },
        { name: "Development", date: new Date("2024-12-01"), completed: true },
        { name: "Testing", date: new Date("2024-12-10"), completed: false },
      ],
    },
    {
      id: "2",
      title: "Mobile App Launch",
      status: "at-risk",
      progress: 45,
      startDate: new Date("2024-10-15"),
      endDate: new Date("2024-12-20"),
      team: ["TW", "LP", "RK", "MN"],
      milestones: [
        { name: "MVP Complete", date: new Date("2024-11-01"), completed: true },
        { name: "Beta Testing", date: new Date("2024-12-01"), completed: false },
        { name: "Launch", date: new Date("2024-12-20"), completed: false },
      ],
    },
    {
      id: "3",
      title: "API Integration",
      status: "on-track",
      progress: 90,
      startDate: new Date("2024-11-20"),
      endDate: new Date("2024-12-10"),
      team: ["JD", "AK"],
      milestones: [
        { name: "API Design", date: new Date("2024-11-25"), completed: true },
        { name: "Implementation", date: new Date("2024-12-05"), completed: true },
        { name: "Documentation", date: new Date("2024-12-10"), completed: false },
      ],
    },
    {
      id: "4",
      title: "Database Migration",
      status: "on-track",
      progress: 60,
      startDate: new Date("2024-12-01"),
      endDate: new Date("2024-12-30"),
      team: ["LP", "RK"],
      milestones: [
        { name: "Planning", date: new Date("2024-12-05"), completed: true },
        { name: "Migration", date: new Date("2024-12-20"), completed: false },
        { name: "Verification", date: new Date("2024-12-30"), completed: false },
      ],
    },
  ];

  const filteredProjects = projects.filter(
    (project) => filterStatus === "all" || project.status === filterStatus
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "on-track":
        return "bg-success/20 border-success";
      case "at-risk":
        return "bg-warning/20 border-warning";
      case "delayed":
        return "bg-destructive/20 border-destructive";
      default:
        return "bg-muted";
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "on-track":
        return "success";
      case "at-risk":
        return "warning";
      case "delayed":
        return "destructive";
      default:
        return "default";
    }
  };

  const formatDateRange = (start: Date, end: Date) => {
    const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
    return `${start.toLocaleDateString("en-US", options)} - ${end.toLocaleDateString("en-US", options)}`;
  };

  const getDaysRemaining = (endDate: Date) => {
    const today = new Date();
    const diffTime = endDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Timeline</h1>
            <p className="text-muted-foreground">Visual timeline of all project milestones</p>
          </div>
          <div className="flex items-center gap-2">
            <Select value={viewMode} onValueChange={(value: any) => setViewMode(value)}>
              <SelectTrigger className="w-[140px]">
                <Calendar className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="month">Month View</SelectItem>
                <SelectItem value="quarter">Quarter View</SelectItem>
                <SelectItem value="year">Year View</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-[140px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="on-track">On Track</SelectItem>
                <SelectItem value="at-risk">At Risk</SelectItem>
                <SelectItem value="delayed">Delayed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-4">
          {filteredProjects.map((project) => {
            const daysRemaining = getDaysRemaining(project.endDate);
            return (
              <Card key={project.id} className={`border-l-4 ${getStatusColor(project.status)}`}>
                <CardHeader className="pb-3">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <Badge variant={getStatusBadgeVariant(project.status) as any}>
                          {project.status.replace("-", " ")}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDateRange(project.startDate, project.endDate)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {daysRemaining > 0 ? `${daysRemaining} days left` : "Overdue"}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {project.team.join(", ")}
                        </span>
                      </div>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="text-sm font-medium">{project.progress}% Complete</div>
                      <Progress value={project.progress} className="w-24" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-foreground">Milestones</div>
                    <div className="relative">
                      <div className="absolute left-[9px] top-2 bottom-2 w-0.5 bg-border" />
                      <div className="space-y-3">
                        {project.milestones.map((milestone, idx) => (
                          <div key={idx} className="flex items-start gap-3 relative">
                            <div
                              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center z-10 ${
                                milestone.completed
                                  ? "bg-success border-success"
                                  : "bg-background border-border"
                              }`}
                            >
                              {milestone.completed && (
                                <div className="w-2 h-2 rounded-full bg-success-foreground" />
                              )}
                            </div>
                            <div className="flex-1 pt-0.5">
                              <div className="flex items-center justify-between">
                                <span
                                  className={`text-sm ${
                                    milestone.completed
                                      ? "text-foreground font-medium"
                                      : "text-muted-foreground"
                                  }`}
                                >
                                  {milestone.name}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {milestone.date.toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                  })}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground">No projects match the selected filter</p>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Timeline;
