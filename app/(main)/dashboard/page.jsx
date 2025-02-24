import { getIndustryInsights } from "@/acitons/dashboard";
import { DashboardView } from "./_components/dashboard-view";
import { getUserOnboardingStatus } from "@/acitons/user";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { isOnboarded } = await getUserOnboardingStatus();

  if (!isOnboarded) {
    redirect("/onboarding");
  }

  const insights = await getIndustryInsights();

  return (
    <div className="container mx-auto">
      <DashboardView insights={insights} />
    </div>
  );
}