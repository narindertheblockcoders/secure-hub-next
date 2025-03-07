"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Hero from "@/components/hero"
import About from "@/components/about"
import WebDevelopment from "@/components/web-development"
import ITServices from "@/components/it-services"
import CloudSolutions from "@/components/cloud-solutions"
import Cybersecurity from "@/components/cybersecurity"
import Support from "@/components/support"
import CallToAction from "@/components/call-to-action"
import Stars from "@/components/stars"
import Earth from "@/components/earth"
import Planet from "@/components/planet"
import FlyingRocket from "@/components/flying-rocket"
import Astronomer from "@/components/astronomer"

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Parallax effect for background elements
  const earthY = useTransform(scrollYProgress, [0, 0.3], [0, -100])

  // 3D Planet effect - moves up as user scrolls
  const planetY = useTransform(scrollYProgress, [0.2, 0.6], [0, -300])
  const planetScale = useTransform(scrollYProgress, [0.2, 0.6], [1, 1.3])

  // Rocket animation - flies from bottom to the WebDevelopment section
  const rocketY = useTransform(scrollYProgress, [0, 0.3], [500, 100])
  const rocketX = useTransform(scrollYProgress, [0, 0.3], [100, 300])
  const rocketRotate = useTransform(scrollYProgress, [0, 0.3], [-5, 10])

  return (
    <main ref={containerRef} className="relative overflow-hidden bg-black text-white pt-16">
      {/* Background stars */}
      <Stars />

      {/* Parallax elements */}
      <motion.div className="fixed bottom-0 left-0 w-full h-full pointer-events-none z-0" style={{ y: earthY }}>
        <Earth />
        {/* <Astronomer/> */}
      </motion.div>

      {/* 3D Planet effect - moves up as user scrolls */}
      <motion.div
        className="fixed top-[40%] right-[20%] pointer-events-none z-0"
        style={{
          y: planetY,
          scale: planetScale,
        }}
      >
        <Planet type="saturn" />
      </motion.div>

      {/* Flying Rocket animation */}
      <div className="fixed top-[30%] left-[10%] pointer-events-none z-10">
        <FlyingRocket />
      </div>

      {/* Rocket flying from bottom to WebDevelopment section */}
      <motion.div
        className="fixed bottom-0 right-[30%] pointer-events-none z-10"
        style={{
          y: rocketY,
          x: rocketX,
          rotate: rocketRotate,
        }}
      >
        {/* <FlyingRocket /> */}
      </motion.div>

      {/* Content sections */}
      <div className="relative z-10">
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="web-development">
          <WebDevelopment />
        </section>
        <section id="it-services">
          <ITServices />
        </section>
        <section id="cloud-solutions">
          <CloudSolutions />
        </section>
        <section id="cybersecurity">
          <Cybersecurity />
        </section>
        <section id="support">
          <Support />
        </section>
        <CallToAction />
      </div>
    </main>
  )
}

