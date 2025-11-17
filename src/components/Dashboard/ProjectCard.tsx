import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users } from "lucide-react";

interface ProjectCardProps {
  title: string;
  status: "on-track" | "at-risk" | "delayed";
  progress: number;
  dueDate: string;
  team: string[];
  tasksCompleted: number;
  totalTasks: number;
}

const statusConfig = {
  "on-track": { variant: "success" as const, label: "On Track" },
  "at-risk": { variant: "warning" as const, label: "At Risk" },
  "delayed": { variant: "destructive" as const, label: "Delayed" },
};

export const ProjectCard = ({ 
  title, 
  status, 
  progress, 
  dueDate, 
  team, 
  tasksCompleted, 
  totalTasks 
}: ProjectCardProps) => {
  return (
    <Card className="p-5 hover:shadow-md transition-all cursor-pointer group">
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <Badge variant={statusConfig[status].variant}>
          {statusConfig[status].label}
        </Badge>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium text-foreground">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{dueDate}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>{tasksCompleted}/{totalTasks} tasks</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div className="flex -space-x-2">
            {team.map((member, i) => (
              <Avatar key={i} className="w-8 h-8 border-2 border-card">
                <AvatarFallback className="text-xs">{member}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Users className="w-4 h-4" />
            <span className="text-sm">{team.length}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
