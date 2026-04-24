const prompt = require("prompt-sync")();

//สัญลักษณ์ในเกม base pacman
const hat = "★";
const hole = "X";
const fieldCharacter = "□";
const pathCharacter = "■";

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
      console.log(this.field[r].join(" "));
    }
  }

  //method เคลื่อนที่ 4 ทิศ

  moveUp() {
    this.actorRow -= 1;
    this.updateMap();
  }
  moveDown() {
    this.actorRow += 1;
    this.updateMap();
  }
  moveLeft() {
    this.actorCol -= 1;
    this.updateMap();
  }
  moveRight() {
    this.actorCol += 1;
    this.updateMap();
  }

  updateMap() {
    if (
      this.actorRow < 0 ||
      this.actorRow >= this.rows ||
      this.actorCol < 0 ||
      this.actorCol >= this.cols
    ) {
      console.log("Out of bounds! Game over.");
      process.exit();
    }

    //เอาไว้เช็คก่อนว่าผู้เล่นยืนอยู่ตำแหน่งไหน
    const currentTile = this.field[this.actorRow][this.actorCol];

    if (currentTile === hole) {
      this.print();
      console.log("[X] You found the ghost! You lose!");
      process.exit();
    }

    if (currentTile === hat) {
      this.print();
      console.log("[★] You got the star! You Win!");
      process.exit();
    }

    //ถ้าไม่มีอะไร ลงตำแหน่งใหม่แล้วเดินต่อ
    this.field[this.actorRow][this.actorCol] = pathCharacter;
  }

  //ทำฟังก์ชันสุ่มสร้างแผนที่เกมอัตโนมัติ
  static generateField(height, width, percentageHoles = 0.2) {
    const field = [];

    //สร้างแผนที่ สุ่มใส่ X เจน AI แล้วววววววววว
    for (let r = 0; r < height; r++) {
      const row = [];
      for (let c = 0; c < width; c++) {
        if (Math.random() < percentageHoles) {
          row.push("X");
        } else {
          row.push("□");
        }
      }
      field.push(row);
    }

    let actorRow, actorCol;
    do {
      actorRow = Math.floor(Math.random() * height);
      actorCol = Math.floor(Math.random() * width);
    } while (field[actorRow][actorCol] === "X");
    field[actorRow][actorCol] = pathCharacter;

    let hatRow, hatCol;
    do {
      hatRow = Math.floor(Math.random() * height);
      hatCol = Math.floor(Math.random() * width);
    } while (
      (hatRow === actorRow && hatCol === actorCol) ||
      field[hatRow][hatCol] === "X"
    );
    field[hatRow][hatCol] = "★";

    return field;
  }
}

function playGame() {
  console.log("Control ■ to ★ !");
  console.log("Use W (up), A (left), S (down), D (right) to move");

  const myField = new Field(Field.generateField(3, 3, 0.2));

  while (true) {
    myField.print();
    const direction = prompt("Which way? (w/a/s/d): ").toLowerCase();

    switch (direction) {
      case "w":
        myField.moveUp();
        break;
      case "a":
        myField.moveLeft();
        break;
      case "s":
        myField.moveDown();
        break;
      case "d":
        myField.moveRight();
        break;
      default:
        console.log("⚠️ only w/a/s/d !");
    }
  }
}

playGame();
