"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/contexts/locale-context"
import { GlassCard, SectionHeader } from "@/components/common"
import { MapPin, Mail, Phone, Loader2, CheckCircle } from "lucide-react"

export default function ContactSection() {
    const { t } = useLocale()
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [submitStatus, setSubmitStatus] = React.useState<"idle" | "success" | "error">("idle")

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus("idle")

        try {
            await new Promise((resolve) => setTimeout(resolve, 1500))
            console.log("Form submitted:", formData)
            setSubmitStatus("success")
            setFormData({ name: "", email: "", subject: "", message: "" })
            setTimeout(() => setSubmitStatus("idle"), 5000)
        } catch {
            setSubmitStatus("error")
        } finally {
            setIsSubmitting(false)
        }
    }

    const contactInfo = [
        { icon: <MapPin className="w-5 h-5" aria-hidden="true" />, title: t("Contact.locationTitle"), value: t("Contact.location") },
        { icon: <Mail className="w-5 h-5" aria-hidden="true" />, title: t("Contact.emailTitle"), value: t("Contact.email") },
        { icon: <Phone className="w-5 h-5" aria-hidden="true" />, title: t("Contact.callTitle"), value: t("Contact.phone") },
    ]

    const inputClass = "w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-muted/30 border border-border/40 rounded-xl text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/40 disabled:opacity-50 disabled:cursor-not-allowed"

    return (
        <section id="contact" className="py-12 sm:py-16 md:py-24">
            <div className="container max-w-[94%] sm:max-w-[88%] lg:max-w-6xl mx-auto">
                <SectionHeader
                    badge={t("Contact.badge")}
                    title={t("Contact.title")}
                    description={t("Contact.subtitle")}
                />

                <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 items-start">
                    {/* Contact Info */}
                    <GlassCard className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                        {contactInfo.map((item, index) => (
                            <div key={index} className="flex items-start gap-3 sm:gap-4 group">
                                <div
                                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-purple-500/[0.08] flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0 group-hover:bg-purple-500/[0.12] group-active:bg-purple-500/[0.15]"
                                    style={{ transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                                >
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-sm sm:text-base font-semibold text-foreground mb-0.5 sm:mb-1">{item.title}</h3>
                                    <p className="text-xs sm:text-sm text-muted-foreground">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </GlassCard>

                    {/* Form */}
                    <GlassCard className="p-4 sm:p-6">
                        {submitStatus === "success" ? (
                            <div className="flex flex-col items-center justify-center py-8 sm:py-10 text-center">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500/10 flex items-center justify-center mb-3 sm:mb-4">
                                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-green-500" aria-hidden="true" />
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1.5 sm:mb-2">
                                    {t("Contact.successTitle") || "Message Sent!"}
                                </h3>
                                <p className="text-xs sm:text-sm text-muted-foreground">
                                    {t("Contact.successMessage") || "Thank you for contacting us. We'll get back to you soon."}
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-1.5">
                                            {t("Contact.formName")}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder={t("Contact.formNamePlaceholder")}
                                            className={inputClass}
                                            style={{ transition: 'all 200ms ease-out' }}
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-1.5">
                                            {t("Contact.formEmail")}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder={t("Contact.formEmailPlaceholder")}
                                            className={inputClass}
                                            style={{ transition: 'all 200ms ease-out' }}
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-1.5">
                                        {t("Contact.formSubject")}
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        placeholder={t("Contact.formSubjectPlaceholder")}
                                        className={inputClass}
                                        style={{ transition: 'all 200ms ease-out' }}
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-1.5">
                                        {t("Contact.formMessage")}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder={t("Contact.formMessagePlaceholder")}
                                        rows={4}
                                        className={`${inputClass} resize-none`}
                                        style={{ transition: 'all 200ms ease-out' }}
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>

                                {submitStatus === "error" && (
                                    <p className="text-red-500 text-xs sm:text-sm">
                                        {t("Contact.errorMessage") || "Something went wrong. Please try again."}
                                    </p>
                                )}

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-11 sm:h-12 rounded-xl bg-purple-600 hover:bg-purple-500 active:bg-purple-700 text-white font-medium text-sm shadow-sm hover:shadow-md active:shadow-sm disabled:opacity-50"
                                    style={{ transition: 'all 250ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
                                            {t("Contact.formSubmitting") || "Sending..."}
                                        </>
                                    ) : (
                                        t("Contact.formSubmit")
                                    )}
                                </Button>
                            </form>
                        )}
                    </GlassCard>
                </div>
            </div>
        </section>
    )
}
