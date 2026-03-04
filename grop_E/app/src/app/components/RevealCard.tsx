'use client'
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Link from "next/link"

type RevealCardProps = {
  id: string
  title: string
  description: string
  isResult?: boolean
}

export default function RevealCard({
  id,
  title,
  description,
  isResult = false,
}: RevealCardProps) {

  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    if (isResult) {
      const timer = setTimeout(() => {
        setFlipped(true)
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [isResult])

  return (
    <motion.div
      layoutId={isResult ? id : undefined}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="relative w-[50vw] max-w-[320px] aspect-[2/3] perspective"
    >
      <div
        className={`relative w-full h-full transition-transform transition-[transform] duration-700 ease-[cubic-bezier(.4,0,.2,1)]
        transform-style preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden
          rounded-3xl border border-[var(--peach)]
          bg-gradient-to-b from-[#CF8D9B] to-[#1d141a]
          flex items-center justify-center">

          <span className="text-[var(--peach)] tracking-widest">
            THE UNKNOWN
          </span>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180
          rounded-3xl border border-[var(--peach)]
          bg-gradient-to-b from-[#2d2028] to-[#1d141a]
          p-6 text-center">

          <h2 className="text-2xl mb-4 text-[var(--peach)]">
            {title}
          </h2>

          <p className="text-sm mb-6">
            {description}
          </p>

        </div>
      </div>
    </motion.div>
  )
}