import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border-2 border-black bg-[#fffdf4] p-4 shadow-[6px_6px_0_0_#000] dark:border-[#374151] dark:bg-[#1b2230]",
        className
      )}
      {...props}
    />
  );
}
