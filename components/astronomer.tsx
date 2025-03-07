"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Astronomer() {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 1, 0, -1, 0],
      }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        duration: 8,
        ease: "easeInOut",
      }}
      className="relative w-64 h-64"
    >
      <Image
        src="/red-rocket.png"
        alt="Astronomer"
        width={200}
        height={200}
        className="object-contain"
        style={{ marginLeft: "-100px" }}
      />

      {/* Small stars around astronomer */}
      <div className="absolute inset-0 -z-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

