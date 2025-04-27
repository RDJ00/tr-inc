import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function ChildrenTraumaPage() {
  return (
    <>
      <PageHeader
        title="Children & Trauma"
        description="Understanding and supporting children affected by trauma and abuse"
      />

      <section className="py-16 bg-gradient-to-b from-[#F6EFD6]/50 to-white">
        <div className="container">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8 text-[#0A1E39]">Child Abuse & Neglect – What is it?</h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/webp/child.webp"
                  alt="Child with teddy bear"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-muted-foreground mb-6">
                  Child abuse and neglect refers to any act or failure to act on the part of a parent or caretaker which
                  results in harm, potential for harm, or threat of harm to a child. There are several forms of
                  maltreatment:
                </p>
                <ul className="list-disc pl-5 space-y-3 text-muted-foreground mb-6">
                  <li>
                    <strong>Physical abuse:</strong> Non-accidental physical injury as a result of punching, beating,
                    kicking, biting, shaking, throwing, stabbing, choking, hitting, burning, or otherwise harming a
                    child.
                  </li>
                  <li>
                    <strong>Sexual abuse:</strong> Includes activities by a parent or caregiver such as fondling a
                    child's genitals, penetration, incest, rape, sodomy, indecent exposure, and exploitation through
                    prostitution or the production of pornographic materials.
                  </li>
                  <li>
                    <strong>Emotional abuse:</strong> Pattern of behavior that impairs a child's emotional development
                    or sense of self-worth. This may include constant criticism, threats, or rejection, as well as
                    withholding love, support, or guidance.
                  </li>
                  <li>
                    <strong>Neglect:</strong> Failure to provide for a child's basic needs. Neglect may be physical,
                    educational, or emotional.
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  Children who experience abuse or neglect are at risk for developing a range of physical, mental, and
                  emotional health problems that can persist throughout their lifetime.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8 text-[#0A1E39]">What Does the Aftermath Look Like?</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Physical Health",
                  description:
                    "Children who experience abuse may suffer from injuries, impaired brain development, and chronic health conditions. They are also at higher risk for health problems as adults, including heart disease, obesity, and immune system disorders.",
                },
                {
                  title: "Mental Health",
                  description:
                    "Trauma can lead to anxiety, depression, post-traumatic stress disorder (PTSD), attachment issues, and other mental health challenges. Children may experience nightmares, flashbacks, and intrusive thoughts about the traumatic events.",
                },
                {
                  title: "Cognitive Development",
                  description:
                    "Abuse and neglect can impair cognitive development, leading to learning difficulties, lower academic achievement, language delays, and problems with executive functioning such as planning, focusing attention, and self-regulation.",
                },
                {
                  title: "Social & Emotional Development",
                  description:
                    "Traumatized children often struggle with emotional regulation, have difficulty forming healthy relationships, and may exhibit behavioral problems such as aggression, withdrawal, or inappropriate sexual behavior.",
                },
                {
                  title: "Long-term Consequences",
                  description:
                    "The effects of childhood trauma can persist into adulthood, increasing the risk of substance abuse, criminal behavior, intimate partner violence, depression, and suicide. The ACE (Adverse Childhood Experiences) study has linked childhood trauma to numerous negative health outcomes.",
                },
                {
                  title: "Resilience & Recovery",
                  description:
                    "With appropriate support and intervention, children can recover from trauma. Protective factors such as supportive relationships, therapy, and a stable environment can help children develop resilience and heal from their experiences.",
                },
              ].map((item, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#0A1E39]">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
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
            <h2 className="text-3xl font-bold mb-8 text-center text-[#0A1E39]">How We Help</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
              At Touch & Restored Inc., we provide specialized services for children who have experienced trauma and
              abuse. Our trauma-informed approach recognizes the impact of adverse experiences on development and
              focuses on creating safe, supportive environments for healing.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#0A1E39]">Our Services Include:</h3>
                <ul className="space-y-4">
                  {[
                    "Trauma-focused cognitive behavioral therapy (TF-CBT)",
                    "Play therapy for younger children",
                    "Art and expressive therapies",
                    "Group therapy with peers who have had similar experiences",
                    "Family therapy to strengthen relationships and improve communication",
                    "Parent education and support groups",
                    "Coordination with schools, medical providers, and other community resources",
                    "Advocacy within the legal and child welfare systems",
                  ].map((service, index) => (
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
                      <span className="text-muted-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Button className="bg-[#C79C4A] hover:bg-[#C79C4A]/90 text-white">Request Services</Button>
                </div>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/webp/therapy.webp"
                  alt="Child therapy session"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <ScrollAnimation>
            <div className="bg-[#0A1E39] text-white p-8 md:p-12 rounded-xl">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Recognizing the Signs of Child Abuse</h2>
                <p className="mb-8">
                  Recognizing the signs of child abuse is crucial for early intervention. If you suspect a child is
                  being abused or neglected, please contact your local child protective services agency or call the
                  National Child Abuse Hotline at 1-800-4-A-CHILD (1-800-422-4453).
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-[#C79C4A]">Warning Signs in Children</h3>
                    <ul className="list-disc pl-5 space-y-2 text-left">
                      <li>Unexplained injuries, burns, or bruises</li>
                      <li>Fear of going home or being with certain adults</li>
                      <li>Changes in behavior, such as aggression, withdrawal, or depression</li>
                      <li>Age-inappropriate sexual knowledge or behavior</li>
                      <li>Frequent absences from school</li>
                      <li>Poor hygiene or unsuitable clothing for the weather</li>
                      <li>Taking food or money without permission</li>
                      <li>Lack of medical or dental care when needed</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-[#C79C4A]">Warning Signs in Parents</h3>
                    <ul className="list-disc pl-5 space-y-2 text-left">
                      <li>Shows little concern for the child</li>
                      <li>Denies problems at school or at home</li>
                      <li>Asks teachers or caregivers to use harsh discipline</li>
                      <li>Sees the child as entirely bad, worthless, or burdensome</li>
                      <li>
                        Demands perfection or a level of physical or academic performance the child cannot achieve
                      </li>
                      <li>Looks to the child for care and attention</li>
                      <li>Severely limits the child's contact with others</li>
                      <li>Offers conflicting or unconvincing explanations for a child's injuries</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8">
                  <Button className="bg-white text-[#0A1E39] hover:bg-white/90">Learn How to Report Abuse</Button>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}
