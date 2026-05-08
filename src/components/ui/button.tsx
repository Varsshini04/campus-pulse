import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border-2 border-black text-sm font-semibold transition active:translate-x-[2px] active:translate-y-[2px] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#fde68a] text-black shadow-[4px_4px_0_0_#000] hover:bg-[#fef3c7] dark:bg-[#a78bfa] dark:text-zinc-950 dark:hover:bg-[#c4b5fd]",
        outline:
          "bg-[#fffdf4] text-black shadow-[4px_4px_0_0_#000] hover:bg-[#f8fafc] dark:bg-[#232b3b] dark:text-zinc-100 dark:hover:bg-[#303a4f]",
      },
      size: {
        default: "h-10 px-4 py-2",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
