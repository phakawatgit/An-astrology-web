import React from 'react';
import Link from 'next/link';

export default function TestPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-gray-50">
      {/* ส่วนหัวหน้า */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Test Dashboard</h1>
        <Link href="/" className="text-sm text-indigo-600 hover:underline">
          ← กลับหน้าหลัก
        </Link>
      </div>

      {/* Content Card */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* ส่วนทดสอบสีและปุ่ม */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold border-b pb-2">UI Elements Test</h2>
            <div className="flex gap-2">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                Primary
              </button>
              <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition">
                Success
              </button>
            </div>
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-sm">
              แจ้งเตือน: นี่คือหน้าทดสอบที่แยกโฟลเดอร์ออกมาแล้ว!
            </div>
          </div>

          {/* ส่วนทดสอบรายการ */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold border-b pb-2">Data List Test</h2>
            <ul className="space-y-2">
              <li className="flex justify-between p-2 bg-gray-50 rounded">
                <span>User A</span>
                <span className="text-green-600 font-mono">Active</span>
              </li>
              <li className="flex justify-between p-2 bg-gray-50 rounded">
                <span>User B</span>
                <span className="text-red-500 font-mono">Offline</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </main>
  );
}