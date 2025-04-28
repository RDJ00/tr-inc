"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function DonationCTA() {
  const [amount, setAmount] = useState<number | null>(50)
  const donationOptions = [25, 50, 100, 250, 500]

  return (
    <div className="bg-gradient-to-r from-navy to-navy-light text-white p-8 md:p-12 rounded-xl shadow-lg relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-purple/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Make a Difference Today</h2>
        <p className="mb-8">
          Your donation directly supports survivors of domestic violence, trauma, and abuse. Every contribution helps us
          provide essential services and create lasting change.
        </p>

        <div className="mb-8">
          <p className="text-sm mb-2">Select an amount:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {donationOptions.map((option) => (
              <button
                key={option}
                onClick={() => setAmount(option)}
                className={`px-6 py-3 rounded-md transition-all ${
                  amount === option
                    ? "bg-gold text-white font-medium scale-105 shadow-md"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                ${option}
              </button>
            ))}
            <button
              onClick={() => setAmount(null)}
              className={`px-6 py-3 rounded-md transition-all ${
                amount === null ? "bg-gold text-white font-medium scale-105 shadow-md" : "bg-white/10 hover:bg-white/20"
              }`}
            >
              Custom
            </button>
          </div>
        </div>

        {amount === null && (
          <div className="mb-8 max-w-xs mx-auto">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70">$</span>
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full px-8 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
            </div>
          </div>
        )}

        <Link href="/support-us#donate">
          <Button className="bg-gold hover:bg-gold-dark text-white px-8 py-6 text-lg font-medium rounded-md transition-all duration-300 hover:shadow-lg pulse-soft">
            Donate Now
          </Button>
        </Link>

        <p className="text-sm mt-4 text-white/70">
          Touch & Restored Inc. is a 501(c)(3) nonprofit organization. All donations are tax-deductible.
        </p>
      </div>
    </div>
  )
}
