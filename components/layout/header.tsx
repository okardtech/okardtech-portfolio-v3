"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"
import { useLocale } from "@/contexts/locale-context"
import ScrollProgress from "@/components/scroll-progress"
import LanguageSwitcher from "@/components/language-switcher"
import { Menu, X, ArrowRight } from "lucide-react"

export default function Header() {
    const { t } = useLocale()
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { href: "#services", label: t("Header.services") },
        { href: "#products", label: t("Header.portfolio") || "Portfolio" },
        { href: "#about", label: t("Header.about") },
        { href: "#contact", label: t("Header.contact") },
    ]

    return (
        <header
            className={`sticky top-0 z-50 w-full ${
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border/40"
                    : "bg-transparent"
            }`}
            style={{ transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
            <div className="container max-w-[94%] sm:max-w-[88%] lg:max-w-6xl mx-auto flex h-14 sm:h-16 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 font-bold text-lg">
                    <Image src="/images/okardtech-logo.png" alt="OkardTech" width={110} height={38} className="hidden dark:block sm:w-[130px]" />
                    <Image src="/images/okardtech-dark-logo.png" alt="OkardTech" width={110} height={38} className="block dark:hidden sm:w-[130px]" />
                </Link>

                {/* Center Navigation */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="px-4 py-2 text-sm text-foreground/70 hover:text-foreground font-medium rounded-full hover:bg-muted/50 active:bg-muted/70"
                            style={{ transition: 'all 250ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Right Side */}
                <div className="hidden lg:flex items-center gap-2">
                    <LanguageSwitcher />
                    <ThemeToggle />
                    <Button
                        className="group/btn rounded-full bg-purple-600 hover:bg-purple-500 text-white font-medium px-5 h-9 text-sm shadow-sm hover:shadow-md hover:-translate-y-px"
                        style={{ transition: 'all 250ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                        asChild
                    >
                        <Link href="#contact">
                            {t("Header.startProject") || "Start a Project"}
                            <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover/btn:translate-x-0.5" style={{ transition: 'transform 200ms ease-out' }} aria-hidden="true" />
                        </Link>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center gap-1.5 sm:gap-2">
                    <LanguageSwitcher />
                    <ThemeToggle />
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                        className="rounded-full h-9 w-9 hover:bg-muted/50 active:scale-95"
                        style={{ transition: 'all 200ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                    >
                        {isMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
                    </Button>
                </div>
            </div>

            <ScrollProgress />

            {/* Mobile Menu */}
            <div
                className={`lg:hidden overflow-hidden ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ transition: 'all 350ms cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
                <div className="bg-background/98 backdrop-blur-lg border-t border-border/30 safe-area-inset-bottom">
                    <nav className="flex flex-col px-6 py-5 gap-1">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-foreground/80 hover:text-foreground active:text-foreground font-medium py-3 px-4 rounded-xl hover:bg-muted/50 active:bg-muted/70 text-base"
                                style={{
                                    transition: 'all 250ms cubic-bezier(0.16, 1, 0.3, 1)',
                                    animationDelay: `${index * 50}ms`
                                }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-3 mt-2 border-t border-border/30">
                            <Button
                                className="w-full rounded-xl bg-purple-600 hover:bg-purple-500 active:bg-purple-700 text-white font-medium h-12 text-base shadow-sm"
                                style={{ transition: 'all 250ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                                asChild
                            >
                                <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                                    {t("Header.startProject") || "Start a Project"}
                                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                                </Link>
                            </Button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
