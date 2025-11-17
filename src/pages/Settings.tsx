import { DashboardLayout } from "@/components/Layout/DashboardLayout";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your workspace preferences</p>
        </div>
        <div className="text-center py-20 text-muted-foreground">
          Settings page coming soon...
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
