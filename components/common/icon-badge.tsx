"use client"

import type React from "react"

interface IconBadgeProps {
    icon: React.ReactNode
    size?: "sm" | "md" | "lg"
    className?: string
}

export function IconBadge({ icon, size = "md", className = "" }: IconBadgeProps) {
    const sizeClasses = {
        sm: "p-2",
        md: "p-3",
        lg: "p-4",
    }

    return (
        <div className={`${sizeClasses[size]} bg-purple-500/[0.08] rounded-full text-purple-600 dark:text-purple-400 ${className}`}>
            {icon}
        </div>
    )
}
