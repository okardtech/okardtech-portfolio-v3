"use client"

import Link from "next/link"
import Image from "next/image"
import { useLocale } from "@/contexts/locale-context"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function HeroSection() {
    const { t } = useLocale()

    const stats = [
        { value: "5+", label: t("Hero.stat1") || "Projects Delivered" },
        { value: "98%", label: t("Hero.stat2") || "Client Satisfaction" },
        { value: "3+", label: t("Hero.stat3") || "Industries Served" },
    ]

    return (
        <section id="home" className="relative w-full min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)] flex items-center py-10 sm:py-14 md:py-20 overflow-hidden">
            {/* Sleek animated styles */}
            <style jsx>{`
                @keyframes reveal {
                    from { opacity: 0; transform: translateY(24px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes reveal-right {
                    from { opacity: 0; transform: translateX(40px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes subtle-float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-6px); }
                }
                @keyframes glow-pulse {
                    0%, 100% { opacity: 0.08; transform: scale(1); }
                    50% { opacity: 0.15; transform: scale(1.02); }
                }
                .animate-reveal {
                    opacity: 0;
                    animation: reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                .animate-reveal-right {
                    opacity: 0;
                    animation: reveal-right 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                .animate-subtle-float {
                    animation: subtle-float 5s cubic-bezier(0.45, 0, 0.55, 1) infinite;
                }
                .animate-glow-pulse {
                    animation: glow-pulse 4s cubic-bezier(0.45, 0, 0.55, 1) infinite;
                }
            `}</style>

            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.02] via-transparent to-violet-500/[0.02] pointer-events-none" />

            <div className="container max-w-[94%] sm:max-w-[88%] lg:max-w-6xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        {/* Badge */}
                        <div
                            className="animate-reveal inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/[0.08] rounded-full text-purple-600 dark:text-purple-400 text-xs sm:text-sm font-medium mb-5 sm:mb-7"
                            style={{ animationDelay: '0.1s' }}
                        >
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-50" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-600 dark:bg-purple-400" />
                            </span>
                            {t("Hero.badge") || "Building Digital Excellence"}
                        </div>

                        {/* Headline */}
                        <h1
                            className="animate-reveal text-[2rem] sm:text-[2.5rem] md:text-5xl lg:text-[3.5rem] font-bold tracking-[-0.02em] leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-5"
                            style={{ animationDelay: '0.2s' }}
                        >
                            {t("Hero.headline") || (
                                <>
                                    We Build{" "}
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-500 dark:from-purple-400 dark:to-violet-400">
                                        Modern Digital Solutions
                                    </span>{" "}
                                    for Businesses
                                </>
                            )}
                        </h1>

                        {/* Subtitle */}
                        <p
                            className="animate-reveal text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-sm sm:max-w-md mx-auto lg:mx-0 leading-relaxed"
                            style={{ animationDelay: '0.3s' }}
                        >
                            {t("Hero.subtitle") || "Websites, mobile apps, booking systems, enterprise solutions, and AI-powered platforms — delivered fast, secure, and scalable."}
                        </p>

                        {/* CTA Buttons */}
                        <div
                            className="animate-reveal flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
                            style={{ animationDelay: '0.4s' }}
                        >
                            <Button
                                size="lg"
                                className="group/btn rounded-full bg-purple-600 hover:bg-purple-500 active:bg-purple-700 text-white font-medium px-6 sm:px-7 h-12 sm:h-11 text-sm shadow-lg shadow-purple-600/25 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-px active:translate-y-0 active:shadow-lg"
                                style={{ transition: 'all 250ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                                asChild
                            >
                                <Link href="#contact">
                                    {t("Hero.cta") || "Start a Project"}
                                    <ArrowRight
                                        className="ml-2 h-4 w-4 group-hover/btn:translate-x-0.5"
                                        style={{ transition: 'transform 250ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                                        aria-hidden="true"
                                    />
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="ghost"
                                className="group/btn rounded-full font-medium px-6 sm:px-7 h-12 sm:h-11 text-sm hover:bg-purple-500/[0.08] active:bg-purple-500/[0.12] hover:-translate-y-px active:translate-y-0"
                                style={{ transition: 'all 250ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                                asChild
                            >
                                <Link href="#products">
                                    <Play
                                        className="mr-2 h-3.5 w-3.5 group-hover/btn:scale-110"
                                        style={{ transition: 'transform 250ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                                        aria-hidden="true"
                                    />
                                    {t("Hero.secondaryCta") || "View Portfolio"}
                                </Link>
                            </Button>
                        </div>

                        {/* Stats */}
                        <div
                            className="animate-reveal flex items-center justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10"
                            style={{ animationDelay: '0.5s' }}
                        >
                            {stats.map((stat, index) => (
                                <div key={index} className="flex items-center gap-4 sm:gap-6 md:gap-8">
                                    <div className="text-center lg:text-left group/stat cursor-default">
                                        <div
                                            className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground group-hover/stat:text-purple-600 dark:group-hover/stat:text-purple-400"
                                            style={{ transition: 'color 300ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                                        >
                                            {stat.value}
                                        </div>
                                        <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-0.5 whitespace-nowrap">{stat.label}</div>
                                    </div>
                                    {index < stats.length - 1 && (
                                        <div className="h-8 sm:h-10 w-px bg-border/40" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div
                        className="animate-reveal-right hidden lg:flex justify-end relative group"
                        style={{ animationDelay: '0.25s' }}
                    >
                        <div className="relative w-full max-w-[500px] p-6">
                            {/* Glow effect */}
                            <div
                                className="absolute -inset-3 bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 pointer-events-none"
                                style={{ transition: 'opacity 500ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                            />

                            {/* Image container */}
                            <div
                                className="relative z-10 rounded-xl overflow-hidden ring-1 ring-black/[0.06] dark:ring-white/[0.06] shadow-xl shadow-black/[0.08] dark:shadow-black/[0.25] bg-muted/20"
                                style={{ transition: 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 400ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                            >
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image
                                        src="/images/hero-02.png"
                                        alt="OkardTech Project Showcase"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 500px"
                                        className="object-cover object-top group-hover:scale-[1.03]"
                                        style={{ transition: 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                                        priority
                                        quality={85}
                                        placeholder="blur"
                                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDAwUBAAAAAAAAAAAAAQIDAAQRBQYhEhMiMUFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/ANI3Hqdxp+qWMFvGjRTRs0gdSSCGAxj6OKlvrm7mgiSW5mkRJFdVeRmAYHIOCfvNKVPUBkxMoIOT/9k="
                                    />
                                    {/* Subtle overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/[0.06] via-transparent to-transparent pointer-events-none" />
                                    {/* Shine */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                                        style={{
                                            background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.06) 55%, transparent 65%)',
                                            transition: 'opacity 500ms cubic-bezier(0.16, 1, 0.3, 1)',
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Decorative blurs */}
                            <div className="absolute -top-6 -right-6 w-48 h-48 bg-purple-500/[0.08] rounded-full blur-2xl pointer-events-none animate-glow-pulse" />
                            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-violet-500/[0.08] rounded-full blur-2xl pointer-events-none animate-glow-pulse" style={{ animationDelay: '2s' }} />

                            {/* Minimal floating dots */}
                            <div
                                className="absolute top-2 right-2 w-3 h-3 bg-purple-500 rounded-full opacity-50 group-hover:opacity-90 animate-subtle-float"
                                style={{ transition: 'opacity 300ms ease-out' }}
                            />
                            <div
                                className="absolute bottom-2 left-2 w-2.5 h-2.5 bg-violet-500 rounded-full opacity-35 group-hover:opacity-75 animate-subtle-float"
                                style={{ transition: 'opacity 300ms ease-out', animationDelay: '2.5s' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
