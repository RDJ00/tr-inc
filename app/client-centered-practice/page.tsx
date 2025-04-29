import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { ScrollAnimation } from "@/components/scroll-animation"
import { HelpForm } from "@/components/help-form"

export default function ClientCenteredPracticePage() {
  return (
    <>
      <PageHeader
        title="Client-Centered Practice"
        description="Individualized support plans that honor each survivor's unique journey"
      />

      <section className="py-16">
        <div className="container">
          <ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#0A1E39]">What is Client-Centered Practice?</h2>
                <p className="text-muted-foreground mb-4">
                  Client-Centered Practice (CCP) is an approach that places the survivor at the center of all services and support. It recognizes that each person's experience, needs, and healing journey are unique and that survivors are the experts in their own lives.
                </p>
                <p className="text-muted-foreground mb-4">
                  This approach honors individual autonomy, preferences, and choices, ensuring that survivors have a voice and agency in their healing process. It shifts the focus from "what happened to you" to "what do you need to heal."
                </p>
                <p className="text-muted-foreground">
                  At Touch & Restored, we believe that effective support must be tailored to each survivor's unique circumstances, cultural background, and personal goals. Our client-centered approach ensures that each person feels heard, valued, and empowered throughout their healing journey.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/webp/therapy.webp"
                  alt="Client-centered support session"
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
            <h2 className="text-3xl font-bold mb-8 text-[#0A1E39]">Core Principles of Client-Centered Practice</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-[#0A1E39]">Respect & Dignity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We approach each survivor with unconditional positive regard, respecting their inherent worth and dignity. We recognize that survivors are more than their trauma—they are whole people with strengths, talents, values, and dreams.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Non-judgmental support</li>
                    <li>Cultural sensitivity</li>
                    <li>Inclusive language and practices</li>
                    <li>Respect for personal boundaries</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-[#0A1E39]">Choice & Empowerment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Trauma often involves a loss of power and control. Our approach restores choice and autonomy, empowering survivors to make decisions about their healing journey. We provide options, not directives.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Informed consent at every stage</li>
                    <li>Multiple service options</li>
                    <li>Support for autonomous decision-making</li>
                    <li>Recognition of expertise in one's own experience</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-[#0A1E39]">Individualization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    No two survivors are alike, and no single approach works for everyone. We tailor our services to meet the unique needs, preferences, and goals of each individual we serve.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Personalized support plans</li>
                    <li>Flexible service delivery</li>
                    <li>Adaptation to changing needs</li>
                    <li>Recognition of different healing paths</li>
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
            <h2 className="text-3xl font-bold mb-8 text-center text-[#0A1E39]">Our Client-Centered Approach</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
              At Touch & Restored, we implement client-centered practices across all our services, ensuring that survivors receive the support that best meets their individual needs and circumstances.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Comprehensive Assessment",
                  description:
                    "We begin with a holistic assessment that goes beyond the traumatic event to understand the whole person—their strengths, resources, challenges, cultural background, and goals.",
                },
                {
                  title: "Collaborative Planning",
                  description:
                    "Support plans are developed in partnership with survivors, not for them. We explore options together and respect the survivor's expertise in their own experience and needs.",
                },
                {
                  title: "Flexible Services",
                  description:
                    "We offer a range of services and adapt our approach based on individual preferences, schedules, and comfort levels. Services can be adjusted as needs change.",
                },
                {
                  title: "Cultural Responsiveness",
                  description:
                    "We recognize that culture shapes how people experience and respond to trauma. Our services honor cultural identities and incorporate culturally relevant healing practices.",
                },
                {
                  title: "Strengths-Based Perspective",
                  description:
                    "Rather than focusing solely on problems, we identify and build upon each survivor's strengths, resilience, and resources, fostering empowerment and self-efficacy.",
                },
                {
                  title: "Continuous Feedback",
                  description:
                    "We regularly seek input from survivors about their experience with our services, making adjustments to ensure their needs are being met effectively and respectfully.",
                },
              ].map((approach, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#0A1E39]">{approach.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{approach.description}</p>
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
            <h2 className="text-3xl font-bold mb-8 text-[#0A1E39]">The Client-Centered Support Process</h2>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-[15px] md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-[#C79C4A]/30"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {[
                  {
                    title: "Initial Contact & Engagement",
                    content: "Creating a welcoming, safe space for survivors from the first interaction. Explaining services, building rapport, and establishing trust.",
                  },
                  {
                    title: "Collaborative Assessment",
                    content: "Working together to understand the survivor's unique situation, needs, strengths, and goals. Identifying immediate concerns and long-term aspirations.",
                  },
                  {
                    title: "Shared Decision-Making",
                    content: "Exploring options and developing a support plan together that aligns with the survivor's priorities. Ensuring informed consent and clear understanding of available resources.",
                  },
                  {
                    title: "Flexible Implementation",
                    content: "Putting the plan into action with built-in flexibility to adapt as needs change. Coordinating with other providers as needed while respecting confidentiality.",
                  },
                  {
                    title: "Ongoing Review & Adaptation",
                    content: "Regularly checking in about how the plan is working and making adjustments based on feedback and changing circumstances.",
                  },
                  {
                    title: "Empowered Transition",
                    content: "Supporting the survivor in building sustainable resources and connections as they move toward greater independence, with an open door for future support if needed.",
                  },
                ].map((step, index) => (
                  <div key={index} className="relative flex flex-col md:flex-row">
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#C79C4A] flex items-center justify-center text-white font-bold z-10">
                      {index + 1}
                    </div>

                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:text-right md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                      <h3 className="font-bold text-lg text-[#0A1E39] mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16 bg-[#0A1E39] text-white">
        <div className="container">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8 text-center">Get Personalized Support</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="mb-6">
                  At Touch & Restored, we understand that your journey is unique. Our client-centered approach ensures that you receive support tailored to your specific needs, preferences, and goals.
                </p>
                <p className="mb-6">
                  Whether you're seeking crisis support, ongoing counseling, legal advocacy, or other services, we're here to listen, understand, and collaborate with you to create a plan that works for your situation.
                </p>
                <div className="bg-white/10 p-6 rounded-lg mb-6">
                  <h3 className="font-bold text-xl mb-4">Contact Us Confidentially</h3>
                  <p className="text-sm mb-4">
                    Reach out to start a conversation about how we can support you. All inquiries are confidential, and there's no obligation to continue with services.
                  </p>
                  <Button className="bg-[#C79C4A] hover:bg-[#C79C4A]/90 text-white w-full">Call (954) 673-3506</Button>
                </div>
                <HelpForm />
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/webp/need-help.webp"
                  alt="Personalized support"
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