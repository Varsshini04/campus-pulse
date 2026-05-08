import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { PerformanceDatum } from "@/features/dashboard/types";

export function PerformanceLineChart({ data }: { data: PerformanceDatum[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="4 4" />
        <XAxis dataKey="month" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} />
        <Tooltip />
        <Line type="monotone" dataKey="score" stroke="#f97316" strokeWidth={3} dot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
