"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FormEvent, useState } from "react"

export function PartnerForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    organizationName: "",
    contactName: "",
    email: "",
    phone: "",
    partnershipType: "",
    message: ""
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formspree.io/f/xyzwkkwg", {
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
          organizationName: "",
          contactName: "",
          email: "",
          phone: "",
          partnershipType: "",
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
          Thank you for your interest in partnering with us! We'll reach out to discuss next steps soon.
        </div>
      )}
      
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="organizationName" className="block text-sm font-medium text-white mb-1">
            Organization Name
          </label>
          <Input 
            type="text" 
            id="organizationName"
            name="organizationName" 
            placeholder="Your organization" 
            className="bg-white/80" 
            value={formData.organizationName}
            onChange={handleInputChange}
            required 
          />
        </div>
        
        <div>
          <label htmlFor="contactName" className="block text-sm font-medium text-white mb-1">
            Contact Name
          </label>
          <Input 
            type="text" 
            id="contactName"
            name="contactName" 
            placeholder="Your name" 
            className="bg-white/80" 
            value={formData.contactName}
            onChange={handleInputChange}
            required 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              Email
            </label>
            <Input 
              type="email" 
              id="email"
              name="email" 
              placeholder="Your email" 
              className="bg-white/80" 
              value={formData.email}
              onChange={handleInputChange}
              required 
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
              Phone Number
            </label>
            <Input 
              type="tel" 
              id="phone"
              name="phone" 
              placeholder="Your phone number" 
              className="bg-white/80" 
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="partnershipType" className="block text-sm font-medium text-white mb-1">
            Partnership Type
          </label>
          <select
            id="partnershipType"
            name="partnershipType"
            className="w-full rounded-md border-0 bg-white/80 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C79C4A]"
            value={formData.partnershipType}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>Select partnership type</option>
            <option value="sponsorship">Sponsorship</option>
            <option value="in-kind-donation">In-Kind Donation</option>
            <option value="workplace-giving">Workplace Giving</option>
            <option value="event-host">Event Hosting</option>
            <option value="other">Other (Please specify in message)</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your organization and how you'd like to partner with us"
            className="w-full min-h-[150px] rounded-md border-0 bg-white/80 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C79C4A]"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        
        <Button 
          type="submit"
          className="bg-white text-[#0A1E39] hover:bg-white/90 w-full"
        >
          Submit Partnership Request
        </Button>
      </form>
    </>
  )
} 