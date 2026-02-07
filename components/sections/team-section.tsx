"use client"

import Link from "next/link"
import Image from "next/image"
import { GlassCard, SectionHeader, PaginationDots } from "@/components/common"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/contexts/locale-context"
import { ChevronLeft, ChevronRight, Facebook, Github, Linkedin, Twitter } from "lucide-react"
import { useCarousel } from "@/hooks"

export default function TeamSection() {
    const { t } = useLocale()

    const teamMembers = [
        {
            image: "/images/xorkue.webp",
            name: "Xorkue XAILENG",
            role: "Co-founder & CEO",
            bio: "A full-stack wizard with a love for clean code and elegant architecture.",
        },
        {
            image: "/images/daoyang.webp",
            name: "Daoyang VATOUA",
            role: "Co-founder & CTO",
            bio: "Deep expertise in architecting scalable digital platforms, cloud infrastructure, and secure enterprise systems.",
        },
        {
            image: "/images/paokue.webp",
            name: "Paokue SAOLONG",
            role: "Co-founder & COO",
            bio: "The organizational backbone of our team, ensuring projects are delivered on time and on budget.",
        },
        {
            image: "/images/thongphet.webp",
            name: "Thongphet KEOMANYCHANH",
            role: "Co-founder & CMO",
            bio: "Expert in cloud infrastructure and automation, ensuring our systems run smoothly and securely.",
        }
    ]

    const { currentSlide, itemsPerSlide, totalSlides, nextSlide, prevSlide, goToSlide } = useCarousel({
        totalItems: teamMembers.length,
        autoPlayInterval: 6000,
        responsive: { sm: 1, md: 3, lg: 3 }
    })

    return (
        <section id="team" className="py-12 sm:py-16 md:py-24">
            <div className="container max-w-[94%] sm:max-w-[88%] lg:max-w-6xl mx-auto">
                <SectionHeader
                    title={t("Team.title")}
                    description={t("Team.subtitle")}
                />
                <div className="relative">
                    <Button
                        variant="outline"
                        size="icon"
                        className="hidden sm:flex absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm rounded-full border-border/50 hover:bg-background hover:border-border active:scale-95 h-9 w-9 sm:h-10 sm:w-10"
                        style={{ transition: 'all 250ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                        onClick={prevSlide}
                        aria-label="Previous team member"
                    >
                        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="hidden sm:flex absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm rounded-full border-border/50 hover:bg-background hover:border-border active:scale-95 h-9 w-9 sm:h-10 sm:w-10"
                        style={{ transition: 'all 250ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                        onClick={nextSlide}
                        aria-label="Next team member"
                    >
                        <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </Button>

                    <div className="overflow-hidden rounded-xl sm:mx-8 md:mx-12">
                        <div
                            className="flex touch-pan-x"
                            style={{
                                transform: `translateX(-${currentSlide * 100}%)`,
                                transition: 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)'
                            }}
                        >
                            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                <div key={slideIndex} className="w-full flex-shrink-0">
                                    <div className={`grid gap-3 sm:gap-5 ${itemsPerSlide === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-3"}`}>
                                        {teamMembers
                                            .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                                            .map((member, memberIndex) => (
                                                <GlassCard key={memberIndex} className="p-4 sm:p-6 text-center">
                                                    <div className="flex flex-col items-center">
                                                        <Image
                                                            src={member.image}
                                                            alt={member.name}
                                                            width={80}
                                                            height={80}
                                                            className="rounded-full mb-3 sm:mb-4 ring-2 ring-purple-500/30 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                                                        />
                                                        <h3 className="font-semibold text-sm sm:text-base text-foreground">{member.name}</h3>
                                                        <p className="text-purple-600 dark:text-purple-400 text-xs sm:text-sm mb-1.5 sm:mb-2">{member.role}</p>
                                                        {/* <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">"{member.bio}"</p> */}

                                                        <div className="flex justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                                                            <Link
                                                                href="#"
                                                                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-purple-500 active:text-purple-600 hover:bg-purple-500/10 active:bg-purple-500/20 active:scale-95"
                                                                style={{ transition: 'all 250ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                                                                aria-label={`${member.name} Facebook`}
                                                            >
                                                                <Facebook className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                                                            </Link>
                                                            <Link
                                                                href="#"
                                                                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-purple-500 active:text-purple-600 hover:bg-purple-500/10 active:bg-purple-500/20 active:scale-95"
                                                                style={{ transition: 'all 250ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                                                                aria-label={`${member.name} LinkedIn`}
                                                            >
                                                                <Linkedin className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                                                            </Link>
                                                            <Link
                                                                href="#"
                                                                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-purple-500 active:text-purple-600 hover:bg-purple-500/10 active:bg-purple-500/20 active:scale-95"
                                                                style={{ transition: 'all 250ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                                                                aria-label={`${member.name} GitHub`}
                                                            >
                                                                <Github className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden="true" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </GlassCard>
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <PaginationDots
                        total={totalSlides}
                        current={currentSlide}
                        onDotClick={goToSlide}
                    />
                </div>
            </div>
        </section>
    )
}
