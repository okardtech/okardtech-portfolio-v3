import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4 max-w-md">
        <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-400 to-violet-600 mb-4">
          404
        </h1>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 w-full sm:w-auto" asChild>
            <Link href="/">
              <Home className="h-4 w-4 mr-2" aria-hidden="true" />
              Go to homepage
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
