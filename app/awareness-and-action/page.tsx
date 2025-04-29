import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { ScrollAnimation } from "@/components/scroll-animation"
import { HelpForm } from "@/components/help-form"

export default function AwarenessAndActionPage() {
  return (
    <>
      <PageHeader
        title="Awareness & Action"
        description="Community education and prevention programs aimed at ending the cycle of violence"
      />

      <section className="py-16">
        <div className="container">
          <ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#0A1E39]">Prevention Through Education</h2>
                <p className="text-muted-foreground mb-4">
                  At Touch & Restored, we believe that ending the cycle of violence requires not only supporting survivors but also preventing violence before it occurs. Through our Awareness & Action programs, we work to educate communities about domestic violence, sexual assault, and trauma while empowering people to take action.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our community education and prevention initiatives are designed to raise awareness, challenge harmful norms, promote healthy relationships, and build the skills needed for effective bystander intervention. By engaging individuals, organizations, and systems, we work toward creating a culture where violence is neither tolerated nor normalized.
                </p>
                <p className="text-muted-foreground">
                  Together, we can create lasting change that prevents violence and fosters safe, equitable communities where everyone can thrive.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/webp/child.webp"
                  alt="Community education workshop"
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
            <h2 className="text-3xl font-bold mb-8 text-[#0A1E39]">Our Programs</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-[#0A1E39]">School-Based Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Age-appropriate education programs for students from elementary through high school, addressing topics such as:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Healthy vs. unhealthy relationships</li>
                    <li>Consent and boundaries</li>
                    <li>Conflict resolution skills</li>
                    <li>Recognizing warning signs of abuse</li>
                    <li>Digital safety and online harassment</li>
                    <li>Resources for help and support</li>
                  </ul>
                  <div className="mt-6">
                    <Button className="bg-[#C79C4A] hover:bg-[#C79C4A]/90 text-white">Request a School Program</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-[#0A1E39]">Community Workshops</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Customizable workshops for community groups, faith communities, and organizations on topics including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Understanding domestic violence dynamics</li>
                    <li>Trauma and its impacts</li>
                    <li>Supporting survivors</li>
                    <li>Bystander intervention</li>
                    <li>Cultural considerations in addressing violence</li>
                    <li>Creating safe and respectful environments</li>
                  </ul>
                  <div className="mt-6">
                    <Button className="bg-[#C79C4A] hover:bg-[#C79C4A]/90 text-white">Schedule a Workshop</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-[#0A1E39]">Professional Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Specialized training for professionals who may encounter survivors in their work, including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Healthcare providers</li>
                    <li>Law enforcement</li>
                    <li>Educators and school staff</li>
                    <li>Faith leaders</li>
                    <li>Human resources professionals</li>
                    <li>Social service providers</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    Training focuses on recognition, trauma-informed response, and connecting survivors with appropriate resources.
                  </p>
                  <div className="mt-6">
                    <Button className="bg-[#C79C4A] hover:bg-[#C79C4A]/90 text-white">Inquire About Training</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-[#0A1E39]">Public Awareness Campaigns</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Initiatives designed to raise community awareness and challenge harmful norms, including:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Social media campaigns</li>
                    <li>Community events and forums</li>
                    <li>Public service announcements</li>
                    <li>Resource distribution</li>
                    <li>Survivor-centered storytelling</li>
                    <li>Media advocacy and outreach</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    Our campaigns aim to shift public perception, reduce stigma, and promote a culture of respect and nonviolence.
                  </p>
                  <div className="mt-6">
                    <Button className="bg-[#C79C4A] hover:bg-[#C79C4A]/90 text-white">Support Our Campaigns</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8 text-center text-[#0A1E39]">Prevention Strategies</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
              Our prevention work is guided by evidence-based approaches that address multiple levels of influence—from individual knowledge and attitudes to broader social and cultural factors.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Primary Prevention",
                  description:
                    "Programs aimed at preventing violence before it occurs by promoting healthy relationship skills, addressing root causes, and challenging harmful norms. These universal approaches target entire populations.",
                },
                {
                  title: "Secondary Prevention",
                  description:
                    "Early intervention strategies for individuals and groups at higher risk of experiencing or perpetrating violence, providing targeted education, resources, and support to prevent escalation.",
                },
                {
                  title: "Tertiary Prevention",
                  description:
                    "Efforts to prevent revictimization and recidivism through survivor support services, rehabilitation programs for people who have used violence, and system-level changes.",
                },
                {
                  title: "Social-Ecological Approach",
                  description:
                    "Recognition that violence prevention requires addressing factors at multiple levels: individual, relationship, community, and societal. Our programs target change across this spectrum.",
                },
                {
                  title: "Culturally Responsive Prevention",
                  description:
                    "Programs that recognize the diverse contexts of violence and are adapted to be relevant, accessible, and effective for different cultural communities.",
                },
                {
                  title: "Empowerment-Based Prevention",
                  description:
                    "Approaches that build skills, promote agency, and empower individuals and communities to take action against violence rather than positioning them as passive recipients.",
                },
              ].map((strategy, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#0A1E39]">{strategy.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{strategy.description}</p>
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
            <h2 className="text-3xl font-bold mb-8 text-[#0A1E39]">Bystander Intervention</h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-[#0A1E39] mb-6">The 5 Ds of Bystander Intervention</h3>
                <p className="text-muted-foreground mb-6">
                  One of the most effective ways to prevent violence is empowering community members to safely intervene when they witness concerning behavior. We teach the "5 Ds" approach to bystander intervention:
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      title: "Direct",
                      description: "Directly address the situation by naming what's happening or asking the person to stop."
                    },
                    {
                      title: "Distract",
                      description: "Create a distraction to interrupt the situation without directly addressing it."
                    },
                    {
                      title: "Delegate",
                      description: "Find someone else who can help, such as a friend, supervisor, or authority figure."
                    },
                    {
                      title: "Delay",
                      description: "Check in with the person afterward to see if they need support."
                    },
                    {
                      title: "Document",
                      description: "Record the incident if it's safe to do so, but respect privacy and ask the person what they'd like done with the documentation."
                    }
                  ].map((d, index) => (
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
                      <div>
                        <span className="font-medium text-[#0A1E39]">{d.title}</span>: <span className="text-muted-foreground">{d.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button className="bg-[#C79C4A] hover:bg-[#C79C4A]/90 text-white">Schedule a Training</Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
                <Image
                  src="/webp/need-help.webp"
                  alt="Bystander intervention training"
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
            <h2 className="text-3xl font-bold mb-8 text-center">Get Involved</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="mb-6">
                  Prevention is everyone's responsibility. You can play a vital role in creating a community free from violence by participating in our education programs, volunteering as a facilitator, hosting a workshop, or supporting our awareness campaigns.
                </p>
                <p className="mb-6">
                  Together, we can challenge harmful attitudes, promote healthy relationships, and create lasting change. Every action, no matter how small, contributes to a safer community for all.
                </p>
                <div className="bg-white/10 p-6 rounded-lg mb-6">
                  <h3 className="font-bold text-xl mb-4">Join Our Prevention Efforts</h3>
                  <p className="text-sm mb-4">
                    Contact us to learn more about our Awareness & Action programs or to discuss how we can bring prevention education to your school, organization, or community.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <Button className="bg-[#C79C4A] hover:bg-[#C79C4A]/90 text-white">Volunteer</Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#0A1E39]">Donate</Button>
                  </div>
                </div>
                <HelpForm />
              </div>
              <div className="space-y-6">
                <Card className="bg-white/10 border-none">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">Request a Program</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 mb-4">
                      Our education programs can be tailored to meet the needs of various audiences and settings. We offer presentations, workshops, and training sessions on a range of topics related to violence prevention.
                    </p>
                    <Button className="bg-white text-[#0A1E39] hover:bg-white/90 w-full">Request Information</Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 border-none">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">Become a Prevention Advocate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 mb-4">
                      Join our team of trained volunteers who deliver prevention education in schools and community settings. We provide comprehensive training and ongoing support.
                    </p>
                    <Button className="bg-white text-[#0A1E39] hover:bg-white/90 w-full">Apply Now</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
} 