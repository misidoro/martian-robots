const RIGHT = Object.freeze({ N: "E", E: "S", S: "W", W: "N" });
const LEFT = Object.freeze({ N: "W", W: "S", S: "E", E: "N" });

class MartianRobot {
  height;
  width;
  direction;
  state = [];

  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  fillBlankState() {
    for (let i = 0; i < this.height; i++) {
      this.state.push(Array(this.width).fill(false));
    }
  }

  setDirection(value) {
    this.direction = value;
  }

  setStartPosition(x, y) {
    this.state[x][y] = true;
  }

  turnRight() {
    this.direction = RIGHT[this.direction];
  }

  turnLeft() {
    this.direction = LEFT[this.direction];
  }

  moveForward() {
    const pos = this.getPosition();
    this.state[pos.x][pos.y] = false;
    switch (this.direction) {
      case "N": {
        this.state[pos.y + 1][pos.x] = true;
        break;
      }
      case "E": {
        this.state[pos.y][pos.x + 1] = true;
        break;
      }
      case "S": {
        this.state[pos.y - 1][pos.x] = true;
        break;
      }
      case "W": {
        this.state[pos.y][pos.x - 1] = true;
        break;
      }
    }
  }

  getPosition() {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        if (this.state[y][x] === true) {
          return { x, y };
        }
      }
    }
  }

  logOutput() {
    const pos = this.getPosition();
    console.log(`${pos.x} ${pos.y} ${this.direction}`);
  }

  logState() {
    console.log(this.direction);
    console.table(this.state);
  }
}

module.exports = MartianRobot;
