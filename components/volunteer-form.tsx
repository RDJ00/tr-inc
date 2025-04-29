"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FormEvent, useState } from "react"

export function VolunteerForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interests: "",
    availability: "",
    experience: "",
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
      const response = await fetch("https://formspree.io/f/xwpovvon", {
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
          fullName: "",
          email: "",
          phone: "",
          interests: "",
          availability: "",
          experience: "",
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
          Thank you for your interest in volunteering! We'll contact you shortly with more information.
        </div>
      )}
      
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-white mb-1">
            Full Name
          </label>
          <Input 
            type="text" 
            id="fullName"
            name="fullName" 
            placeholder="Your full name" 
            className="bg-white/80" 
            value={formData.fullName}
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
          <label htmlFor="interests" className="block text-sm font-medium text-white mb-1">
            Areas of Interest
          </label>
          <select
            id="interests"
            name="interests"
            className="w-full rounded-md border-0 bg-white/80 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C79C4A]"
            value={formData.interests}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>Select area of interest</option>
            <option value="crisis-line">Crisis Line Advocate</option>
            <option value="childrens-program">Children's Program Assistant</option>
            <option value="court-accompaniment">Court Accompaniment</option>
            <option value="admin-support">Administrative Support</option>
            <option value="community-outreach">Community Education & Outreach</option>
            <option value="events-fundraising">Special Events & Fundraising</option>
            <option value="professional-services">Professional Services</option>
            <option value="other">Other (Please specify in message)</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="availability" className="block text-sm font-medium text-white mb-1">
            Availability
          </label>
          <select
            id="availability"
            name="availability"
            className="w-full rounded-md border-0 bg-white/80 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C79C4A]"
            value={formData.availability}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>Select your availability</option>
            <option value="weekdays">Weekdays</option>
            <option value="evenings">Evenings</option>
            <option value="weekends">Weekends</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-white mb-1">
            Relevant Experience
          </label>
          <Input 
            type="text" 
            id="experience"
            name="experience" 
            placeholder="Briefly describe any relevant experience" 
            className="bg-white/80" 
            value={formData.experience}
            onChange={handleInputChange}
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
            Additional Information
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us why you're interested in volunteering and any additional information"
            className="w-full min-h-[150px] rounded-md border-0 bg-white/80 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#C79C4A]"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>
        
        <Button 
          type="submit"
          className="bg-[#C79C4A] hover:bg-[#C79C4A]/90 text-white w-full"
        >
          Submit Volunteer Application
        </Button>
      </form>
    </>
  )
} 