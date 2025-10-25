const Validator = {
  validateCarNames(input) {
    if (!input || typeof input !== "string") {
      throw new Error("[ERROR] 자동차 이름을 입력해야 합니다.");
    }

    // 쉼표 기준으로 분리하고, 각 이름의 앞뒤 공백 제거
    const names = input.split(",").map(name => name.trim());

    // 빈 배열 확인
    if (names.some(name => name.length === 0)) {
      throw new Error("[ERROR] 자동차 이름이 비어 있습니다.");
    }

    // 이름 길이 5 초과
    if (names.some(name => name.length > 5)) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
    }

    // 중복 이름 확인
    const uniqueNames = new Set(names);
    if (uniqueNames.size !== names.length) {
      throw new Error("[ERROR] 자동차 이름은 중복될 수 없습니다.");
    }

    return Array.from(uniqueNames);
  },

  validateRoundCount(input) {
    if (!input || typeof input !== "string" || input.trim().length === 0) {
      throw new Error("[ERROR] 시도 횟수를 입력해야 합니다.");
    }

    const num = Number(input);

    // 숫자형식 확인
    if (Number.isNaN(num)) {
      throw new Error("[ERROR] 시도 횟수는 숫자여야 합니다.");
    }

    // 정수 아님
    if (!Number.isInteger(num)) {
      throw new Error("[ERROR] 시도 횟수는 정수여야 합니다.");
    }

    // 1 미만
    if (num <= 0) {
      throw new Error("[ERROR] 시도 횟수는 1 이상의 값이어야 합니다.");
    }

    return num;
  },
};

export default Validator;
