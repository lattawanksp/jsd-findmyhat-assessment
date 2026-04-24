const prompt = require("prompt-sync")();

//สัญลักษณ์ในเกม base pacman
const hat = "🌟";
const hole = "👻";
const fieldCharacter = ".";
const pathCharacter = "😛";

//สร้างแม่พิมพ์
class Field {
  constructor(field) {
    this.field = field;
    //เพิ่มขนาดแผนที่
    this.rows = field.length;
    this.cols = field[0].length;

    //ตำแหน่งผู้เล่น
    this.actorRow = 0;
    this.actorCol = 0;

    //วนหาว่าผู้เล่นอยู่ตรงในไหนแผนที่จริงๆ
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        if (this.field[r][c] === pathCharacter) {
          this.actorRow = r;
          this.actorCol = c;
        }
      }
    }
  }

  print() {
    for (let r = 0; r < this.rows; r++) {
      console.log(this.field[r].join(""));
    }
  }

  //method เคลื่อนที่ 4 ทิศ
  moveLeft() {
    this.actorCol -= 1;
    this.updateMap();
  }
  moveRight() {
    this.actorCol += 1;
    this.updateMap();
  }
  moveUp() {
    this.actorRow -= 1;
    this.updateMap();
  }
  moveDown() {
    this.actorRow += 1;
    this.updateMap();
  }

  updateMap() {
    if (
      this.actorCol < 0 ||
      this.actorCol >= this.cols ||
      this.actorRow < 0 ||
      this.actorRow >= this.rows
    ) {
      console.log("🚫 Out of bounds! Game over.");
      process.exit();
    }
  }
}
