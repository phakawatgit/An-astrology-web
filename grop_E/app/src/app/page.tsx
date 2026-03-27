import { prisma } from "@/lib/prisma"
import Link from "next/link"

// This page fetches live DB data — must not be prerendered during build
export const dynamic = "force-dynamic"

export default async function HomePage() {

  const members = await prisma.member.findMany({
    orderBy: { id: "asc" },
  });

  return (
    <main className="min-h-screen flex flex-col items-center justify-center
      bg-[radial-gradient(circle_at_center,#3a2731_0%,#261C24_70%)]">

      <h1 className="text-4xl mb-12 tracking-widest text-[var(--peach)]">
        CHOOSE YOUR DESTINY
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
        {members.map((member) => (
          <Link
            key={member.id}
            href={`/result/${member.id}`}
            className="flex flex-col items-center cursor-pointer"
          >
            <img
              src={member.imageUrl}
              alt={member.alias}
              className="w-40 h-60 object-cover rounded-xl shadow-lg border border-[var(--peach)] hover:scale-105 transition"
            />

            <p className="mt-4 text-[var(--peach)] tracking-wider">
              {member.alias}
            </p>
          </Link>
        ))}
      </div>

    </main>
  )
}