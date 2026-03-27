# 🚀 Deploy บน Server

## ขั้นตอน

```bash
# 1. Clone repo
git clone <repo-url>
cd An-astrology-web/grop_E

# 2. ตั้งค่า environment variables
cp .env.example .env
nano .env          # แก้ password ให้แข็งแกร่ง!

# 3. Build images
docker compose -f docker-compose.prod.yml build

# 4. เปิด services
docker compose -f docker-compose.prod.yml up -d
```

## ตัวอย่าง .env

```env
MYSQL_ROOT_PASSWORD=your_strong_root_password
MYSQL_DATABASE=mydb
MYSQL_USER=appuser
MYSQL_PASSWORD=your_strong_user_password

# ต้องตรงกับ MYSQL_USER / MYSQL_PASSWORD / MYSQL_DATABASE ด้านบน
DATABASE_URL=mysql://appuser:your_strong_user_password@mysql:3306/mydb
```

> ⚠️ **สำคัญ:** `DATABASE_URL` ต้องใช้ชื่อ service `mysql` เป็น host เสมอ (ไม่ใช่ localhost)

## คำสั่งที่มีประโยชน์

```bash
# ดู logs
docker compose -f docker-compose.prod.yml logs -f

# ดู logs เฉพาะ service
docker compose -f docker-compose.prod.yml logs -f app

# รีสตาร์ท app เดียว (ไม่ต้อง rebuild)
docker compose -f docker-compose.prod.yml restart app

# หยุดทั้งหมด (เก็บ data ไว้)
docker compose -f docker-compose.prod.yml down

# หยุดและลบ data ทั้งหมด (reset)
docker compose -f docker-compose.prod.yml down -v
```

## เมื่อต้องการ update code

```bash
git pull
docker compose -f docker-compose.prod.yml build
docker compose -f docker-compose.prod.yml up -d
```
