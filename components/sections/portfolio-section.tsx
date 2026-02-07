"use client"

import React from "react"
import Image from "next/image"
import { useLocale } from "@/contexts/locale-context"
import { SectionHeader, TabGroup } from "@/components/common"

export default function ProductsSection() {
    const { t } = useLocale()
    const [activeFilter, setActiveFilter] = React.useState("all")

    const projects = [
        // {
        //     id: 1,
        //     image: "/images/e-comerce.png",
        //     title: "E-Commerce Platform",
        //     description: "Modern online shopping experience with advanced features",
        //     category: "Website",
        //     size: "tall",
        // },
        
        {
            id: 1,
            image: "/images/lanxang-app.png",
            title: "Lanexang Airways International Application",
            description: "Flight booking application ",
            category: "Mobile",
            size: "tall",
        },
        {
            id: 2,
            image: "/images/okardcare.png",
            title: "Okardcare",
            description: "Comprehensive health management mobile application",
            category: "Website",
            size: "wide",
        },
        // {
        //     id: 3,
        //     image: "/images/okardtech-web.png",
        //     title: "Okardtech Portfolio",
        //     description: "Custom software development solutions",
        //     category: "Website",
        //     size: "wide",
        // },
        {
            id: 4,
            image: "/images/a-z-works.png",
            title: "A-Z Work",
            description: "E-Marketplace Platform",
            category: "Mobile",
            size: "tall",
        },
        {
            id: 5,
            image: "/images/backend.png",
            title: "Training",
            description: "Master backend course traning",
            category: "Training",
            size: "square",
        },
        {
            id: 6,
            image: "/images/full-stack.png",
            title: "Training",
            description: "Full-stack course traning",
            category: "Training",
            size: "square",
        },
        {
            id: 7,
            image: "/images/frontend-course.png",
            title: "Training",
            description: "Master frontend course traning",
            category: "Training",
            size: "square",
        },
    ]

    const filterTabs = [
        { key: "all", label: t("Projects.all") },
        { key: "Website", label: t("Projects.website") },
        { key: "Mobile", label: t("Projects.mobileApplication") },
        { key: "Training", label: t("Projects.training") },
    ]

    const filteredProjects =
        activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

    const getGridClass = (size: string) => {
        switch (size) {
            case "tall":
                return "md:row-span-2"
            case "wide":
                return "md:col-span-2"
            case "square":
                return ""
            default:
                return ""
        }
    }
    return (
        <section id="products" className="py-12 sm:py-16 md:py-24">
            <div className="container max-w-[94%] sm:max-w-[88%] lg:max-w-6xl mx-auto">
                <SectionHeader
                    badge={t("Projects.title")}
                    title={t("Projects.subTitle")}
                    description={t("Projects.description")}
                />

                <TabGroup
                    tabs={filterTabs}
                    activeTab={activeFilter}
                    onTabChange={setActiveFilter}
                    ariaLabel="Project categories"
                />

                <div
                    id="projects-grid"
                    role="tabpanel"
                    className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 auto-rows-[140px] sm:auto-rows-[200px]"
                >
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className={`group relative overflow-hidden rounded-lg sm:rounded-xl cursor-pointer ring-1 ring-border/30 hover:ring-border/50 active:ring-border/60 shadow-sm hover:shadow-lg active:shadow-md ${getGridClass(project.size)}`}
                            style={{ transition: 'all 400ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                        >
                            {/* Image */}
                            <Image
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-[1.04]"
                                style={{ transition: 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                            />

                            {/* Base gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                            {/* Hover gradient - always visible on mobile */}
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/70 sm:from-black/80 via-black/20 sm:via-black/30 to-transparent sm:opacity-0 sm:group-hover:opacity-100 pointer-events-none"
                                style={{ transition: 'opacity 400ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                            />

                            {/* Category badge */}
                            <div className="absolute top-2 sm:top-3 left-2 sm:left-3 z-10">
                                <span
                                    className="inline-block px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-white bg-black/30 backdrop-blur-sm rounded-full"
                                    style={{ transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                                >
                                    {project.category}
                                </span>
                            </div>

                            {/* Content - always visible on mobile */}
                            <div
                                className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-4 sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
                                style={{ transition: 'all 400ms cubic-bezier(0.16, 1, 0.3, 1)' }}
                            >
                                <h3 className="text-white font-semibold text-xs sm:text-base mb-0.5 sm:mb-1 line-clamp-1">
                                    {project.title}
                                </h3>
                                <p className="text-white/80 text-[10px] sm:text-sm line-clamp-2 hidden sm:block">
                                    {project.description}
                                </p>
                            </div>

                            {/* Shine effect */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none hidden sm:block"
                                style={{
                                    background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.06) 55%, transparent 60%)',
                                    transition: 'opacity 500ms cubic-bezier(0.16, 1, 0.3, 1)',
                                }}
                            />
                        </div>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-8 sm:py-12">
                        <p className="text-muted-foreground text-xs sm:text-sm">No projects found for the selected category.</p>
                    </div>
                )}
            </div>
        </section>
    )
}
