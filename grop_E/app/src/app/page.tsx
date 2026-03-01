import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50">
      <div className="bg-white p-10 rounded-2xl shadow-lg max-w-2xl w-full border border-gray-100">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">
          🔮 An Astrology Web
        </h1>
        
        <div className="space-y-4 text-center">
          <p className="text-xl text-gray-800 font-medium">
            ยินดีด้วย! ระบบของคุณพร้อมใช้งานแล้ว 🎉
          </p>
          
          <div className="bg-green-50 text-green-700 p-4 rounded-lg text-sm font-mono mt-6 inline-block text-left w-full">
            <p>✅ Next.js (App Router)</p>
            <p>✅ Tailwind CSS</p>
            <p>✅ Prisma & MySQL</p>
            <p>✅ Docker Container</p>
          </div>
        </div>
      </div>
    </main>
  );
}