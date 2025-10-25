import { Random } from "@woowacourse/mission-utils";

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
};

export default RandomMove;
