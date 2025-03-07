"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function FlyingRocket() {
  return (
    <motion.div
      className="relative"
      initial={{ y: 100, x: -100, opacity: 0 }}
      animate={{
        y: [100, -100],
        x: [-100, 100],
        opacity: 1,
        rotate: [0, 15],
      }}
      transition={{
        duration: 5,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    >
      <div className="relative w-[150px] h-[150px]">
        <Image src="/red-rocket.png" alt="Flying Rocket" width={300} height={300} className="object-contain" />

        {/* Rocket trail */}
        <motion.div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-32"
          initial={{ opacity: 0.5, scaleY: 0.8 }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scaleY: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full bg-gradient-to-t from-blue-500 via-blue-400 to-transparent rounded-b-full blur-sm"></div>
        </motion.div>

        {/* Particles */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-20 h-20">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-blue-300 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: 0,
              }}
              animate={{
                y: [0, 40 + Math.random() * 20],
                x: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 40],
                opacity: [0.8, 0],
                scale: [1, 0.2],
              }}
              transition={{
                duration: 1 + Math.random() * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 0.5,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

