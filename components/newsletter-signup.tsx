"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"
import { FormEvent } from "react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!email) return
    
    setIsSubmitting(true)
    setError(null)
    
    // Create a FormData object to handle the form data
    const formData = new FormData()
    formData.append("email", email)
    
    try {
      const response = await fetch("https://formspree.io/f/xnndjjdl", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        setEmail("")
      } else {
        const errorText = await response.text()
        console.error("Form submission error:", errorText)
        setError("There was an error submitting the form. Please try again.")
      }
    } catch (error) {
      console.error("Newsletter signup error:", error)
      setError("There was an error connecting to the server. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
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
          <>
            {error && (
              <div className="bg-red-500/20 p-3 rounded-lg mb-4 text-white">
                <p className="text-sm">{error}</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                name="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button 
                type="submit" 
                className="bg-gold hover:bg-gold-dark text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
