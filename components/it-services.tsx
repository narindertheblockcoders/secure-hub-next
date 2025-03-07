"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Server, Shield, Activity, HardDrive } from "lucide-react"

export default function ITServices() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  const services = [
    {
      icon: <Server className="w-12 h-12 text-purple-400" />,
      title: "Managed IT & Infrastructure",
      description: "Complete oversight of your technology ecosystem, ensuring optimal performance.",
    },
    {
      icon: <Activity className="w-12 h-12 text-blue-400" />,
      title: "Proactive Monitoring & Maintenance",
      description: "24/7 vigilance to prevent issues before they impact your operations.",
    },
    {
      icon: <Shield className="w-12 h-12 text-green-400" />,
      title: "Network Security & Optimization",
      description: "Fortified networks that balance maximum security with peak performance.",
    },
    {
      icon: <HardDrive className="w-12 h-12 text-red-400" />,
      title: "Business Continuity & Disaster Recovery",
      description: "Robust backup solutions ensuring your data survives any catastrophe.",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative px-4 py-20 bg-gradient-to-b from-blue-950 to-purple-950"
    >
      <motion.div className="max-w-6xl mx-auto" style={{ opacity, y }}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-300">
            Keeping You Online, Operational, and Optimized—Across All Frontiers
          </h2>

          <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto">
            From this galaxy to the next, our IT Services provide the steady hand you need at mission control. We keep
            your systems in perfect orbit with 24/7 monitoring, swift troubleshooting, and strategic upgrades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center text-center p-6"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                }}
                className="mb-4"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2 text-purple-200">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mission control panel decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-purple-900/50"></div>
    </section>
  )
}

