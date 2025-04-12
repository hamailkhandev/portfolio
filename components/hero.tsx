"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react"
import Link from "next/link"
import { Animate } from "./animations/animate"
import { ParticlesBackground } from "./particles-background"
import { TypingAnimation } from "./typing-animation"
import siteConfig from "@/config/site-config.json"
import { SiUpwork } from "react-icons/si";


export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden flex items-center relative"
    >
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 space-y-6">
            <Animate direction="right" delay={0.1}>
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                {siteConfig.title}
              </div>
            </Animate>

            <Animate direction="right" delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Hi, I'm <span className="text-primary">{siteConfig.name}</span>
              </h1>
            </Animate>

            <Animate direction="right" delay={0.3}>
              <div className="h-8 md:h-10">
                <TypingAnimation
                  texts={siteConfig.typingTexts}
                  className="text-lg md:text-xl text-primary font-medium"
                />
              </div>
            </Animate>

            <Animate direction="right" delay={0.4}>
              <p className="text-lg text-muted-foreground">{siteConfig.bio}</p>
            </Animate>

            <Animate direction="right" delay={0.5}>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="transition-colors hover:bg-primary/90">
                  <Link href="#contact">
                    Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="transition-colors hover:bg-primary/10" asChild>
                  <a href={siteConfig.resumeUrl} target="_blank" >
                    <FileText className="mr-2 h-4 w-4" /> Resume
                  </a>
                </Button>
              </div>
            </Animate>

            <Animate direction="right" delay={0.6}>
              <div className="flex items-center gap-4 pt-4">
                {siteConfig.socialLinks.github && (
                  <Link href={siteConfig.socialLinks.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="rounded-full transition-colors hover:bg-primary/10">
                      <Github className="h-5 w-5" />
                    </Button>
                  </Link>
                )}
                {siteConfig.socialLinks.linkedin && (
                  <Link href={siteConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="rounded-full transition-colors hover:bg-primary/10">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </Link>
                )}
                {siteConfig.socialLinks.upwork && (
                  <Link href={siteConfig.socialLinks.upwork} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="rounded-full transition-colors hover:bg-primary/10">
                    <SiUpwork className="h-5 w-5" />
                    </Button>
                  </Link>
                )}
                <Link href={`mailto:${siteConfig.email}`}>
                  <Button variant="ghost" size="icon" className="rounded-full transition-colors hover:bg-primary/10">
                    <Mail className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </Animate>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <Animate direction="left" delay={0.3}>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
                <img
                  src={siteConfig.profileImage || "/placeholder.svg"}
                  alt={siteConfig.name}
                  className="w-full h-full object-cover bg-gradient-to-b from-gray-100 to-gray-900"
                />
              </div>
            </Animate>
          </div>
        </div>
      </div>
    </section>
  )
}
