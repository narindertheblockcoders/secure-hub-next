"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Rocket() {
  return (
    <motion.div
      className="relative w-48 h-48"
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        duration: 3,
        ease: "easeInOut",
      }}
    >
      <Image src="/rocket.png" alt="Rocket" width={192} height={192} className="object-contain" />

      {/* Rocket exhaust animation */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-24 origin-top"
        animate={{
          scaleY: [0.7, 1.5, 0.7],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full bg-gradient-to-t from-orange-500 via-yellow-400 to-transparent rounded-b-full"></div>
      </motion.div>

      {/* Additional smaller exhaust particles */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-12">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-orange-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: 0,
            }}
            animate={{
              y: [0, 30 + Math.random() * 20],
              opacity: [1, 0],
              scale: [1, 0.5],
            }}
            transition={{
              duration: 0.8 + Math.random() * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 0.5,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

