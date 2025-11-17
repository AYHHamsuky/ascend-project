import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle2, AlertCircle, MessageSquare, FileText } from "lucide-react";

interface Activity {
  id: string;
  type: "completed" | "comment" | "risk" | "update";
  user: string;
  action: string;
  target: string;
  time: string;
}

const activities: Activity[] = [
  { id: "1", type: "completed", user: "SM", action: "completed", target: "API Integration", time: "2 hours ago" },
  { id: "2", type: "comment", user: "JD", action: "commented on", target: "Design Review", time: "3 hours ago" },
  { id: "3", type: "risk", user: "AK", action: "flagged risk in", target: "Backend Migration", time: "5 hours ago" },
  { id: "4", type: "update", user: "TW", action: "updated", target: "Project Roadmap", time: "1 day ago" },
  { id: "5", type: "completed", user: "LP", action: "completed", target: "User Testing", time: "1 day ago" },
];

const iconMap = {
  completed: CheckCircle2,
  comment: MessageSquare,
  risk: AlertCircle,
  update: FileText,
};

const colorMap = {
  completed: "text-success",
  comment: "text-primary",
  risk: "text-destructive",
  update: "text-secondary",
};

export const ActivityFeed = () => {
  return (
    <Card className="p-6">
      <h3 className="font-semibold text-lg mb-4 text-foreground">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = iconMap[activity.type];
          return (
            <div key={activity.id} className="flex items-start gap-3 group">
              <Avatar className="w-9 h-9">
                <AvatarFallback className="text-sm gradient-primary text-white">
                  {activity.user}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground">
                  <span className="font-medium">{activity.user}</span>
                  {" "}{activity.action}{" "}
                  <span className="font-medium text-primary">{activity.target}</span>
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <Icon className={`w-3.5 h-3.5 ${colorMap[activity.type]}`} />
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
