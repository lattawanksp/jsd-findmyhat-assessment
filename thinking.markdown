https://www.youtube.com/watch?v=q_8Dkzxy_ms

thinking

แนวคิดสำคัญ 3 อย่างคือ OOP (class/method), 2D Array (แผนที่ตาราง), และ Game Loop (while true รับ input วนซ้ำ)

1. ทำความรู้จักกับ prompt-sync
   คือโมดูล (Library) ยอดนิยมสำหรับ Node.js ที่ใช้สำหรับรับค่าข้อมูลจากผู้ใช้ผ่านทาง Terminal (Command Line) แบบ Synchronous (ซิงโครนัส)
   พูดง่ายๆ คือ ทำให้สามารถเขียนโค้ดเพื่อหยุดรอรับค่าจากผู้ใช้ แล้วค่อยทำงานบรรทัดต่อไป เหมือนการใช้คำสั่ง prompt() บนเว็บเบราว์เซอร์

2. ดูภาพรวมเกม
   **ต้องเข้าใจ 2D Array ก่อน** ซ้อนสองชั้นแบบ
   [[1,2,3],[4,5,6],[7,8,9]]
   - ข้อมูลของเกมเก็บยังไง?
     - ตารางทั้งหมดคือ array ซ้อน array (2D array)
     - ตำแหน่ง player เก็บว่า อยู่ row ไหน col ไหน
   - ผู้เล่นกด a w s d แล้วจะเกิดอะไรขึ้น?
     - บวกหรือลบ row/col
     - logic เกมเช็ค if else 3 อย่าง เจอหมวก/เจอหลุม/ออกนอกพื้นที่
   - ลูป วนซ้ำ ยังไง?
     - แสดงตาราง
     - รอ input จาก player
     - ย้าย player
     - เช็คว่าจบเกมไหม
     - ถ้าจบ → หยุด loop

3. ใช้หลัก OOP มาเขียน เอา Class ห่อข้อมูล + logic ของเกมไว้ที่เดียว
   ใช้ 2D Array เก็บตาราง
   ใช้ readline รับ input จาก keyboard ใน terminal
   ใช้ async/await รอให้ user กด key ก่อนแล้วค่อยทำต่อ
   ใช้ while loop วนเกมไปเรื่อยๆ จนกว่าจะจบ

--- เป็นเกมแบบ Rough-like งงมากกกกกกกกกกกกก---

4. ติดตั้ง
   npm init -y สร้างไฟล์ package.json
   npm install prompt-sync

5. เรียกใช้ library
   const prompt = require("prompt-sync")();
   วิธีเช็ค
   const answer = prompt("test: ");
   console.log(answer);

6. กำหนดสัญลักษณ์ของเกม

7. สร้าง Class Field
   เก็บแผนที่ เก็บตำแหน่งผู้เล่น
   ที่ต้องใช้ for loop วนหาเพราะ generateField() จะสุ่มวาง

8. ใช้ method print() วาดให้ loop ทีละแถว เปลี่ยนจาก array ให้กลายเป็น string ด้วย .join("")

9. ใส่ method move เคลื่อนที่ 4 ทิศ จะใส่ +- ยังไงนึกถึงว่า player อยู่ 0,0

10. ได้เวลา updateMap() เอาไว้ ตรวจ + อัปเดตสถานะเกม หลัง player คีย์ขยับ
    -if else ออกนอกแมพ
    โดนผี เจอรางวัล
    ใส่ process.exit(); สั่งให้โปรแกรมหยุดทำงานทันที

11. ใส่ฟังก์ชันสุ่มสร้างแผนที่เกมอัตโนมัติ

12. ใส่ function run game
