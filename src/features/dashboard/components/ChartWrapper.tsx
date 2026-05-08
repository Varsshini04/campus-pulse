import type { PropsWithChildren } from "react";
import { ChartContainer } from "@/components/ui/chart";
import { LoadingSkeleton } from "@/features/dashboard/components/LoadingSkeleton";

interface ChartWrapperProps extends PropsWithChildren {
  loading: boolean;
  error: string | null;
}

export function ChartWrapper({ loading, error, children }: ChartWrapperProps) {
  if (loading) return <LoadingSkeleton />;
  if (error) {
    return (
      <div className="flex h-[220px] items-center justify-center rounded-xl border-2 border-dashed border-red-500 bg-red-100 px-4 text-center text-sm font-semibold text-red-700 dark:bg-red-950/40 dark:text-red-300">
        {error}
      </div>
    );
  }
  return <ChartContainer>{children}</ChartContainer>;
}
