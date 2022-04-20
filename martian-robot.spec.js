const MartianRobot = require("./martian-robot");

describe("Martian robot", () => {
  test("should turn right", () => {
    const robot = new MartianRobot(0, 0);
    robot.setDirection("N");
    robot.turnRight();
    expect(robot.direction).toEqual("E");
  });
  test("should turn left", () => {
    const robot = new MartianRobot(0, 0);
    robot.setDirection("N");
    robot.turnLeft();
    expect(robot.direction).toEqual("W");
  });
  test("should move forward", () => {
    const robot = new MartianRobot(2, 2);
    robot.fillBlankState();
    robot.setDirection("N");
    robot.setStartPosition(0, 0);
    robot.moveForward();
    robot.logState();
    expect(robot.getPosition()).toEqual({ x: 0, y: 1 });
  });
});
