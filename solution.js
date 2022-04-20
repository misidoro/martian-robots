const MartianRobot = require("./martian-robot");

const myInterface = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let robot;
myInterface.on("line", (line) => {
  // setup dimensions
  if (line.includes(" ")) {
    const lineSplitted = line.split(" ");
    if (lineSplitted.length === 2) {
      const height = parseInt(lineSplitted[0]);
      const width = parseInt(lineSplitted[1]);
      if (width > 50 || height > 50) {
        console.log("maximum value for any coordinate is 50");
        return;
      }
      robot = new MartianRobot(height, width);
    }
    if (lineSplitted.length === 3) {
      // setup start
      robot.fillBlankState();
      robot.setDirection(lineSplitted[2]);
      robot.setStartPosition(lineSplitted[0], lineSplitted[1]);
    }
  } else {
    // commands
    if (line.length > 100) {
      console.log(
        "All instruction strings will be less than 100 characters in length."
      );
      return;
    }

    const commands = line.split("");

    commands.forEach((command) => {
      switch (command) {
        case "L":
          robot.turnLeft();
          break;
        case "R":
          robot.turnRight();
          break;
        case "F":
          robot.moveForward();
          break;
        default:
          break;
      }
    });

    robot.logOutput();
  }
});
