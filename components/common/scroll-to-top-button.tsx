"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", toggleVisibility, { passive: true })
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{ transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)' }}
    >
      <Button
        onClick={scrollToTop}
        size="icon"
        aria-label="Scroll to top"
        className="bg-background/90 backdrop-blur-sm hover:bg-background text-purple-600 dark:text-purple-400 rounded-full h-10 w-10 sm:h-11 sm:w-11 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-95 border border-border/50 hover:border-purple-500/30"
        style={{ transition: 'all 250ms cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        <ChevronUp className="h-5 w-5" aria-hidden="true" />
      </Button>
    </div>
  )
}
