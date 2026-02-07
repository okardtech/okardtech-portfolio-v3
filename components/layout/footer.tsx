"use client"

import Link from "next/link"
import Image from "next/image"
import { useLocale } from "@/contexts/locale-context"
import { SocialLink } from "@/components/common"
import { Facebook, PhoneCall, MapPin, Mail, Phone } from "lucide-react"

export const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M16.5 0H13v16.2a3.2 3.2 0 1 1-3.2-3.2 3.2 3.2 0 0 1 1.3.3V10a6.8 6.8 0 0 0-1.3-.1 6.8 6.8 0 1 0 6.8 6.8V7a7 7 0 0 0 4 1.3V5.2a4.8 4.8 0 0 1-4-5.2Z" />
    </svg>
)

export const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 0a12 12 0 0 0-10.6 17.9L0 24l6.3-1.7A12 12 0 1 0 12 0Zm6.6 17.2a10.5 10.5 0 0 1-11.8 1.6l-.8-.4-3.7 1 1-3.6-.5-.8a10.5 10.5 0 1 1 15.8 2.2Zm-5.5-2.4c-.3-.2-1.8-.9-2-1s-.5-.1-.7.2-.8 1-.9 1.1-.3.2-.6.1a8.9 8.9 0 0 1-2.6-1.6 9.6 9.6 0 0 1-1.8-2.3c-.2-.3 0-.5.1-.6l.6-.8c.2-.3.2-.5.3-.8 0-.2 0-.5-.1-.7s-.7-1.6-1-2.2c-.3-.5-.6-.5-.8-.5H5c-.2 0-.5 0-.7.3l-.6.7c-.2.3-.7 1.1-.7 2.6s1 3 1.2 3.2a10.5 10.5 0 0 0 9.2 5.3c1.6 0 2.9-.5 3.2-1s1.1-1.5 1.2-1.8c.1-.2.1-.4 0-.6-.2-.2-.5-.3-.8-.5Z" />
    </svg>
)

export default function Footer() {
    const { t } = useLocale()

    return (
        <footer className="border-t border-border/40 bg-background/95">
            <div className="container max-w-[94%] sm:max-w-[88%] lg:max-w-6xl mx-auto py-8 sm:py-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
                    {/* Column 1: Company */}
                    <div className="col-span-2 lg:col-span-1 space-y-3 sm:space-y-4">
                        <Image src="/images/okardtech-logo.png" alt="OkardTech" width={130} height={48} className="hidden dark:block sm:w-[160px]" />
                        <Image src="/images/okardtech-dark-logo.png" alt="OkardTech" width={130} height={48} className="block dark:hidden sm:w-[160px]" />
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                            {t("Footer.slogan") || "Building digital excellence for businesses across Laos and beyond."}
                        </p>
                        <div className="flex space-x-2 sm:space-x-3">
                            <SocialLink
                                href="https://www.facebook.com/profile.php?id=61564877261159"
                                icon={<Facebook className="h-4 w-4" />}
                                label="Facebook"
                                hoverColor="hover:bg-purple-600"
                            />
                            <SocialLink
                                href="https://www.tiktok.com/@okardtech"
                                icon={<TikTokIcon className="h-4 w-4" />}
                                label="TikTok"
                                hoverColor="hover:bg-black"
                            />
                            <SocialLink
                                href="https://wa.me/8562098780045"
                                icon={<WhatsAppIcon className="h-4 w-4" />}
                                label="WhatsApp"
                                hoverColor="hover:bg-green-500"
                            />
                            <SocialLink
                                href="tel:+8562098780045"
                                icon={<PhoneCall className="h-4 w-4" />}
                                label="Call us"
                                hoverColor="hover:bg-purple-600"
                                external={false}
                            />
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4">{t("Footer.servicesTitle") || "Services"}</h4>
                        <ul className="space-y-2 sm:space-y-2.5">
                            <li>
                                <Link href="#services" className="text-muted-foreground hover:text-foreground active:text-foreground text-xs sm:text-sm" style={{ transition: 'color 200ms ease-out' }}>
                                    {t("Footer.webDev") || "Web Development"}
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-muted-foreground hover:text-foreground active:text-foreground text-xs sm:text-sm" style={{ transition: 'color 200ms ease-out' }}>
                                    {t("Footer.mobileDev") || "Mobile App Development"}
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-muted-foreground hover:text-foreground active:text-foreground text-xs sm:text-sm" style={{ transition: 'color 200ms ease-out' }}>
                                    {t("Footer.customSolutions") || "Custom Software"}
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-muted-foreground hover:text-foreground active:text-foreground text-xs sm:text-sm" style={{ transition: 'color 200ms ease-out' }}>
                                    {t("Footer.itConsulting") || "IT Consulting"}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4">{t("Footer.company") || "Resources"}</h4>
                        <ul className="space-y-2 sm:space-y-2.5">
                            <li>
                                <Link href="#products" className="text-muted-foreground hover:text-foreground active:text-foreground text-xs sm:text-sm" style={{ transition: 'color 200ms ease-out' }}>
                                    {t("Footer.portfolio") || "Portfolio"}
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="text-muted-foreground hover:text-foreground active:text-foreground text-xs sm:text-sm" style={{ transition: 'color 200ms ease-out' }}>
                                    {t("Footer.aboutUs") || "About Us"}
                                </Link>
                            </li>
                            <li>
                                <Link href="#testimonials" className="text-muted-foreground hover:text-foreground active:text-foreground text-xs sm:text-sm" style={{ transition: 'color 200ms ease-out' }}>
                                    {t("Footer.testimonials") || "Testimonials"}
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-muted-foreground hover:text-foreground active:text-foreground text-xs sm:text-sm" style={{ transition: 'color 200ms ease-out' }}>
                                    {t("Footer.contactUs") || "Contact Us"}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="col-span-2 lg:col-span-1">
                        <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4">{t("Footer.contactTitle") || "Contact"}</h4>
                        <ul className="space-y-2 sm:space-y-2.5">
                            <li className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-muted-foreground">
                                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 text-purple-600 dark:text-purple-400 shrink-0" aria-hidden="true" />
                                <span>{t("Footer.location") || "Vientiane, Laos"}</span>
                            </li>
                            <li className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-muted-foreground">
                                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-purple-600 dark:text-purple-400 shrink-0" aria-hidden="true" />
                                <span>{t("Footer.email") || "contact@okardtech.com"}</span>
                            </li>
                            <li className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-muted-foreground">
                                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-purple-600 dark:text-purple-400 shrink-0" aria-hidden="true" />
                                <span>{t("Footer.phone") || "+856 20 9878 0045"}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                    <p>
                        &copy; {new Date().getFullYear()} {t("Footer.company") || "OkardTech"}. {t("Footer.rights") || "All rights reserved."}
                    </p>
                    <div className="flex gap-4 sm:gap-5">
                        <Link href="#" className="hover:text-foreground active:text-foreground" style={{ transition: 'color 200ms ease-out' }}>
                            {t("Footer.privacy") || "Privacy Policy"}
                        </Link>
                        <Link href="#" className="hover:text-foreground active:text-foreground" style={{ transition: 'color 200ms ease-out' }}>
                            {t("Footer.terms") || "Terms of Service"}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
