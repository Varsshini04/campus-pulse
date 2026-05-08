import { RefreshCw } from "lucide-react";
import type { PropsWithChildren } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DashboardCardProps extends PropsWithChildren {
  title: string;
  subtitle: string;
  onRefresh: () => Promise<void> | void;
  refreshing: boolean;
}

export function DashboardCard({ title, subtitle, onRefresh, refreshing, children }: DashboardCardProps) {
  return (
    <Card className="h-full space-y-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-lg font-black">{title}</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">{subtitle}</p>
        </div>
        <Button onClick={onRefresh} size="icon" variant="outline">
          <RefreshCw className={refreshing ? "animate-spin" : ""} size={16} />
        </Button>
      </div>
      {children}
    </Card>
  );
}
