import type { PropsWithChildren } from "react";

export function ChartContainer({ children }: PropsWithChildren) {
  return <div className="h-[240px] w-full">{children}</div>;
}
