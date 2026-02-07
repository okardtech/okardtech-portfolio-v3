import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { LocaleProvider } from "@/contexts/locale-context"
import { cn } from "@/lib/utils"
import BinaryBackground from "@/components/binary-background"
import ThemeScript from "@/components/theme-script"

export const metadata: Metadata = {
  title: {
    default: "Okardtech - Portfolio",
    template: "%s | Okardtech"
  },
  description:
    "Okardtech is a leading technology company specializing in website, mobile app, and custom software development. We help businesses innovate, scale, and succeed with cutting-edge digital solutions.",
  keywords: [
    "Okardtech",
    "technology company",
    "website development",
    "mobile app development",
    "custom software",
    "digital solutions",
    "Lao tech company",
    "IT services Laos",
    "web application development"
  ],
  authors: [{ name: "Okardtech Team", url: "https://okardtech.com" }],
  creator: "Okardtech",
  publisher: "Okardtech",
  generator: "Next.js",
  metadataBase: new URL("https://okardtech.com"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true
    }
  },
  alternates: {
    canonical: "https://okardtech.com",
    languages: {
      en: "https://okardtech.com/en",
      lo: "https://okardtech.com/lo"
    }
  },
  openGraph: {
    title: "Okardtech - Empowering Digital Possibilities",
    description:
      "We specialize in website, mobile app, and custom software development. Helping businesses innovate and succeed in the digital era.",
    url: "https://okardtech.com",
    siteName: "Okardtech",
    images: [
      {
        url: "https://okardtech.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Okardtech - Empowering Digital Possibilities"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Okardtech - Empowering Digital Possibilities",
    description:
      "Website, mobile app, and custom software development to help your business grow.",
    creator: "@okardtech",
    images: ["https://okardtech.com/og-image.jpg"]
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png"
  },
  manifest: "/site.webmanifest",
  category: "technology"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-09G7MQDYEN"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-09G7MQDYEN');
            `,
          }}
        />
      </head>
      <body className={cn("antialiased font-sans")}>
        <LocaleProvider>
          <BinaryBackground />
          <div className="relative z-10">{children}</div>
        </LocaleProvider>
      </body>
    </html>
  )
}
