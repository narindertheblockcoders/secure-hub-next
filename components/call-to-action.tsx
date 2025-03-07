"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative px-4 py-20 bg-gradient-to-b from-purple-950 to-black"
    >
      {/* Star field intensifies */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <motion.div className="max-w-4xl mx-auto text-center relative z-10" style={{ opacity, y }}>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Ready to Launch into a New Digital Galaxy?
        </h2>

        <p className="text-lg mb-10 text-gray-300 max-w-3xl mx-auto">
          Your business was meant to shine across the universe. With Secure365 as your guide, you'll have the web
          development, IT services, cloud solutions, and cybersecurity measures you need to traverse galaxies with
          confidence. Let's chart a course to success—secure today, secure tomorrow, secure in every galaxy.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-full text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(79,70,229,0.5)]"
          >
            Embark on Your Journey
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-blue-500 text-blue-400 hover:bg-blue-950 px-8 py-6 rounded-full text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
          >
            Contact Us Today
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

