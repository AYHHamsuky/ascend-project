import { DashboardLayout } from "@/components/Layout/DashboardLayout";

const Timeline = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Timeline</h1>
          <p className="text-muted-foreground">Visual timeline of all project milestones</p>
        </div>
        <div className="text-center py-20 text-muted-foreground">
          Timeline view coming soon...
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Timeline;
