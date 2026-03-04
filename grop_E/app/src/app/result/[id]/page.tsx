import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ResultPage({ params }: Props) {
  const { id } = await params;   // ⭐ ต้อง await ตรงนี้

  const numericId = Number(id);
  if (isNaN(numericId)) return notFound();

  const member = await prisma.member.findUnique({
    where: { id: numericId },
  });

  if (!member) return notFound();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center
      bg-[radial-gradient(circle_at_center,#3a2731_0%,#261C24_70%)]
      text-white px-6">

      <h1 className="text-4xl mb-10 tracking-widest text-[var(--peach)]">
        THE HEAVENS HAVE SPOKEN
      </h1>

      <div className="bg-[#2c1f28] p-6 rounded-xl shadow-xl w-full max-w-md mb-8 border border-[var(--peach)]">
        <p><b>ชื่อ:</b> {member.realName}</p>
        <p><b>รหัสนักศึกษา:</b> {member.studentId}</p>
        <p><b>สำนัก:</b> {member.sect}</p>
      </div>

      <div className="bg-[#1e141a] p-8 rounded-2xl shadow-2xl w-full max-w-lg border border-[var(--peach)]">
        <p className="text-lg text-center leading-relaxed">
          {member.prediction}
        </p>
      </div>

      <Link
        href="/"
        className="fixed bottom-6 right-6 px-6 py-3 rounded-full
          bg-[var(--peach)] text-[var(--bg-dark)]
          shadow-lg hover:scale-105 transition"
      >
        CONSULT AGAIN
      </Link>
    </main>
  );
}