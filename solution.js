const myInterface = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const DIRECTIONS = Object.freeze({
  NORTH: "N",
});
const RIGHT = Object.freeze({ N: "E", E: "S", S: "W", W: "N" });
const LEFT = Object.freeze({ N: "W", W: "S", S: "E", E: "N" });

let height;
let width;
let direction;
let state = [];
let initPos = { x: 0, y: 0 };

const getPosition = () => {
  for (let y = 0; y < state.length; y++) {
    for (let x = 0; x < state.length; x++) {
      if (state[x][y] === true) {
        return { x, y };
      }
    }
  }
};

const runCommand = {
  R: () => {
    direction = RIGHT[direction];
  },
  L: () => {
    direction = LEFT[direction];
  },
  F: () => {
    switch (direction) {
      case "N": {
        const pos = getPosition();
        state[pos.x][pos.y + 1] = true;
        state[pos.x][pos.y] = false;
        console.log(state);
        break;
      }
      case "E": {
        const pos = getPosition();
        state[pos.x + 1][pos.y] = true;
        state[pos.x][pos.y] = false;
        console.log(state);
        break;
      }
      case "S": {
        const pos = getPosition();
        state[pos.x][pos.y - 1] = true;
        state[pos.x][pos.y] = false;
        console.log(state);
        break;
      }
      case "W": {
        const pos = getPosition();
        state[pos.x - 1][pos.y] = true;
        state[pos.x][pos.y] = false;
        console.log(state);
        break;
      }
    }
  },
};

myInterface.on("line", (line) => {
  // setup dimensions
  if (line.includes(" ")) {
    const lineSplitted = line.split(" ");
    if (lineSplitted.length === 2) {
      console.log("init grid");
      state = [];
      height = parseInt(lineSplitted[0]);
      width = parseInt(lineSplitted[1]);
      for (i = 0; i < lineSplitted[0]; i++) {
        state.push(Array(width).fill(false));
      }
    }
    if (lineSplitted.length === 3) {
      console.log("init pos + direction");
      // set start
      initPos.x = lineSplitted[0];
      initPos.y = lineSplitted[1];
      direction = lineSplitted[2];
      state[initPos.x][initPos.y] = true;
      console.table(state);
    }
  } else {
    // commands
    const commands = line.split("");
    console.log(commands);
    commands.forEach((command) => {
      runCommand[command]();
    });
    // console.table(state);
    const pos = getPosition();
    console.log(`${pos.x} ${pos.x} ${direction}`);
  }
});
