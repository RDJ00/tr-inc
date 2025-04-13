"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would send the email to your backend
    alert("Thank you for subscribing!")
    setEmail("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <Input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-white border-gold/30 focus:border-gold focus:ring-gold/50"
      />
      <Button 
        type="submit"
        className="w-full bg-gold hover:bg-gold-dark text-white"
      >
        <span>Subscribe</span>
        <Send className="ml-2 h-4 w-4" />
      </Button>
    </form>
  )
} 