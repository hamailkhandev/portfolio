"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Phone, MapPin, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Animate } from "./animations/animate"
import siteConfig from "@/config/site-config.json"
import { SiUpwork } from "react-icons/si"

export function Footer() {
  return (
    <footer className="bg-secondary/30 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <Animate direction="up" delay={0.1}>
            <div className="space-y-4">
              <Link href="#home" className="text-2xl font-bold text-primary">
                Hamail Dev
              </Link>
              <p className="text-muted-foreground">
                Building exceptional digital experiences with modern web technologies. Specialized in MERN stack
                development.
              </p>
              <div className="flex space-x-3 pt-2">
                {siteConfig.socialLinks.github && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-primary/10 hover:bg-primary/20"
                    asChild
                  >
                    <Link href={siteConfig.socialLinks.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5 text-primary" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                )}

                {siteConfig.socialLinks.linkedin && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-primary/10 hover:bg-primary/20"
                    asChild
                  >
                    <Link href={siteConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5 text-primary" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                )}
                {siteConfig.socialLinks.upwork && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-primary/10 hover:bg-primary/20"
                    asChild
                  >
                    <Link href={siteConfig.socialLinks.upwork} target="_blank" rel="noopener noreferrer">
                      <SiUpwork className="h-5 w-5 text-primary" />
                      <span className="sr-only">Upwork</span>
                    </Link>
                  </Button>
                )}

                <Button variant="ghost" size="icon" className="rounded-full bg-primary/10 hover:bg-primary/20" asChild>
                  <Link href={`mailto:${siteConfig.email}`}>
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
              </div>
            </div>
          </Animate>

          <Animate direction="up" delay={0.2}>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                  <li key={item}>
                    <Link href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary">
                      {item}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href={siteConfig.resumeUrl}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary flex items-center"
                  >
                    <FileText className="h-4 w-4 mr-2" /> Resume
                  </a>
                </li>
              </ul>
            </div>
          </Animate>

          <Animate direction="up" delay={0.3}>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <a href={`tel:${siteConfig.phone}`} className="hover:text-primary">
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <span>{siteConfig.location}</span>
                </li>
              </ul>
            </div>
          </Animate>
        </div>

        <Animate direction="up" delay={0.4}>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </Animate>
      </div>
    </footer>
  )
}
