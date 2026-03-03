import mysql from 'mysql2/promise';

// สร้างตัวเชื่อมต่อ (Pool) โดยใช้ DATABASE_URL จากไฟล์ .env
const pool = mysql.createPool(process.env.DATABASE_URL as string);

export default pool;