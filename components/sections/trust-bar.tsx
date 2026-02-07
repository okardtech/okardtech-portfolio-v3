"use client"

import Image from "next/image"
import { useLocale } from "@/contexts/locale-context"

export default function TrustBar() {
    const { t } = useLocale()

    const clients = [
        { name: "Lanexang Airways", logo: "/images/partners/lxw.png" },
        { name: "A-Z Work", logo: "/images/partners/azwork.png" },
        { name: "OkardCare", logo: "/images/partners/okardcare.png" },
    ]

    return (
        <section className="py-8 sm:py-12 border-y border-border/30">
            <div className="container max-w-[94%] sm:max-w-[88%] lg:max-w-6xl mx-auto">
                <p className="text-center text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8">
                    {t("Trust.title") || "Trusted by businesses across Laos and beyond"}
                </p>
                <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-14">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="grayscale hover:grayscale-0 active:grayscale-0 opacity-40 hover:opacity-100 active:opacity-100"
                            style={{ transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                        >
                            <Image
                                src={client.logo}
                                alt={client.name}
                                width={80}
                                height={40}
                                className="h-6 sm:h-8 w-auto object-contain dark:invert dark:brightness-200"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
