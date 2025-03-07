"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center relative px-4 py-20">
      <motion.div className="max-w-4xl mx-auto text-center" style={{ opacity, y }}>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Navigating Your Business Through the Stars… and Safeguarding Every Step
        </h2>

        <div className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto">
          <p className="mb-4">
            Think of Secure365 as your interstellar co-pilot, guiding you safely through the ever-expanding cosmos of
            modern technology. We blend visionary web development with rock-solid IT services, cloud solutions, and
            cybersecurity—ensuring that no matter which galaxy (or market) you're aiming for, you'll arrive unscathed.
          </p>
          <p>
            Our mission? Simple: to help your brand thrive and remain secure, from initial launch to the far reaches of
            tomorrow.
          </p>
        </div>
      </motion.div>

      {/* Decorative stars */}
      <div className="absolute top-20 left-20">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
          className="w-2 h-2 bg-white rounded-full"
        />
      </div>
      <div className="absolute bottom-40 right-40">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4 }}
          className="w-3 h-3 bg-blue-400 rounded-full"
        />
      </div>
    </section>
  )
}

