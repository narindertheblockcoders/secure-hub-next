"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Cloud, Database, Share2, Lock } from "lucide-react"

export default function CloudSolutions() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  const cloudVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  }

  const services = [
    {
      icon: <Cloud className="w-10 h-10 text-blue-400" />,
      title: "Cloud Migration & Integration",
      description: "Seamless transition to cloud environments with minimal disruption.",
    },
    {
      icon: <Database className="w-10 h-10 text-blue-400" />,
      title: "Secure Data Storage & Backup",
      description: "Redundant, encrypted storage solutions that keep your data safe and accessible.",
    },
    {
      icon: <Share2 className="w-10 h-10 text-blue-400" />,
      title: "Real-Time Collaboration Tools",
      description: "Empower your team to work together from anywhere in the universe.",
    },
    {
      icon: <Lock className="w-10 h-10 text-blue-400" />,
      title: "Scalability & Performance Tuning",
      description: "Resources that grow with your needs, ensuring optimal performance at any scale.",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative px-4 py-20 bg-gradient-to-b from-purple-950 to-indigo-950 overflow-hidden"
    >
      {/* Cloud background elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-32 bg-blue-400 rounded-full blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-indigo-500 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 15, 0],
          }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 15, ease: "easeInOut" }}
        />
      </div>

      <motion.div className="max-w-6xl mx-auto relative z-10" style={{ opacity, y }}>
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-300 to-cyan-400"
            variants={cloudVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Soar Above the Clouds—Securely
          </motion.h2>

          <motion.p
            className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto"
            variants={cloudVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Elevate your operations to cosmic heights with our tailored cloud solutions. Whether you're migrating data,
            optimizing resources, or seeking a flexible infrastructure that can expand at hyperspeed, Secure365 helps
            you master this frontier.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white/5 p-6 rounded-xl border border-blue-300/20"
              whileHover={{
                scale: 1.03,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(147, 197, 253, 0.4)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-blue-900/50 rounded-lg">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-blue-200">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

