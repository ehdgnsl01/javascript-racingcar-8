const RaceInitializer = {
  initializeCars(carNames) {
    if (!Array.isArray(carNames) || carNames.length === 0) {
      throw new Error("[ERROR] 유효한 자동차 이름 배열이 필요합니다.");
    }

    const cars = carNames.map(name => ({
      name,
      distance: 0,
    }));

    return cars;
  },
};

export default RaceInitializer;
