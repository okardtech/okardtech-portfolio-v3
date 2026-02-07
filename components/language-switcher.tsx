"use client"

import { useLocale } from "@/contexts/locale-context"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Languages } from "lucide-react"

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLocale()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label={`Change language. Current: ${locale === "en" ? "English" : "Lao"}`}
          className="rounded-full h-9 w-9 hover:bg-muted/50 active:scale-95"
          style={{ transition: 'all 200ms cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <Languages className="h-[18px] w-[18px]" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[120px]">
        <DropdownMenuItem
          onClick={() => setLocale("en")}
          aria-current={locale === "en" ? "true" : undefined}
          className={locale === "en" ? "bg-purple-500/10 text-purple-600 dark:text-purple-400" : ""}
        >
          {t("LanguageSwitcher.english")}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLocale("lo")}
          aria-current={locale === "lo" ? "true" : undefined}
          className={locale === "lo" ? "bg-purple-500/10 text-purple-600 dark:text-purple-400" : ""}
        >
          {t("LanguageSwitcher.lao")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
