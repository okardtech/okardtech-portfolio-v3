"use client"

import Link from "next/link"
import { useLocale } from "@/contexts/locale-context"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { WhatsAppIcon } from "@/components/layout/footer"

export default function FinalCTA() {
    const { t } = useLocale()

    return (
        <section className="py-12 sm:py-16 md:py-24">
            <div className="container max-w-[94%] sm:max-w-[88%] lg:max-w-6xl mx-auto">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-purple-600 p-6 sm:p-8 md:p-14 text-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-violet-700/30" />
                    <div className="absolute top-0 left-0 w-40 sm:w-64 h-40 sm:h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-48 sm:w-80 h-48 sm:h-80 bg-purple-400/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

                    <div className="relative z-10">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 tracking-[-0.02em]">
                            {t("FinalCTA.title") || "Ready to Build Something Amazing?"}
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-xl mx-auto mb-6 sm:mb-8">
                            {t("FinalCTA.subtitle") || "Let's discuss your project and bring your vision to life. Our team is ready to help you succeed."}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button
                                size="lg"
                                className="rounded-full bg-white text-purple-600 hover:bg-white/90 active:bg-white/80 font-medium px-5 sm:px-6 h-11 sm:h-12 text-sm shadow-sm hover:shadow-md"
                                style={{ transition: 'all 250ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                                asChild
                            >
                                <Link href="#contact">
                                    {t("FinalCTA.primaryBtn") || "Start a Project"}
                                    <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="rounded-full border-white/30 text-white hover:bg-white/10 active:bg-white/20 hover:text-white bg-transparent font-medium px-5 sm:px-6 h-11 sm:h-12 text-sm"
                                style={{ transition: 'all 250ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                                asChild
                            >
                                <Link href="https://wa.me/8562098780045" target="_blank" rel="noopener noreferrer">
                                    <WhatsAppIcon className="mr-1.5 h-4 w-4" aria-hidden="true" />
                                    {t("FinalCTA.secondaryBtn") || "Chat on WhatsApp"}
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
