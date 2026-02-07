"use client"

import { GlassCard, SectionHeader, PaginationDots } from "@/components/common"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/contexts/locale-context"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCarousel } from "@/hooks"

export default function TestimonialSection() {
    const { t } = useLocale()

    const testimonials = [
        {
            quote:
                "Working with Okardtech was a game-changer for our business. Their innovative approach, deep technical expertise, and dedication to delivering quality solutions helped us achieve results beyond our expectations.",
            author: "CEO, Innovate Inc.",
            company: "Innovate Inc.",
            image: "/placeholder.svg",
        },
        {
            quote:
                "The mobile app is a masterpiece of design and functionality. Okardtech took the time to understand our needs and delivered a product that is both user-friendly and technologically advanced.",
            author: "Founder, Startup Co.",
            company: "Startup Co.",
            image: "/placeholder.svg",
        },
        {
            quote:
                "Okardtech's expertise completely transformed our online presence. Their strategic insights and flawless execution helped us connect with our audience in ways we never thought possible.",
            author: "Marketing Director, TechCorp",
            company: "TechCorp",
            image: "/placeholder.svg",
        },
        {
            quote:
                "The team's attention to detail is outstanding, ensuring every element of our project was perfectly executed. Their commitment to excellence truly sets them apart in the industry.",
            author: "CTO, Digital Solutions",
            company: "Digital Solutions",
            image: "/placeholder.svg",
        },
        {
            quote:
                "From concept to deployment, Okardtech guided us every step of the way. Their clear communication, technical knowledge, and creative problem-solving made the process smooth and stress-free.",
            author: "Product Manager, InnovateLab",
            company: "InnovateLab",
            image: "/placeholder.svg",
        },
        {
            quote:
                "The custom solution Okardtech built has streamlined our operations, saving us time and resources. Their ability to combine innovation with practicality is exactly what our business needed.",
            author: "Operations Director, ScaleUp",
            company: "ScaleUp",
            image: "/placeholder.svg",
        },
    ]

    const { currentSlide, itemsPerSlide, totalSlides, nextSlide, prevSlide, goToSlide } = useCarousel({
        totalItems: testimonials.length,
        autoPlayInterval: 7000,
        responsive: { sm: 1, md: 2, lg: 2 }
    })

    return (
        <section id="testimonials" className="py-12 sm:py-16 md:py-24">
            <div className="container max-w-[94%] sm:max-w-[88%] lg:max-w-6xl mx-auto">
                <SectionHeader
                    title={t("Testimonials.title")}
                    description={t("Testimonials.subtitle")}
                />
                <div className="relative">
                    <Button
                        variant="outline"
                        size="icon"
                        className="hidden sm:flex absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm rounded-full border-border/50 hover:bg-background hover:border-border active:scale-95 h-9 w-9 sm:h-10 sm:w-10"
                        style={{ transition: 'all 250ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                        onClick={prevSlide}
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="hidden sm:flex absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm rounded-full border-border/50 hover:bg-background hover:border-border active:scale-95 h-9 w-9 sm:h-10 sm:w-10"
                        style={{ transition: 'all 250ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                        onClick={nextSlide}
                        aria-label="Next testimonial"
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
                                    <div
                                        className={`grid gap-3 sm:gap-5 ${itemsPerSlide === 1 ? "grid-cols-1" : "grid-cols-2"}`}
                                    >
                                        {testimonials
                                            .slice(
                                                slideIndex * itemsPerSlide,
                                                (slideIndex + 1) * itemsPerSlide
                                            )
                                            .map((testimonial, testimonialIndex) => (
                                                <GlassCard key={testimonialIndex} className="p-4 sm:p-6">
                                                    <blockquote className="text-xs sm:text-sm text-muted-foreground italic border-l-2 border-purple-500/50 pl-3 sm:pl-4 leading-relaxed">
                                                        "{testimonial.quote}"
                                                    </blockquote>
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
