"use client"

interface Tab {
    key: string
    label: string
}

interface TabGroupProps {
    tabs: Tab[]
    activeTab: string
    onTabChange: (key: string) => void
    ariaLabel?: string
    className?: string
}

export function TabGroup({ tabs, activeTab, onTabChange, ariaLabel = "Tabs", className = "" }: TabGroupProps) {
    return (
        <div className={`flex justify-center mb-8 sm:mb-10 ${className}`}>
            <div className="inline-flex flex-wrap justify-center gap-1 p-1 bg-muted/40 rounded-full max-w-full" role="tablist" aria-label={ariaLabel}>
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => onTabChange(tab.key)}
                        role="tab"
                        aria-selected={activeTab === tab.key}
                        className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 active:scale-[0.97] ${
                            activeTab === tab.key
                                ? "bg-background text-foreground shadow-sm ring-1 ring-border/40"
                                : "text-muted-foreground hover:text-foreground/80 active:text-foreground"
                        }`}
                        style={{ transition: 'all 250ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    )
}
