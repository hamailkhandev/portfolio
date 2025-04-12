"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Laptop, Server, FileText } from "lucide-react"
import { Animate } from "./animations/animate"
import siteConfig from "@/config/site-config.json"

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <Animate direction="right">
              <div className="relative rounded-lg shadow-lg overflow-hidden">
                <img
                  src={siteConfig.aboutImage || "/placeholder.svg"}
                  alt={`${siteConfig.name} - Development Workspace`}
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-60 mix-blend-overlay rounded-lg"></div>
              </div>
            </Animate>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <Animate direction="left" delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold">
                About <span className="text-primary">Me</span>
              </h2>
            </Animate>

            <Animate direction="left" delay={0.2}>
              <p className="text-muted-foreground">
                I'm {siteConfig.name}, a passionate MERN Stack Developer with expertise in building modern web
                applications. I specialize in creating scalable and performant solutions using the latest technologies
                in the web development ecosystem.
              </p>
            </Animate>

            <Animate direction="left" delay={0.3}>
              <p className="text-muted-foreground">{siteConfig.experience[0].description}</p>
            </Animate>

            <Animate direction="left" delay={0.4}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <Card className="h-full transition-colors hover:border-primary">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <Laptop className="h-10 w-10 text-primary mb-2" />
                    <h3 className="font-medium">Frontend</h3>
                  </CardContent>
                </Card>

                <Card className="h-full transition-colors hover:border-primary">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <Server className="h-10 w-10 text-primary mb-2" />
                    <h3 className="font-medium">Backend</h3>
                  </CardContent>
                </Card>

                <Card className="h-full transition-colors hover:border-primary">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <Code className="h-10 w-10 text-primary mb-2" />
                    <h3 className="font-medium">DevOps</h3>
                  </CardContent>
                </Card>
              </div>
            </Animate>

            <Animate direction="left" delay={0.5}>
              <Button className="transition-colors hover:bg-primary/90" asChild>
                <a href={siteConfig.resumeUrl} download>
                  <FileText className="mr-2 h-4 w-4" /> Download CV
                </a>
              </Button>
            </Animate>
          </div>
        </div>
      </div>
    </section>
  )
}
