'use client'
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { mockCards } from "@/lib/mockData"

export default function CardGrid() {
  const router = useRouter()

  const handleSelect = (id: string) => {
    router.push(`/result/${id}`)
  }

  return (
    <div className="w-full flex justify-center mb-6 md:mb-10">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {mockCards.map((card) => (
          <motion.div
            key={card.id}
            layoutId={card.id}
            onClick={() => handleSelect(card.id)}
            whileHover={{ rotateY: 10, scale: 1.05 }}
            className="w-[18vw] max-w-[260px] aspect-[2/3] cursor-pointer
              rounded-2xl border border-[var(--peach)]
              bg-gradient-to-b from-[#CF8D9B] to-[#1d141a]
              shadow-[0_0_30px_rgba(226,163,145,0.2)]
              flex items-center justify-center"
          >
            <span className="text-[var(--peach)] tracking-widest">
              THE UNKNOWN
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}