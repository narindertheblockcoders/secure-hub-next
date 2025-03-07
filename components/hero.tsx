"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 py-20">
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Secure in This Galaxy—and the Next
        </motion.h1>

        <motion.h2
          className="text-l md:text-2xl mb-6 text-blue-200"
          id="subheading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          From Web Development to Cybersecurity: Chart Your Course with Secure365
        </motion.h2>

        <motion.p
          className="text-md mb-8 max-w-2xl mx-auto text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Every journey into the unknown starts with a single launch—make yours a secure one. At Secure365, we're here
          to guide your mission through this galaxy and beyond, crafting stellar websites, managing your IT
          infrastructure, harnessing the power of the cloud, and fortifying your digital defenses. Join us on an odyssey
          to expand your reach across the cosmic frontier—without ever losing sight of security.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-full text-lg transform transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(79,70,229,0.6)]"
          >
            Start Your Mission
          </Button>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="text-blue-400"
        >
          <Link href="#about">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

