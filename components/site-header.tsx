"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const mainNavItems = [
    { title: "Home", href: "/" },
    {
      title: "About Us",
      href: "/about",
      items: [
        { title: "Our Mission", href: "/about#mission" },
        { title: "Our Founder", href: "/about#founder" },
        { title: "Board of Directors", href: "/about#team" },
      ],
    },
    { title: "Projects / News", href: "/news" },
    { title: "Domestic Violence", href: "/domestic-violence" },
    {
      title: "More…",
      items: [{ title: "Children & Trauma", href: "/children-trauma" }],
    },
    { title: "Support Us", href: "/support-us" },
    { title: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-white/80 backdrop-blur-sm border-b py-3"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sample_1_64412049136520-PC3f67sjeYytGHvJEZz87hgfHyofcC.png"
              alt="Touch & Restored Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
            Touch & Restored Inc.
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {mainNavItems.map((item, index) => {
            if (item.items) {
              return (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-1 h-auto p-0">
                      <span className="text-sm font-medium hover:text-gold transition-colors">{item.title}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="border border-gold/20">
                    {item.href && (
                      <DropdownMenuItem asChild>
                        <Link href={item.href} className="hover:text-gold hover:bg-tan-light">
                          Overview
                        </Link>
                      </DropdownMenuItem>
                    )}
                    {item.items.map((subItem, subIndex) => (
                      <DropdownMenuItem key={subIndex} asChild>
                        <Link href={subItem.href} className="hover:text-gold hover:bg-tan-light">
                          {subItem.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            }
            return (
              <Link
                key={index}
                href={item.href}
                className="text-sm font-medium hover:text-gold transition-colors relative group"
              >
                {item.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            )
          })}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Link href="/support-us">
            <Button className="bg-purple hover:bg-purple-dark text-white">Donate Now</Button>
          </Link>
        </div>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="border-gold/50">
              <Menu className="h-5 w-5 text-gold" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-l-gold/20 bg-white">
            <div className="flex items-center gap-2 mb-8 mt-4">
              <div className="relative h-8 w-8 overflow-hidden rounded-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sample_1_64412049136520-PC3f67sjeYytGHvJEZz87hgfHyofcC.png"
                  alt="Touch & Restored Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-base font-bold bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
                Touch & Restored Inc.
              </span>
            </div>
            <nav className="flex flex-col gap-4">
              {mainNavItems.map((item, index) => {
                if (item.items) {
                  return (
                    <div key={index} className="flex flex-col gap-2">
                      <Link
                        href={item.href || "#"}
                        className="text-sm font-medium text-navy hover:text-gold transition-colors"
                      >
                        {item.title}
                      </Link>
                      <div className="pl-4 flex flex-col gap-2 border-l-2 border-gold/30">
                        {item.items.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="text-sm font-medium text-navy/80 hover:text-gold transition-colors"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                }
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-sm font-medium text-navy hover:text-gold transition-colors"
                  >
                    {item.title}
                  </Link>
                )
              })}
              <div className="mt-6 pt-6 border-t border-gold/20">
                <Link href="/support-us" className="w-full">
                  <Button className="w-full bg-purple hover:bg-purple-dark text-white">Donate Now</Button>
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
