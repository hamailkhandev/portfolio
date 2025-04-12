"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface AnimateProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  once?: boolean
  type?: "tween" | "spring" | "inertia"
}

export function Animate({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.5,
  once = false, // Changed to false to animate every time it comes into view
  type = "tween",
}: AnimateProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.3 }) // Reduced threshold to trigger earlier

  // Set initial and animate values based on direction
  let initial = {}
  if (direction === "up") initial = { opacity: 0, y: 50 }
  else if (direction === "down") initial = { opacity: 0, y: -50 }
  else if (direction === "left") initial = { opacity: 0, x: 50 }
  else if (direction === "right") initial = { opacity: 0, x: -50 }
  else initial = { opacity: 0 }

  let animate = {}
  if (direction === "up" || direction === "down") animate = { opacity: 1, y: 0 }
  else if (direction === "left" || direction === "right") animate = { opacity: 1, x: 0 }
  else animate = { opacity: 1 }

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden") // Reset animation when out of view
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: initial,
        visible: {
          ...animate,
          transition: {
            type,
            duration,
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
