"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Award } from "lucide-react"
import { Animate } from "./animations/animate"
import siteConfig from "@/config/site-config.json"

export function Experience() {
    return (
        <section id="experience" className="py-16 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4">
                <Animate direction="up">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Work <span className="text-primary">Experience</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            My professional journey and the certifications I've earned along the way.
                        </p>
                    </div>
                </Animate>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <Animate direction="right" className="lg:col-span-2">
                        <Card className="h-full transition-colors hover:border-primary">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Briefcase className="h-5 w-5 text-primary" />
                                    Work Experience
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-8">
                                {siteConfig.experience.map((exp, index) => (
                                    <div
                                        key={index}
                                        className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors"
                                    >
                                        <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                                        <div className="space-y-2">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
                                                <h3 className="font-semibold text-lg">{exp.position}</h3>
                                                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                                                    {exp.period}
                                                </Badge>
                                            </div>
                                            <p className="text-primary font-medium">{exp.company}</p>
                                            <p className="text-muted-foreground">{exp.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </Animate>

                    <Animate direction="left">
                        <Card className="h-full transition-colors hover:border-primary">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Award className="h-5 w-5 text-primary" />
                                    Certifications
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-4">
                                    {siteConfig.certifications.map((cert, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="bg-primary/10 p-2 rounded-full mt-0.5">
                                                <Award className="h-4 w-4 text-primary" />
                                            </div>
                                            <span>{cert}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </Animate>
                </div>
            </div>
        </section>
    )
}
