"use client";

import { useEffect } from "react";
import Head from "next/head";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/animations/fade-in";
import { Experience } from "@/components/experience";

export default function Home() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (link && link.hash && link.hash.startsWith("#")) {
        e.preventDefault();
        const targetId = link.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
          window.history.pushState(null, "", link.hash);
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Muhammad Hamail Khan",
      jobTitle: "MERN Stack Developer",
      url: "https://hamail.vercel.app",
      sameAs: [
        "https://github.com/hamailkhandev",
        "https://www.linkedin.com/in/hamail-khan-dev/",
      ],
      image: "https://hamail.vercel.app/profile-image.png",
      description:
        "Highly talented MERN Stack Developer with extensive experience developing scalable, high-performance web applications.",
      email: "mhamailkhandev@gmail.com",
      telephone: "+92 307 5922237",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Karachi",
        addressRegion: "Sindh",
        addressCountry: "Pakistan",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "SMIT",
      },
      worksFor: {
        "@type": "Organization",
        name: "Saylani Tech Limited",
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Muhammad Hamail Khan</title>
        <meta
          name="description"
          content="Highly talented MERN Stack Developer from Karachi, Pakistan. Creating modern, scalable web apps using React, Node, MongoDB, and Express."
        />
        <meta
          name="icon"
          content="Highly talented MERN Stack Developer from Karachi, Pakistan. Creating modern, scalable web apps using React, Node, MongoDB, and Express."
        />
        <meta property="og:title" content="Muhammad Hamail Khan Portfolio" />
        <meta
          property="og:description"
          content="Experienced MERN Stack Developer specializing in full-stack web development with React, Node.js, MongoDB, and Express."
        />
        <meta
          property="og:image"
          content="https://hamaildev.vercel.app/profile-image.png"
        />
        <meta property="og:url" content="https://hamaildev.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Muhammad Hamail Khan Portfolio" />
        <meta
          name="twitter:description"
          content="Full-stack MERN developer based in Karachi, passionate about building robust web applications."
        />
        <meta
          name="twitter:image"
          content="https://hamaildev.vercel.app/profile-image.png"
        />
        <link rel="canonical" href="https://hamaildev.vercel.app" />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <FadeIn>
        <main className="min-h-screen">
          <Header />
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </FadeIn>
    </>
  );
}
