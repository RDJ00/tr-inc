"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { TeamMemberCard } from "@/components/team-member-card"
import { motion } from "framer-motion"
import { fallbackAboutData } from "../about-cms"
import { useEffect, useState } from "react"
import { AboutPageData } from "../about-cms"

// This would fetch data from Sanity (this is a placeholder)
async function getAboutPageData(): Promise<AboutPageData> {
  // In real implementation, this would call the Sanity client to fetch data
  // const aboutData = await client.fetch(aboutPageQuery)
  
  // For now, return the fallback data with a delay to simulate network request
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fallbackAboutData)
    }, 800)
  })
}

export function AboutPageContent() {
  const [pageData, setPageData] = useState<AboutPageData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAboutPageData()
        setPageData(data)
      } catch (error) {
        console.error("Error fetching about page data:", error)
        // Fallback to hardcoded data if fetch fails
        setPageData(fallbackAboutData)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading || !pageData) {
    return null // The Suspense boundary will show the skeleton
  }

  return (
    <>
      <PageHeader
        title={pageData.heroTitle}
        description={pageData.heroSubtitle}
        backgroundImage={pageData.heroImage?.asset?._ref || "/placeholder.svg?height=600&width=1920"}
      />

      <section className="py-12 md:py-16 overflow-hidden">
        <div className="container px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-3xl mx-auto">
              <p className="text-base md:text-lg text-muted-foreground font-serif italic">
                {pageData.introParagraph}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="mission" className="py-12 md:py-16 bg-[#F6EFD6] overflow-hidden">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-[#0A1E39]">
              {pageData.ourStoryTitle}
            </h2>
            <div className="max-w-4xl mx-auto">
              {pageData.ourStoryContent.map((paragraph, index) => (
                <motion.p 
                  key={index}
                  className="text-muted-foreground mb-6 font-serif leading-relaxed text-sm sm:text-base"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                  viewport={{ once: true }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="team" className="py-12 md:py-16 bg-[#B3D3F2]/20 overflow-hidden">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6 text-[#0A1E39]">
              {pageData.teamSectionTitle}
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 text-sm sm:text-base">
              {pageData.teamSectionDescription}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {pageData.teamMembers.map((member, index) => (
                <motion.div
                  key={member._key}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex justify-center"
                >
                  <TeamMemberCard
                    name={member.name}
                    title={member.title}
                    bio={member.bio}
                    image={member.image?.asset?._ref || "/placeholder.svg?height=600&width=400"}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 overflow-hidden">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#0A1E39] text-white p-6 md:p-12 rounded-xl">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{pageData.ctaTitle}</h2>
                <p className="mb-6 md:mb-8 text-sm sm:text-base">
                  {pageData.ctaDescription}
                </p>
                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                  {pageData.ctaButtons.map((button) => {
                    const variants = {
                      primary: "bg-[#C79C4A] hover:bg-[#C79C4A]/90 text-white",
                      secondary: "bg-white text-[#0A1E39] hover:bg-white/90",
                      outline: "border-white text-white hover:bg-white/10"
                    };
                    
                    return (
                      <Button 
                        key={button._key}
                        className={`text-sm sm:text-base ${variants[button.variant]}`}
                        variant={button.variant === "outline" ? "outline" : "default"}
                      >
                        {button.label}
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 