import { BarChart3, ClipboardCheck, GraduationCap, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

export type DashboardTab = "overview" | "admissions" | "exams" | "analytics";

const links: Array<{ icon: typeof LayoutDashboard; label: string; value: DashboardTab }> = [
  { icon: LayoutDashboard, label: "Overview", value: "overview" },
  { icon: GraduationCap, label: "Admissions", value: "admissions" },
  { icon: ClipboardCheck, label: "Exams", value: "exams" },
  { icon: BarChart3, label: "Analytics", value: "analytics" },
];

interface SidebarProps {
  activeTab: DashboardTab;
  onTabChange: (tab: DashboardTab) => void;
}

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <aside className="hidden w-64 flex-shrink-0 border-r-2 border-black bg-[#dbeafe] p-4 dark:bg-[#1b2230] lg:block">
      <h1 className="mb-6 text-xl font-black">Campus Pulse</h1>
      <nav className="space-y-3">
        {links.map(({ icon: Icon, label, value }) => (
          <button
            className={cn(
              "flex w-full items-center gap-3 rounded-xl border-2 border-black px-3 py-2 text-left font-semibold shadow-[4px_4px_0_0_#000] transition hover:-translate-y-0.5 dark:text-zinc-100",
              activeTab === value
                ? "bg-[#fde68a] text-black dark:bg-[#a78bfa] dark:text-zinc-950"
                : "bg-[#fffdf4] dark:bg-[#232b3b]"
            )}
            key={label}
            onClick={() => onTabChange(value)}
            type="button"
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
