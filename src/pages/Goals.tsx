import { DashboardLayout } from "@/components/Layout/DashboardLayout";

const Goals = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Goals</h1>
          <p className="text-muted-foreground">Track and manage team objectives</p>
        </div>
        <div className="text-center py-20 text-muted-foreground">
          Goals tracking coming soon...
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Goals;
