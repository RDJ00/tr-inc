"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { VolunteerForm } from "@/components/volunteer-form"

export function VolunteerModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-[#0A1E39] border-[#C79C4A]/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">Become a Volunteer</DialogTitle>
          <DialogDescription className="text-white/70">
            Fill out the form below to join our volunteer team. Your time and skills make a difference in the lives of survivors.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <VolunteerForm />
        </div>
      </DialogContent>
    </Dialog>
  )
} 