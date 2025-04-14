"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    setIsSubmitted(true)
    setEmail("")
  }

  return (
    <div className="bg-gradient-to-r from-navy to-navy/90 text-white p-8 md:p-12 rounded-xl">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
          <Mail className="h-8 w-8 text-gold" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-8">
          Subscribe to our newsletter to receive updates on our projects, events, and ways you can get involved.
        </p>
        {isSubmitted ? (
          <div className="bg-gold/20 p-4 rounded-lg">
            <p className="font-medium">Thank you for subscribing!</p>
            <p className="text-sm mt-2">We'll keep you updated with our latest news and events.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button type="submit" className="bg-gold hover:bg-gold-dark text-white">
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}
