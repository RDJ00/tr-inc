import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ContactForm } from "@/components/contact-form"

export default function DomesticViolencePage() {
  return (
    <>
      <PageHeader
        title="Domestic Violence"
        description="Understanding, preventing, and responding to domestic violence"
      />

      <section className="py-16">
        <div className="container">
          <ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#0A1E39]">What is Domestic Violence?</h2>
                <p className="text-muted-foreground mb-4">
                  Domestic violence is a pattern of behaviors used by one partner to maintain power and control over
                  another partner in an intimate relationship. It includes behaviors that physically harm, arouse fear,
                  prevent a partner from doing what they wish, or force them to behave in ways they do not want.
                </p>
                <p className="text-muted-foreground mb-4">
                  Domestic violence can happen to anyone regardless of race, age, sexual orientation, religion, gender,
                  socioeconomic background, or education level. It can include physical violence, sexual violence,
                  threats, emotional abuse, and economic deprivation.
                </p>
                <p className="text-muted-foreground">
                  Understanding the dynamics of domestic violence is the first step toward prevention and intervention.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Domestic violence awareness"
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
            <h2 className="text-3xl font-bold mb-8 text-[#0A1E39]">Risk Factors Due to Domestic Violence</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-[#0A1E39]">Individual Factors</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Low self-esteem</li>
                    <li>Low income</li>
                    <li>Low academic achievement</li>
                    <li>Young age</li>
                    <li>Aggressive or delinquent behavior as a youth</li>
                    <li>Heavy alcohol and drug use</li>
                    <li>Depression and suicide attempts</li>
                    <li>Anger and hostility</li>
                    <li>Prior history of being physically abusive</li>
                    <li>Having few friends and being isolated from other people</li>
                    <li>Unemployment</li>
                    <li>Emotional dependence and insecurity</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-[#0A1E39]">Relationship Factors</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Marital conflicts</li>
                    <li>Marital instability</li>
                    <li>Dominance and control of the relationship by one partner over the other</li>
                    <li>Economic stress</li>
                    <li>Unhealthy family relationships and interactions</li>
                    <li>Association with antisocial and aggressive peers</li>
                    <li>Parents with less than a high-school education</li>
                    <li>Poor parenting skills</li>
                    <li>Poor monitoring of children</li>
                    <li>Family violence and conflict</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-[#0A1E39]">Community Factors</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Poverty and associated factors (e.g., overcrowding)</li>
                    <li>
                      Low social capital—lack of institutions, relationships, and norms that shape a community's social
                      interactions
                    </li>
                    <li>Weak community sanctions against domestic violence</li>
                    <li>Traditional gender norms and gender inequality</li>
                    <li>Cultural norms that support aggression toward others</li>
                    <li>Societal norms that maintain women's inferiority and sexual submissiveness</li>
                    <li>Lack of enforcement of existing domestic violence laws</li>
                    <li>Lack of resources and support systems</li>
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
            <h2 className="text-3xl font-bold mb-8 text-center text-[#0A1E39]">Prevention Strategies</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
              Preventing domestic violence requires a comprehensive approach that addresses risk factors at multiple
              levels. Here are some evidence-based strategies:
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Education & Awareness",
                  description:
                    "School-based programs to teach healthy relationship skills and prevent dating violence.",
                },
                {
                  title: "Support for Survivors",
                  description:
                    "Shelter services, crisis intervention, counseling, and legal advocacy for those experiencing abuse.",
                },
                {
                  title: "Early Intervention",
                  description:
                    "Programs for children who witness violence to break the cycle of intergenerational violence.",
                },
                {
                  title: "Economic Support",
                  description: "Financial literacy training, employment assistance, and housing support for survivors.",
                },
                {
                  title: "Community Engagement",
                  description:
                    "Mobilizing communities to change social norms that support violence and gender inequality.",
                },
                {
                  title: "Policy & Legislation",
                  description:
                    "Strengthening laws and policies that protect victims and hold perpetrators accountable.",
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
            <h2 className="text-3xl font-bold mb-8 text-center text-[#0A1E39]">How Common is Domestic Violence?</h2>

            <div className="max-w-3xl mx-auto relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#C79C4A]/30"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {[
                  {
                    year: "CDC Statistics",
                    content:
                      "About 1 in 4 women and nearly 1 in 10 men have experienced contact sexual violence, physical violence, and/or stalking by an intimate partner during their lifetime.",
                  },
                  {
                    year: "Impact on Children",
                    content:
                      "Approximately 15.5 million children are exposed to domestic violence every year in the United States.",
                  },
                  {
                    year: "Economic Impact",
                    content:
                      "The cost of intimate partner violence exceeds $8.3 billion per year, including medical care, mental health services, and lost productivity.",
                  },
                  {
                    year: "Homicide Risk",
                    content:
                      "Women are 70 times more likely to be killed in the two weeks after leaving their abusive partner than at any other time during the relationship.",
                  },
                  {
                    year: "Underreporting",
                    content:
                      "Only about 34% of people who are injured by intimate partners receive medical care for their injuries.",
                  },
                ].map((item, index) => (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#C79C4A]"></div>

                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? "ml-auto pl-8" : "mr-auto pr-8 text-right"}`}>
                      <h3 className="font-bold text-lg text-[#0A1E39] mb-2">{item.year}</h3>
                      <p className="text-muted-foreground">{item.content}</p>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Need Help?</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="mb-6">
                  If you or someone you know is experiencing domestic violence, help is available. Our trained advocates
                  are here to provide support, safety planning, and resources.
                </p>
                <p className="mb-6">
                  All communications are confidential and our services are free of charge. You are not alone, and you
                  deserve to be safe.
                </p>
                <div className="bg-white/10 p-6 rounded-lg mb-6">
                  <h3 className="font-bold text-xl mb-4">Contact our 24/7 Helpline</h3>
                  <p className="text-2xl font-bold mb-2">(123) 456-7890</p>
                  <p className="text-sm">Call or text anytime, day or night</p>
                </div>
                <ContactForm />
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600"
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
