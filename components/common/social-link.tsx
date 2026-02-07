"use client"

import type React from "react"
import Link from "next/link"

interface SocialLinkProps {
    href: string
    icon: React.ReactNode
    label: string
    hoverColor?: string
    external?: boolean
}

export function SocialLink({ href, icon, label, hoverColor = "hover:bg-purple-600", external = true }: SocialLinkProps) {
    return (
        <Link
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={label}
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-muted/50 ${hoverColor} hover:text-white active:scale-95 flex items-center justify-center text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2`}
            style={{ transition: 'all 250ms cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
            {icon}
        </Link>
    )
}
