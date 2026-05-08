import { RadialBar, RadialBarChart, ResponsiveContainer, PolarAngleAxis } from "recharts";
import type { GaugeDatum } from "@/features/dashboard/types";

export function ValuationGaugeChart({ data }: { data: GaugeDatum }) {
  const percentage = ((data.value - data.min) / (data.max - data.min)) * 100;
  const chartData = [{ name: "Progress", value: percentage }];

  return (
    <div className="relative h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="85%"
          innerRadius="55%"
          outerRadius="95%"
          barSize={20}
          startAngle={180}
          endAngle={0}
          data={chartData}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar cornerRadius={10} background dataKey="value" fill="#22c55e" />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="absolute inset-x-0 top-[55%] text-center">
        <p className="text-3xl font-black">{Math.round(percentage)}%</p>
        <p className="text-xs font-semibold uppercase text-zinc-500">Completed</p>
      </div>
    </div>
  );
}
