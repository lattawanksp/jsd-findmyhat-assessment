thinking

1. ทำความรู้จักกับ prompt-sync
   คือโมดูล (Library) ยอดนิยมสำหรับ Node.js ที่ใช้สำหรับรับค่าข้อมูลจากผู้ใช้ผ่านทาง Terminal (Command Line) แบบ Synchronous (ซิงโครนัส)
   พูดง่ายๆ คือ ทำให้สามารถเขียนโค้ดเพื่อหยุดรอรับค่าจากผู้ใช้ แล้วค่อยทำงานบรรทัดต่อไป เหมือนการใช้คำสั่ง prompt() บนเว็บเบราว์เซอร์

2. ดูภาพรวมเกม
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

3. ใช้ ใช้หลัก OOP มาเขียน เอา Class ห่อข้อมูล + logic ของเกมไว้ที่เดียว
   ใช้ 2D Array เก็บตาราง
   ใช้ readline รับ input จาก keyboard ใน terminal
   ใช้ async/await รอให้ user กด key ก่อนแล้วค่อยทำต่อ
   ใช้ while loop วนเกมไปเรื่อยๆ จนกว่าจะจบ

---

4. ติดตั้ง
   npm init -y สร้างไฟล์ package.json
   npm install prompt-sync

5. เรียกใช้ library
   const prompt = require("prompt-sync")();
   วิธีเช็ค
   const answer = prompt("test: ");
   console.log(answer);

6. กำหนดสัญลักษณ์ของเกม ลองเอา pacman มาเทียบ

7. สร้าง Class Field เก็บสนามเดินกับตำแหน่งผู้เล่น

- เพิ่ม method print() ให้เรียงตัวสวยดูง่าย เพราะ this.\_field เก็บข้อมูลเป็น array ซ้อน array

8. สร้าง Method isValid() รับตำแหน่งใหม่มา แล้วเช็คว่าอยู่ในตารางมั้ย
   ถ้าอยู่ในตาราง → return true
   ออกนอกตาราง → return false

9. สร้าง Method move() เอามาคำนวณตำแหน่งใหม่ รับตำแหน่งมาแล้วบวกลบ if else กด wsad
