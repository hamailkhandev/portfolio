"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Animate } from "./animations/animate"
import siteConfig from "@/config/site-config.json"

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <Animate direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of the projects I've worked on. Each project represents different skills and technologies
              I've mastered.
            </p>
          </div>
        </Animate>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.projects.map((project, index) => (
            <Animate key={index} direction="up" delay={0.1 * (index + 1)}>
              <Card className="overflow-hidden flex flex-col h-full transition-colors hover:border-primary">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                  ></motion.div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="transition-colors hover:bg-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild className="transition-colors hover:bg-primary/10">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild className="transition-colors hover:bg-primary/90">
                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </Animate>
          ))}
        </div>

        <Animate direction="up" delay={0.4}>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="transition-colors hover:bg-primary/10">
              View All Projects
            </Button>
          </div>
        </Animate>
      </div>
    </section>
  )
}
