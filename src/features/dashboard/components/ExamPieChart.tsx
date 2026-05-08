import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import type { GaugeDatum } from "@/features/dashboard/types";

const COLORS = ["var(--chart-primary)", "var(--chart-secondary)"];

export function ExamPieChart({ data }: { data: GaugeDatum }) {
  const total = Math.max(data.max - data.min, 1);
  const completed = Math.max(data.value - data.min, 0);
  const pending = Math.max(total - completed, 0);
  const pieData = [
    { name: "Valuated", value: completed },
    { name: "Pending", value: pending },
  ];

  return (
    <div className="relative h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={58} outerRadius={82} paddingAngle={2}>
            {pieData.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl font-black">{Math.round((completed / total) * 100)}%</p>
          <p className="text-xs font-semibold uppercase text-zinc-500">Valuated</p>
        </div>
      </div>
    </div>
  );
}
