"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check initial theme from DOM (already set by ThemeScript)
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const updateTheme = (dark: boolean) => {
    const html = document.documentElement
    if (dark) {
      html.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      html.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    updateTheme(newTheme)
  }

  if (!mounted) {
    // Render placeholder with same size to prevent layout shift
    return (
      <Button variant="ghost" size="icon" aria-label="Toggle theme" className="opacity-0">
        <Sun className="h-5 w-5" aria-hidden="true" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative rounded-full h-9 w-9 hover:bg-muted/50 active:scale-95"
      style={{ transition: 'all 200ms cubic-bezier(0.16, 1, 0.3, 1)' }}
    >
      <Sun
        className={`h-[18px] w-[18px] ${isDark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`}
        style={{ transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)' }}
        aria-hidden="true"
      />
      <Moon
        className={`absolute h-[18px] w-[18px] ${isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"}`}
        style={{ transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)' }}
        aria-hidden="true"
      />
    </Button>
  )
}
