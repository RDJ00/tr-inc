import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-tan pt-16 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-gold/80 via-purple/50 to-gold/80"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="container relative z-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-gold/50">
                <Image
                  src="/tr-inc-logo.png"
                  alt="Touch & Restored Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-lg font-bold text-navy">Touch & Restored Inc.</span>
                <p className="text-xs text-navy/70">A 501(c)(3) nonprofit organization</p>
              </div>
            </div>
            <p className="text-navy/80 mb-4">A safe haven for healing, hope, and empowerment.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-purple hover:text-purple-dark transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-purple hover:text-purple-dark transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-purple hover:text-purple-dark transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-navy mb-4 relative inline-block brush-stroke">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-navy/80 hover:text-gold transition-colors">
                About Us
              </Link>
              <Link href="/events" className="text-navy/80 hover:text-gold transition-colors">
                Events
              </Link>
              <Link href="/contact" className="text-navy/80 hover:text-gold transition-colors">
                Contact
              </Link>
              <Link href="/support-us" className="text-navy/80 hover:text-gold transition-colors">
                Donate
              </Link>
              <Link href="/domestic-violence" className="text-navy/80 hover:text-gold transition-colors">
                Domestic Violence
              </Link>
              <Link href="/children-trauma" className="text-navy/80 hover:text-gold transition-colors">
                Children & Trauma
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="font-medium text-navy mb-4 relative inline-block brush-stroke">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold mt-0.5" />
                <span className="text-navy/80">
                  123 Healing Way, Suite 101
                  <br />
                  Anytown, ST 12345
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold" />
                <Link href="mailto:info@touchandrestored.org" className="text-navy/80 hover:text-gold">
                  info@touchandrestored.org
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold" />
                <Link href="tel:+1234567890" className="text-navy/80 hover:text-gold">
                  (123) 456-7890
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-navy mb-4 relative inline-block brush-stroke">Get Monthly Updates</h3>
            <p className="text-navy/80 mb-4">Join our community to receive news, stories, and event notifications.</p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white border-gold/30 focus:border-gold focus:ring-gold/50"
              />
              <Button className="w-full bg-gold hover:bg-gold-dark text-white">
                <span>Subscribe</span>
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
        <div className="border-t border-gold/20 mt-8 pt-8 text-center text-sm text-navy/70">
          <p>&copy; {new Date().getFullYear()} Touch & Restored Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
