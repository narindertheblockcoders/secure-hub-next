"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Earth() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        duration: 200,
        ease: "linear",
      }}
      className="relative w-[800px] h-[800px] opacity-40"
      style={{
        transformOrigin: "center center",
      }}
    >
      <Image src="/earth.png" alt="Earth" width={800} height={800} className="object-contain" />
    </motion.div>
  )
}

