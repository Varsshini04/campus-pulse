import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { DashboardTab } from "@/components/layout/Sidebar";

interface TopNavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  activeTab: DashboardTab;
}

const tabHeading: Record<DashboardTab, string> = {
  overview: "Unified Dashboard",
  admissions: "Admissions Site",
  exams: "Exam Site",
  analytics: "Analytics Site",
};

export function TopNavbar({ darkMode, onToggleDarkMode, activeTab }: TopNavbarProps) {
  return (
    <header className="flex items-center justify-between border-b-2 border-black bg-[#fffdf4] p-4 dark:bg-[#1b2230]">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-300">
          Real-time Insights
        </p>
        <h2 className="text-2xl font-black">{tabHeading[activeTab]}</h2>
      </div>
      <Button onClick={onToggleDarkMode} size="icon" variant="outline">
        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
      </Button>
    </header>
  );
}
