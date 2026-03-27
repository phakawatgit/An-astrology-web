'use client'

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

type Member = {
  id: number
  alias: string
  imageUrl: string
}

export default function CardGrid({ members }: { members: Member[] }) {
  const router = useRouter()

  const handleSelect = (id: number) => {
    router.push(`/result/${id}`)
  }

  return (
    <div className="w-full flex justify-center mb-10 perspective">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10">

        {members.map((member) => (
          <motion.div
            key={member.id}
            onClick={() => handleSelect(member.id)}
            whileHover={{
              rotateY: 12,
              scale: 1.07,
              boxShadow: "0px 0px 50px rgba(226,163,145,0.5)"
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-[18vw] max-w-[260px] aspect-[2/3]
              cursor-pointer rounded-2xl
              border border-[var(--peach)]
              overflow-hidden
              bg-black"
          >
            <img
              src={member.imageUrl}
              alt={member.alias}
              className="w-full h-full object-cover"
            />

          </motion.div>
        ))}

      </div>
    </div>
  )
}