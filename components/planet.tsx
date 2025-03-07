"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface PlanetProps {
  type: "saturn" | "mars" | "jupiter"
}

export default function Planet({ type }: PlanetProps) {
  const size = type === "saturn" ? 300 : type === "jupiter" ? 250 : 200

  return (
    <motion.div
      // animate={{ rotate: 360 }}
      // transition={{
      //   repeat: Number.POSITIVE_INFINITY,
      //   duration: type === "saturn" ? 300 : type === "jupiter" ? 250 : 200,
      //   ease: "linear",
      // }}
      className="relative"
      style={{
        width: size,
        height: size,
        transformOrigin: "center center",
      }}
    >
      <Image
        src="/rocket.png"
        alt={type}
        width={750}
        style={{ transform: "rotate(0deg)", marginLeft: "250px" }} // Adjust the angle as needed
        height={800}
        // className="object-contain"
      />

      {/* Saturn rings */}
      {/* {type === "saturn" && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[70px]">
          <div className="w-full h-full border-4 border-gray-300/50 rounded-full rotate-12"></div>
          <div className="absolute inset-[10px] border-2 border-gray-300/30 rounded-full rotate-12"></div>
          <div className="absolute inset-[20px] border border-gray-300/20 rounded-full rotate-12"></div>
        </div>
      )} */}

      {/* Planet glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl -z-10"></div>
    </motion.div>
  )
}

