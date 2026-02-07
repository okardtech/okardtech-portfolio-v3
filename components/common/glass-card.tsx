"use client"

import type React from "react"
import { Card } from "@/components/ui/card"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export const GlassCard = ({
  children,
  className,
  ...props
}: GlassCardProps) => (
  <Card
    className={`bg-background/80 backdrop-blur-sm border border-border/40 shadow-sm hover:shadow-md hover:border-border/60 active:shadow-sm ${className}`}
    style={{ transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)' }}
    {...props}
  >
    {children}
  </Card>
)
