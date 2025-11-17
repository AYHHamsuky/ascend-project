import { DashboardLayout } from "@/components/Layout/DashboardLayout";

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Analytics</h1>
          <p className="text-muted-foreground">Advanced insights and reporting</p>
        </div>
        <div className="text-center py-20 text-muted-foreground">
          Analytics dashboard coming soon...
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
