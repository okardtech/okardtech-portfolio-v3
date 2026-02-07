"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle, RefreshCw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4 max-w-md">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-red-500/10 rounded-full">
            <AlertTriangle className="h-12 w-12 text-red-500" aria-hidden="true" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">
          Something went wrong
        </h1>
        <p className="text-muted-foreground mb-6">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={reset}
            className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700"
          >
            <RefreshCw className="h-4 w-4 mr-2" aria-hidden="true" />
            Try again
          </Button>
          <Button
            variant="outline"
            onClick={() => (window.location.href = "/")}
          >
            Go to homepage
          </Button>
        </div>
      </div>
    </div>
  )
}
