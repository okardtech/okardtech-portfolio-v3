"use client"

import type React from "react"
import { createContext, useState, useContext, useMemo, useEffect } from "react"
import enMessages from "../messages/en.json"
import loMessages from "../messages/lo.json"

type Locale = "en" | "lo"

const messages = {
  en: enMessages,
  lo: loMessages,
}

const LOCALE_STORAGE_KEY = "okardtech-locale"

// A little helper function to get nested keys like "Header.about"
const getTranslation = (locale: Locale, key: string) => {
  const keys = key.split(".")
  let result: unknown = messages[locale]
  for (const k of keys) {
    result = (result as Record<string, unknown>)?.[k]
    if (result === undefined) {
      return key // Return key if not found
    }
  }
  return result as string
}

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>("en")
  const [isHydrated, setIsHydrated] = useState(false)

  // Load locale from localStorage on mount
  useEffect(() => {
    const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null
    if (savedLocale && (savedLocale === "en" || savedLocale === "lo")) {
      setLocaleState(savedLocale)
    }
    setIsHydrated(true)
  }, [])

  // Save locale to localStorage when it changes
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem(LOCALE_STORAGE_KEY, newLocale)
  }

  const t = useMemo(() => (key: string) => getTranslation(locale, key), [locale])

  // Prevent hydration mismatch by rendering nothing until hydrated
  if (!isHydrated) {
    return null
  }

  return <LocaleContext.Provider value={{ locale, setLocale, t }}>{children}</LocaleContext.Provider>
}

export const useLocale = () => {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
