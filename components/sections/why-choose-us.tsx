"use client"

import { useLocale } from "@/contexts/locale-context"
import { GlassCard, SectionHeader } from "@/components/common"
import { Zap, Shield, Users, Clock } from "lucide-react"

export default function WhyChooseUs() {
    const { t } = useLocale()

    const features = [
        {
            icon: <Zap className="h-5 w-5" aria-hidden="true" />,
            title: t("WhyChooseUs.fastTitle") || "Fast Delivery",
            description: t("WhyChooseUs.fastDesc") || "We deliver high-quality solutions on time, every time.",
        },
        {
            icon: <Shield className="h-5 w-5" aria-hidden="true" />,
            title: t("WhyChooseUs.secureTitle") || "Secure & Reliable",
            description: t("WhyChooseUs.secureDesc") || "Built with security best practices and robust architecture.",
        },
        {
            icon: <Users className="h-5 w-5" aria-hidden="true" />,
            title: t("WhyChooseUs.teamTitle") || "Expert Team",
            description: t("WhyChooseUs.teamDesc") || "Skilled developers with years of industry experience.",
        },
        {
            icon: <Clock className="h-5 w-5" aria-hidden="true" />,
            title: t("WhyChooseUs.supportTitle") || "24/7 Support",
            description: t("WhyChooseUs.supportDesc") || "Ongoing maintenance and support for your peace of mind.",
        },
    ]

    return (
        <section id="why-choose-us" className="py-12 sm:py-16 md:py-24">
            <div className="container max-w-[94%] sm:max-w-[88%] lg:max-w-6xl mx-auto">
                <SectionHeader
                    badge={t("WhyChooseUs.label") || "Why Choose Us"}
                    title={t("WhyChooseUs.title") || "Your Success Is Our Priority"}
                    description={t("WhyChooseUs.subtitle") || "We combine technical expertise with a client-first approach to deliver solutions that drive real business results."}
                />

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
                    {features.map((feature, index) => (
                        <GlassCard key={index} className="group p-4 sm:p-6 text-center hover:-translate-y-1 active:scale-[0.98]">
                            <div className="flex justify-center mb-3 sm:mb-5">
                                <div
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-purple-500/[0.08] flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:bg-purple-500/[0.12] group-hover:scale-105"
                                    style={{ transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                                >
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-sm sm:text-base font-semibold mb-1.5 sm:mb-2 text-foreground">{feature.title}</h3>
                            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
