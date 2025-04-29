import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { ScrollAnimation } from "@/components/scroll-animation"
import { HelpForm } from "@/components/help-form"

export default function SexualAssaultPage() {
  return (
    <>
      <PageHeader
        title="Sexual Assault"
        description="Specialized support and advocacy for survivors of sexual violence"
      />

      <section className="py-16">
        <div className="container">
          <ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#0A1E39]">Understanding Sexual Violence</h2>
                <p className="text-muted-foreground mb-4">
                  Sexual violence is any sexual act or attempt to obtain a sexual act by violence or coercion, unwanted sexual comments or advances, acts to traffic a person, or acts directed against a person's sexuality, regardless of the relationship to the victim.
                </p>
                <p className="text-muted-foreground mb-4">
                  It includes rape, sexual assault, sexual harassment, and any unwanted sexual contact or behavior that occurs without explicit consent. Sexual violence can happen to anyone, regardless of age, gender, race, ethnicity, religion, or sexual orientation.
                </p>
                <p className="text-muted-foreground">
                  At Touch & Restored, we provide a comprehensive range of services specifically designed to support survivors of sexual violence in their healing journey.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/webp/help.webp"
                  alt="Support for survivors"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16 bg-[#F6EFD6]">
        <div className="container">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8 text-[#0A1E39]">Impact of Sexual Violence</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-[#0A1E39]">Physical Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Physical injuries</li>
                    <li>Sexually transmitted infections</li>
                    <li>Unwanted pregnancy</li>
                    <li>Sexual dysfunction</li>
                    <li>Chronic pain conditions</li>
                    <li>Sleep disturbances</li>
                    <li>Eating disorders</li>
                    <li>Physical manifestations of stress</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-[#0A1E39]">Psychological Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Post-Traumatic Stress Disorder (PTSD)</li>
                    <li>Depression and anxiety</li>
                    <li>Flashbacks and nightmares</li>
                    <li>Self-blame and guilt</li>
                    <li>Shame and stigma</li>
                    <li>Suicidal thoughts</li>
                    <li>Dissociation</li>
                    <li>Trust issues</li>
                    <li>Fear and hypervigilance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-[#0A1E39]">Social Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Relationship difficulties</li>
                    <li>Social isolation</li>
                    <li>Educational disruption</li>
                    <li>Employment issues</li>
                    <li>Economic impact</li>
                    <li>Secondary victimization</li>
                    <li>Substance abuse</li>
                    <li>Difficulty with intimacy</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8 text-center text-[#0A1E39]">Our Services</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
              Touch & Restored provides specialized care and advocacy for survivors of sexual violence, addressing both immediate needs and long-term recovery.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "24/7 Crisis Response",
                  description:
                    "Immediate support available around the clock through our crisis hotline. Our trained advocates can provide emotional support, information, and referrals.",
                },
                {
                  title: "Medical Accompaniment",
                  description:
                    "Advocates who can accompany survivors to medical examinations, provide information about options, and offer support throughout the process.",
                },
                {
                  title: "Trauma-Informed Counseling",
                  description:
                    "Individual and group therapy specifically designed to address the trauma of sexual violence, facilitated by licensed therapists with specialized training.",
                },
                {
                  title: "Legal Advocacy",
                  description:
                    "Guidance through the legal system, including assistance with protective orders, explanation of legal options, and court accompaniment if desired.",
                },
                {
                  title: "Safety Planning",
                  description:
                    "Personalized planning to enhance safety and reduce risk, taking into account the unique circumstances of each survivor.",
                },
                {
                  title: "Support Groups",
                  description:
                    "Peer support groups providing a safe space to connect with others who have had similar experiences, reducing isolation and promoting healing.",
                },
              ].map((service, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#0A1E39]">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16 bg-[#B3D3F2]/20">
        <div className="container">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8 text-[#0A1E39]">Our Approach</h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/webp/therapy.webp"
                  alt="Supportive counseling session"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0A1E39] mb-6">Trauma-Informed Care</h3>
                <p className="text-muted-foreground mb-4">
                  Our approach is rooted in trauma-informed care, which recognizes the widespread impact of trauma and understands potential paths for recovery. We emphasize:
                </p>
                <ul className="space-y-4">
                  {[
                    "Safety—creating environments where survivors feel physically and emotionally safe",
                    "Trustworthiness—making interactions transparent and building trust",
                    "Choice—prioritizing survivor choice and control",
                    "Collaboration—maximizing collaboration and sharing power with survivors",
                    "Empowerment—focusing on strengths and skill-building",
                    "Cultural sensitivity—recognizing and addressing cultural, historical, and gender issues",
                  ].map((principle, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#C79C4A] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-muted-foreground">{principle}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button className="bg-[#C79C4A] hover:bg-[#C79C4A]/90 text-white">Request Support</Button>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16 bg-[#0A1E39] text-white">
        <div className="container">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8 text-center">Need Help?</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="mb-6">
                  If you or someone you know has experienced sexual violence, we're here to help. Our services are confidential, and our advocates are trained to provide compassionate, non-judgmental support.
                </p>
                <p className="mb-6">
                  You are not alone, and what happened was not your fault. Healing is possible, and we're here to support you every step of the way.
                </p>
                <div className="bg-white/10 p-6 rounded-lg mb-6">
                  <h3 className="font-bold text-xl mb-4">Sexual Assault Hotline</h3>
                  <p className="text-2xl font-bold mb-2">1-800-656-HOPE (4673)</p>
                  <p className="text-sm">Call anytime for confidential support, or reach out to us directly:</p>
                </div>
                <HelpForm />
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/webp/need-help.webp"
                  alt="Support and help"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
} 