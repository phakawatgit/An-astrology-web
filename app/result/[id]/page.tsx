import { notFound } from "next/navigation";
import { mockCards } from "@/lib/mockData";
import RevealCard from "@/components/RevealCard"
import Link from "next/link"
type Props = {
  params: { id: string };
};

export default async function ResultPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const card = mockCards.find((c) => c.id === id);

  if (!card) return notFound();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center
      bg-[radial-gradient(circle_at_center,#3a2731_0%,#261C24_70%)]">

      <h1 className="text-4xl mb-12 tracking-widest text-[var(--peach)]">
        THE HEAVENS HAVE SPOKEN
      </h1>

      <RevealCard
        id={card.id}
        title={card.title}
        description={card.description}
        isResult
      />
    <Link
        href="/"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10
          px-6 py-3 rounded-full
          bg-[var(--peach)] text-[var(--bg-dark)]
          shadow-lg hover:scale-105 transition"
      >
        CONSULT AGAIN
      </Link>
    </main>
  );
}