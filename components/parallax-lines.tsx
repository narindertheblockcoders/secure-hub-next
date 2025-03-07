"use client"

import { motion, type MotionValue, useTransform } from "framer-motion"

interface ParallaxLinesProps {
  scrollYProgress: MotionValue<number>
}

export default function ParallaxLines({ scrollYProgress }: ParallaxLinesProps) {
  // Transform values for different lines
  const line1X = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const line2X = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])
  const line3Y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const line4Y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])

  // Color transitions based on scroll
  const line1Color = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    ["rgba(59, 130, 246, 0.5)", "rgba(139, 92, 246, 0.5)", "rgba(236, 72, 153, 0.5)", "rgba(59, 130, 246, 0.5)"],
  )

  const line2Color = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    ["rgba(236, 72, 153, 0.5)", "rgba(59, 130, 246, 0.5)", "rgba(139, 92, 246, 0.5)", "rgba(236, 72, 153, 0.5)"],
  )

  return (
    <div className="fixed inset-0 pointer-events-none z-[5]">
      {/* Horizontal lines */}
      <motion.div
        className="absolute top-[20%] left-0 w-full h-[1px]"
        style={{
          x: line1X,
          backgroundColor: line1Color,
        }}
      />

      <motion.div
        className="absolute top-[40%] right-0 w-full h-[1px]"
        style={{
          x: line2X,
          backgroundColor: line2Color,
        }}
      />

      {/* Vertical lines */}
      <motion.div
        className="absolute top-0 left-[30%] w-[1px] h-full"
        style={{
          y: line3Y,
          backgroundColor: line1Color,
        }}
      />

      <motion.div
        className="absolute top-0 right-[30%] w-[1px] h-full"
        style={{
          y: line4Y,
          backgroundColor: line2Color,
        }}
      />

      {/* Grid overlay that fades in and out */}
      <motion.div
        className="absolute inset-0 grid grid-cols-6 grid-rows-6"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.1, 0]) }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute w-full h-[1px]"
            style={{
              top: `${(i + 1) * 16.66}%`,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          />
        ))}

        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute h-full w-[1px]"
            style={{
              left: `${(i + 1) * 16.66}%`,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

