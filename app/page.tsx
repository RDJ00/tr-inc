"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Heart, Calendar, Users, Shield, Lightbulb, HandHeart, Megaphone, ArrowRight, MapPin } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { DonationCTA } from "@/components/donation-cta"
import { ImpactCounter } from "@/components/impact-counter"
import { VolunteerCTA } from "@/components/volunteer-cta"
import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { FormEvent, useState } from "react"
import { VolunteerModal } from "@/components/volunteer-modal"
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel"

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formspree.io/f/myzwkkez", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        }
      });
      
      if (response.ok) {
        setFormSubmitted(true);
        // Reset form fields
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: ""
        });
        
        // Optional: Reset success message after a few seconds
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/community-support.jpg"
            alt="Community support and empowerment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/70 to-navy/50 backdrop-blur-sm"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-purple/20 animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-gold/10 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <Image
                src="/tr-inc-logo.png"
                alt="Touch & Restored Logo"
                width={120}
                height={120}
                className="mx-auto"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              A Soft Touch for the Abused & Displaced
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Providing support, healing, and empowerment to survivors of domestic violence, trauma, and abuse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button 
                  className="bg-gold hover:bg-gold-dark text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                  asChild
                >
                  <Link href="/contact">Get Help</Link>
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <VolunteerModal>
                  <Button 
                    className="bg-purple hover:bg-purple-dark text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                  >
                    Volunteer
                  </Button>
                </VolunteerModal>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Button 
                  className="bg-navy hover:bg-navy/80 text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                  asChild
                >
                  <Link href="#ways-to-give">Donate</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <ScrollAnimation>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <ImpactCounter end={500} label="Survivors Supported" icon={<Heart className="h-6 w-6 text-gold" />} />
              <ImpactCounter end={30} label="Community Programs" icon={<Users className="h-6 w-6 text-gold" />} />
              <ImpactCounter end={75} label="Trained Volunteers" icon={<Shield className="h-6 w-6 text-gold" />} />
              <ImpactCounter end={6} label="Years of Service" icon={<Calendar className="h-6 w-6 text-gold" />} />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mission/Vision Section */}
      <section id="about" className="py-10 bg-tan relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="container relative z-10">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-navy relative inline-block brush-stroke mx-auto">
              Our Purpose
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-gold/20">
                <CardHeader className="pb-2 pt-4">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mb-2">
                    <Heart className="h-5 w-5 text-gold" />
                  </div>
                  <CardTitle className="text-2xl text-navy">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-navy/70">
                    To bring normality to the lives of adults or children and families who feel displaced.
                  </p>
                  <div className="mt-3 p-3 bg-tan-light rounded-lg border border-gold/20">
                    <p className="text-navy/80 text-sm font-medium">
                      If you are in need of immediate help please call
                      <br />
                      <span className="text-purple font-bold">The National Domestic Violence hotline</span>
                      <br />
                      <a href="tel:8007997233" className="text-gold hover:underline">800-799-7233</a> or visit{" "}
                      <a href="https://www.hotline.org" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                        www.hotline.org
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-gold/20">
                <CardHeader className="pb-2 pt-4">
                  <div className="w-10 h-10 rounded-full bg-purple/20 flex items-center justify-center mb-2">
                    <Lightbulb className="h-5 w-5 text-purple" />
                  </div>
                  <CardTitle className="text-2xl text-navy">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-navy/70">
                    To provide housing and care for abused and displaced adults and children with parents.
                  </p>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-10 bg-white relative">
        {/* Decorative pattern */}
        <div className="absolute inset-0 dot-pattern opacity-10"></div>

        <div className="container relative z-10">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-navy relative inline-block brush-stroke mx-auto">
              What We Do
            </h2>
            <p className="text-center text-navy/70 max-w-2xl mx-auto mb-6">
              Our comprehensive programs address the diverse needs of survivors at every stage of their healing journey.
            </p>
            
            {/* Mobile view carousel (visible only on small screens) */}
            <div className="block sm:hidden mb-6 relative">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent>
                  {[
                    {
                      title: "Domestic Violence",
                      description:
                        "Providing crisis intervention, safety planning, and ongoing support for survivors of intimate partner violence to ensure immediate safety and long-term healing.",
                      icon: <Shield className="h-6 w-6 text-purple" />,
                      link: "/domestic-violence",
                      delay: 0.1
                    },
                    {
                      title: "Children & Trauma",
                      description:
                        "Age-appropriate therapy and support services for children who have witnessed or experienced trauma, helping them process experiences and build resilience.",
                      icon: <Users className="h-6 w-6 text-purple" />,
                      link: "/children-trauma",
                      delay: 0.2
                    },
                    {
                      title: "Sexual Assault",
                      description:
                        "Specialized care and advocacy for survivors of sexual violence, including crisis response, medical accompaniment, and trauma-informed counseling services.",
                      icon: <HandHeart className="h-6 w-6 text-purple" />,
                      link: "/sexual-assault",
                      delay: 0.3
                    },
                    {
                      title: "Client-Centered Practice (CCP)",
                      description:
                        "Individualized support plans that honor each survivor's unique needs, choices, and healing journey, ensuring every person feels heard, valued, and empowered.",
                      icon: <Heart className="h-6 w-6 text-purple" />,
                      link: "/client-centered-practice",
                      delay: 0.4
                    },
                    {
                      title: "Awareness & Action",
                      description:
                        "Community education and prevention programs aimed at ending the cycle of violence through increased awareness, bystander intervention, and systemic change.",
                      icon: <Megaphone className="h-6 w-6 text-purple" />,
                      link: "/awareness-and-action",
                      delay: 0.5
                    },
                  ].map((program, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <Card
                        className="border-none shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-tan-light h-full flex flex-col"
                      >
                        <CardHeader className="pb-3 border-b border-gold/10">
                          <div className="w-12 h-12 rounded-full bg-purple/20 flex items-center justify-center mb-4">
                            {program.icon}
                          </div>
                          <CardTitle className="text-xl text-navy font-bold">{program.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="py-6 flex-grow">
                          <p className="text-navy/70">{program.description}</p>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Button 
                            variant="outline" 
                            className="w-full border-gold/50 text-gold hover:bg-gold hover:text-white hover:border-gold transition-all duration-300"
                            asChild
                          >
                            <Link
                              href={program.link}
                              className="flex items-center justify-center"
                            >
                              Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-4">
                  <CarouselPrevious className="relative -left-0 top-0 translate-y-0 bg-gold/10 hover:bg-gold/20 border-0 text-navy static mr-2" />
                  <CarouselNext className="relative -right-0 top-0 translate-y-0 bg-gold/10 hover:bg-gold/20 border-0 text-navy static" />
                </div>
              </Carousel>
            </div>

            {/* Desktop view grid (hidden on small screens) */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Domestic Violence",
                  description:
                    "Providing crisis intervention, safety planning, and ongoing support for survivors of intimate partner violence to ensure immediate safety and long-term healing.",
                  icon: <Shield className="h-6 w-6 text-purple" />,
                  link: "/domestic-violence",
                  delay: 0.1
                },
                {
                  title: "Children & Trauma",
                  description:
                    "Age-appropriate therapy and support services for children who have witnessed or experienced trauma, helping them process experiences and build resilience.",
                  icon: <Users className="h-6 w-6 text-purple" />,
                  link: "/children-trauma",
                  delay: 0.2
                },
                {
                  title: "Sexual Assault",
                  description:
                    "Specialized care and advocacy for survivors of sexual violence, including crisis response, medical accompaniment, and trauma-informed counseling services.",
                  icon: <HandHeart className="h-6 w-6 text-purple" />,
                  link: "/sexual-assault",
                  delay: 0.3
                },
                {
                  title: "Client-Centered Practice (CCP)",
                  description:
                    "Individualized support plans that honor each survivor's unique needs, choices, and healing journey, ensuring every person feels heard, valued, and empowered.",
                  icon: <Heart className="h-6 w-6 text-purple" />,
                  link: "/client-centered-practice",
                  delay: 0.4
                },
                {
                  title: "Awareness & Action",
                  description:
                    "Community education and prevention programs aimed at ending the cycle of violence through increased awareness, bystander intervention, and systemic change.",
                  icon: <Megaphone className="h-6 w-6 text-purple" />,
                  link: "/awareness-and-action",
                  delay: 0.5
                },
              ].map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: program.delay }}
                >
                  <Card
                    className="border-none shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-tan-light h-full flex flex-col"
                  >
                    <CardHeader className="pb-3 border-b border-gold/10">
                      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                        {program.icon}
                      </div>
                      <CardTitle className="text-xl text-navy font-bold">{program.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="py-6 flex-grow">
                      <p className="text-navy/70">{program.description}</p>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button 
                        variant="outline" 
                        className="w-full border-gold/50 text-gold hover:bg-gold hover:text-white hover:border-gold transition-all duration-300"
                        asChild
                      >
                        <Link
                          href={program.link}
                          className="flex items-center justify-center"
                        >
                          Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 bg-tan-light relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-gold/30 via-purple/20 to-gold/30"></div>

        <div className="container relative z-10">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-navy relative inline-block brush-stroke mx-auto">
              Events
            </h2>
            <p className="text-center text-navy/70 max-w-2xl mx-auto mb-12">
              Take a look at some of our events and the impact we've made together.
            </p>
            
            {/* Mobile Events Carousel */}
            <div className="block sm:hidden mb-6">
              <Carousel
                opts={{
                  align: "center",
                  loop: true,
                }}
                className="pb-6"
              >
                <CarouselContent className="py-4">
                  {[
                    {
                      title: "A Collision With Purpose: 2025 Kenya Outreach",
                      description: "In 2025, our Kenya Outreach mission will construct vital toilets, distribute clothing and dental care packages, plant trees for conservation, and visit cancer fighters. Join Dr. Jacqueline Bonner Sinclair in this compassionate initiative to empower lives, nurture the environment, and spread kindness throughout Kenya. Support needed via CashApp: $jbs1714j or Zelle: 954-673-3506.",
                      image: "/kenya-outreach-flyer.jpeg",
                      date: "June 6th-20th, 2025",
                      buttons: [
                        {
                          text: "Support This Mission",
                          link: "/news/kenya-outreach-2025",
                          primary: true
                        },
                        {
                          text: "View Details",
                          link: "/news/kenya-outreach-2025",
                          primary: false
                        }
                      ],
                      featured: true
                    },
                    {
                      title: "Trailblazers Talk Show for Christ – March 2025",
                      description: "Guest: Minister Jacqueline Sinclair, Host: Latoya Edwards. Together, they explored topics of real faith, personal stories of grace, and Christ-centered encouragement. Join us for an inspiring conversation that will strengthen your spiritual journey.",
                      image: "/events/trailblazers-talk-show-flyer.jpeg",
                      date: "March 8, 2025",
                      time: "12:00 PM EST",
                      buttons: [
                        {
                          text: "View Event Details",
                          link: "/news/trailblazers-march-2025",
                          primary: true
                        }
                      ]
                    },
                    {
                      title: "Prayer Breakfast",
                      description: "Join us for a morning of faith, food, and fellowship. Theme: Pray Bold (Hebrews 4:16). Hosted by Hon. Jaqueline Sinclaire & Pastor Pratt Brown, with Apostle Dr. K. Lyle, Prophetess Sausha McDonald, and Guest Speaker Apostle Margaret Thompson. $25 entry. Location: Transformation Ministries, 4987 N University Drive, Lauderhill, FL 33351.",
                      image: "/events/webp/prayer-breakfast-flyer.webp",
                      date: "May 24, 2024",
                      time: "10:00 AM",
                      buttons: [
                        {
                          text: "$25 Tickets",
                          link: "#",
                          primary: true
                        },
                        {
                          text: "View Details",
                          link: "/news/prayer-breakfast",
                          primary: false
                        }
                      ]
                    },
                    {
                      title: "Touch & Restored 6th Anniversary: Broken But Not Beyond Repair",
                      description: "Touch & Restored 6th Anniversary: 'Broken But Not Beyond Repair' Women Empowerment Conference. Join host Jacqueline Sinclair, Apostle Margaret Thompson, Rev. Maria Hinds, Lady Yvonne Shirley, Pastor K. Lyle, and Evangelist Marcia Baker for an inspiring celebration of healing and empowerment. Romans 8:28.",
                      image: "/events/webp/touch-and-restored-flyer.webp",
                      date: "January 24, 2025",
                      buttons: [
                        {
                          text: "Event Details",
                          link: "/news/touch-and-restored-anniversary",
                          primary: true
                        }
                      ]
                    },
                    {
                      title: "Ladies in HAT Back to School Fundraiser",
                      description: "Our elegant fundraising event featured a fashion show, raffles, and prizes for best hats, bringing the community together to support children affected by domestic violence. Attendees enjoyed an afternoon of style and philanthropy, with all proceeds providing essential school supplies and resources to help children start the academic year with confidence and the tools needed to succeed.",
                      image: "/events/webp/ladies-in-hat-flyer.webp",
                      date: "August 3, 2024",
                      buttons: [
                        {
                          text: "Event Details",
                          link: "/news/ladies-in-hat-fundraiser",
                          primary: true
                        }
                      ]
                    },
                  ].map((event, index) => (
                    <CarouselItem key={index} className="basis-full flex h-[500px]">
                      <div className="w-full h-full flex flex-col">
                        <ProjectCard
                          title={event.title}
                          description={event.description}
                          image={event.image}
                          date={event.date}
                          time={event.time}
                          buttons={event.buttons}
                          className={`h-full flex-1 ${event.featured ? "ring-4 ring-purple/40 shadow-[0_0_15px_rgba(128,0,128,0.5)]" : ""}`}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-4">
                  <CarouselPrevious className="relative -left-0 top-0 translate-y-0 bg-gold/10 hover:bg-gold/20 border-0 text-navy static mr-2" />
                  <CarouselNext className="relative -right-0 top-0 translate-y-0 bg-gold/10 hover:bg-gold/20 border-0 text-navy static" />
                </div>
              </Carousel>
            </div>
            
            {/* Desktop Events Carousel */}
            <div className="hidden sm:block">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                  slidesToScroll: 1
                }}
                className="pb-8"
              >
                <CarouselContent className="-ml-4 py-4">
                  {[
                    {
                      title: "A Collision With Purpose: 2025 Kenya Outreach",
                      description: "In 2025, our Kenya Outreach mission will construct vital toilets, distribute clothing and dental care packages, plant trees for conservation, and visit cancer fighters. Join Dr. Jacqueline Bonner Sinclair in this compassionate initiative to empower lives, nurture the environment, and spread kindness throughout Kenya. Support needed via CashApp: $jbs1714j or Zelle: 954-673-3506.",
                      image: "/kenya-outreach-flyer.jpeg",
                      date: "June 6th-20th, 2025",
                      buttons: [
                        {
                          text: "Support This Mission",
                          link: "/news/kenya-outreach-2025",
                          primary: true
                        },
                        {
                          text: "View Details",
                          link: "/news/kenya-outreach-2025",
                          primary: false
                        }
                      ],
                      featured: true
                    },
                    {
                      title: "Trailblazers Talk Show for Christ – March 2025",
                      description: "Guest: Minister Jacqueline Sinclair, Host: Latoya Edwards. Together, they explored topics of real faith, personal stories of grace, and Christ-centered encouragement. Join us for an inspiring conversation that will strengthen your spiritual journey.",
                      image: "/events/trailblazers-talk-show-flyer.jpeg",
                      date: "March 8, 2025",
                      time: "12:00 PM EST",
                      buttons: [
                        {
                          text: "View Event Details",
                          link: "/news/trailblazers-march-2025",
                          primary: true
                        }
                      ]
                    },
                    {
                      title: "Prayer Breakfast",
                      description: "Join us for a morning of faith, food, and fellowship. Theme: Pray Bold (Hebrews 4:16). Hosted by Hon. Jaqueline Sinclaire & Pastor Pratt Brown, with Apostle Dr. K. Lyle, Prophetess Sausha McDonald, and Guest Speaker Apostle Margaret Thompson. $25 entry. Location: Transformation Ministries, 4987 N University Drive, Lauderhill, FL 33351.",
                      image: "/events/webp/prayer-breakfast-flyer.webp",
                      date: "May 24, 2024",
                      time: "10:00 AM",
                      buttons: [
                        {
                          text: "$25 Tickets",
                          link: "#",
                          primary: true
                        },
                        {
                          text: "View Details",
                          link: "/news/prayer-breakfast",
                          primary: false
                        }
                      ]
                    },
                    {
                      title: "Touch & Restored 6th Anniversary: Broken But Not Beyond Repair",
                      description: "Touch & Restored 6th Anniversary: 'Broken But Not Beyond Repair' Women Empowerment Conference. Join host Jacqueline Sinclair, Apostle Margaret Thompson, Rev. Maria Hinds, Lady Yvonne Shirley, Pastor K. Lyle, and Evangelist Marcia Baker for an inspiring celebration of healing and empowerment. Romans 8:28.",
                      image: "/events/webp/touch-and-restored-flyer.webp",
                      date: "January 24, 2025",
                      buttons: [
                        {
                          text: "Event Details",
                          link: "/news/touch-and-restored-anniversary",
                          primary: true
                        }
                      ]
                    },
                    {
                      title: "Ladies in HAT Back to School Fundraiser",
                      description: "Our elegant fundraising event featured a fashion show, raffles, and prizes for best hats, bringing the community together to support children affected by domestic violence. Attendees enjoyed an afternoon of style and philanthropy, with all proceeds providing essential school supplies and resources to help children start the academic year with confidence and the tools needed to succeed.",
                      image: "/events/webp/ladies-in-hat-flyer.webp",
                      date: "August 3, 2024",
                      buttons: [
                        {
                          text: "Event Details",
                          link: "/news/ladies-in-hat-fundraiser",
                          primary: true
                        }
                      ]
                    },
                  ].map((event, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 flex h-[530px]">
                      <div className="w-full h-full flex flex-col">
                        <ProjectCard
                          title={event.title}
                          description={event.description}
                          image={event.image}
                          date={event.date}
                          time={event.time}
                          buttons={event.buttons}
                          className={`h-full flex-1 ${event.featured ? "ring-4 ring-purple/60 shadow-[0_0_20px_rgba(128,0,128,0.6)] animate-pulse-subtle" : ""}`}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-6">
                  <CarouselPrevious className="relative -left-0 top-0 translate-y-0 bg-gold/10 hover:bg-gold/20 border-0 text-navy static mr-2" />
                  <CarouselNext className="relative -right-0 top-0 translate-y-0 bg-gold/10 hover:bg-gold/20 border-0 text-navy static" />
                </div>
              </Carousel>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Donation CTA Section - Temporarily hidden until PayPal/Stripe integration
      <section className="py-16 bg-white">
        <div className="container">
          <ScrollAnimation>
            <DonationCTA />
          </ScrollAnimation>
        </div>
      </section>
      */}

      {/* Volunteer CTA Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <ScrollAnimation>
            <VolunteerCTA />
          </ScrollAnimation>
        </div>
      </section>

      {/* Ways to Give Section */}
      <section id="ways-to-give" className="py-16 bg-tan relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="container relative z-10">
          <ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-navy relative inline-block brush-stroke">
                  There Are Plenty of Ways to Give
                </h2>
                <p className="text-navy/70">
                  Support doesn't always mean monetary donations. Our community thrives on collective healing and the
                  power of coming together. Every action, no matter how small, contributes to our mission of supporting
                  survivors.
                </p>
                <div className="space-y-6 mt-8">
                  {[
                    {
                      title: "Share Our Mission",
                      description:
                        "Help spread awareness by sharing our mission with friends, family, and on social media.",
                      icon: <Megaphone className="h-6 w-6 text-gold" />,
                    },
                    {
                      title: "Be Supportive & Encouraging",
                      description:
                        "Your words of encouragement and support can make a significant difference in someone's healing journey.",
                      icon: <Heart className="h-6 w-6 text-gold" />,
                    },
                    {
                      title: "Donate or Volunteer",
                      description:
                        "Whether it's your time, skills, or resources, your contributions are valued and appreciated.",
                      icon: <HandHeart className="h-6 w-6 text-gold" />,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 group hover:bg-white/50 p-4 rounded-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/30 transition-all duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-navy mb-1">{item.title}</h3>
                        <p className="text-navy/70">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h3 className="text-2xl font-bold text-navy mb-6 text-center">Support Our Cause</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#00D632]/10 flex items-center justify-center mb-3">
                      <Image 
                        src="/webp/cashapp-icon.webp" 
                        alt="CashApp" 
                        width={40} 
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="font-medium text-navy mb-2">CashApp</h4>
                    <p className="text-navy/70 text-sm text-center mb-3">Send to $Touch2015</p>
                    <Button 
                      className="w-full bg-[#00D632] hover:bg-[#00C02D] text-white transition-all"
                      asChild
                    >
                      <Link href="https://cash.app/$Touch2015" target="_blank" rel="noopener noreferrer">
                        Donate via CashApp
                      </Link>
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#6D1ED4]/10 flex items-center justify-center mb-3">
                      <Image 
                        src="/webp/zelle-icon.webp" 
                        alt="Zelle" 
                        width={40} 
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="font-medium text-navy mb-2">Zelle</h4>
                    <p className="text-navy/70 text-sm text-center mb-3">Send to (954) 673-3506</p>
                    <Button 
                      className="w-full bg-[#6D1ED4] hover:bg-[#5A19B0] text-white transition-all"
                      asChild
                    >
                      <Link href="https://enroll.zellepay.com/qr-codes?data=eyJuYW1lIjoiVG91Y2ggJiBSZXN0b3JlZCIsImFjdGlvbiI6InBheW1lbnQiLCJ0b2tlbiI6IisxOTU0NjczMzUwNiJ9">
                        Donate via Zelle
                      </Link>
                    </Button>
                  </motion.div>
                </div>
                
                <div className="text-center">
                  <Button 
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300"
                    asChild
                  >
                    <Link href="/support-us#donate">
                      Explore More Ways to Give
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Sign the Pledge Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <ScrollAnimation>
            <div className="bg-gradient-to-r from-tan-light to-tan p-8 md:p-12 rounded-xl relative overflow-hidden shadow-lg">
              {/* Background watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <div className="w-[500px] h-[500px] border-[30px] border-navy rounded-full"></div>
              </div>

              {/* Purple ribbon decoration */}
              <div className="absolute top-0 right-0 w-24 h-24">
                <div className="absolute top-0 right-0 w-full h-full bg-purple/10 ribbon"></div>
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-navy mb-6 relative inline-block brush-stroke purple-brush-stroke mx-auto">
                  Sign the Pledge
                </h2>
                <p className="text-center italic text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-navy">
                  "I will not tolerate domestic abuse in any form in my own space and will do my part to help end it."
                </p>

                {formSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-center">
                    Thank you for signing the pledge! Your commitment makes a difference.
                  </div>
                )}

                <form 
                  onSubmit={handleSubmit}
                  className="space-y-4 max-w-xl mx-auto"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="bg-white/80 border-navy/20 focus:border-gold focus:ring-gold/50"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="bg-white/80 border-navy/20 focus:border-gold focus:ring-gold/50"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email (required)"
                      required
                      className="bg-white/80 border-navy/20 focus:border-gold focus:ring-gold/50"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Message (optional)"
                      className="w-full min-h-[120px] rounded-md border border-navy/20 bg-white/80 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div className="pt-2">
                    <Button 
                      type="submit"
                      className="w-full bg-purple hover:bg-purple-dark text-white transition-all duration-300 hover:shadow-md transform hover:scale-105"
                    >
                      Submit
                    </Button>
                  </div>
                  <p className="text-xs text-center text-navy/60 pt-2">
                    By submitting, you agree to receive occasional email updates. You can unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}
