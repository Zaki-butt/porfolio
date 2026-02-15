import { cn } from "@/lib/utils";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-border bg-muted/30 p-6 backdrop-blur-sm",
          hover && "transition-colors hover:border-muted-foreground/20 hover:bg-muted/50",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";
