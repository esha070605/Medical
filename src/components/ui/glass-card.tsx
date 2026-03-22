import * as React from "react"
import { cn } from "@/lib/utils"

export function GlassCard({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "glass-card",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
