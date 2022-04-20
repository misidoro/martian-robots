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
    expect(robot.getPosition()).toEqual({ x: 0, y: 1 });
  });
  test("should pass the first test", () => {
    // 5 3
    // 1 1 E
    // RFRFRFRF
    const robot = new MartianRobot(5, 3);
    robot.fillBlankState();
    robot.setDirection("E");
    robot.setStartPosition(1, 1);
    robot.turnRight();
    robot.moveForward();
    robot.turnRight();
    robot.moveForward();
    robot.turnRight();
    robot.moveForward();
    robot.turnRight();
    robot.moveForward();
    expect(robot.getPosition()).toEqual({ x: 1, y: 1 });
    expect(robot.getDirection()).toEqual("E");
  });
  test("should pass the second test", () => {
    // 5 3
    // 3 2 N
    // FRRFLLFFRRFLL
    const robot = new MartianRobot(5, 3);
    robot.fillBlankState();
    robot.setDirection("N");
    robot.setStartPosition(3, 2);
    robot.moveForward();
    robot.turnRight();
    robot.turnRight();
    robot.moveForward();
    robot.turnLeft();
    robot.turnLeft();
    robot.moveForward();
    robot.moveForward();
    robot.turnRight();
    robot.turnRight();
    robot.moveForward();
    robot.turnLeft();
    robot.turnLeft();
    expect(robot.getPosition()).toEqual({ x: 3, y: 3 });
    expect(robot.getDirection()).toEqual("N");
    // 3 3 N LOST
  });
  test("should pass the third test", () => {
    // 5 3
    // 0 3 W
    // LLFFFLFLFL
    const robot = new MartianRobot(5, 3);
    robot.fillBlankState();
    robot.setDirection("W");
    robot.setStartPosition(0, 3);
    robot.turnLeft();
    robot.turnLeft();
    robot.moveForward();
    robot.moveForward();
    robot.moveForward();
    robot.turnLeft();
    robot.moveForward();
    robot.turnLeft();
    robot.moveForward();
    robot.turnLeft();
    expect(robot.getPosition()).toEqual({ x: 2, y: 3 });
    expect(robot.getDirection()).toEqual("S");
  });
});
