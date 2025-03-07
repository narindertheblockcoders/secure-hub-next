"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Rocket, Code, Smartphone, Search } from "lucide-react"

export default function WebDevelopment() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
      },
    }),
  }

  const benefits = [
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "Cosmic Design Aesthetic",
      description: "We fuse creativity with function to build unique, user-friendly interfaces.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      title: "Mobile-Responsive & Stellar Performance",
      description: "Your website looks and operates flawlessly on any device.",
    },
    {
      icon: <Search className="w-8 h-8 text-cyan-400" />,
      title: "Search Visibility in Any Orbit",
      description: "Enjoy SEO-friendly architecture that helps your site shine among the stars.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-pink-400" />,
      title: "Future-Ready Tech",
      description: "Our code is built to evolve—so your site can boldly go wherever your business leads.",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative px-4 py-20 bg-gradient-to-b from-black to-blue-950"
    >
      <motion.div className="max-w-6xl mx-auto" style={{ opacity, y }}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            One Small Step for Your Brand, One Giant Leap for Your Online Presence
          </h2>

          <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto">
            Every expedition to new frontiers begins with a reliable launchpad—and your website is no exception. Our web
            development team designs visually captivating, high-performing platforms that capture your audience's
            imagination and hold strong, no matter how far you travel. Because when your ambition spans galaxies, your
            website needs to keep pace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="bg-blue-900/30 p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-blue-200">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

