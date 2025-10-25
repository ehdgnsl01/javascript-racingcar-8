import { Random, Console } from "@woowacourse/mission-utils";

const RandomMove = {
  moveCar(car) {
    const randomNumber = Random.pickNumberInRange(0, 9);

    if (randomNumber >= 4) {
      car.distance += 1;
    }
  },

  moveAllCars(cars) {
    if (!Array.isArray(cars)) {
      throw new Error("[ERROR] 유효하지 않은 자동차 배열입니다.");
    }

    for (const car of cars) {
      this.moveCar(car);
    }

    return cars;
  },

  printRoundResult(cars) {
    for (const car of cars) {
      const progress = "-".repeat(car.distance);
      Console.print(`${car.name} : ${progress}`);
    }
    Console.print("");
  },

  runRace(cars, roundCount) {
    if (!Array.isArray(cars) || cars.length === 0) {
      throw new Error("[ERROR] 유효하지 않은 자동차 배열입니다.");
    }
    if (typeof roundCount !== "number" || roundCount <= 0) {
      throw new Error("[ERROR] 유효하지 않은 시도 횟수입니다.");
    }

    for (let round = 1; round <= roundCount; round += 1) {
      this.moveAllCars(cars);
      this.printRoundResult(cars);
    }

    return cars;
  },
};

export default RandomMove;
