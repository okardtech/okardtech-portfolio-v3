"use client"

import { useLocale } from "@/contexts/locale-context"
import { Globe, GraduationCap, Headphones, Smartphone } from "lucide-react"
import { GlassCard, SectionHeader } from "@/components/common"

export default function ServicesSection() {
    const { t } = useLocale()
    const services = [
        {
            icon: <Globe className="h-5 w-5" aria-hidden="true" />,
            title: t("Services.webDevTitle"),
            description: t("Services.webDevText"),
        },
        {
            icon: <Smartphone className="h-5 w-5" aria-hidden="true" />,
            title: t("Services.mobileAppTitle"),
            description: t("Services.mobileAppText"),
        },
        {
            icon: <GraduationCap className="h-5 w-5" aria-hidden="true" />,
            title: t("Services.technicalTitle"),
            description: t("Services.technicalText")
        },
        {
            icon: <Headphones className="h-5 w-5" aria-hidden="true" />,
            title: t("Services.itTitle"),
            description: t("Services.itText"),
        },
    ]
    return (
        <section id="services" className="py-12 sm:py-16 md:py-24">
            <div className="container max-w-[94%] sm:max-w-[88%] lg:max-w-6xl mx-auto">
                <SectionHeader
                    badge={t("Services.title")}
                    title={t("Services.subtitle")}
                    description={t("Services.description")}
                />

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
                    {services.map((service, index) => (
                        <GlassCard
                            key={index}
                            className="group text-center p-4 sm:p-6 hover:-translate-y-1 active:scale-[0.98]"
                        >
                            <div className="flex justify-center mb-3 sm:mb-5">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-purple-500/[0.08] flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:bg-purple-500/[0.12] group-hover:scale-105" style={{ transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)' }}>
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-sm sm:text-base font-semibold mb-1.5 sm:mb-2 text-foreground">{service.title}</h3>
                            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{service.description}</p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
