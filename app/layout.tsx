import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner"
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hamail Khan",
  description:
    "Professional portfolio of Muhammad Hamail Khan, a highly skilled MERN Stack Developer specializing in React, Node.js, Express, and MongoDB.",
  keywords: [
    "MERN Stack",
    "Web Developer",
    "React Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "Muhammad Hamail Khan",
    "Portfolio",
  ],
  other: {
    "google-site-verification": "yHGo8Fkunc6bUHu_mhOjVL9WA_7ubxVaFqqtrZOGHOo",
  },
  authors: [{ name: "Muhammad Hamail Khan" }],
  creator: "Muhammad Hamail Khan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hamaildev.vercel.app",
    title: "Muhammad Hamail Khan",
    description:
      "Professional portfolio of Muhammad Hamail Khan, a highly skilled MERN Stack Developer specializing in React, Node.js, Express, and MongoDB.",
    siteName: "Muhammad Hamail Khan Portfolio",
    images: [
      {
        url: "/profile-image.png",
        width: 800,
        height: 800,
        alt: "Muhammad Hamail Khan - MERN Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hamail Khan",
    description:
      "Professional portfolio of Muhammad Hamail Khan, a highly skilled MERN Stack Developer specializing in React, Node.js, Express, and MongoDB.",
    images: ["/profile-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/icon.ico",
    shortcut: "/icon.ico",
    apple: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
