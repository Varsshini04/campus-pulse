import { Skeleton } from "@/components/ui/skeleton";

export function LoadingSkeleton() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-4 w-28" />
      <Skeleton className="h-[180px] w-full rounded-xl" />
    </div>
  );
}
