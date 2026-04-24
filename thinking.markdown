thinking

1. ทำความรู้จักกับ prompt-sync
   คือโมดูล (Library) ยอดนิยมสำหรับ Node.js ที่ใช้สำหรับรับค่าข้อมูลจากผู้ใช้ผ่านทาง Terminal (Command Line) แบบ Synchronous (ซิงโครนัส)
   พูดง่ายๆ คือ ทำให้สามารถเขียนโค้ดเพื่อหยุดรอรับค่าจากผู้ใช้ แล้วค่อยทำงานบรรทัดต่อไป เหมือนการใช้คำสั่ง prompt() บนเว็บเบราว์เซอร์
2. ติดตั้ง npm init -y , npm install prompt-sync

3. ดูภาพรวมเกมที่ต้องทำ
   - ข้อมูลของเกมเก็บยังไง?
     - ตารางทั้งหมดคือ array ซ้อน array (2D array)
     - ตำแหน่ง player เก็บว่า อยู่ row ไหน col ไหน
   - ผู้เล่นกด a w s d แล้วจะเกิดอะไรขึ้น?
     - บวกหรือลบ row/col
     - แล้วเช็ค if else 3 อย่าง เจอหมวก/เจอหลุม/ออกนอกพื้นที่
   - ลูป วนซ้ำ ยังไง?
     - แสดงตาราง
     - รอ input จาก player
     - ย้าย player
     - เช็คว่าจบเกมไหม
     - ถ้าจบ → หยุด loop

4. ใช้ ใช้หลัก OOP มาเขียน เอา Class ห่อข้อมูล + logic ของเกมไว้ที่เดียว
   ใช้ 2D Array เก็บตาราง
   ใช้ readline รับ input จาก keyboard ใน terminal
   ใช้ async/await รอให้ user กด key ก่อนแล้วค่อยทำต่อ
   ใช้ while loop วนเกมไปเรื่อยๆ จนกว่าจะจบ

   Field Class
   │
   ├── ข้อมูล: grid (2D array), playerRow, playerCol
   │
   ├── method: print() → แสดงตาราง
   ├── method: move() → ย้าย player + เช็คผล
   └── static: generateField() → สร้างตารางแบบ random

   playGame() function
   └── while loop → print → รอ input → move → เช็คจบ

5.
