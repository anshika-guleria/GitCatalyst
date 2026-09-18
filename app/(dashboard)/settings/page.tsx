import { PageHeader } from "@/components/shared/PageHeader";
import { SettingsForm } from "@/components/settings/SettingsForm";

export default function SettingsPage() {
  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        title="Platform Settings"
        description="Configure GitHub API tokens, cache revalidation, and theme defaults."
        accent="violet"
      />

      <SettingsForm />
    </div>
  );
}
