import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { AdmissionDatum } from "@/features/dashboard/types";

export function AdmissionBarChart({ data }: { data: AdmissionDatum[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="4 4" />
        <XAxis dataKey="category" tick={{ fontSize: 12 }} />
        <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
        <Tooltip />
        <Bar dataKey="value" fill="var(--chart-primary)" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
