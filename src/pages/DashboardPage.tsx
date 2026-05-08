import { useEffect, useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import type { DashboardTab } from "@/components/layout/Sidebar";
import {
  AnalyticsGaugeChart,
  AdmissionBarChart,
  ChartWrapper,
  DashboardCard,
  ExamPieChart,
  useDashboardStore,
} from "@/features/dashboard";

export function DashboardPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState<DashboardTab>("overview");
  const {
    admission,
    exam,
    performance,
    refreshWidget,
    refreshAll,
  } = useDashboardStore();

  useEffect(() => {
    void refreshAll();
  }, [refreshAll]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      void refreshAll();
    }, 15000);

    return () => window.clearInterval(interval);
  }, [refreshAll]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <DashboardLayout
      activeTab={activeTab}
      darkMode={darkMode}
      onTabChange={setActiveTab}
      onToggleDarkMode={() => setDarkMode((prev) => !prev)}
    >
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {(activeTab === "overview" || activeTab === "admissions") && (
          <DashboardCard
            title="Students Applied Scholarships"
            subtitle="Admission section"
            onRefresh={() => refreshWidget("admission")}
            refreshing={admission.loading}
          >
            <ChartWrapper loading={admission.loading} error={admission.error}>
              {admission.data ? <AdmissionBarChart data={admission.data} /> : null}
            </ChartWrapper>
          </DashboardCard>
        )}

        {(activeTab === "overview" || activeTab === "exams") && (
          <DashboardCard
            title="Pass Percentage Departmentwise"
            subtitle="Exam management section (pie/donut)"
            onRefresh={() => refreshWidget("exam")}
            refreshing={exam.loading}
          >
            <ChartWrapper loading={exam.loading} error={exam.error}>
              {exam.data ? <ExamPieChart data={exam.data} /> : null}
            </ChartWrapper>
          </DashboardCard>
        )}

        {(activeTab === "overview" || activeTab === "analytics") && (
          <DashboardCard
            title="Valuation Progress (Assigned vs Valuated)"
            subtitle="Assigned vs valuated tracking (gauge)"
            onRefresh={() => refreshWidget("performance")}
            refreshing={performance.loading}
          >
            <ChartWrapper loading={performance.loading} error={performance.error}>
              {performance.data ? <AnalyticsGaugeChart data={performance.data} /> : null}
            </ChartWrapper>
          </DashboardCard>
        )}
      </section>
    </DashboardLayout>
  );
}
