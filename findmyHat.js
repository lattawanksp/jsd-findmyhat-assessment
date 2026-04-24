const prompt = require("prompt-sync")();

//สัญลักษณ์ในเกม base pacman
const hat = "🌟";
const hole = "👻";
const fieldCharacter = ".";
const pathCharacter = "😛";

//สร้างแม่พิมพ์
class Filed {
  constructor(filed) {
    this.filed = filed;
    //เพิ่มขนาดแผนที่
    this.rows = filed.length;
    this.cols = filed[0].length;

    //ตำแหน่งผู้เล่น
    this.actorRow = 0;
    this.actorCol = 0;

    //วนหาว่าผู้เล่นอยู่ตรงในไหนแผนที่จริงๆ
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        if (this.filed[r][c] === "pathCharacter") {
          this.actorRow = r;
          this.actorCol = c;
        }
      }
    }
  }
}
