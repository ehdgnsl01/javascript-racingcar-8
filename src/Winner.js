const Winner = {
  getWinners(cars) {
    if (!Array.isArray(cars) || cars.length === 0) {
      throw new Error("[ERROR] 자동차 배열이 비어 있습니다.");
    }

    const maxDistance = Math.max(...cars.map(car => car.distance));

    const winners = cars.filter(car => car.distance === maxDistance).map(car => car.name);

    return winners;
  },

  printWinners(winners) {
    if (!Array.isArray(winners) || winners.length === 0) {
      throw new Error("[ERROR] 우승자가 존재하지 않습니다.");
    }

    const message = winners.join(", ");
    console.log(`최종 우승자 : ${message}`);
  },
};

export default Winner;
