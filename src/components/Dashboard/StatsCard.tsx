import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
  gradient?: string;
}

export const StatsCard = ({ title, value, change, trend, icon: Icon, gradient = "gradient-primary" }: StatsCardProps) => {
  return (
    <Card className="p-6 animate-fade-in hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-foreground mb-2">{value}</h3>
          <div className="flex items-center gap-1">
            <span className={cn(
              "text-sm font-medium",
              trend === "up" ? "text-success" : "text-destructive"
            )}>
              {change}
            </span>
            <span className="text-xs text-muted-foreground">vs last month</span>
          </div>
        </div>
        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", gradient)}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </Card>
  );
};
