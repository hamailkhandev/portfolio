"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Animate } from "./animations/animate"
import siteConfig from "@/config/site-config.json"

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <Animate direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-primary">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I've worked with a variety of technologies in the web development world. Here are some of my technical
              skills and proficiency levels.
            </p>
          </div>
        </Animate>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.skills.map((skill, index) => (
            <Animate key={skill.name} direction="up" delay={0.05 * index}>
              <Card className="overflow-hidden transition-colors hover:border-primary">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">{skill.name}</h3>
                    <span className="text-sm text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-primary h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.1 }}
                      viewport={{ once: false }}
                    ></motion.div>
                  </div>
                </CardContent>
              </Card>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  )
}
