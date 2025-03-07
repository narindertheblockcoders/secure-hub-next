"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Clock, PhoneCall, MessageSquare, Calendar } from "lucide-react"

export default function Support() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  // Portal animation
  const portalScale = useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1])
  const portalRotate = useTransform(scrollYProgress, [0.3, 0.6], [0, 360])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative px-4 py-20 bg-gradient-to-b from-gray-900 to-purple-950 overflow-hidden"
    >
      {/* Stargate/portal effect */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ scale: portalScale }}
      >
        <motion.div
          className="w-[500px] h-[500px] rounded-full border-[15px] border-purple-600/30"
          style={{ rotate: portalRotate }}
        >
          <div className="w-full h-full rounded-full border-[10px] border-blue-500/20"></div>
        </motion.div>
      </motion.div>

      <motion.div className="max-w-4xl mx-auto text-center relative z-10" style={{ opacity, y }}>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400">
          Count on Us 365 Days a Year (And Then Some!)
        </h2>

        <p className="text-lg mb-12 text-gray-300 max-w-3xl mx-auto">
          At Secure365, we believe true partnership means being there whenever you need us. Day or night, weekday or
          weekend, we're standing guard—shielding your systems from threats and helping you expand into new territories.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/20"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(147, 51, 234, 0.2)",
              borderColor: "rgba(168, 85, 247, 0.4)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-purple-200">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock assistance for all your technical needs.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/20"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(147, 51, 234, 0.2)",
              borderColor: "rgba(168, 85, 247, 0.4)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="flex flex-col items-center">
              <PhoneCall className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-purple-200">Rapid Response</h3>
              <p className="text-gray-300">Quick resolution to keep your systems running smoothly.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/20"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(147, 51, 234, 0.2)",
              borderColor: "rgba(168, 85, 247, 0.4)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="flex flex-col items-center">
              <MessageSquare className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-purple-200">Expert Guidance</h3>
              <p className="text-gray-300">Knowledgeable advice from seasoned professionals.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/20"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(147, 51, 234, 0.2)",
              borderColor: "rgba(168, 85, 247, 0.4)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="flex flex-col items-center">
              <Calendar className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-purple-200">Proactive Maintenance</h3>
              <p className="text-gray-300">Regular check-ups to prevent issues before they occur.</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

