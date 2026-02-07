"use client"

import { useState, useEffect, useCallback } from "react"

interface UseCarouselOptions {
    totalItems: number
    autoPlayInterval?: number
    responsive?: {
        sm?: number
        md?: number
        lg?: number
    }
}

interface UseCarouselReturn {
    currentSlide: number
    itemsPerSlide: number
    totalSlides: number
    nextSlide: () => void
    prevSlide: () => void
    goToSlide: (index: number) => void
}

export function useCarousel({
    totalItems,
    autoPlayInterval = 6000,
    responsive = { sm: 1, md: 2, lg: 3 }
}: UseCarouselOptions): UseCarouselReturn {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [itemsPerSlide, setItemsPerSlide] = useState(responsive.lg || 3)

    const totalSlides = Math.ceil(totalItems / itemsPerSlide)

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, [totalSlides])

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    }, [totalSlides])

    const goToSlide = useCallback((index: number) => {
        setCurrentSlide(index)
    }, [])

    // Handle responsive items per slide
    useEffect(() => {
        const updateItemsPerSlide = () => {
            if (window.innerWidth < 640) {
                setItemsPerSlide(responsive.sm || 1)
            } else if (window.innerWidth < 1024) {
                setItemsPerSlide(responsive.md || 2)
            } else {
                setItemsPerSlide(responsive.lg || 3)
            }
        }

        updateItemsPerSlide()
        window.addEventListener("resize", updateItemsPerSlide)
        return () => window.removeEventListener("resize", updateItemsPerSlide)
    }, [responsive.sm, responsive.md, responsive.lg])

    // Reset to first slide when totalSlides changes
    useEffect(() => {
        if (currentSlide >= totalSlides) {
            setCurrentSlide(0)
        }
    }, [totalSlides, currentSlide])

    // Auto-play
    useEffect(() => {
        if (autoPlayInterval <= 0) return

        const interval = setInterval(nextSlide, autoPlayInterval)
        return () => clearInterval(interval)
    }, [nextSlide, autoPlayInterval])

    return {
        currentSlide,
        itemsPerSlide,
        totalSlides,
        nextSlide,
        prevSlide,
        goToSlide,
    }
}
