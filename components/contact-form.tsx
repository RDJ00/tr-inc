"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FormEvent, useState } from "react"

export function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formspree.io/f/mwpovvln", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        }
      });
      
      if (response.ok) {
        setFormSubmitted(true);
        // Reset form fields
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
        
        // Optional: Reset success message after a few seconds
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <>
      {formSubmitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-center">
          Thank you for your message! We'll get back to you as soon as possible.
        </div>
      )}
      
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <Input 
            type="text" 
            name="name" 
            placeholder="Name" 
            className="bg-white" 
            value={formData.name}
            onChange={handleInputChange}
            required 
          />
        </div>
        <div>
          <Input 
            type="email" 
            name="email" 
            placeholder="Email" 
            className="bg-white" 
            value={formData.email}
            onChange={handleInputChange}
            required 
          />
        </div>
        <div>
          <Input 
            type="text" 
            name="subject" 
            placeholder="Subject" 
            className="bg-white" 
            value={formData.subject}
            onChange={handleInputChange}
            required 
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Message"
            className="w-full min-h-[150px] rounded-md border border-input bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C79C4A] focus:border-transparent"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <Button 
          type="submit"
          className="bg-[#C79C4A] hover:bg-[#C79C4A]/90 text-white"
        >
          Send Message
        </Button>
      </form>
    </>
  )
}
