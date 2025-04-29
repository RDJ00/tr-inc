"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FormEvent, useState } from "react"

export function HelpForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    urgency: "non-urgent"
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
    
    // Create FormData object to handle the form data
    const formDataObj = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataObj.append(key, value);
    });
    
    try {
      const response = await fetch("https://formspree.io/f/mgvkooya", {
        method: "POST",
        body: formDataObj,
        headers: {
          "Accept": "application/json"
        }
      });
      
      if (response.ok) {
        setFormSubmitted(true);
        // Reset form fields
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          urgency: "non-urgent"
        });
        
        // Optional: Reset success message after a few seconds
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      } else {
        console.error("Form submission error:", await response.text());
      }
    } catch (error) {
      console.error("Help form submission error:", error);
    }
  };

  return (
    <>
      {formSubmitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-center">
          Thank you for reaching out. We will contact you as soon as possible. If this is an emergency, please call the national hotline at (800) 799-7233 immediately.
        </div>
      )}
      
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <Input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            className="bg-white/20 border-white/30 text-white placeholder:text-white/60" 
            value={formData.name}
            onChange={handleInputChange}
            required 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60" 
              value={formData.email}
              onChange={handleInputChange}
              required 
            />
          </div>
          <div>
            <Input 
              type="tel" 
              name="phone" 
              placeholder="Phone Number" 
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60" 
              value={formData.phone}
              onChange={handleInputChange}
              required 
            />
          </div>
        </div>
        
        <div>
          <select
            name="urgency"
            value={formData.urgency}
            onChange={handleInputChange}
            className="w-full rounded-md border-0 bg-white/20 border-white/30 text-white placeholder:text-white/60 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#C79C4A]"
            required
          >
            <option value="non-urgent">Non-Urgent (Response within 48 hours)</option>
            <option value="urgent">Urgent (Response within 24 hours)</option>
            <option value="emergency">Emergency - Call Hotline Instead</option>
          </select>
        </div>
        
        <div>
          <textarea
            name="message"
            placeholder="How can we help you? (Please share only what you feel comfortable with)"
            className="w-full min-h-[150px] rounded-md border border-white/30 bg-white/20 px-3 py-2 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#C79C4A] focus:border-transparent"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        
        <p className="text-xs text-white/70">
          If you are in immediate danger, please call 911 or the National Domestic Violence Hotline at (800) 799-7233.
        </p>
        
        <Button 
          type="submit"
          className="bg-white hover:bg-white/90 text-[#0A1E39] hover:text-[#0A1E39] font-medium"
        >
          Request Help
        </Button>
      </form>
    </>
  )
} 