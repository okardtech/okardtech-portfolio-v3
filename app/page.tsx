"use client"

import { Header, Footer } from "@/components/layout"
import { ScrollToTopButton } from "@/components/common"
import {
  HeroSection,
  // TrustBar,
  ServicesSection,
  WhyChooseUs,
  ProductsSection,
  AboutUsSection,
  TeamSection,
  TestimonialSection,
  ContactSection,
  FinalCTA,
} from "@/components/sections"

export default function OkardtechPortfolio() {
  return (
    <div className="flex flex-col min-h-screen text-sm text-neutral-800 dark:text-neutral-300">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-md focus:outline-none"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="mx-auto flex-1">
        <HeroSection />
        {/* <TrustBar /> */}
        <ServicesSection />
        <WhyChooseUs />
        <ProductsSection />
        <AboutUsSection />
        <TeamSection />
        <TestimonialSection />
        <FinalCTA />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
