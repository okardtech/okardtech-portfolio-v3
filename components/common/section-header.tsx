"use client"

interface SectionHeaderProps {
    badge?: string
    title: string
    description?: string
    className?: string
}

export function SectionHeader({ badge, title, description, className = "" }: SectionHeaderProps) {
    return (
        <div className={`text-center mb-10 sm:mb-12 md:mb-14 ${className}`}>
            {badge && (
                <span className="inline-block text-xs sm:text-sm text-purple-600 dark:text-purple-400 font-medium mb-3 sm:mb-4 px-3 py-1 bg-purple-500/[0.08] rounded-full">{badge}</span>
            )}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-3 sm:mb-4 text-foreground">{title}</h2>
            {description && (
                <p className="max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground leading-relaxed px-4 sm:px-0">{description}</p>
            )}
        </div>
    )
}
