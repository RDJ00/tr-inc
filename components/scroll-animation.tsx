"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import ClientOnly from "./client-only"

interface ScrollAnimationProps {
  children: React.ReactNode
  threshold?: number
  delay?: number
}

export function ScrollAnimation({ children, threshold = 0.1, delay = 0 }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [hasObserver, setHasObserver] = useState(false)

  useEffect(() => {
    setHasObserver(true)
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animated")
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, delay])

  return (
    <div ref={ref} className={`animate-on-scroll ${hasObserver ? "" : "no-js-fallback"}`}>
      <ClientOnly>{children}</ClientOnly>
    </div>
  )
}
