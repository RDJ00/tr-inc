"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import { FormEvent } from "react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!email) return
    
    setIsSubmitting(true)
    
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
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        console.error("Form submission error:", await response.text())
      }
    } catch (error) {
      console.error("Newsletter signup error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {isSubmitted && (
        <div className="mb-2 p-2 bg-green-50 border border-green-200 text-green-700 rounded-md text-sm">
          Thank you for subscribing to our newsletter!
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-2">
        <Input
          type="email"
          name="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white border-gold/30 focus:border-gold focus:ring-gold/50"
          required
        />
        <Button 
          type="submit"
          className="w-full bg-gold hover:bg-gold-dark text-white"
          disabled={isSubmitting}
        >
          <span>{isSubmitting ? "Subscribing..." : "Subscribe"}</span>
          <Send className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </div>
  )
} 