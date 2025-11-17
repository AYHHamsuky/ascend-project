import { DashboardLayout } from "@/components/Layout/DashboardLayout";

const Team = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Team</h1>
          <p className="text-muted-foreground">Manage your team members and roles</p>
        </div>
        <div className="text-center py-20 text-muted-foreground">
          Team management coming soon...
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Team;
