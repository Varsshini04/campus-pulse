import type { PropsWithChildren } from "react";
import { Sidebar, type DashboardTab } from "@/components/layout/Sidebar";
import { TopNavbar } from "@/components/layout/TopNavbar";

interface DashboardLayoutProps extends PropsWithChildren {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  activeTab: DashboardTab;
  onTabChange: (tab: DashboardTab) => void;
}

export function DashboardLayout({
  children,
  darkMode,
  onToggleDarkMode,
  activeTab,
  onTabChange,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f4f8ff] text-zinc-900 dark:bg-[#0d1117] dark:text-zinc-50">
      <div className="flex min-h-screen">
        <Sidebar activeTab={activeTab} onTabChange={onTabChange} />
        <div className="flex min-w-0 flex-1 flex-col">
          <TopNavbar activeTab={activeTab} darkMode={darkMode} onToggleDarkMode={onToggleDarkMode} />
          <main className="flex-1 bg-[#f4f8ff] p-4 dark:bg-[#0d1117] md:p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
