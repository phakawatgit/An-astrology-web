import { prisma } from '../lib/prisma';

async function getMembers() {
  try {
    const members = await prisma.member.findMany({
      orderBy: { studentId: 'asc' },
    });
    return members;
  } catch (error) {
    console.error("Database Error:", error);
    return [];
  }
}

export default async function MembersPage() {
  const members = await getMembers();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* ส่วนหัวข้อ */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            คณะผู้จัดทำ
          </h1>
          <p className="text-lg text-gray-600">
            รายชื่อสมาชิกกลุ่มที่ดึงข้อมูลสดจากระบบ MySQL
          </p>
          <div className="mt-4 h-1 w-24 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* ตรวจสอบว่ามีข้อมูลไหม */}
        {members.length === 0 ? (
          <div className="bg-white p-10 rounded-2xl shadow-sm text-center border-2 border-dashed border-gray-200">
            <p className="text-gray-500 text-xl">ไม่พบข้อมูลสมาชิกในระบบ</p>
            <p className="text-sm text-gray-400 mt-2">กรุณาเพิ่มข้อมูลผ่าน phpMyAdmin หรือ Seed Data</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {members.map((member) => (
              <div 
                key={member.id} 
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex items-center space-x-4"
              >
                {/* ไอคอนรูปคนจำลอง */}
                <div className="flex-shrink-0 w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-2xl font-bold">
                  {member.fullname.charAt(0)}
                </div>
                
                {/* ข้อมูลสมาชิก */}
                <div className="flex-grow">
                  <h2 className="text-xl font-bold text-gray-800">
                    {member.fullname}
                  </h2>
                  <p className="text-indigo-600 font-mono text-sm tracking-widest">
                    ID: {member.studentId}
                  </p>
                  <div className="mt-2 flex items-center text-xs text-gray-400 uppercase tracking-tighter">
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded mr-2">Status: Active</span>
                    <span>Database Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ส่วนท้ายหน้า */}
        <footer className="mt-16 text-center text-gray-400 text-sm">
          <p>© 2026 An-astrology-web Project - Connected via Prisma 7</p>
        </footer>
      </div>
    </div>
  );
}