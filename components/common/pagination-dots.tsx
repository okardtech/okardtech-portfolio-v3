"use client"

interface PaginationDotsProps {
    total: number
    current: number
    onDotClick: (index: number) => void
    className?: string
}

export function PaginationDots({ total, current, onDotClick, className = "" }: PaginationDotsProps) {
    return (
        <div className={`flex justify-center mt-6 sm:mt-8 gap-1.5 sm:gap-2 ${className}`} role="tablist" aria-label="Slide navigation">
            {Array.from({ length: total }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => onDotClick(index)}
                    role="tab"
                    aria-selected={current === index}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 ${
                        current === index
                            ? "bg-purple-600 dark:bg-purple-400 w-6 sm:w-7"
                            : "bg-border hover:bg-muted-foreground/40 active:bg-muted-foreground/50"
                    }`}
                    style={{ transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                />
            ))}
        </div>
    )
}
