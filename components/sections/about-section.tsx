"use client"

import Image from "next/image"
import { useState } from "react"
import { useLocale } from "@/contexts/locale-context"
import { GlassCard, SectionHeader, TabGroup } from "@/components/common"

export default function AboutUsSection() {
    const { t } = useLocale()
    const [activeTab, setActiveTab] = useState("company")

    const stats = [
        { number: "10+", label: t("About.experience") },
        { number: "10+", label: t("About.membersTeam") },
        { number: "5+", label: t("About.projectDelivered") },
        { number: "98%", label: t("About.clientSatisfaction") },
    ]

    const tabs = [
        { id: "company", label: t("About.history") },
        { id: "vision", label: t("About.vision") },
        { id: "mission", label: t("About.mission") },
        { id: "values", label: t("About.value") },
    ]

    const getTabContent = () => {
        switch (activeTab) {
            case "company":
                return {
                    title: t("About.storycle"),
                    content: t("About.storyDesc")
                }
            case "vision":
                return {
                    title: t("About.vision"),
                    content: t("About.visionDesc")
                }
            case "mission":
                return {
                    title: t("About.mission"),
                    content: t("About.missionDesc")
                }
            case "values":
                return {
                    title: t("About.value"),
                    content: t("About.valueDesc")
                }
        }
    }

    const tabContent = getTabContent()

    return (
        <section id="about" className="py-12 sm:py-16 md:py-24">
            <div className="container max-w-[94%] sm:max-w-[88%] lg:max-w-6xl mx-auto">
                <SectionHeader
                    badge={t("About.badge")}
                    title={t("About.title")}
                    description={t("About.desc")}
                />

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-14">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group text-center p-4 sm:p-5 rounded-xl bg-muted/30 hover:bg-muted/50 active:bg-muted/60 border border-border/30 hover:border-border/50"
                            style={{ transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                        >
                            <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-purple-600 dark:text-purple-400 mb-0.5 sm:mb-1 group-hover:scale-105" style={{ transition: 'transform 300ms cubic-bezier(0.16, 1, 0.3, 1)' }}>
                                {stat.number}
                            </div>
                            <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <TabGroup
                    tabs={tabs.map(tab => ({ key: tab.id, label: tab.label }))}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    ariaLabel="About sections"
                />

                <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-center">
                    {/* Image */}
                    <div className="hidden sm:block relative group">
                        <div
                            className="rounded-xl overflow-hidden ring-1 ring-border/50 shadow-lg"
                            style={{ transition: 'all 400ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                        >
                            <div className="relative aspect-[4/3]">
                                <Image
                                    src="/images/tech-team-collaboration-purple.jpeg"
                                    alt="OkardTech Team"
                                    fill
                                    className="object-cover group-hover:scale-[1.02]"
                                    style={{ transition: 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                                    <span className="inline-block px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-medium text-white bg-white/20 backdrop-blur-sm rounded-full mb-1.5 sm:mb-2">Our Team</span>
                                    <h3 className="text-white font-semibold text-base sm:text-lg">OkardTech Event</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <GlassCard
                        className="p-4 sm:p-6"
                        role="tabpanel"
                        id={`tabpanel-${activeTab}`}
                        aria-labelledby={`tab-${activeTab}`}
                    >
                        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">{tabContent?.title}</h3>
                        <div className="space-y-3 sm:space-y-4">
                            {tabContent?.content.split("\n\n").map((paragraph, index) => (
                                <p key={index} className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </GlassCard>
                </div>
            </div>
        </section>
    )
}
