"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface ImpactCounterProps {
  end: number
  duration?: number
  label: string
  icon?: React.ReactNode
}

export function ImpactCounter({ end, duration = 2000, label, icon }: ImpactCounterProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const countingDone = useRef(false)

  useEffect(() => {
    if (inView && !countingDone.current) {
      let startTime: number | null = null
      const startValue = 0

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        const currentCount = Math.floor(progress * (end - startValue) + startValue)

        setCount(currentCount)

        if (progress < 1) {
          window.requestAnimationFrame(step)
        } else {
          countingDone.current = true
        }
      }

      window.requestAnimationFrame(step)
    }
  }, [inView, end, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">{icon}</div>
      </div>
      <div className="impact-counter">{count}</div>
      <p className="text-navy font-medium mt-2">{label}</p>
    </div>
  )
}
