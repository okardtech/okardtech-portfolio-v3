"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"

const BinaryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDark, setIsDark] = useState(false)
  const animationRef = useRef<{ time: number }>({ time: 0 })

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains("dark")
      setIsDark(isDarkMode)
    }

    checkTheme()

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const fontSize = 14
    const columns = Math.floor(width / fontSize)
    const rows = Math.floor(height / fontSize)
    let grid: (0 | 1)[][] = []

    // Initialize the grid with binary only
    const initGrid = () => {
      grid = []
      for (let y = 0; y < rows; y++) {
        grid[y] = []
        for (let x = 0; x < columns; x++) {
          grid[y][x] = Math.random() > 0.5 ? 1 : 0
        }
      }
    }
    initGrid()

    // Get character based on wave intensity - simplified
    const getCharacterForWave = (intensity: number, originalBinary: 0 | 1) => {
      if (intensity > 0.6) {
        return "*"
      } else if (intensity > 0.3) {
        return "+"
      } else {
        return originalBinary.toString()
      }
    }

    // Get color - much more subtle
    const getColorForCharacter = (char: string) => {
      // Very subtle colors that don't compete with content
      if (isDark) {
        switch (char) {
          case "*":
            return "#1e3a5f" // Very dark blue
          case "+":
            return "#1e3a5f"
          default:
            return "#1f2937" // Very subtle gray
        }
      } else {
        switch (char) {
          case "*":
            return "#ddd6fe" // Very light purple
          case "+":
            return "#e9d5ff"
          default:
            return "#f3f4f6" // Very light gray
        }
      }
    }

    const draw = () => {
      // Set background color
      const bgColor = isDark ? "#0f172a" : "#ffffff"
      ctx.fillStyle = bgColor
      ctx.fillRect(0, 0, width, height)

      ctx.font = `${fontSize}px monospace`

      // Slower animation
      animationRef.current.time += 0.15

      // Draw the grid with single large moving wave
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
          if (grid[y] && grid[y][x] !== undefined) {
            const pixelX = x * fontSize
            const pixelY = y * fontSize

            const time = animationRef.current.time

            // Simplified wave calculation
            const waveX = Math.sin(time * 0.005) * width * 0.3
            const waveY = Math.cos(time * 0.004) * height * 0.25

            const hotspotX = width * 0.5 + waveX
            const hotspotY = height * 0.5 + waveY

            const distance = Math.sqrt(Math.pow(pixelX - hotspotX, 2) + Math.pow(pixelY - hotspotY, 2))

            // Larger, more subtle wave
            const hotspotEffect = Math.max(0, 1 - distance / 400) * 0.5

            const char = getCharacterForWave(hotspotEffect, grid[y][x])
            const color = getColorForCharacter(char)

            ctx.fillStyle = color
            ctx.fillText(char, pixelX, pixelY)
          }
        }
      }

      // Very rare binary flicker
      if (Math.random() < 0.1) {
        const x = Math.floor(Math.random() * columns)
        const y = Math.floor(Math.random() * rows)
        if (grid[y] && grid[y][x] !== undefined) {
          grid[y][x] = grid[y][x] === 1 ? 0 : 1
        }
      }
    }

    // Slower frame rate for less distraction (10fps instead of 20fps)
    const intervalId = setInterval(draw, 100)

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      initGrid()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(intervalId)
      window.removeEventListener("resize", handleResize)
    }
  }, [isDark])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 -z-10 opacity-60" />
}

export default BinaryBackground
