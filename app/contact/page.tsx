import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" description="We're here to help. Reach out to us with any questions or concerns." />

      <section className="py-16">
        <div className="container">
          <ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#0A1E39]">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Whether you're seeking support, interested in volunteering, or have questions about our programs and
                  services, we're here to help. Fill out the form below or contact us directly using the information
                  provided.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F6EFD6] flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-[#C79C4A]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#0A1E39] mb-1">Our Address</h3>
                      <p className="text-muted-foreground">
                      7860 W. Commercial Blvd, Suite 913
                        <br />
                        Lauderhill, FL 33351
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F6EFD6] flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-[#C79C4A]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#0A1E39] mb-1">Phone</h3>
                      <p className="text-muted-foreground">
                        Main Office: (123) 456-7890
                        <br />
                        24/7 Helpline: (123) 456-7899
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F6EFD6] flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-[#C79C4A]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#0A1E39] mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        General Inquiries:{" "}
                        <Link href="mailto:info@touchandrestored.org" className="hover:text-[#C79C4A]">
                          info@touchandrestored.org
                        </Link>
                        <br />
                        Volunteer Coordinator:{" "}
                        <Link href="mailto:volunteer@touchandrestored.org" className="hover:text-[#C79C4A]">
                          volunteer@touchandrestored.org
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>

                <ContactForm />
              </div>
              <div className="relative h-[600px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=900&width=600"
                  alt="Two women smiling"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16 bg-[#0A1E39] text-white">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">We Need Your Support Today!</h2>
              <p className="max-w-2xl mx-auto mb-8">
                Your donation helps us provide critical services to survivors of domestic violence, trauma, and abuse.
                Together, we can create a community where everyone lives free from violence.
              </p>
              <Button className="bg-[#C79C4A] hover:bg-[#C79C4A]/90 text-white">Donate Now</Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}
