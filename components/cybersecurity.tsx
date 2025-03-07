"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ShieldAlert, Lock, Search, Shield } from "lucide-react"

export default function Cybersecurity() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  const shieldScale = useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1])
  const shieldOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0.5, 1])

  const services = [
    {
      icon: <ShieldAlert className="w-8 h-8 text-red-400" />,
      title: "Threat Detection & Response",
      description: "Identify and neutralize threats before they can impact your operations.",
    },
    {
      icon: <Lock className="w-8 h-8 text-yellow-400" />,
      title: "Data Encryption & Compliance",
      description: "Keep your data secure and meet regulatory requirements across galaxies.",
    },
    {
      icon: <Search className="w-8 h-8 text-green-400" />,
      title: "Security Audits & Vulnerability Assessments",
      description: "Regular evaluations to identify and address potential security gaps.",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "Proactive Defense Planning",
      description: "Stay ahead of emerging threats with forward-thinking security strategies.",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative px-4 py-20 bg-gradient-to-b from-indigo-950 to-gray-900"
    >
      {/* Shield effect */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ scale: shieldScale, opacity: shieldOpacity }}
      >
        <div className="relative w-[800px] h-[800px]">
          <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 animate-pulse"></div>
          <div
            className="absolute inset-[30px] rounded-full border-2 border-blue-400/20 animate-pulse"
            style={{ animationDelay: "300ms" }}
          ></div>
          <div
            className="absolute inset-[60px] rounded-full border border-blue-300/10 animate-pulse"
            style={{ animationDelay: "600ms" }}
          ></div>
        </div>
      </motion.div>

      <motion.div className="max-w-6xl mx-auto relative z-10" style={{ opacity, y }}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-orange-300 to-yellow-400">
            Protecting Your Orbit and Beyond
          </h2>

          <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto">
            Just like rogue asteroids in deep space, cyber threats can appear from nowhere. Our cybersecurity experts
            deploy advanced defense systems to keep you safe from attacks—no matter the galaxy they come from.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gray-900/80 p-6 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(239, 68, 68, 0.2)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-gray-800 rounded-lg">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-100">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

