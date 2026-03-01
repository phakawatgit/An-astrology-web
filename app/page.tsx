import CardGrid from "@/components/CardGrid"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center
      bg-[radial-gradient(circle_at_center,#3a2731_0%,#261C24_70%)]
      text-[var(--peach)] px-6">

      <h1 className="text-7xl tracking-widest mb-4">
        SEEK YOUR DESTINY
      </h1>

      <p className="italic text-lg opacity-80 mb-16 text-center max-w-xl">
        "The stars have aligned for this moment. Select a card to
        reveal the path that awaits you."
      </p>
      <CardGrid/>
    </main>
  )
}